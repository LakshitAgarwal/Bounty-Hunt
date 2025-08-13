// So this file will take data from clerk and create a user in our database

import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // yaha se leke main cheez start hone se pehle tak ka kuch smjh nhi aaya. some safety thing hai ye svix.

  const headerPayload = req.headers;
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("✅ Webhook verified successfully");
  } catch (err) {
    console.error("❌ Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Main cheez yaha se start hoti hai.

  const eventType = evt.type;
  console.log(`✅ Event type: ${eventType}`);

  try {
    if (eventType === "user.created") {
      const {
        id,
        email_addresses,
        first_name,
        last_name,
        image_url,
        username,
      } = evt.data;

      await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0].email_address,
          firstName: first_name,
          lastName: last_name,
          username: username,
          photoUrl: image_url,
        },
      });
    }

    if (eventType === "user.updated") {
      const { id, first_name, last_name, image_url, username } = evt.data;
      await prisma.user.update({
        where: { clerkId: id },
        data: {
          firstName: first_name,
          lastName: last_name,
          username: username,
          photoUrl: image_url,
        },
      });
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      if (!id) {
        return new Response("Error: User does not exist", { status: 400 });
      }
      await prisma.user.delete({
        where: { clerkId: id },
      });
    }
  } catch (error) {
    console.error("❌ Error handling event in database:", error);
    return new Response("Error occured during database operation", {
      status: 500,
    });
  }

  return new Response("", { status: 200 });
}

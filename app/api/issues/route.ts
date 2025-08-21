import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const level = searchParams.get("level");
  const lang = searchParams.get("lang");

  const query = `is:issue is:open label:"${level}"`;

  const res = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(
      query
    )}&sort=created&order=desc&per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    return NextResponse.json(
      { error: errorData.message || "GitHub API error" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json({
    data: data.items || [],
    total: data.total_count || 0,
  });
}

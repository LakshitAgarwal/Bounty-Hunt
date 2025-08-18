"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search bounties, repos, tags..."
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

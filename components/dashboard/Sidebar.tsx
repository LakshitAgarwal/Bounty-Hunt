"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Discover" },
  { href: "/dashboard/watchlists", label: "Watchlists" },
  { href: "/dashboard/my-work", label: "My Work" },
  { href: "/dashboard/applications", label: "Applications" },
  { href: "/dashboard/payouts", label: "Payouts" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-white/10 min-h-screen sticky top-0">
      <div className="p-4 font-semibold text-lg">Bounty Hunt</div>
      <nav className="px-2 py-2 space-y-1">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10",
                active && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

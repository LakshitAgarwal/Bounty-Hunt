import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen">
          <Topbar />
          <main className="px-4 sm:px-6 lg:px-8 pb-10">{children}</main>
        </div>
      </div>
    </div>
  );
}

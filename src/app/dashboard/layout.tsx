
import DashboardNavbar from "@/components/dashboard/shared/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/shared/DashboardSidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="flex h-screen">
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />

        <div className="flex-1 overflow-y-auto">
          <DashboardNavbar user={user} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

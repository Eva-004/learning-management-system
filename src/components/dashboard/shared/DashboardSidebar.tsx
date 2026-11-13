"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

import { authClient } from "../../../lib/auth-client";
import NavLink from "../../shared/NavLink";

export default function DashboardSidebar() {
  const router = useRouter();

  const permissions = [
    { label: "Overview", href: "/dashboard" },
    { label: "Courses", href: "/dashboard/courses" },
    { label: "Lectures", href: "/dashboard/lectures" },
  ];

  const handleLogOut = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("Logout failed!");
        return;
      }

      toast.success("Logout successfully!");
      router.push("/login");
    } catch {
      toast.error("Something went wrong!");
    }
  };

  const NavList = (
    <nav className="flex flex-col gap-1">
      {permissions.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white transition-all duration-200 hover:bg-[#F8F9FA] hover:text-[#FB8B24]"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <div className="hidden min-h-screen w-60 shrink-0 border-r border-[#0F4C5C]/10 bg-[#0F4C5C] md:flex">
      <div className="flex w-full flex-col p-3">
        <div className="mb-6 flex items-center gap-3 px-1">
          <h1 className="text-2xl font-bold text-white">
            LMS
          </h1>
        </div>

        {NavList}

        <div className="mt-auto border-t border-white/20 pt-4">
          <Button
            onPress={handleLogOut}
            className="w-full bg-white/10 text-white transition-all hover:bg-[#FB8B24]">
            <FaSignOutAlt />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
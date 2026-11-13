
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Drawer } from "@heroui/react";
import { Bars } from "@gravity-ui/icons";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";


import NavLink from "@/components/shared/NavLink";
import { authClient } from "@/lib/auth-client";

interface DashboardUser {
    role?: string | null;
    image?: string | null;
    name?: string | null;
    email?: string | null;
}

interface DashboardNavbarProps {
    user: DashboardUser | undefined;
}

const DashboardNavbar = ({ user }: DashboardNavbarProps) => {
    const role = user?.role ?? "admin";
    const [open, setOpen] = useState(false);
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

            setOpen(false);
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
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/85 transition-all duration-200 hover:bg-white/10 hover:text-[#FB8B24]"
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );

    return (
        <div className="navbar flex w-full items-center justify-between border-b border-[#0F4C5C]/10 bg-[#F8F9FA] px-4 py-2 shadow-sm">
            <div className="flex items-center gap-3">
                <Button
                    className="h-10 min-w-10 border border-[#0F4C5C]/15 bg-white text-[#0F4C5C] hover:bg-[#0F4C5C]/5 md:hidden"
                    isIconOnly
                    onPress={() => setOpen(true)}
                    aria-label="Open dashboard navigation"
                >
                    <Bars />
                </Button>

                <h2 className="text-lg font-semibold capitalize text-[#1D2D44] md:text-xl">
                    {role} Dashboard
                </h2>
            </div>


            <Drawer
                isOpen={open}
                onOpenChange={setOpen}
            >
                <Drawer.Backdrop>
                    <Drawer.Content
                        placement="left"
                        className="max-w-64"
                    >
                        <Drawer.Dialog className="border-r border-white/10 bg-[#0F4C5C]">
                            <Drawer.CloseTrigger className="text-white/70 hover:text-[#FB8B24]" />

                            <Drawer.Header>
                                <Drawer.Heading className="text-2xl font-bold tracking-wide text-white">
                                    LMS
                                </Drawer.Heading>
                            </Drawer.Header>

                            <Drawer.Body>
                                {NavList}
                            </Drawer.Body>

                            <div className="border-t border-white/20 p-4">
                                <Button
                                    onPress={handleLogOut}
                                    className="w-full bg-white/10 text-white hover:bg-[#FB8B24] hover:text-white">
                                    <FaSignOutAlt />
                                    Logout
                                </Button>
                            </div>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>
    );
};

export default DashboardNavbar;

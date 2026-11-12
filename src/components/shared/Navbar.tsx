
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Admin Dashboard", href: "/dashboard" },
];

const Navbar = () => {
    return (
        <div className="relative z-20 px-4 py-4">
            <div className="navbar max-w-5xl mx-auto rounded-full bg-white/90 backdrop-blur-md border border-white shadow-xl px-5">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle lg:hidden"
                        >
                            <FaBars className="text-lg text-[#0F4C5C]" />
                        </div>


                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white rounded-2xl z-10 mt-3 w-52 p-2 shadow-lg border border-[#E8F5E9]">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <NavLink
                                        href={item.href}
                                        className="rounded-xl text-[#0F4C5C]">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="LMS Logo"
                            width={45}
                            height={45}
                            className="h-10 w-10 object-contain"
                            priority
                        />

                        <span className="text-[#0F4C5C] font-extrabold text-xl">
                            LMS
                        </span>
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-1 px-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <NavLink
                                    href={item.href}
                                    className="rounded-full px-5 py-2 font-medium text-[#0F4C5C]  transition-all duration-300" >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="navbar-end">
                    <Link
                        href="/login"
                        className="btn rounded-full bg-white text-[#0F4C5C] px-6 hover:bg-[#0F4C5C] hover:text-white btn-outline"  >
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

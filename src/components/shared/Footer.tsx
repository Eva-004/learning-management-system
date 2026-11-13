"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

const Footer = () => {
    const pathName: string = usePathname();

  if (pathName.includes("dashboard")) {
    return null;
  }
    return (
        <footer className="bg-[#0F4C5C] text-white px-6 py-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-white/20">
                    <div className="text-center md:text-left">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-2 text-2xl font-bold">
                            <FaBookOpen />
                            LMS
                        </Link>
                        <p className="text-sm text-white/70 mt-2">
                            Learn Better. Grow Faster.
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <Link href="/" className="hover:text-[#FB8B24] transition">
                            Home
                        </Link>
                        <Link href="/courses" className="hover:text-[#FB8B24] transition">
                            Courses
                        </Link>
                        <Link href="/dashboard" className="hover:text-[#FB8B24] transition">
                            Admin Dashboard
                        </Link>
                        <Link href="/login" className="hover:text-[#FB8B24] transition">
                            Login
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-5 text-sm text-white/70">
                    <p>© {new Date().getFullYear()} LMS. All rights reserved.</p>
                    <p>Simple Learning Management System</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

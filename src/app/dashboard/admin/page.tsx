
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBookOpen, FaVideo, FaPlus, FaArrowRight } from "react-icons/fa";
import { getAllCourses, getAllLectures } from "@/lib/api";

const AdminPage = () => {
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalLectures, setTotalLectures] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [courseData, lectureData] = await Promise.all([
                    getAllCourses(),
                    getAllLectures()
                ]);

                if (courseData.success) {
                    setTotalCourses(courseData.data.length);
                }

                if (lectureData.success) {
                    setTotalLectures(lectureData.data.length);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const stats = [
        {
            title: "Total Courses",
            count: totalCourses,
            icon: <FaBookOpen size={24} />,
            description: "Courses available on your platform",
        },
        {
            title: "Total Lectures",
            count: totalLectures,
            icon: <FaVideo size={24} />,
            description: "Lessons available for students",
        },
    ];

    const quickActions = [
        {
            title: "Manage Courses",
            description: "Add, edit and delete your courses.",
            href: "/dashboard/admin/courses",
            icon: <FaBookOpen size={22} />,
        },
        {
            title: "Manage Lectures",
            description: "Organize and manage course lectures.",
            href: "/dashboard/admin/lectures",
            icon: <FaVideo size={22} />,
        },
    ];

    return (
        <div className="w-11/12 mx-auto py-4 space-y-8">

            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#0F4C5C]">
                    Admin Dashboard
                </h1>
                <p className="text-gray-500 mt-2">
                    Welcome back, Admin! Manage your courses and lectures from here.
                </p>
            </div>

            <div className="bg-[#0F4C5C] rounded-2xl p-6 md:p-8 text-white">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Welcome to Your LMS Dashboard
                </h2>
                <p className="text-white/80 mt-2 text-sm leading-6 max-w-2xl">
                    Manage your learning platform, organize courses, add new lectures
                    and keep your educational content up to date.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                    <Link
                        href="/dashboard/admin/courses"
                        className="flex items-center gap-2 bg-white text-[#0F4C5C] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                    >
                        <FaPlus size={12} />
                        Manage Courses
                    </Link>
                    <Link
                        href="/dashboard/admin/lectures"
                        className="flex items-center gap-2 border border-white/50 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition"
                    >
                        <FaVideo size={14} />
                        Manage Lectures
                    </Link>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Platform Overview
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="bg-white border border-[#E5F0F2] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">
                                        {stat.title}
                                    </p>
                                    <h2 className="text-3xl font-bold text-[#0F4C5C] mt-3">
                                        {loading ? "..." : stat.count}
                                    </h2>
                                    <p className="text-xs text-gray-400 mt-2">
                                        {stat.description}
                                    </p>
                                </div>

                                <div className="w-14 h-14 rounded-xl bg-[#0F4C5C]/10 text-[#0F4C5C] flex items-center justify-center">
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Quick Actions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="group bg-white border border-[#E5F0F2] rounded-xl p-5 flex items-center justify-between hover:border-[#0F4C5C] hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0F4C5C]/10 text-[#0F4C5C] flex items-center justify-center">
                                    {action.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {action.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {action.description}
                                    </p>
                                </div>
                            </div>

                            <FaArrowRight className="text-gray-400 group-hover:text-[#0F4C5C] group-hover:translate-x-1 transition" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

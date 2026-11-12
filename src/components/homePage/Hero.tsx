
import React from "react";
import Link from "next/link";
import { FaBookOpen, FaPlayCircle, FaGraduationCap } from "react-icons/fa";
import { Button } from "@heroui/react";

const Hero = () => {
    return (
        <section className=" px-6 py-4 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block bg-[#E5F0F2] text-[#0F4C5C] px-4 py-2 rounded-full text-sm font-medium mb-5">
                     Learning Management System
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight">
                        Learn Better.
                        <br />
                        <span className="text-[#E36414]">Grow Faster.</span>
                    </h1>
                    <p className="text-gray-600 mt-6 leading-7 max-w-lg">
                        Explore our courses, learn from organized lectures,
                        and build your skills with a simple and easy learning experience.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 bg-[#0F4C5C] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#0b3b47] transition"
                        >
                            Explore Courses
                            <FaBookOpen />
                        </Link>

                        <Link
                            href="/login"
                            className="inline-flex items-center justify-center border border-[#0F4C5C] text-[#0F4C5C] font-semibold px-7 py-3 rounded-full hover:bg-[#0F4C5C] hover:text-white transition"
                        >
                            Admin Login
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-[#0F4C5C] rounded-3xl p-8 md:p-10 text-white shadow-xl">
                        <div className="bg-white/10 rounded-2xl p-5 mb-6">
                            <FaBookOpen className="text-4xl text-[#FB8B24] mb-4" />
                            <h2 className="text-2xl font-bold">Start Your Learning Journey</h2>
                            <p className="text-white/70 mt-2 text-sm">
                                Discover courses and learn at your own pace.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 text-[#0F4C5C]">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E5F0F2] p-3 rounded-xl">
                                    <FaPlayCircle className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Course Lectures</h3>
                                    <p className="text-sm text-gray-500">Learn through video lessons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;

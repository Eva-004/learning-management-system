"use client";

import React, { useEffect, useState } from "react";
import { getAllCourses, Course } from "@/lib/api";
import CourseCard from "@/components/CourseCard";

interface CourseData extends Course {
    _id: string;
}

const CoursesPage = () => {
    const [courses, setCourses] = useState<CourseData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getAllCourses();

                if (data.success) {
                    setCourses(data.data || []);
                }
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="w-11/12 mx-auto py-10 space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-[#0F4C5C]">
                    Explore Our Courses
                </h1>
                <p className="text-gray-500">
                    Discover courses and start learning something new.
                </p>
            </div>

            {loading ? (
                <p className="text-center text-gray-500 py-10">
                    Loading courses...
                </p>
            ) : courses.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                    No courses available.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <CourseCard
                            key={course._id}
                            course={course}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoursesPage;
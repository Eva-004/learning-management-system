
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
    Course,
    Lecture,
    getCourseById,
    getLecturesByCourseId,
} from "@/lib/api";
import LessonCard from "@/components/LessonCard";


interface CourseData extends Course {
    _id: string;
}

interface LectureData extends Lecture {
    _id: string;
}

const CourseDetailsPage = () => {
    const params = useParams();
    const courseId = params.id as string;

    const [course, setCourse] = useState<CourseData | null>(null);
    const [lectures, setLectures] = useState<LectureData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const [courseData, lectureData] = await Promise.all([
                    getCourseById(courseId),
                    getLecturesByCourseId(courseId),
                ]);

                console.log("Course Response:", courseData);
                console.log("Lecture Response:", lectureData);

                if (courseData.success) {
                    setCourse(courseData.data);
                }

                if (lectureData.success) {
                    setLectures(lectureData.data || []);
                }
            } catch (error) {
                console.error("Failed to fetch course details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            fetchCourseDetails();
        }
    }, [courseId]);

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500">
                Loading course details...
            </div>
        );
    }


    if (!course) {
        return (
            <div className="py-20 text-center text-gray-500">
                Course not found.
            </div>
        );
    }

    return (
        <div className="w-11/12 max-w-6xl mx-auto py-10 space-y-10">

            {/* Course Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-2xl p-5 md:p-8">

                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="space-y-4">
                    <span className="inline-block text-sm font-medium text-[#0F4C5C] bg-[#0F4C5C]/10 px-3 py-1 rounded-full">
                        Course Details
                    </span>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {course.title}
                    </h1>

                    <p className="text-gray-500 leading-7">
                        {course.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div>
                            <p className="text-sm text-gray-500">
                                Course Price
                            </p>
                            <p className="text-2xl font-bold text-[#0F4C5C]">
                                ৳{course.price}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-gray-500">
                                Total Lessons
                            </p>
                            <p className="text-xl font-semibold text-gray-800">
                                {lectures.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Course Lessons
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Explore all lessons included in this course.
                    </p>
                </div>

                {lectures.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-xl py-12 text-center">
                        <p className="text-gray-500">
                            No lessons available for this course yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {lectures.map((lecture, index) => (
                            <LessonCard
                                key={lecture._id}
                                lecture={lecture}
                                index={index + 1}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseDetailsPage;

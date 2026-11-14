
"use client";

import React, { useEffect, useState } from "react";
import { getAllCourses, getAllLectures } from "@/lib/api";
import LectureTable from "@/components/dashboard/lecture/LectureTable";
import AddLectureModal from "@/components/dashboard/lecture/AddLectureModal";

export interface Lecture {
    _id: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
    duration: number;
}
export interface Course {
    _id: string;
    title: string;
}

const LectureManagement = () => {
    const [lectures, setLectures] = useState<Lecture[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchLectures = async () => {
        try {
            const data = await getAllLectures();
            const courseData = await getAllCourses();
            setCourses(courseData?.data || []);
            setLectures(data?.data || []);
        } catch (error) {
            console.error("Failed to fetch lectures:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLectures();
    }, []);

    return (
        <div className="space-y-6 w-11/12 mx-auto py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Lecture Management
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Add and manage lectures for your courses.
                    </p>
                </div>

                <AddLectureModal />
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        All Lectures
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Total {lectures.length} lectures
                    </p>
                </div>

                {loading ? (
                    <div className="py-10 text-center text-gray-500">
                        Loading lectures...
                    </div>
                ) : lectures.length === 0 ? (
                    <div className="py-10 text-center">
                        <p className="text-gray-500">
                            No lectures found.
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Add your first lecture to get started.
                        </p>
                    </div>
                ) : (
                    <LectureTable lectures={lectures} courses={courses} />
                )}

            </div>
        </div>
    );
};

export default LectureManagement;

'use client'
import Link from "next/link";
import CourseCard from "../CourseCard";
import { useEffect, useState } from "react";
import { getAllCourses } from "@/lib/api";

export interface Course {
    _id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const OurCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCourse = async () => {

        const data = await getAllCourses();
        setCourses(data?.data);
        setLoading(false);
    }
   useEffect(()=>{
    fetchCourse();
   },[])

    return (
        <section className="py-16 w-11/12 mx-auto">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Our Courses
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Explore our popular courses and start learning.
                        </p>
                    </div>

                    <Link className="btn btn-info btn-soft"
                        href="/courses">
                        Show All
                    </Link>
                </div>

                   {loading ? (
                    <p>Loading courses...</p>
                ) : courses.length === 0 ? (
                    <p className="text-gray-500">No courses available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.slice(0, 3).map((course) => (
                            <CourseCard key={course._id} course={course} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default OurCourses;

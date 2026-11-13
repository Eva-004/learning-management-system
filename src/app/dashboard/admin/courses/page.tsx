
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { FaPlus } from "react-icons/fa";
import { getAllCourses } from "@/lib/api";
import CourseTable from "@/components/dashboard/course/CourseTable";
import AddCourseModal from "@/components/dashboard/course/AddCourseModal";

export interface Course {
    _id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const CourseManagementPage = () => {
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
        <div className="space-y-6 w-11/12 mx-auto py-4">
           
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Course Management
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Create and manage all your courses.
                    </p>
                </div>

                <AddCourseModal/>
            </div>

            
            <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        All Courses
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Total {courses.length} courses
                    </p>
                </div>

                <CourseTable courses={courses} />
            </div>
        </div>
    );
};

export default CourseManagementPage;

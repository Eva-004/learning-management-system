
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter } from "@heroui/react";

interface CourseCardProps {
    course: {
        _id: string;
        title: string;
        description: string;
        price: number;
        thumbnail: string;
    };
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <Card className="border border-[#E5F0F2] bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="p-0">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={600}
                    height={350}
                    className="w-full h-52 object-cover"
                />

                <div className="p-5 space-y-3">
                    <h3 className="text-lg font-semibold text-[#0F4C5C] line-clamp-1">
                        {course.title}
                    </h3>

                    <p className="text-sm text-gray-500 line-clamp-2">
                        {course.description}
                    </p>
                </div>
            </div>

            <CardFooter className="flex items-center justify-between px-5 pb-5 pt-0">
                <p className="text-lg font-bold text-[#0F4C5C]">
                    ৳ {course.price}
                </p>

                <Link
                    href={`/courses/${course._id}`}
                    className="rounded-full bg-[#0F4C5C] px-5 py-2 text-sm font-medium text-white hover:bg-[#E36414] transition-colors"
                >
                    View Course
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;

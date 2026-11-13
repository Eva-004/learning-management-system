
import React from "react";
import Image from "next/image";
import { Button, Table } from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateCourseModal from "./UpdateCourseModal.tsx/UpdateCourseModal";

export interface Course {
    _id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

interface CourseTableProps {
    courses: Course[];
}

const CourseTable = ({ courses }: CourseTableProps) => {

    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content
                    aria-label="Course management table"
                    className="min-w-[750px]"
                >
                    <Table.Header>
                        <Table.Column isRowHeader>Course</Table.Column>
                        <Table.Column>Description</Table.Column>
                        <Table.Column>Price</Table.Column>
                        <Table.Column>Actions</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {courses.map((course) => (
                            <Table.Row key={course._id}>
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={course.thumbnail}
                                            alt={course.title}
                                            width={56}
                                            height={40}
                                            className="w-14 h-10 rounded-md object-cover"
                                        />

                                        <span className="font-medium text-gray-800">
                                            {course.title}
                                        </span>
                                    </div>
                                </Table.Cell>

                                <Table.Cell>
                                    <p className="text-gray-500 line-clamp-1">
                                        {course.description}
                                    </p>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="font-medium text-gray-700">
                                        ৳{course.price}
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <UpdateCourseModal course={course}/>

                                        <Button
                                            isIconOnly
                                            size="sm"
                                            className={'text-red-600 bg-white'}
                                            aria-label="Delete course"
                                        >
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default CourseTable;

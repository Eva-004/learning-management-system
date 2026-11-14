
"use client";

import React from "react";
import { Button, Table } from "@heroui/react";
import { FaEdit, FaTrash, FaPlay } from "react-icons/fa";

export interface Lecture {
    _id: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
}

interface LectureTableProps {
    lectures: Lecture[];
    courses: Course[];
}
interface Course {
    _id: string;
    title: string;
}

const LectureTable = ({ lectures, courses }: LectureTableProps) => {
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content
                    aria-label="Lecture management table"
                    className="min-w-[750px]"
                >
                    <Table.Header>
                        <Table.Column isRowHeader>Lecture</Table.Column>
                        <Table.Column>Course</Table.Column>
                        <Table.Column>Description</Table.Column>
                        <Table.Column>Video</Table.Column>
                        <Table.Column>Actions</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {lectures.map((lecture) => (
                            <Table.Row key={lecture._id}>
                                <Table.Cell>
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            {lecture.title}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            ID: {lecture._id.slice(-6)}
                                        </p>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-sm font-medium text-[#0F4C5C]">
                                        {courses.find((course) => course._id === lecture.courseId)?.title || "Course not found"}
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <p className="text-gray-500 line-clamp-1 max-w-62.5">
                                        {lecture.description}
                                    </p>
                                </Table.Cell>

                                <Table.Cell>
                                    <a
                                        href={lecture.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#0F4C5C] hover:underline"
                                    >
                                        <FaPlay size={12} />
                                        Watch Video
                                    </a>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            size="sm"
                                            className="bg-[#0F4C5C] text-white"
                                        >
                                            <FaEdit />
                                            Edit
                                        </Button>

                                        <Button
                                            size="sm"
                                            className="bg-red-50 text-red-600"
                                        >
                                            <FaTrash />
                                            Delete
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

export default LectureTable;


"use client";

import React, { useEffect, useState } from "react";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    TextArea,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { UpdateLecture, getAllCourses } from "@/lib/api";
import { toast } from "react-toastify";

interface Lecture {
    _id: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
}

interface Course {
    _id: string;
    title: string;
}

interface UpdateLectureModalProps {
    lecture: Lecture;
}

const UpdateLectureModal = ({ lecture }: UpdateLectureModalProps) => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getAllCourses();

                if (data.success) {
                    setCourses(data.data || []);
                }
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            }
        };

        fetchCourses();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const lectureData = {
            courseId: formData.get("courseId") as string,
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            videoUrl: formData.get("videoUrl") as string,
        };

        try {
            const data = await UpdateLecture(lecture._id, lectureData);

            if (data.success) {
                toast.success("Lecture updated successfully");
            } else {
                toast.error(data.message || "Failed to update lecture");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }
    };

    return (
        <Modal>
            <Button
                isIconOnly
                size="sm"
                aria-label="Edit lecture"
                className="bg-[#0F4C5C] text-white"
            >
                <FaEdit />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Update Lecture</Modal.Heading>
                            <p className="text-sm text-muted">
                                Update your lecture information.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    id="update-lecture-form"
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4"
                                >
                                    <div>
                                        <Label>Select Course</Label>
                                        <select
                                            name="courseId"
                                            defaultValue={lecture.courseId}
                                            required
                                            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0F4C5C]"
                                        >
                                            <option value="" disabled>
                                                Select a course
                                            </option>

                                            {courses.map((course) => (
                                                <option
                                                    key={course._id}
                                                    value={course._id}
                                                >
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <TextField
                                        name="title"
                                        defaultValue={lecture.title}
                                        isRequired
                                    >
                                        <Label>Lecture Title</Label>
                                        <Input
                                            placeholder="Enter lecture title"
                                            required
                                        />
                                    </TextField>

                                    <TextField
                                        name="description"
                                        defaultValue={lecture.description}
                                        isRequired
                                    >
                                        <Label>Description</Label>
                                        <TextArea
                                            placeholder="Enter lecture description"
                                            rows={3}
                                            required
                                        />
                                    </TextField>

                                    <TextField
                                        name="videoUrl"
                                        defaultValue={lecture.videoUrl}
                                        isRequired
                                    >
                                        <Label>Video URL</Label>
                                        <Input
                                            type="url"
                                            placeholder="Enter video URL"
                                            required
                                        />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            className="bg-white text-[#0F4C5C]"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="bg-[#0F4C5C] text-white"
                                        >
                                            Update Lecture
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateLectureModal;

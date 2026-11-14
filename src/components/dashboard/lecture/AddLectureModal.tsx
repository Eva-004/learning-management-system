
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
    Select,
} from "@heroui/react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { AddLectures, getAllCourses } from "@/lib/api";

interface CourseOption {
    _id: string;
    title: string;
}

const AddLectureModal = () => {
    const [courses, setCourses] = useState<CourseOption[]>([]);
    const [selectedCourse, setSelectedCourse] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getAllCourses();
            setCourses(data?.data || []);
            
        };
        fetchCourses();
    }, []);

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const lectureData = {
            courseId: selectedCourse,
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            videoUrl: formData.get("videoUrl") as string,
        };

        if (!selectedCourse) {
            toast.error("Please select a course");
            return;
        }

            const data = await AddLectures(lectureData);

            if (data.success) {
                toast.success("Lecture added successfully");
                setSelectedCourse("");
            } else {
                toast.error(data.message || "Failed to add lecture");
            }
    };

    return (
        <Modal>
            <Button className="bg-[#0F4C5C] text-white font-medium">
                <FaPlus /> Create Lecture
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Add New Lecture</Modal.Heading>
                            <p className="text-sm text-muted">
                                Select a course and fill in the lecture details.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleSubmit}
                                    id="lecture-form"

                                    className="flex flex-col gap-4"
                                >

                                    <div>
                                        <label
                                            htmlFor="course"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Select Course
                                        </label>

                                        <select
                                            id="course"
                                            value={selectedCourse}
                                            onChange={(e) => setSelectedCourse(e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0F4C5C] focus:ring-1 focus:ring-[#0F4C5C]"
                                        >
                                            <option value="" disabled>
                                                Select a course
                                            </option>

                                            {courses.map((course) => (
                                                <option key={course._id} value={course._id}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                    <TextField name="title" isRequired>
                                        <Label>Lecture Title</Label>
                                        <Input
                                            className="w-full"
                                            placeholder="Enter lecture title"
                                            required
                                        />
                                    </TextField>

                                    <TextField name="description" isRequired>
                                        <Label>Description</Label>
                                        <TextArea
                                            placeholder="Enter lecture description"
                                            rows={3}
                                            required
                                        />
                                    </TextField>

                                    <TextField name="videoUrl" isRequired>
                                        <Label>Video URL</Label>
                                        <Input
                                            className="w-full"
                                            type="url"
                                            placeholder="Enter lecture video URL"
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
                                            Create Lecture
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

export default AddLectureModal;

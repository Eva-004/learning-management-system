
"use client";

import React from "react";
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
import { UpdateCourse, Course } from "@/lib/api";
import { toast } from "react-toastify";

interface UpdateCourseModalProps {
    course: Course & { _id: string };
}

const UpdateCourseModal = ({ course }: UpdateCourseModalProps) => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const courseData: Partial<Course> = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            price: Number(formData.get("price")),
            thumbnail: formData.get("thumbnail") as string,
        };

        try {
            const data = await UpdateCourse(course._id, courseData);

            if (data.success) {
                toast.success("Course updated successfully");
            } else {
                toast.error(data.message || "Failed to update course");
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
                aria-label="Edit course">
                <FaEdit />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Update Course</Modal.Heading>
                            <p className="text-sm text-muted">
                                Update your course information.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    id="update-course-form"
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4"
                                >
                                    <TextField
                                        name="title"
                                        defaultValue={course.title}
                                        isRequired
                                    >
                                        <Label>Course Title</Label>
                                        <Input
                                            className="w-full"
                                            placeholder="Enter course title"
                                            required
                                        />
                                    </TextField>

                                    <TextField name="description" defaultValue={course.description} isRequired>
                                        <Label>Description</Label>
                                        <TextArea
                                            placeholder="Enter course description"
                                            rows={3}
                                            required
                                        />
                                    </TextField>

                                    <TextField name="price" defaultValue={String(course.price)} isRequired>
                                        <Label>Price (BDT)</Label>
                                        <Input
                                            className="w-full"
                                            type="number"
                                            min="0"
                                            required
                                        />
                                    </TextField>

                                    <TextField name="thumbnail" defaultValue={course.thumbnail} isRequired>
                                        <Label>Thumbnail URL</Label>
                                        <Input
                                            className="w-full"
                                            type="url"
                                            placeholder="Enter thumbnail URL"
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
                                            Update Course
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

export default UpdateCourseModal;

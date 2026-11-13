
"use client";

import React from "react";
import {
    Button,
    Modal,
} from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import { Course, DeleteCourse } from "@/lib/api";
import { toast } from "react-toastify";

interface DeleteCourseModalProps {
    course: Course & { _id: string };
}

const DeleteCourseModal = ({ course }: DeleteCourseModalProps) => {

    const handleDelete = async () => {
        const data = await DeleteCourse(course._id);
        if (data.success) {
            toast.success("Course deleted successfully");
        } else {
            toast.error(data.message || "Failed to delete course");
        }
    };

    return (
        <Modal>
            <Button
                isIconOnly
                size="sm"
                className={'text-red-600 bg-white'}
                aria-label="Delete course"
            >
                <FaTrash />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Delete Course</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <p className="text-sm text-muted">
                                Are you sure you want to delete this course?
                                This action cannot be undone.
                            </p>

                            <p className="font-medium text-[#0F4C5C] mt-2">
                                {course.title}
                            </p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                slot="close"
                                className="bg-gray-100 text-gray-700"
                            >
                                Cancel
                            </Button>

                            <Button
                                onPress={handleDelete}
                                className="bg-red-600 text-white"
                            >
                                <FaTrash />
                                Confirm Delete
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteCourseModal;

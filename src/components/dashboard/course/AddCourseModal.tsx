
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
import { FaPlus } from "react-icons/fa";
import { AddCourses, Course } from "@/lib/api";
import { toast } from "react-toastify";

const AddCourseModal = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const courseData: Course = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            price: Number(formData.get("price")),
            thumbnail: formData.get("thumbnail") as string,
        };
       const data= await AddCourses(courseData)
       if(data.success){
        toast.success("added course successfully");
       }
       else{
        toast.error(data.message);
       }
        console.log(courseData);
    };

    return (
        <Modal>
            <Button className="bg-[#0F4C5C] text-white font-medium" >
                <FaPlus /> Create Course
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Add New Course</Modal.Heading>
                            <p className="text-sm text-muted">
                                Fill in the details to create a new course.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    id="course-form"
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4"
                                >
                                    <TextField name="title" isRequired>
                                        <Label>Course Title</Label>
                                        <Input className={'w-full'}
                                            placeholder="Enter course title"
                                            required
                                        />
                                    </TextField>

                                    <TextField name="description" isRequired>
                                        <Label>Description</Label>
                                        <TextArea
                                            placeholder="Enter course description"
                                            rows={3}
                                            required
                                        />
                                    </TextField>

                                    <TextField name="price" isRequired>
                                        <Label>Price (BDT)</Label>
                                        <Input className={'w-full'}
                                            type="number"
                                            placeholder="Enter course price"
                                            min="0"
                                            required
                                        />
                                    </TextField>

                                    <TextField name="thumbnail" isRequired>
                                        <Label>Thumbnail URL</Label>
                                        <Input className={'w-full'}
                                            type="url"
                                            placeholder="Enter thumbnail image URL"
                                            required
                                        />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" className={'bg-white text-[#0F4C5C]'} >
                                            Cancel
                                        </Button>

                                        <Button type="submit" className={'bg-[#0F4C5C]'} >
                                            Create Course
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

export default AddCourseModal;

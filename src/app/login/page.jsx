
import React from "react";
import Link from "next/link";
import { Button, Card, Input, Label, TextField } from "@heroui/react";
import { FaLock, FaBookOpen } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div className="min-h-[80vh] bg-[#F8FAFB] flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md bg-white p-8 shadow-lg rounded-2xl border border-gray-100">
                <div className="text-center mb-6">
                    <div className="bg-[#E5F0F2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaBookOpen className="text-3xl text-[#0F4C5C]" />
                    </div>

                    <h1 className="text-2xl font-bold text-[#0F4C5C]">
                        Admin Login
                    </h1>

                    <p className="text-gray-500 text-sm mt-2">
                        Login to manage your courses and lectures
                    </p>
                </div>

                <form className="flex flex-col gap-5">
                    <TextField name="email" type="email" isRequired>
                        <Label className="text-[#1D2D44] font-medium">
                            Email Address
                        </Label>
                        <Input
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </TextField>

                    <TextField name="password" type="password" isRequired>
                        <Label className="text-[#1D2D44] font-medium">
                            Password
                        </Label>
                        <Input
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-[#0F4C5C] text-white font-semibold hover:bg-[#0b3b47]"
                        radius="lg"
                        size="lg"
                    >
                        <FaLock />
                        Login
                    </Button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    Admin access only. Authorized users can log in.
                </p>

                <div className="text-center mt-4">
                    <Link
                        href="/"
                        className="text-sm text-[#0F4C5C] hover:underline"
                    >
                        Back to Home
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;

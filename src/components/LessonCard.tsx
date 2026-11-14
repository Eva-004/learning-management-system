
"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
import { Lecture } from "@/lib/api";

interface LessonCardProps {
    lecture: Lecture & { _id: string };
    index: number;
}

const LessonCard = ({ lecture, index }: LessonCardProps) => {
    return (
        <div className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0F4C5C] transition">
            <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-[#0F4C5C]/10 text-[#0F4C5C] flex items-center justify-center font-semibold">
                    {String(index).padStart(2, "0")}
                </div>

                <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">
                        {lecture.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                        {lecture.description}
                    </p>
                </div>
            </div>

            <a
                href={lecture.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${lecture.title}`}
                className="w-10 h-10 shrink-0 rounded-full bg-[#0F4C5C] text-white flex items-center justify-center hover:bg-[#0b3b48] transition"
            >
                <FaPlay size={13} />
            </a>
        </div>
    );
};

export default LessonCard;

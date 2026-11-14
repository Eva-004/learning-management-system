export interface Course {
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}
export interface Lecture {
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
}

export async function getAllCourses (){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses`, {
            method: "GET",
        });
        const data = await res.json();
        return data;
}
export async function AddCourses (courseData : Course){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses`, {
           method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(courseData),
        });
        const data = await res.json();
        return data;
}
export async function UpdateCourse(id: string, courseData: Partial<Course>) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(courseData),
        }
    );

    const data = await res.json();
    return data;
}
export async function DeleteCourse(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses/${id}`,
        {
            method: "DELETE",
            credentials: "include",
        }
    );

    const data = await res.json();
    return data;
}
export async function getAllLectures (){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/lectures`, {
            method: "GET",
        });
        const data = await res.json();
        return data;
}
export async function AddLectures (lectureData : Lecture){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/lectures`, {
           method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(lectureData),
        });
        const data = await res.json();
        return data;
}
export async function UpdateLecture(
    id: string,
    lectureData: Partial<Lecture>
) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/lectures/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(lectureData),
        }
    );

    const data = await res.json();
    return data;
}
export async function DeleteLecture(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/lectures/${id}`,
        {
            method: "DELETE",
            credentials: "include",
        }
    );

    const data = await res.json();
    return data;
}
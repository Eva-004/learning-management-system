export interface Course {
    title: string;
    description: string;
    price: number;
    thumbnail: string;
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

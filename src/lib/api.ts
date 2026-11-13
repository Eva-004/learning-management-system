export async function getAllCourses (){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses`, {
            method: "GET",
        });
        const data = await res.json();
        return data;
}
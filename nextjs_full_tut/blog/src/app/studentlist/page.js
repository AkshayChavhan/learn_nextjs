import Link from "next/link"

export default function StudentList() {
    const studentlist = [
        {
            name: "Akshay",
            id: "akshay01"
        },
        {
            name: "Bhaskar",
            id: "bhaskar02"
        },
        {
            name: "Tathacharya",
            id: "tathacharya03"
        },
        {
            name: "KingBala",
            id: "kbala04"
        },
        {
            name: "TenaliRama",
            id: "tenalirama05"
        }
    ]
    return (
        <div>
            <h1>Welcome to Student to list</h1>
            <ul>
                {
                    studentlist.length &&
                    studentlist.map((student) => {
                        console.log(student.name);
                        return (
                            <li key={student.id}>
                                {/* {student.name} */}
                                <Link href={`/studentlist/${student.name}`}>{student.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
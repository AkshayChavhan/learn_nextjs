'use client'


export default function Lecture(props) {
    const { params } = props;
    // console.log(props);
    return (
        <div>
            <h1>Welcome to the Lecture Page</h1>
            <ul>
                {
                    params && params.lecture.map((lecture) => {
                        return (
                            <li>{lecture}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
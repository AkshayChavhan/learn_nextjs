'use client'
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";


export default function Layout({ children }) {

    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <div className="login-nav">
                <ul className="ul-style-none">
                    <li className="pad-right">
                        <Link className="decoration-none nav-item" href="/login">Login Main</Link>
                    </li>
                    <li className="pad-right">
                        <Link className="decoration-none nav-item" href="/login/student">Login Student</Link>
                    </li>
                    <li className="pad-right">
                        <Link className="decoration-none nav-item" href="/login/teacher">Login Teacher</Link>
                    </li>
                </ul>

            {children}
        </div>
    )
} 
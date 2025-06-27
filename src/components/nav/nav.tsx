import "./nav.css"
import Link from "next/link";

export default function Nav() {
    return (
        <ul id="main-nav">
            <li className="nav-item" key={"home"}>
                <Link href={"/"}>Home</Link>
            </li>
            <li className="nav-item" key={"characters"}>
                <Link href={"/characters"}>Characters</Link>
            </li>
            <li className="nav-item" key={"locations"}>
                <Link href={"/locations"}>Locations</Link>
            </li>
        </ul>
    )
}
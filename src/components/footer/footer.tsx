import "./footer.css"
import Link from "next/link";

export default function Nav() {
    return (
        <footer id="page-footer">
            <ul  className="footer-links">
                <li className="footer-link">
                    Made with love by&nbsp;
                    <a
                        href="https://lrobert142.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lachlan Robertson
                    </a>
                </li>
                <li className="footer-link">
                    <Link
                        href={"/credits"}
                    >
                        Credits & Acknowledgements
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
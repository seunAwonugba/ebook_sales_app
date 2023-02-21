import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <nav className="nav-bar">
            <Link to="/" className="title">
                Ebook Sales App
            </Link>
            <ul>
                <li>
                    <Link to="/success" className="success">
                        Success
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

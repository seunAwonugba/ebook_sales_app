export default function NavBar() {
    return (
        <nav className="nav-bar">
            <a href="/" className="title">
                Ebook Sales App
            </a>
            <ul>
                <li>
                    <a href="/success" className="success">
                        Success
                    </a>
                </li>
            </ul>
        </nav>
    );
}

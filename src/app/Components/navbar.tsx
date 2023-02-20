import Link from "next/link";

//create a navbar with the logo on the left and the links on the right
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/* Logo */}
                <a href="/">
                    <img src={"/"} alt="logo" />
                </a>
            </div>
            {/* Links */}
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar; 
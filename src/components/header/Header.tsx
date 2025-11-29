import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Header() {
  const siteName = "BharatBlog";
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo 
         <img src="assets/img/logo.png" alt="">  */}
          <h1 className="sitename">{siteName}</h1>
        </Link>
        <Navbar />
        <div className="header-social-links">
          <Link href="/" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link href="/" className="facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="/" className="instagram">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="/" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
// const style = StyleSheetList
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <strong>WiincCard</strong>
            </a>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/business">
                  <a className="nav-link active">For Business</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <title>Welcom to Wiinc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">Wiinc</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
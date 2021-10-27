import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/dist/client/link";

const Home: NextPage = () => {
  return (
    <section className="hero">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 py-5 text-center hero">
            <h3>Global Cards for All Africans</h3>
            <p className="mt-5 lead">Generate virtual cards using our APIs</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <Link href="business">
              <a className="btn btn-primary p-3">Request Access</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

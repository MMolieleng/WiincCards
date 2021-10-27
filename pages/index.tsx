import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/dist/client/link";

const Home: NextPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 py-5 text-center hero">
              <h3>Global Cards for Africans</h3>
              <p className="mt-5 lead">
                Expanding the most used mobile payments usability in Africa
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <Link href="business">
                <a className="btn btn-primary">Request Access</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="row py-4 text-center">
          <div className="col-md-4 mb-3">
            <h4 className="py-4 feature-item">Link</h4>
            <p className="py-4">Link mobile money accounts</p>
          </div>
          <div className="col-md-4 mb-3">
            <h4 className="py-4 feature-item">Global</h4>
            <p className="py-4">Enable global payments</p>
          </div>
          <div className="col-md-4 mb-3">
            <h4 className="py-4 feature-item">Customize</h4>
            <p className="py-4">Put your brand on the card</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

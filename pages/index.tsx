import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/dist/client/link";
import Footer from "../components/Footer";
import bankCard from "../public/wiincCard.svg";

const Home: NextPage = () => {
  return (
    <div>
      <section className="hero text-light">
        <div className="container px-4">
          <div className="row">
            <div className="col-md-12 py-5 text-center hero">
              <h3 className="text-light">For Corporate Prepaid Cards</h3>
              <p className="mt-5 lead text-light">
                Issue prepaid debit cards employers for travelling, <br />
                entertainment and online spending
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <Link href="business">
                <a className="btn btn-primary bg-light text-dark">
                  Get Wiinc Card
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row text-center my-5">
          <h3>Why choose us</h3>
        </div>
        <div className="row py-4 text-center">
          <div className="col-md-4 mb-3">
            <h4 className="py-4 feature-item">Travelling</h4>
            <p className="p-4">
              Book flights and make payments anywhere in the world
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h4 className="py-4 feature-item">Online</h4>
            <p className="p-4">
              Our cards are able to make online transactions
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h4 className="p-4 feature-item">Customize</h4>
            <p className="py-4">
              You can request for branded cards for your brand
            </p>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-wiinc text-light text-center">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 py-4">
              <h3>We have made it easy to track your employees spending</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/dist/client/link";
import Footer from "../components/Footer";
import bankCard from "../public/wiincCard.svg";
import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Box w={"full"} bgColor={"#0f1f38"}>
        <Container maxW={"container.lg"}>
          <Stack textAlign={"center"}>
            <VStack py={[50, 205]}>
              <Heading fontSize={[50, 100]} textColor={"white"} w={"full"}>
                Money Card
              </Heading>
              <Text
                textColor={"orange.300"}
                fontSize={[20, 40]}
                w={"full"}
                mb={20}
              >
                Softicated card payments solution for you and your business
              </Text>
              <Button bgColor={"white"} rounded={"md"} px={20} py={8} mt={10}>
                Work with us
              </Button>
            </VStack>
            <Image src={bankCard} />
          </Stack>
        </Container>
      </Box>

      <section className="hero text-light">
        <div className="container px-4">
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
    </>
  );
};

export default Home;

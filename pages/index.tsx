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
import { appName } from "./_app";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Box w={"full"} textAlign={"center"}>
        <Container maxW={"container.lg"}>
          <Heading
            fontFamily={"Raleway"}
            fontWeight={900}
            fontSize={["72px"]}
            mt={6}
          >
            {appName}
          </Heading>
          <Text
            fontSize={64}
            fontWeight={300}
            fontFamily={"Raleway"}
            lineHeight={"80px"}
            color={"#222222"}
            mt={10}
          >
            Corporate cards designed to meet your business’s needs
          </Text>
          <Button
            mt={10}
            p={7}
            bgColor={"#0038FF"}
            rounded={"full"}
            fontFamily={"Open Sans"}
            fontWeight={"medium"}
            color={"white"}
          >
            Work with us
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;

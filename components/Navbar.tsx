import { Flex, Stack, Text, Box, HStack, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { appName } from "../pages/_app";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;800&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Flex
        direction={["column", "row"]}
        justifyContent={"space-between"}
        p={[10]}
      >
        <Stack direction={["column"]}>
          <Link href="/" passHref>
            <Heading fontFamily={"Caveat"}>{appName}</Heading>
          </Link>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Link href="/business" passHref>
            <Text fontFamily={"Raleway"}>For Business</Text>
          </Link>

          <Link href="/about" passHref>
            <Text fontFamily={"Raleway"}>About</Text>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

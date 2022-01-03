import { Flex, Stack, Text, Box, HStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
// const style = StyleSheetList
export default function Navbar() {
  return (
    <>
      <Flex
        direction={["column", "row"]}
        justifyContent={"space-between"}
        p={[10]}
      >
        <HStack>
          <Link href="/">
            <a className="navbar-brand">
              <strong>WiincCard</strong>
            </a>
          </Link>
        </HStack>
        <Stack direction={["column", "row"]}>
          <Link href="/business">
            <a className="nav-link active">For Business</a>
          </Link>

          <Link href="/">
            <a className="nav-link active">Home</a>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

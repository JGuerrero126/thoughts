import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "./theme";
import React from "react";

export function Provider(props: {}) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}

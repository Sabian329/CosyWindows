import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        width: "100%",
        fontFamily: "body",
        overflowX: "hidden",
      },
    },
  },
});
export default overrides;

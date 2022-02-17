import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  components: {
    Heading: {
      variants: {
        logo: {
          fontFamily: "Bebas Neue",
        },
      },
    },
  },
});

export default theme;

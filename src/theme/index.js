import { extendTheme } from "@chakra-ui/react";

// 객체로 넣어줄거니까 ()안에 {}
const theme = extendTheme({
  colors: {
    primary: "lightblue",
    brand: {
      100: "lightcoral",
      900: "#1a202c",
    },
  },
});

export default theme;

import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import ContainerLg from "./Container";

const Layout = (props) => {
  return (
    // 인라인: 카멜표기법 축약형
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box as="main" id="main" flexGrow={1}>
        {/* box 컴포넌트 넣고 태그를 main으로 줌(as) */}

        {/* && : 둘 다 참일때 출력 */}
        {props.showTitle && <h2>{props.title}</h2>}
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

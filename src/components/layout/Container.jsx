import { Box, Container } from "@chakra-ui/react";

const ContainerLg = (props) => {
  return (
    <Container maxW={1280} mx={"auto"} px={["20px", null, 0]}>
      {props.children}
    </Container>
  );
};
// props, props.children을 넣어줘야 안에 글씨가 들어감

export const Section = (props) => {
    return <Box py={4}>{props.children}</Box>
}

export default ContainerLg;

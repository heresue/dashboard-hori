import { Box, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// react-router-dom의 Link를 써야한다 (chakra X) 리액트 라우터 돔으로 쓰고 있는중이니까.

const Header = () => {
  return (
    <Box as="header" borderBottom={"1px solid gray"}>
      {/* border bottom만 넣고싶다면? 카멜표기법으로! */}
      {/* 만약 변수설정한 값으로 쓰고싶다면? 따로 써주기
            borderbottom={'3px soild'} borderColor={$red}  */}

      {/* 컴포넌트에 스타일 넣기(Container)
        : 글씨만 하나 넣을거면 {}를 넣어도되고 빼도 됨. */}
      {/* 첫번째 브레이크포인트: block, 두번째: x(null), 세번째: flex (배열로 넣어줌)*/}
      <Container
        display={["block", null, "flex"]}
        justifyContent="space-between"
      >
        {/* 일반태그에 스타일태그를 넣기(h1)
        : 객체형식으로(데이터값) 들어가기 때문에 {} 사용 */}
        {/* <h1 style={{ width: "50px", height: "100%" }}>
          <a href="/">Dashboard</a>
        </h1> */}
        <Heading fontSize={24}>
          <Link to="/">Dashboard</Link>
        </Heading>
        <nav>
          <ul>
            <li>
              <Link to="/">Main Dashboard</Link>
            </li>
            <li>
              <Link to="/marketplace">NFT Marketplace</Link>
            </li>
            <li>
              <Link to="/datatables">Data Tables</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;

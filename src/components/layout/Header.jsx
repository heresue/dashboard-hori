import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  IconButton,
  background,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerLg from "./Container";
// react-router-dom의 Link를 써야한다 (chakra X) 리액트 라우터 돔으로 쓰고 있는중이니까.

//* 컴포넌트에 스타일 넣기(Container) *//
//글씨만 하나 넣을거면 {}를 넣어도되고 빼도 됨.
//첫번째 브레이크포인트: block, 두번째: x(null), 세번째: flex (배열로 넣어줌)

//* 일반태그에 스타일태그를 넣기(h1) *//
//객체형식으로(데이터값) 들어가기 때문에 {} 사용
//<h1 style={{ width: "50px", height: "100%" }}><a href="/">Dashboard</a></h1>

const Header = () => {
  return (
    <Box as="header" borderBottom={"1px solid gray"}>
      {/* border bottom만 넣고싶다면? 카멜표기법으로! */}
      {/* 만약 변수설정한 값으로 쓰고싶다면? 괄호빼서 따로 써주기
            borderbottom={'3px soild'} borderColor={$red}  */}
      <ContainerLg>
        <Box
          display={["block", null, "flex"]}
          h={100}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading fontSize={24} color={"brand.100"}>
            <Link to="/">Dashboard</Link>
          </Heading>
          <Nav>
            {/* <nav style={{ height: '100%'}}> 
            일반으로 넣을 때 이렇게 인라인 형식으로 쓰면 좋지않음
              >> styled component 사용(+프라이머(리액트기반))*/}
            <NavList>
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
            </NavList>
          </Nav>
          <IconBtnGroup>
            <IconButton
              // variant="ghost"
              // bg={'transparent'}
              aria-label="Search database"
              icon={<SearchIcon />}
            />
            <IconButton
              // variant="ghost"
              // bg={'transparent'}
              aria-label="light database"
              icon={<SunIcon />}
            />
          </IconBtnGroup>
        </Box>
      </ContainerLg>
    </Box>
  );
};

{
  /* <Container>
  centerContent flexDir={"row"}
  maxW={1280}
  m={"0 auto"}
  display={["block", null, "flex"]}
  justifyContent="space-between" alignItems={"center"}
  h={100}
</Container>; */
}

//// styled component 적용하기 ////

//* 컴포넌트에 적용 *// const 변수이름 = styled(컴포넌트 이름)` 속성: 값;` //
const IconBtnGroup = styled(ButtonGroup)`
  button {
    background: lightcoral;
  }
`;
// IconButton으로 잡으려고 했으나, 우선순위에 밀려서 적용안됨.
// >> 부모를 잡고 그 밑에 button으로 해서 우선순위 점수를 더부여해줌

//* 일반태그에 적용 *// const 변수이름 = styled.태그이름` 속성: 값;` //
const Nav = styled.nav`
  height: 100px;
  background: lightgray;
`;
// 스타일 컴퍼넌트로 스타일 설정 후, nav태그를 바꿔준다

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin: 0%;
  list-style: none;
  li {
    width: 100%;
    text-align: center;
  }
  a {
    display: block;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    li {
      width: auto;
    }
    a {
      display: inline-block;
    }
  }
`;

// 각 태그마다 컴퍼넌트로 만들어줘도 되긴하는데, 그러면 반응형 할 때 힘들것. 단독 컴퍼넌트끼리 잡는 경우가 많음 (헤더, 네브, ...)

// 인라인 형식과 스타일 컴포넌트를 모두 적용하게 되면, 읽기가 어려움. 한 방식으로 하기!!

export default Header;

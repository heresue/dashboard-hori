import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import bg_beach from "../../assets/images/bg_beach.jpg";
import gsap, { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Marketplace = () => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    background: "coral",
    borderRadius: "50%",
  };

  const panel = document.querySelector("#tabs");

  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });

  return (
    <Layout title="Marketplace" showTitle={false}>
      <Box
        className={"topCont"}
        h={"500px"}
        bg={`url(${bg_beach}) no-repeat 50% 50% / cover`}
      ></Box>
      {/* <div>마켓플레이스 컨텐츠</div> */}
      <Tabs id="tabs">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
          <Tab>Five</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              labore natus, quidem quas corrupti dolore error dolorum reiciendis
              quibusdam cumque, quisquam itaque placeat expedita nobis possimus
              sed neque sit commodi.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <motion.div
        style={boxStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 500 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
      {/* boxStyle이라는 변수로 스타일을 적용 (중복되는 경우 컴포넌트로 만들어서 사용) */}

      <div style={{ height: "100vh" }}></div>
    </Layout>
  );
};

export default Marketplace;

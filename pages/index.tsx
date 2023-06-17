import NextLink from 'next/link'
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {
  const Style={
    mt : "3px",
    borderRadius:"8",
    background: "url(https://i.pinimg.com/originals/00/43/04/0043044fd8e3c55c584ddaf0c9c134e2.gif) center/cover no-repeat"
  }
  return (
    <Container maxW={"1200px"} sx={Style} >
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading color={'white'}>Marketplace</Heading>
          <Button
             as={NextLink} href='/buy'
          >Shop NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;

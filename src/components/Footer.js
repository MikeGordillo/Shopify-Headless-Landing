import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box backgroundColor="#D3D3D3">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} color="black" fontWeight='bold'>
        <Image src="https://cdn.shopify.com/s/files/1/2665/0346/files/TLF_LOGO_REDEFINE_IMPOSSIBLE_BLACK.png?v=1666971917" />
        <VStack p="2rem">
          <Link to="/">New Releases</Link>
          <Link to="/">Best Sellers</Link>
          <Link to="/">Trending Now</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Contact</Link>
        </VStack>
      </Grid>
      <Box>
        <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
          © Copyright https://mikegordillo.github.io/React-Portfolio/
        </Text>
      </Box>
    </Box>
  )
}

export default Footer

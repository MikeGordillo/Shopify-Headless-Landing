import React from 'react'
import { Box, Button, Text, Image, Center } from "@chakra-ui/react"

const Hero = () => {
  return (
    <Box backgroundColor="#D3D3D3" w="100%" position="relative" h="70vh">
      <Image className="fade-in" h="100%" m="auto" objectFit="contain" objectPosition={['top', 'center']} src="https://cdn.shopify.com/s/files/1/2665/0346/files/Temp-FW22-1227_HP-Banner__NewReleases_Desktop-W.jpg?v=1672169251" />
      <Text className="tracking-in-expand-fwd" position="absolute" bottom="20%" w="100%" textAlign="center" color="white" fontWeight="bold" fontSize="4rem">
        Introducing New Styles
      </Text>
      <Center>
        <Button w="10rem" backgroundColor="#FF38BD" color="white" _hover={{ opacity: '70%' }} position="absolute" bottom="10%">
          Shop Now
        </Button>
      </Center>
    </Box>
  )
}

export default Hero

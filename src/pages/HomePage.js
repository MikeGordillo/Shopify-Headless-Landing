import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from "@chakra-ui/react"
import { ShopContext } from '../context/shopContext'
import Hero from '../components/Hero'
import RichText from '../components/RichText'
import ImageWithText from '../components/ImageWithText'


const HomePage = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
    return () => {

    }
  }, [fetchAllProducts])


  if (!products) return <div>loading...</div>

  return (
    <Box>
      <Hero />
      <RichText heading="The threads you’ve been waiting for." text="Our products guarantee a fitted, relaxing, fit."/>
      <Grid templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}>
        {products.map(product => (
          <Link to={`/products/${product.handle}`} key={product.id} >
            <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
              <Image
                src={product.images[0].src}
              />
              <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">{product.title}</Text>
              <Text color="gray.500" position="absolute" bottom="5%" w="100%">${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Treat yourself!" />
      <ImageWithText 
        button
        image="https://cdn.shopify.com/s/files/1/2665/0346/files/Temp_FW22-1227_HP-Banner_NewYear_W-Best.jpg?v=1672169345"
        heading="Heading" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <ImageWithText 
        reverse
        button
        image="https://cdn.shopify.com/s/files/1/2665/0346/files/Temp_FW22-1227_HP-Banner_NewYear_M-Best.jpg?v=1672168900"
        heading="Second Heading" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </Box>
  )
}

export default HomePage

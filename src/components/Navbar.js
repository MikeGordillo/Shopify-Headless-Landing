import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

import { Badge, Box, Icon, Image } from "@chakra-ui/react"
import { MdShoppingBasket, MdDehaze } from "react-icons/md";


const Navbar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Box borderBottom="0.25pt white solid" backgroundColor="#00000000" display="flex" flexDir="row" p="2rem" justifyContent="space-between" alignItems="center">
      <Icon fill="black" cursor="pointer" onClick={() => openMenu()} as={MdDehaze} w={30} h={30}></Icon>
      <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/2665/0346/files/tlf-logo-stroke-10_fdf3e38c-913b-406b-9a28-1fb67314f037.png?v=1670018255" w={70} h={50}/></Link>
      <Box>
      <Icon fill="black" cursor="pointer" onClick={() => openCart()} as={MdShoppingBasket} w={30} h={30}></Icon>
        <Badge backgroundColor="#00000000" borderRadius="50%">{checkout?.lineItems?.length}</Badge>
      </Box>
    </Box>
  )
}

export default Navbar

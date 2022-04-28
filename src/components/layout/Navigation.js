import React from "react";
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom';


const Navigation = () => {
  const SideBar = tw.div`
    w-1/4
    sm:hidden
    md:block
    bg-gray-400
    p-4
  `

  const NavgationItem = tw.p`
    to-appId1Color
  `

  return (
    <SideBar >
      <ul>
        <li><Link to="/">Main Page</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </SideBar>
  )
}

export default Navigation;
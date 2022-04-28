import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import changeTheme from '../../redux/actions/changeTheme';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Navbar = ({
  themeStatus,
  changeTheme
}) => {

  const Header = tw.header`
    w-full
    h-1/6
    flex
    justify-between
    ${(p) => (p.$primary ? "bg-appId2Color" : "bg-appId1Color")}
  `

  const Logo = tw.img`
    w-40
    h-auto
    ml-10
    border-none
  `

  const SideHeaderBar = tw.ul`
    md:max-w-0
    sm:max-w-full
    flex
    items-center
  `
  const HeaderItem = tw.li`
    mr-3
    text-lg
    text-white
  `

  const ConfigButton = tw.button`
    text-3xl
    text-white
  `

  console.log('header rendered');
  console.log(themeStatus);

  return (
    <Header $primary={themeStatus}>
      <Logo alt='Can not found' src={themeStatus ? ("https://img.innoloft.com/logo.svg") : ("https://img.innoloft.com/platforms/8021267/nrw-logo-black.svg")} />
      <ConfigButton onClick={() => (changeTheme(themeStatus))}>change theme</ConfigButton>
      <SideHeaderBar>
        <HeaderItem><Link to="/">Main Page</Link></HeaderItem>
        <HeaderItem><Link to="/product"> Product </Link></HeaderItem>
      </SideHeaderBar>
    </Header>
  )
}

Navbar.propTypes = {
  themeStatus: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  themeStatus: state.theme.themeStatus
})

export default connect(mapStateToProps, { changeTheme })(Navbar);
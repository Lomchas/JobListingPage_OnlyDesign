import React, { Component } from 'react'
import NavImgDestok from '../Images/bg-header-desktop.svg'
import NavImgMobile from '../Images/bg-header-mobile.svg'
import {  NavStyle, NavStyle2, ImgNav2, ImgNav } from '../styles/NavStyle'


export default class NavBar extends Component {
  render() {
    return (
      <>
        <NavStyle>
          <ImgNav src={NavImgDestok} alt="imgNav" />
        </NavStyle>
        <NavStyle2>
          <ImgNav2 src={NavImgMobile} alt="imgNav"/>
        </NavStyle2>
      </>
    )
  }
}

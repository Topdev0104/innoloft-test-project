import { MapContext } from "@react-google-maps/api";
import React from "react";
import tw from 'tailwind-styled-components'
import MapContainer from "./MapContainer";

const UserInfoView = (props) => {


  const UserContent = tw.div`
    bg-gray-300
    h-1/2
    content-center
    grid
  `
  const ItemCenter = tw.div`
    w-full
    flex
    justify-center
  `

  const UserImage = tw.img`
    h-36
    w-auto
  `

  const UserName = tw.p`
    text-xl
    text-appId1Color
  `
  const CompanyName = tw.p`
    text-lg
    text-appId1Color
  `

  const GoogleMapContent = tw.div`
   h-1/2
   p-2
   content-center
  grid
  justify-center
  bg-gray-400
  border-gray-700
  border-4
  `

  return (
    <>
      <UserContent>
        <>
          <ItemCenter>
            <UserImage src={props.user.profilePicture} alt='User Image'></UserImage>
          </ItemCenter>
          <ItemCenter>
            <UserName>{props.user.firstName + "  " + props.user.lastName}</UserName>
          </ItemCenter>
          <ItemCenter>
            <CompanyName>{props.company.name}</CompanyName>
          </ItemCenter>
        </>
      </UserContent>
      <GoogleMapContent>
        <MapContainer mapinfo={props.company.address} />
      </GoogleMapContent>
    </>
  )
}

export default UserInfoView;
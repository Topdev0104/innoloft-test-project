import tw from "tailwind-styled-components"
import React, { useState } from "react"

import AttributesView from './ProductAttriCom'
import UserInfoView from "./UserInfoView"

const ProductInfoView = (props) => {

  const [tabState, setTab] = useState(true);

  const ProductUser = tw.div`
    flex
    w-3/4
    sm:w-full
    md:w-3/4
    lg:w-3/4
  `

  const ProductContent = tw.div`
    w-2/3
  `

  const UserContent = tw.div`
    w-1/3
  `

  const ProductImageContent = tw.div`
    h-56
    w-full
    flex
    justify-center
    bg-gray-200
  `

  const ProductImage = tw.img`
    h-full
    w-auto
  `
  const ProductInfo = tw.div`
  flex
  w-full
  bg-gray-200
  p-2
  `

  const ProductMainInfoName = tw.div`
    font-sans
    text-3xl
    text-appId1Color
    p-1
  `

  const ProductMainInfoType = tw.span`
    font-sans
    text-xl
  text-appId1Color
    p-1
    ml-3
  `

  const ProductTab = tw.div`
    flex
  `

  const TabItem = tw.button`
    w-1/2
    font-sans
    text-white
    text-xl
    p-2
    border-white
    border-2
    bg-gray-700
  `
  const ProductDescription = tw.div`
    text-ellipsis
    text-sm
    p-5
  `
  const ProductTrlView = tw.p`
    text-ellipsis
    text-xl
  `

  return (
    <ProductUser>
      {(typeof props.product.type != "undefined") ?
        (<>
          <ProductContent>
            <ProductImageContent>
              <ProductImage src={props.product.picture} />
            </ProductImageContent>
            <ProductInfo>
              <ProductMainInfoName>{props.product.name}<ProductMainInfoType>{props.product.type.name}</ProductMainInfoType>
              </ProductMainInfoName>
            </ProductInfo>
            <ProductTab>
              <TabItem onClick={() => setTab(true)}>Description tab</TabItem>
              <TabItem onClick={() => setTab(false)}>Attributes tab</TabItem>
            </ProductTab>
            {(tabState) ? (<ProductDescription dangerouslySetInnerHTML={{ __html: props.product.description }} />) :
              <ProductDescription>
                <AttributesView title="Catergories" items={props.product.categories} />
                <AttributesView title="Business Models" items={props.product.businessModels} />
                <ProductTrlView>{props.product.trl.name}</ProductTrlView>
              </ProductDescription>}
          </ProductContent>
          <UserContent>
            <UserInfoView user={props.product.user} company={props.product.company} />
          </UserContent>
        </>) : <></>}
    </ProductUser>
  )
}

export default ProductInfoView;
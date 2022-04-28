import React from "react";
import tw from 'tailwind-styled-components'

const AttributesView = (props) => {

  const AttributeTitle = tw.p`
    text-appId1Color
    text-xl
    ml-3
  `

  const AttributesItem = tw.li`
    text-appId1Color
    text-base
  `

  return (
    <>
      <AttributeTitle>{props.title}</AttributeTitle>
      <ul>
        {props.items.map((item) => (<AttributesItem key={item.id}>{item.name}</AttributesItem>))}
      </ul>
    </>
  )
}

export default AttributesView;
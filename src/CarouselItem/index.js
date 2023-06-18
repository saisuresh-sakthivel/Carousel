import React from 'react'

export default function CarouselItem(props) {
  console.log(JSON.stringify(props));
  return (
    <div>
      <div>{props.item.description}</div>
      <img alt={props.item.description} src={props.item.icon.default}/>
    </div>
  )
}

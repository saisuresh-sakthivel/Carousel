import React from 'react'
import CarouselItem from '../CarouselItem';
export default function Carousel() {
  const items = [{
    description:"blah blah",
    icon:require('../image/example1.svg')
  }]
  return (
    <div>
{items.map((item) => {
return <CarouselItem item={item}/>
      })}
    </div>
  )
}

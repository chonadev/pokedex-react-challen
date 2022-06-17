import { Icon, IconProps } from '@chakra-ui/react'
import React from "react"

export const PokeballIcon = (props: IconProps) => (
  <Icon viewBox='0 0 150 150' color='red.500' {...props}>
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="75" cy="75" r="70.5" stroke="black" stroke-width="9"/>
      <circle cx="74.5" cy="75.5" r="27" stroke="black" stroke-width="9"/>
      <line x1="102.5" y1="75.5" x2="141.5" y2="75.5" stroke="black" stroke-width="9" stroke-linecap="square"/>
      <line x1="7.5" y1="75.5" x2="46.5" y2="75.5" stroke="black" stroke-width="9" stroke-linecap="square"/>
    </svg>  
  </Icon>
)

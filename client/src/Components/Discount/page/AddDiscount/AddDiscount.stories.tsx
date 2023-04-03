import React from "react";
import { AddDiscount } from ".";
import {ComponentMeta, ComponentStory} from "@storybook/react"



export default {

  title: "Discounts/page/AddDiscount",
  component: AddDiscount
} as ComponentMeta<typeof AddDiscount>



const Template: ComponentStory<typeof AddDiscount> = (args) =>{
  return <AddDiscount {...args}/>
}


export const Simple = Template.bind({})

Simple.args = {
  
}
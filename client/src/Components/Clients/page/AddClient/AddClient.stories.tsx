import React from "react";
import { AddClient } from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";



export default {

  title: "Clients/page/AddClient",
  component: AddClient,

} as ComponentMeta<typeof AddClient>


const Template: ComponentStory<typeof AddClient> = (args)=>{
  return <AddClient {...args}/>
}


export const Simple= Template.bind({})

Simple.args ={

}
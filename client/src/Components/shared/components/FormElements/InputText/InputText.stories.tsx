import React from 'react'

import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'
import { InputText } from '.'

export default {
  title: 'shared/Components/InputText',
  component: InputText,

  argTypes: {
    id: {
      control: {
        type: 'select',
        options: [
          'name',
          'email',
          'tel',
          'cni',
          'nif',
          'birth',
        ],
      },
      description:
        'Choose a unique identifier for input text',
      defaultValue: 'name',
    },
    placeHolder: {
      defaultValue: "PLaceholder",
      description: "Placeholder for input text"
    },
    label:{
      defaultValue: "Label",
      description: "Label for input text"
    },

   type:{
    control:{
      type: 'select',
      options:[
        "text",
        "email",
        "tel",
        "date",
      ]
    },
    defaultValue: "text",
    description: "Input type"
   },
  // initialValid:{
  //   control: "boolean",
  //   description: "Whether the initial value of the input is valid"
  // }
  },
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (
  args,
) => {
  return <InputText {...args} />
}

export const Input = Template.bind({})

Input.args = {
  onInput: () => {},
}


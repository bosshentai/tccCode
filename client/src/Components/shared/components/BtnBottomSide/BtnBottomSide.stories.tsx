import React from "react";
import {ComponentStory,ComponentMeta} from "@storybook/react"
// import {Title}
import { BtnBottomSide  } from ".";
// import BtnBottomSideDocumentation from './BtnBottomSideDocumentation.mdx'

export default {

  /**
   *  Component teste
   */
  title: 'shared/Components/ButtonBottomSide',
  component: BtnBottomSide,
  // parameters:{
  //   docs:{
  //     page: BtnBottomSideDocumentation
  //   }
  // }
} as ComponentMeta<typeof BtnBottomSide>




const Template: ComponentStory<typeof BtnBottomSide> = (args) => {

  return <BtnBottomSide {...args} />;

}
  //  <div className={styles.btnContainer}>
//   <button>

//   </button>
//  </div>
// }


export const Primary = Template.bind({})


Primary.args = {
  btnText: "Butao",
  showHandler: ()=>{},
}


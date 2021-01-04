import React from 'react'
import {View,Text} from 'react-native'
import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
  {title:'First Element',content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'},
  {title:'second Element',content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'},
  {title:'Third Element',content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'}

]

const Accordion = () =>{
  return(
    <Container>
      <Header/>
      <Content padder>
        <Accordion dataArray={dataArray}  expanded={1}/>
      </Content>
    </Container>
  )
}



export default Accordion;
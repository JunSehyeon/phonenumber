import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={2}>
        <img width={50} src='https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg'/>
        </Col>
        <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem

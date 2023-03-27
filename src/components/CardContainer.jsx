import { Col, Container, Row } from "react-bootstrap";
import data from "../helper/data";
import PlayerCard from "./PlayerCard";


const CardContainer = () => {
  return (
    <Container className="cardContainer rounded-4 my-4 p-3 ">
      <Row className="g-3 justify-content-center">
       {data.map((player,index)=> (
       <Col md={6} xl={3} lg={4} key={index}>
       <PlayerCard {...player} /> 
       </Col>
       ))}

      </Row>
    </Container>
  )
}

export default CardContainer;

import Card from "react-bootstrap/Card";
import { useState } from "react";

const PlayerCard = (props) => {
  const { name, img, statistics } = props;
  const [show, setShow] = useState(true);
  return (
    <Card onClick={()=> setShow(!show)} className="playerCard rounded-2 m-auto" role="button">
      {show ? (
        <Card.Img variant="top" src={img} className="cardImg" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li className="h5 text-start list-unstyled" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title> {name} </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;

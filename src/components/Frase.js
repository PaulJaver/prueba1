import React from "react";
import Card from "react-bootstrap/Card";

const Frase = (props) => {
  return (
    <Card className='w-100'>
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.sujeto.image} alt={props.sujeto.character} />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>{props.sujeto.character} </Card.Title>
            <Card.Text>{props.sujeto.quote} </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;

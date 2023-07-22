import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulos = ({ modificador }) => {
  const [state, setState] = useState("");
  return (
    <>
      <h1 className="text-center p-2">
        Hello {modificador} {state}
      </h1>
      <div className="p-2 d-flex justify-content-center">
        <Button
          variant="success"
          onClick={() => setState(",(from changed state!)")}
        >
          Change !
        </Button>
      </div>
      <div className="p-2 d-flex justify-content-center">
        <Button variant="danger" onClick={() => setState(" ")}>
          Change original!
        </Button>
      </div>
    </>
  );
};

export default Titulos;

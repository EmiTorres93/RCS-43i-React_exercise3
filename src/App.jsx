import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Titulos from "./components/Titulos";

function App() {
  return (
    <>
      <Container className="my-5">
        <Titulos modificador="my friend !!"></Titulos>
      </Container>
    </>
  );
}

export default App;

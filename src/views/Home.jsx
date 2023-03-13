import { Container } from "react-bootstrap";
import Pizzas from "../components/Pizzas";
//Vista de datos del home
const Home = () => {
  return (
    <Container className="text-center">
      <div className="jumbotron">
          <h1 className="display-4 font-weight-bold titulo1">¡Pizzería Mamma Mia!</h1>
          <p className="lead font-weight-bold titulo2">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
      <Pizzas />
    </Container>
  );
};
export default Home;
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import Nav from "./Nav";
import RoutePages from "./RoutePages";
import "./styles.scss";

export default function App() {
  return (
    <Context>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <RoutePages />
        </div>
      </BrowserRouter>
    </Context>
  );
}

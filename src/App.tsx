import Message from "./Message";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import "./App.css";
import "./pages/Curriculo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculo from "./pages/Curriculo";

function App() {
  const items = ["Lisboa", "Coimbra", "Porto", "Guarda", "Viana do Castelo"];
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div>
          <Message />
        </div>

        <div>
          <ListGroup items={items} heading="Cidade" />
        </div>
        <Routes>
          <Route path="/Antonio-Palma/Curriculo" element={<Curriculo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

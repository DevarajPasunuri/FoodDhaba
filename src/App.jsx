import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Sucess from "./Components/Success.jsx/Sucess";
import Error from "./Components/Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Sucess />}/>
      <Route path="/error" element={<Error />}/>
    </Routes>
  );
}

export default App;
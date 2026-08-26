import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sucess from "./Pages/Sucess";
import Error from "./Pages/Error";

function App(){
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Sucess />}/>
      <Route path="/error" element={<Error />}/>
    </Routes>
  );
}
 


export default App;
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Form from "./Form";
import Greet from "./Greet";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/greet" element={<Greet/>}/>
      </Routes>
    </Router>
  )
}
export default App;
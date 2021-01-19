import NavBar from "./Components/Partials/NavBar";
import Page1 from "./Components/Page1/Page1";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (

    <div>
    <BrowserRouter>
        <NavBar/>
        <Page1/>
    </BrowserRouter>        
    </div>
  );
}

export default App;

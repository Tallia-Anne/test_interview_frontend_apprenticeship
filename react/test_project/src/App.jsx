import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Compteurs from './components/Compteurs';
import Greeting from "./components/Greeting"; 
import List from "./components/List";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Compteurs />} />
        <Route path="/greeting" element={<Greeting name="Tallia" />} /> 
        <Route path="/list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

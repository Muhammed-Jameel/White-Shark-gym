import Home from "./pages/home";
import Empty from "./pages/Empty";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/empty" element={<Empty/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;

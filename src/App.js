

import Input from './components/input';
import Result from './components/result';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
     <Routes>
     <Route path="/home" element={<Input />} />
     <Route path="/result" element={<Result />} />
     
     <Route path="*" element={<h1>Error 404 page not found!!</h1>}/>
     </Routes>

     </BrowserRouter>
        
        
    </div>
  );
}

export default App;

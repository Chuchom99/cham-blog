import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';



function App() {

  return (
    
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index element={<Home />}  />
          <Route path="/create" element={<Create />} />
          <Route path="/update-post/:id" element={<Update />} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;

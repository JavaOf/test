import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Brands from './pages/brands/Brands';
import Apple from './pages/brands/Apple/Apple';
import Huawei from './pages/brands/Huawei/Huawei';
import GooglePixel from './pages/brands/GooglePixel/GooglePixel';
import OnePlus from './pages/brands/OnePlus/OnePlus';
import Samsung from './pages/brands/Samsung/Samsung';
import Xiomi from './pages/brands/Xiomi/Xiomi';
import Search from './components/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/brands' element={<Brands />}>
          <Route path='apple' element={<Apple />} />
          <Route path='samsung' element={<Samsung />} />
          <Route path='oneplus' element={<OnePlus />} />
          <Route path='xiomi' element={<Xiomi />} />
          <Route path='googlepixel' element={<GooglePixel />} />
          <Route path='huawei' element={<Huawei />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

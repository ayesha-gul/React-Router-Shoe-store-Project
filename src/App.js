
import './App.css';
import {BrowserRouter,Routes,Route,Router,Link} from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './nav';
import { Home } from './Home';
import { Products } from './Products';
import { ProductData } from './ProductData';
import { ProdutDetails } from './ProdutDetails';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
   
  
      <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route  path="product" element={<Products/>}>

              <Route path='/' element={<ProductData />} />
                <Route path=":id" element={<ProdutDetails />} />
            
            </Route>
            </Routes>
            </BrowserRouter>
   
    </div>
  );
}

export default App;

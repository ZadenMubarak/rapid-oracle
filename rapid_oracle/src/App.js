import { BrowserRouter, Route, Routes} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";            
import 'primeicons/primeicons.css';    

import Navbar from './components/Navbar_component'
import HomePage from './pages/Home_page'



function App() {

  return(
    <>
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </> 
    
  )
}

export default App
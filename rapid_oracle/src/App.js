import { BrowserRouter, Route, Routes} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";            
import 'primeicons/primeicons.css';    


import Navbar from './components/Navbar_component'
import HomePage from './pages/Home_page'
import ViewCards from './pages/view_functions_cards';
import ViewFullInfo from './pages/view_full_info_page';
import ListFunctions from './pages/ListFunctions_form';



function App() {

  return(
    <>
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/view-functions-cards' element={<ViewCards />} />
        <Route path='/view-functions-fully' element={<ViewFullInfo />} />
        <Route path='/list-function' element={<ListFunctions/>} />
      </Routes>
    </BrowserRouter>
    </> 

  )
}

export default App
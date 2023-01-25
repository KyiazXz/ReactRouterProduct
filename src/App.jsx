import Hearder from './component/Hearder'
import CardList from './component/CardList'
import CardContent from './component/CardContent'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import './App.css'

function App() {


  return (  
     <BrowserRouter >

   
      <Hearder />
      <Routes > 
        
        <Route exact path="/" element={<CardList />}>               </Route>
        <Route  exact path="/:name" element={<CardContent />}>    </Route>
     </Routes>
     
  
     
 
   </BrowserRouter>
  )
}

export default App

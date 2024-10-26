import './App.css'
import CardWidget from './components/CardWidget'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer '

function App() {

  return (
   <div>
      <NavBarComponent/>
      <ItemListContainer greetings='Hola, Bienvenidos'/>
   </div>
  )
}
export default App
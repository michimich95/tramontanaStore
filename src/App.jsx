import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
   <div>
      <NavBarComponent/>
      <ItemListContainer greetings='Bienvenida a Tramontana'/>
   </div>
  )
}
export default App
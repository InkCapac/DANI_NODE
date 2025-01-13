//Siempre empezar por ./ para buscar un archivo para evitar que nos redirija a node_modules
import Header from "./components/Header";
import Articulo from "./components/Articulo";
function App() {

  return (
    //En este apartado no se escribe 'class' sino 'className'
    //<div> Puede ser una etiqueta vacía, también
    <div>
    <Header/>
    <h1>hello world!!! :D</h1>
    <h2 className="rojo">This end is coming ( ͡° ͜ʖ ͡°)</h2>
    <h3>Exchange your money to gold ¯\_( ͡° ͜ʖ ͡°)_/¯</h3>
    <li> ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ </li>
    <li> ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ </li>
    <li> ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ </li>
    <Articulo
            titulo="Acid Travel"
            imagen = "https://thethirdfloorinc.com/wp-content/uploads/2022/05/1-weeks-to-go-FB_-600x315.jpg"
            descripcion= "Always go high">
        </Articulo>
    </div>
  )
}

export default App

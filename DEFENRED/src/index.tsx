import Inicio from "./linkedPages/inicio";
import Navtab from "./componentes/navTab";
import Slider from "./componentes/Slider";
import './App.css'
const Index = () => {
    return (
      //<BrowserRouter>
      <div>
        <Navtab /> {/* La barra de navegación siempre estará visible */}
        <Slider/>
      </div>
    );
  };
  
  export default Index;
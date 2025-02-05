import Inicio from "./linkedPages/inicio";
import Navtab from "./componentes/navTab";
import Slider from "./componentes/Slider";
import Formulario from "./componentes/Formulario";
import './App.css'
const Index = () => {
    return (
      //<BrowserRouter>
      <div>
        <Navtab></Navtab>
        <Slider></Slider>
        <Inicio></Inicio>
      </div>
    );
  };
  
  export default Index;
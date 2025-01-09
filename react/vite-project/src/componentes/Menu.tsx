//Para que detecte los compoentes, estos deben tener siempre mayúscula
import './css/Menu.css'
function Menu(){
    const inicio = "Home, cambio constante";
    return(
        <nav className='menu'>
        <a href="https://www.friv.com/">Free Games</a>
        <a href="https://www.youtube.com/watch?v=lg7sn2qgrwQ">Curious song</a>
        <a href="https://github.com/">Git hub</a>
        <a href="#">{inicio}</a>
        </nav>
    )
}
export default Menu;
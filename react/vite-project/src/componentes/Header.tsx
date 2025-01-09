//Para que detecte los compoentes, estos deben tener siempre mayúscula
import Menu from './Menu';
function Header(){
    return(
        <>
        <header>
        <h1>Título</h1>
        <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2024-11/01932b6e-5293-7383-ac4c-dfcd432aa82a" alt="Pepe"/>
        </header>
        <Menu/>
        </>
    )
}
export default Header;
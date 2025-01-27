//Articulo.tsx se conecta directamente con data.ts
const Articulo = (props: { titulo: string; descripcion: string; imagen: string;}) => {
    const titulo = props.titulo;
    const descripcion = props.descripcion;
    const imagen = props.imagen;
    let contador = 0;
    const alerta = () => {
        contador++;
        console.log(contador);
    }
    return(
    <article>
        <img src={imagen} alt="Aguacate" onClick={alerta}/>
        <h1 onClick={()=>{
            alert("Has hecho click!")
        }}>{titulo}</h1>
        <p>(descripcion)</p>
        <span>{contador}</span>
    </article>
)
}
export default Articulo;
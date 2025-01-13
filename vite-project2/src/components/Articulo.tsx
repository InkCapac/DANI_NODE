const Articulo = (props: {titulo: string; descripcion: string; imagen: string;}) => {
    const titulo = props.titulo;
    const descripcion = props.titulo;
    const imagen = props.imagen;
    return(
        <article>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <img src={imagen} alt="high guy" />
        </article>
    )
}
export default Articulo;
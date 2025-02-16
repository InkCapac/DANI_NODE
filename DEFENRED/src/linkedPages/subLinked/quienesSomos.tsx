import { Link } from "react-router-dom"; // Import Link and Outlet
import { useParallax } from "react-scroll-parallax";

const quienesSomos = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: 20
  })
    return (
        <section id="quienesSomos">
            <p>¿QUIÉNES SOMOS?</p>
            <nav>
      </nav>
        </section>
    );
};

export default quienesSomos;
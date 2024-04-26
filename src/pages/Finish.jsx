import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Finish() {
    return (
        <>
        <h2>A Equilibrius agradece a preferência!</h2>
            <Link to="/products">Voltar às compras</Link>
            <Footer></Footer>
        </>
    )
}

export default Finish;
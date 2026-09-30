import { useState, useEffect } from "react";
import "./App.css";

const obtenerFotos = async () => {
    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=3"
    );
    const datos = await respuesta.json();
    return datos;
};

const cambiarFoto = (foto) => {
    alert("Seleccionaste: " + foto.title);
};

const cambiarTitulo = (titulo) => {
    return titulo.charAt(0).toUpperCase() + titulo.slice(1);
};

const mostrarMensaje = (nombre) => {
    return "Bienvenido a la galería de " + nombre;
};


const Encabezado = () => (
    <div className="text-center mb-4">
        <h1>Biblioteca UTL</h1>
        <p>Galería de fotografías</p>
    </div>
);

const TarjetaFoto = ({ foto }) => (
    <div className="card h-100">
        <img
            src={foto.url}
            className="card-img-top"
            alt={foto.title}
        />
        <div className="card-body">
            <h5 className="card-title">
                {cambiarTitulo(foto.title)}
            </h5>
            <button
                className="btn btn-primary"
                onClick={() => cambiarFoto(foto)}
            >
                Ver foto
            </button>
        </div>
    </div>
);

const Galeria = ({ fotos }) => (
    <div className="row g-3">
        {fotos.map((foto) => (
            <div className="col-md-4" key={foto.id}>
                <TarjetaFoto foto={foto} />
            </div>
        ))}
    </div>
);

function App() {
    const [fotos, setFotos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        const cargarGaleria = async () => {
            await new Promise((resolve) =>
                setTimeout(resolve, 3000)
            );
            const datos = await obtenerFotos();
            setFotos(datos);
            setCargando(false);
        };
        cargarGaleria();
    }, []);
    if (cargando) {
        return (
            <div className="container text-center mt-5">
                <h1>Biblioteca UTL</h1>
                <div className="spinner-border mt-4"></div>
                <p className="mt-3">
                    Cargando fotos..
                </p>
            </div>
        );
    }
    return (
        <div className="container mt-4">
            <Encabezado />
            <p className="text-center">
                {mostrarMensaje("UTL")}
            </p>
            <Galeria fotos={fotos} />
        </div>
    );
}

export default App;
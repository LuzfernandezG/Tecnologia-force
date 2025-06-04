import React, { useEffect, useState } from "react";
import "./Encabezado.css";
import * as Scroll from "react-scroll";
import Contenedor from "./Contenedores.jsx";
import { Computador, Persona, Copyrigth } from "./iconos.jsx";
import logo from "../../../public/logo.png";
import logo_completo from "../../../public/logo2.png";
import fondo_inicio from "../../../public/fondo.jpg";
import Modal from "./Modal.jsx";
import { TbEyeSearch } from "react-icons/tb";

import { SlArrowDown } from "react-icons/sl";

function Encabezado() {
  const handleScroll2 = (numero) => {
    const scrollTargets = {
      1: "Home",
      2: "Introduccion",
      3: "Enfoques",
      4: "Habilidades",
      5: "Proyectos",
      6: "Contacto",
    };

    const target = scrollTargets[numero];

    Scroll.scroller.scrollTo(target, {
      duration: 1000,
      delay: 500,
      smooth: true,
    });
  };

  const onButtonClick = () => {
    setVisible(!visible);
    console.log(visible);
  };

  const [color, setColor] = useState("initial");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const homeHeight = document.getElementById("Home").offsetHeight;
    if (scrollPosition > homeHeight) {
      setColor("scroll");
    } else {
      setColor("initial");
    }
  }, [scrollPosition]);

  return (
    <>
      {/* <Barra/> */}
      <header
        className={`w-full  text-white bg-black p-2 px-36 flex justify-between fixed z-10`}
      >
        <div className="flex items-center">
          <img
            src={logo}
            className={"w-48 m-0 "}
            onClick={() => handleScroll2(1)}
          />
          <h1 className="text-3xl font-bold">TECNOFORCE</h1>
        </div>

        <nav className="flex  justify-end text-end items-center gap-4">
          <li className="list-none">
            <a className={`enlaces `} onClick={() => handleScroll2(1)}>
              Inicio
            </a>
          </li>
          <li className="list-none">
            <a className={`enlaces `} onClick={() => handleScroll2(2)}>
              Quienes somos
            </a>
          </li>
          <li className="list-none">
            <a className={`enlaces `} onClick={() => handleScroll2(3)}>
              Sobre nosotros
            </a>
          </li>
          <li className="list-none">
            <a className={`enlaces `} onClick={() => handleScroll2(6)}>
              Contacto
            </a>
          </li>
          <button className="boton" onClick={onButtonClick}>
            <h1> CONSULTA AQUI</h1>
          </button>
        </nav>
      </header>
      {visible == true ? (
        <Modal cerrar={onButtonClick} />
      ) : (
        <h1 className="hidden">inactivo</h1>
      )}

      <div className="contenedor-principal " id="Home">
        <div className="w-full">
          <img src={fondo_inicio} className="h-screen" />
        </div>
        <div className="text-black bg-blue-950 w-full flex  flex-col  justify-center items-center">
          <section className=" w-3/4 flex flex-col text-white gap-4 mt-32">
            <h1 className="text-7xl uppercase font-bold">
              estamos para ayudarte
            </h1>
            <h2 className="text-2xl font-sans">
              Servicio tecnico especializado
            </h2>
            <h3 className="font-sans">
              estamos listos para atenderte, contactanos para agendar tu cita
              con nosotros
            </h3>
            <button className="boton w-56" onClick={() => handleScroll2(6)}>
              CONTACTANOS
            </button>
            <SlArrowDown
              className="text-6xl  mt-9 transition-colors hover:text-amber-600"
              onClick={() => handleScroll2(2)}
            />
          </section>
        </div>
      </div>

      <div
        className=" w-full h-screen flex flex-col  items-center justify-center text-black  bg-amber-600"
        id="Introduccion"
      >
        <div className="w-full flex items-center justify-center h-1/2">
          <img src={logo_completo} />
        </div>

        <div>
          <h1 className="text-3xl uppercase font-bold text-center text-white ">
            Asesórate con profesionales en la reparación de tus equipos
          </h1>
          <p className=" text-center font-sans text-xl w-4/5 mx-auto">
            Somos una compañía 100% colombiana. Nuestro objetivo es brindar
            soluciones integrales y confiables en mantenimiento y reparación
            tecnológica, garantizando calidad, rapidez y satisfacción. Nos
            enfocamos en alargar la vida útil de los equipos de nuestros
            clientes, contribuyendo a un consumo más responsable y sostenible.
          </p>
        </div>
      </div>

      <div className=" w-full h-5/6 flex  items-center justify-center text-black my-40">
        <div className="flex flex-col items-center justify-center w-2/4 p-16 bg- bg-amber-500">
          <TbEyeSearch className="text-9xl mb-3 text-blue-950" />

          <h1 className="text-5xl font-bold text-center bg-blue-950 py-10 px-5 text-white">
            ¿QUIERES CONSULTAR EL ESTADO DE TU REPARACION?
          </h1>
          <p className="text-justify font-sans text-lg text-white">
            Para mas informacion dirigete el siguiente enlace
          </p>
          <button className="boton mt-5" onClick={onButtonClick}>
            CONSULTA AQUI
          </button>
        </div>
      </div>

      <div
        className=" w-full h-full md:h-screen items-center justify-center  flex  flex-col gap-11 p-10 bg-blue-950  "
        id="Enfoques"
      >
        <section className="flex flex-col gap-6 items-center justify-center w-1/2 md:w-3/4 xl:w-full mx-auto ">
          <h1 className="text-5xl font-bold text-center text-white">
            SERVICIOS
          </h1>
          <p className="text-justify  text-white">
            Nos enfocamos en reparacion de amplia gama de equipos electronicos
          </p>
        </section>

        <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-5 p-32 md:p-0 ">
          <Contenedor
            titulo="Telefonos"
            descripcion="Servicio de mantenimiento, arreglo y revision de dispositivos moviles sin importar la marca"
            icono={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 48 48"
                className=" alineacion_iconos "
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M8 7.282L19.556 4v12.718L8 20zm0 18.393l11.556-3.282v12.718L8 38.393zm16.889-4.599l11.555-2.854v22.924L24.89 44z"
                />
              </svg>
            }
          />
          <Contenedor
            titulo="Computadoras y laptops"
            descripcion="Revision a detalle de tu dispositivo de uso personal,corpotativo etc. servicio de mantenimiento y mejoras de acuerdo a la necesidad del cliente"
            icono={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                className=" alineacion_iconos "
              >
                <path
                  fill="currentColor"
                  d="M8.502 5.387A.75.75 0 0 0 7.5 4.272L5.76 5.836c-.736.663-1.347 1.212-1.766 1.71c-.441.525-.755 1.088-.755 1.784c0 .695.314 1.258.755 1.782c.42.499 1.03 1.049 1.766 1.711l1.74 1.564a.75.75 0 1 0 1.003-1.115l-1.696-1.527c-.788-.709-1.32-1.19-1.663-1.598c-.33-.393-.403-.622-.403-.817c0-.196.072-.425.403-.818c.344-.409.875-.889 1.663-1.598zm6.941 5.111a.75.75 0 0 1 1.06-.055l1.737 1.563c.736.663 1.347 1.213 1.766 1.711c.441.524.755 1.088.755 1.783s-.314 1.259-.755 1.783c-.42.498-1.03 1.048-1.766 1.71l-1.738 1.565a.75.75 0 1 1-1.003-1.116l1.696-1.526c.788-.71 1.32-1.19 1.663-1.599c.33-.392.403-.622.403-.817s-.072-.425-.403-.817c-.344-.41-.875-.89-1.663-1.599L15.5 11.557a.75.75 0 0 1-.056-1.059"
                />
                <path
                  fill="currentColor"
                  d="M14.18 4.275a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532"
                  opacity="0.5"
                />
              </svg>
            }
          />
          <Contenedor
            titulo="Impresoras"
            descripcion="Mantenimiento preventivo y revision de impresoras de uso regular, uso empresarial,marcacion e impresion de etiquetas"
            icono={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                className="alineacion_iconos"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  color="currentColor"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M7 10.842c.602.18 1.274.33 2 .44M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44" />
                  <path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5" />
                </g>
              </svg>
            }
          />
          <Contenedor
            titulo="Dispositivos del hogar "
            descripcion="Revision de electrodomesticos como pueden ser televisores, bocinas, altavoces, minicomponentes y mas "
            icono={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                className="alineacion_iconos"
              >
                <path
                  fill="currentColor"
                  d="M12.942 18H11.5q-3.132 0-5.316-2.183T4 10.504t2.183-5.317T11.498 3q1.566 0 2.93.586q1.364.585 2.383 1.604t1.604 2.379T19 10.5q0 2.658-1.33 4.985t-3.436 3.913q-.211.116-.413.133t-.402-.089t-.321-.276t-.127-.408zm-1.406-2.429q.306 0 .52-.216t.213-.523t-.216-.52t-.523-.214t-.52.216t-.214.523t.217.52t.523.214M9.459 8.202q.174.067.347-.009t.283-.245q.205-.339.582-.54q.377-.2.868-.2q.736 0 1.197.385t.46 1.041q0 .406-.197.76t-.672.829q-.644.627-.925 1.076t-.28.872q0 .197.128.336t.31.14t.305-.14q.123-.138.146-.342q.049-.31.335-.688q.287-.379.696-.789q.564-.563.807-1.062t.243-.999q0-1.029-.71-1.655t-1.805-.626q-.736 0-1.356.359q-.621.358-.932.856q-.11.202-.065.388t.235.253"
                />
              </svg>
            }
          />
        </div>
      </div>

      <div
        className="w-full h-full flex items-center justify-center mx-auto p-10 bg- bg-amber-600 gap-10"
        id="Contacto"
      >
        <img src={logo_completo} />
        <section className="contenedor-contacto bg-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            className="text-black"
          >
            <rect width="24" height="24" fill="none" />
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <circle cx="12" cy="8.196" r="4.446" />
              <path d="M19.608 20.25a7.608 7.608 0 0 0-15.216 0" />
            </g>
          </svg>
          <h1 className="text-6xl text-black font-bold">CONTACTANOS</h1>
          <p className="text-black font-sans text-xl">
            <span>Email:</span> Tecnoforce_colombia@gmail.com
          </p>
          <p className="text-black font-sans text-xl">
            <span>Phone:</span> +57 3215320281
          </p>
          <p className="text-black font-sans text-xl">Cali, Colombia</p>
        </section>
      </div>

      <footer className="bg-blue-950 text-white flex justify-center items-center gap-5 p-3">
        <Copyrigth ancho="1.5em" alto="2em" />

        <p className="font-bold"> 2025 Derechos reservados para Tecnoforce</p>
      </footer>
    </>
  );
}

export default Encabezado;

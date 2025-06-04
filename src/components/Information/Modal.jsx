import React, { useEffect, useState } from "react";
import "./Encabezado.css";
import { CiSettings } from "react-icons/ci";
import logo from "../../../public/logo.png";
import { IoMdClose } from "react-icons/io";
import datos from "../../../datos.json";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { SlArrowDown } from "react-icons/sl";

function Modal({ cerrar }) {
  const [guia, SetGuia] = useState("");
  const [animar, setAnimar] = useState(false);

  const [consulta, setConsulta] = useState({});
  const [vista, setVista] = useState(false);

  const obtenerEquipoPorId = async (guia) => {
    const ref = doc(db, "equipos", guia);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
      const equipoData = docSnap.data();

      const diagnosticoRef = collection(db, "equipos", guia, "infoDiagnostico");
      const diagnosticoSnap = await getDocs(diagnosticoRef);

      const diagnosticos = [];
      diagnosticoSnap.forEach((doc) => {
        diagnosticos.push({ id: doc.id, ...doc.data() });
      });

      const resultadoFinal = {
        ...equipoData,
        infoDiagnostico: diagnosticos,
      };

      console.log("Datos completos:", resultadoFinal);

      setConsulta(resultadoFinal);

      Swal.fire({
        title: "Se encontró una coincidencia",
        icon: "success",
        draggable: true,
      });

      setVista(true);
    } else {
      console.log("No se encontró ningún equipo con ese ID");
      Swal.fire({
        title: "Código inválido",
        icon: "error",
        draggable: true,
      });
      setConsulta("no encontrado");
    }
  };
  useEffect(() => {
    setTimeout(() => setAnimar(true), 10); // pequeño delay para disparar la animación al montar
  }, []);

  useEffect(() => {
    if (consulta && consulta !== "no encontrado") {
      console.log("Consulta encontrada:", consulta);
    } else if (consulta === "no encontrado") {
      console.log("No se encontró un valor coincidente");
    }
  }, [consulta]);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-black/50 fixed top-0 left-0 z-50">
        <IoMdClose
          className="fixed top-4 right-4 z-50 text-6xl text-white cursor-pointer hover:text-red-500 transition mr-16 mt-10"
          onClick={cerrar}
        />
        {vista == false ? (
          <div
            className={`w-4/5 h-4/5 flex flex-col justify-center items-center mx-auto bg-black p-4 border-2 border-white rounded-lg space-y-6 transform transition-all duration-500 ${
              animar ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center space-x-4">
              <img src={logo} className="w-1/4" alt="logo" />
              <h1 className="text-4xl font-bold text-white">TECNOFORCE</h1>
            </div>

            <h1 className="text-3xl font-bold uppercase text-amber-600 text-center">
              Consulta el estado de tu reparación
            </h1>

            <p className="text-white">
              A continuacion ingresa el numero de guia de tu reparacion asignado
              por el tecnico
            </p>
            <input
              type="text"
              className="border border-amber-600 w-2/4 p-2 rounded-md text-center text-white bg-transparent placeholder-white"
              placeholder="Ingresa en n° guia"
              name="guia"
              value={guia}
              onChange={(e) => SetGuia(e.target.value)}
            />

            <button
              className="bg-amber-600 px-6 py-3 rounded-md text-white font-bold hover:bg-amber-700 transition duration-200"
              onClick={() => obtenerEquipoPorId(guia)}
            >
              CONSULTAR
            </button>
          </div>
        ) : (
          <div
            className={`w-3/5 h-4/5 flex items-center mx-auto bg-black p-4 border-2 border-white rounded-lg space-y-6 transform transition-all duration-500 ${
              animar ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="w-full flex flex-col mx-auto justify-center items-center">
              <div className="flex items-center justify-center space-x-4 w-full">
                <img src={logo} className="w-1/4" alt="logo" />
                <h1 className="text-4xl font-bold text-white">TECNOFORCE</h1>
              </div>
              {consulta.estado === "creado" ? (
                <p className="text-white text-2xl text-center w-96">
                  Debes estar pendiente de algun cambio en el proceso de tu
                  equipo
                </p>
              ) : consulta.estado === "inconcluso" ? (
                <p className="text-white text-2xl text-center w-96">
                  El equipo se encuentra en proceso de reparacion
                </p>
              ) : (
                <p className="text-white text-2xl text-center w-96">
                  Ya puedes pasar a recoger tu equipo
                </p>
              )}
            </div>

            <div className="flex flex-col justify-center w-full mx-auto items-center gap-4">
              <p className="text-white text-xl">
                Registro de equipo en reparacion
              </p>
              {consulta.estado === "creado" ? (
                <BsPersonWorkspace className="text-amber-600 text-9xl" />
              ) : consulta.estado === "inconcluso" ? (
                <IoIosSettings className="text-red-600 text-9xl" />
              ) : (
                <IoIosCheckmark className="text-green-500 text-9xl" />
              )}

              <div className="mt-4 text-white flex flex-col gap-2">
                <p>
                  <strong>Cliente:</strong> {consulta.cliente}
                </p>

                <p>
                  <strong>Fecha ingreso:</strong> {consulta.fechaIngreso}
                </p>
                <p>
                  <strong>Equipo:</strong> {consulta.nombreEquipo}
                </p>
                <p>
                  <strong>Problema:</strong> {consulta.problema}
                </p>
                <p>
                  <strong>Atendido Por:</strong> {consulta.tecnico}
                </p>
                {consulta.estado == "terminado" || consulta.estado == "inconcluso" ? (
                  <section>
                    <p>
                      <strong>Tecnico:</strong>
                      {consulta.infoDiagnostico[0].tecnico}
                    </p>
                    <p>
                      <strong>Fecha Terminado:</strong>
                      {consulta.infoDiagnostico[0].fechaDiagnostico}
                    </p>
                    <p>
                      <strong>Info Diagnostico:</strong>
                      {consulta.infoDiagnostico[0].infoDiagnostico}
                    </p>
                  </section>
                ) : (
                  <p></p>
                )}

                <p
                  className={`p-2 rounded-md text-white font-semibold w-96 text-center text-2xl ${
                    consulta.estado === "iniciado"
                      ? "bg-blue-500"
                      : consulta.estado === "inconcluso"
                      ? "bg-amber-600"
                      : consulta.estado === "terminado" 
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  <strong>Estado:</strong> {consulta.estado}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;

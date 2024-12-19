"use client";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isInventarioOpen, setIsInventarioOpen] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=true"
        />
        <title>Dashboard - Modern</title>
      </Head>

      <div
        className={`flex h-screen ${
          sidebarCollapsed ? "overflow-hidden" : ""
        } bg-gray-100`}
      >
        {/* Sidebar */}
        <motion.div
          animate={{ width: sidebarCollapsed ? "80px" : "250px" }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 text-white h-full p-4 shadow-lg"
        >
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white mb-4"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="space-y-6">
            <div>
              <h2 className="text-gray-400 uppercase text-sm tracking-wide">
                Bodega
              </h2>
              <button
                className="flex justify-between items-center w-full text-white p-2 rounded-lg hover:bg-gray-800"
                onClick={() => setIsInventarioOpen(!isInventarioOpen)}
              >
                <div className="flex items-center">
                  <i className="fas fa-tachometer-alt mr-2"></i> 
                  <span
                    className={`${
                      sidebarCollapsed ? "hidden" : "block"
                    } text-sm font-medium`}
                  >
                    Inventario
                  </span>
                </div>
                <i
                  className={`fas ${
                    isInventarioOpen ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </button>

              {/* Animated Dropdown */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isInventarioOpen ? 1 : 0,
                  height: isInventarioOpen ? "auto" : 0,
                }}
                className="overflow-hidden ml-4 mt-2"
              >
                <a
                  href="/formulario-ingreso"
                  className="block text-gray-300 hover:text-white text-sm py-1"
                >
                  Formulario de Ingreso
                </a>
                <a
                  href="/tabla-inventario"
                  className="block text-gray-300 hover:text-white text-sm py-1"
                >
                  Tabla de Inventario
                </a>
              </motion.div>
            </div>

            <div>
              <h2 className="text-gray-400 uppercase text-sm tracking-wide">
                Interface
              </h2>
              <a
                href="#"
                className="flex items-center w-full text-white p-2 rounded-lg hover:bg-gray-800"
              >
                <i className="fas fa-columns mr-2"></i>
                <span
                  className={`${
                    sidebarCollapsed ? "hidden" : "block"
                  } text-sm font-medium`}
                >
                  Layouts
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600">
            Aquí puedes gestionar el inventario y otros elementos de tu sistema.
          </p>
        </div>
      </div>
    </>
  );
}

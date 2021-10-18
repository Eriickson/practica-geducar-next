import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { ProviderOne } from "../../../../src/components";

interface ConfigPageProps {
  faa: string;
  ping: string;
  edad: number;
}

const ConfigPage: NextPage<ConfigPageProps> = ({ edad, faa, ping }) => {
  // useEffect(() => {
  //   window.location.href = "/home";
  // }, []);

  return (
    <ProviderOne>
      {ping},{faa},{edad}
    </ProviderOne>
  );
};

// Server => Client

/**
 * Servidor
 * --- Procesa
 * Devuele a React
 * Crea el componente
 * --- Llama al ciclo de vida
 * Asigna el valor del servidor a los props
 * Reeenderiza esos props
 */

export const getServerSideProps: GetServerSideProps<ConfigPageProps> =
  async () => {
    let faa = "boo";

    return {
      props: { faa: "Bydsadasdasdsadsadasdasdas", edad: 19, ping: "Pong" },
    };
  };

export default ConfigPage;

// carpeta espejo

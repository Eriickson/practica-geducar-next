import React, { FC } from "react";

// [nombre componente]Props
interface TitleProps {
  hola: string;
  label: string;
}

export const Title: FC<TitleProps> = ({ label }) => {
  return <div>{label}</div>;
};

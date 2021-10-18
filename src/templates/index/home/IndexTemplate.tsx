import React from "react";
import { Title } from "../../../components";
import { IndexDrawer } from "./drawer/IndexDrawer";
import Link from "next/link";

export const IndexTemplate = () => {
  return (
    <div>
      <IndexDrawer />
      <Title label="12" hola="" />
      <Link href="/user/1/config">Ir a config</Link>
    </div>
  );
};

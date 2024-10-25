import React from "react";

import { Header } from "../layout/Header";
import { Lateral } from "../layout/Lateral";
import { Nav } from "../layout/Nav";
import { ArticleList } from "./ArticleList";
import { Footer } from "../layout/Footer";

export const Inicio = ({saveInformation}) => {
  return (
    <div className="layout">
      <Header />

      <Nav />

      <ArticleList saveInformation={saveInformation}/>

      <Lateral />

      <Footer />
    </div>
  );
};

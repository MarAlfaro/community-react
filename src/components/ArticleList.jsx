import React from "react";

export const ArticleList = ({ saveInformation }) => {
  const articles = [
    {
      title: "The first Descendant",
      description:
        "Un shooter cooperativo donde los jugadores juegan el papel de guerrero",
      pice: 45.99,
    },
    {
      title: "Black Myth:Wukong",
      description:
        "Un juego de rol de accion inspirado en la novela china 'Journey to the West'",
      pice: 45.99,
    },
    {
      title: "Warhammer 40,000: Space Marine 2",
      description:
        "Un shooter cooperativo donde los jugadores juegan el papel de guerrero",
      pice: 45.99,
    },
    {
      title: "S.T.A.L.K.E.R 2",
      description:
        "Un shooter cooperativo donde los jugadores juegan el papel de guerrero",
      pice: 45.99,
    },
    {
      title: "Tomb Raider Remastered",
      description:
        "Un shooter cooperativo donde los jugadores juegan el papel de guerrero",
      pice: 45.99,
    },
  ];
  return (
    <section className="content">
      {articles.map((product, index) => {
        return (
          <>
            <article className="peli-item" key={index}>
              <h3 className="title">{product.title}</h3>
              <p className="description">{product.description}</p>
              <img
                src="https://assets-prd.ignimgs.com/2022/08/08/first-descendant-button-1659987804417.jpg"
                alt=""
              />
              <button className="edit">Editar</button>
              <button className="delete">Eliminar</button>
              <p className="description">$45.99</p>
              <button 
              className="edit"
              onClick={(product)=>{
                saveInformation(product)
              }}
              >Comprar</button>
            </article>
          </>
        );
      })}
    </section>
  );
};

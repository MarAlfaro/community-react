import React from 'react'

export const Lateral = () => {
  return (
        <aside className="lateral">
        <div className="search">
        <h3 className="title">Buscador</h3>
        <input type="text" />
        <form action="">
            <input type="text" placeholder="Nombre del articulo" />
            <textarea name="" id="" placeholder="Descripcion"></textarea>
            <button className="edit">Agregar</button>
        </form>
        </div>
    </aside>
  )
}

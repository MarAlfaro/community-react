import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../components/Inicio";

export const PrincipalRoutes = () => {
    //create an state util useStates of React
    const [information, setInformation] = useState([])

    //create a method to save information
    const saveInformation = (product) => {
        const allInformation=[...information, product]
        setInformation(allInformation)
        console.log(information)
        localStorage.setItem('Information', JSON.stringify(information))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio saveInformation={saveInformation}/>} />
            </Routes>
        </BrowserRouter>
    )
}
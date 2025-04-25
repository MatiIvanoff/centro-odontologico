import { createContext, useContext, useState } from "react";


export const PrefesionalesContext = createContext();

export const useProfesionalesContext = () => {
    const context = useContext(PrefesionalesContext)
    if (!context) {
        throw new Error("El contexto PrefesionalesContext requiere ser utilizado con AuthProvider");
    }
    return context
}

export const ProfesionalesProvider = ({ children }) => {
    return (
            <PrefesionalesContext.Provider value={{
                
            }}>
                {children}
            </PrefesionalesContext.Provider>
        )
}
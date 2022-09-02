import React from 'react'
import { createContext } from 'react'

export const DataContextp = createContext()


export function DataContextProvider({children}) {

function handleHospitaldata(payload){
console.log(payload)
}

  return (
    <DataContext.Provider value={{handleHospitaldata}} >
        {children}
    </DataContext.Provider>
  )
}


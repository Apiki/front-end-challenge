import React from "react";
import Navbar from "../Navbar";

export default function Main({children}) {
    return(
        <>
            <Navbar />
            <div>
                {children}
            </div>
        </>
    )
}
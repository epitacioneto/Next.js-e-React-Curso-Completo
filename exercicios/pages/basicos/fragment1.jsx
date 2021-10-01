import React from "react"

// Utiliza-se React Fragment, ou array de elementos, para solucionar erros de elementos adjacentes
export default function fragment() {
    return (
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
    )
}
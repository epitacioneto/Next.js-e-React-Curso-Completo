// Outra solução para elementos adjacentes é utilizar o React Fragment de forma indireta, representado ele por <> e </>,
// Sem a necessidade de importar a biblioteca e digitar o <React.Fragment></React.Fragment>

export default function fragment() {
    return (
        <>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </>
    )
}
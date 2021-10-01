export default function jsx4() {
const subtitulo = "Estou no JavaScript!"
const trechoH3 = <h3>{3 * 3}</h3>
// Para atribuir valores dentro do JSX, referenciamos como: {variavel} ou até mesmo uma {função} criada por você ou pelo JS
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2> 
            {trechoH3}
            <h4>{Math.max(13,39)}</h4>
            <h4>{entre(30, 1, 10)}</h4>
        </div>
    )
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "Sim"
    } else {
        return "Não"
    }
}
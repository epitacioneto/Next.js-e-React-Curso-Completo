import Square from "./Square";
import styles from '../styles/Row.module.css'

export default function Row(props) {
    return (
        <div className={styles.row}>
            <Square preta={props.preta} />
            <Square preta={!props.preta} />
            <Square preta={props.preta} />
            <Square preta={!props.preta} />
            <Square preta={props.preta} />
            <Square preta={!props.preta} />
            <Square preta={props.preta} />
            <Square preta={!props.preta} />
        </div>
    )
}
import PropTypes from "prop-types"
import styles from "./Lista.module.css"

const Lista = ({ colorTexto, colorFondo, lista = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] }) => {
    return (
        <div>
            <h2 className={styles.h2}>Lista de prueba</h2>
            <ul className={styles.lista}>
                <li className={styles.elemento} style={{ background: colorFondo, color: colorTexto }}>{lista[0]}</li>
                <li className={styles.elemento} style={{ background: colorFondo, color: colorTexto }}>{lista[1]}</li>
                <li className={styles.elemento} style={{ background: colorFondo, color: colorTexto }}>{lista[2]}</li>
                <li className={styles.elemento} style={{ background: colorFondo, color: colorTexto }}>{lista[3]}</li>
                <li className={styles.elemento} style={{ background: colorFondo, color: colorTexto }}>{lista[4]}</li>
            </ul>
        </div>
    )
}

Lista.propTypes = {
    colorTexto: PropTypes.string,
    colorFondo: PropTypes.string,
    lista: PropTypes.array,
}

export default Lista
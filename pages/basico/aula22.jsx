import styles from "../css/aula22.module.css"
// Tem que ter o .module

export default function teste(){
    return (
        <div id={styles.integracao02}>
            <div className={styles.vermelho}>Texto </div>
            <div className={styles.azul}>texto azul</div>
            <div className={styles.branco}>Texto branco</div>
        </div>
    )
}

import styles from './Home.module.css';

function Empresa(){
    return(
        <div className={styles.empresa}>
        <h1 className={styles.erro}>Erro</h1>
        <p className={styles.paragrafo}>Estamos trabalhando <br/> nessa página</p>
        <p className={styles.paragrafo}>Dúvidas? <br /> Contato (81) 90000-0000 </p>
        </div>
    );
}
export default Empresa;
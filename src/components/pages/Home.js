import styles from './Home.module.css'

function Home(){
    return(
        <section>
            <p className={styles.primeiro}>Soluções Inovadores e Seguras <br/> em  Gestão Pública</p>
            <p className={styles.segundo}>Consultoria adequada para seu município</p>
            <p className={styles.terceiro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/> Ipsum odio id tenetur ut ad sint esse, tempora consequuntur, est totam illum? 
            <br/>At sed id sunt vel ad molestias aliquam quaerat. Lorem ipsum dolor sit amet consectetur 
            <br/>adipisicing elit. Quis, voluptas? Quos voluptatibus libero, sapiente iste maiores aut quibusdam 
            <br/>excepturi explicabo voluptatum sunt officiis, odit reiciendis velit aliquam, amet dicta. Doloremque!</p>
        </section>
    );
}
export default Home;
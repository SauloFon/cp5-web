import Menu from '../Componentes/menu'
import {TitlePage,Imga } from '../Estilos/Estilo'
import Eu from '../Componentes/Eu.jpg'
export default ()=>{
    return(
        <>
        <Menu />
        <TitlePage>Um pouco mais sobre o desenvolvedor </TitlePage>
        <Imga>  
            <img src={Eu} alt="Foto minha"  width="500px" height="600px"/>  
        </Imga>
        </>
    )
}
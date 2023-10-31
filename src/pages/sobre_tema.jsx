import Menu from '../Componentes/menu'
import porquinho from '../Componentes/porquinho.jpg'
import govegan from '../Componentes/go_vegan.jpg'
import vaquinha from '../Componentes/vaquinha.jpg'
import { Img,TitlePage,Paragrafro } from '../Estilos/Estilo'

export default ()=>{
    return(
        <>
        <Menu />
        <TitlePage>Qual nosso objetivo?</TitlePage>
      
        <ul>
            <Img>
                <li><img src={porquinho} alt="PORQUINHO BEBE" height="400px" width="500px" border="10px"/></li>
                <li><img src={govegan} alt="GO VEGAN" height="400px" width="500px" border="10px"/></li>
                <li><img src={vaquinha} alt="VACA NO PASTO" height="400px" width="500px" border="10px "/></li>
            </Img>
        </ul>
       
        <div>
            
            <Paragrafro>O veganismo tem o objetivo de tornar a sociedade como um todo mais ética, defendendo que todos os animais têm direito à vida e que existem outros métodos, muito mais saudáveis, de se alimentar e de se vestir, sem causar sofrimento animal.
            </Paragrafro>
            <Paragrafro>Setenta bilhões de animais são mortos por ano no mundo, para fins de consumo humano, segundo o site Seja Vegano. No Brasil, são 193 animais abatidos por segundo. E tem mais: 14,5% dos poluentes lançados na atmosfera todos os anos estão relacionados aos hábitos alimentares dos seres humanos. Estudos também mostram que a indústria de produtos de origem animal gera impactos ao meio ambiente, como a derrubada de largas áreas de mata para criação de pastos.
            </Paragrafro>
            <Paragrafro>A maior parte dos grãos plantados vira ração para alimentar os animais e não alimento humano. Segundo a ONU (Organização das Nações Unidas), cerca de 2 milhões de pessoas morrem de fome por dia no mundo. Especialistas dizem que, se todo alimento utilizado para fabricar rações fosse direcionado às pessoas, seria possível erradicar a fome mundial. </Paragrafro>
            <Paragrafro>É entendendo a complexidade desse problema, que tentamos melhorar a sociedade como um todo, não só pensando em todos os animais e pessoas que sofrem com isso, mas também tentando conscientizar as pessoas de seus atos. Não só a nossa geração, mas também as futuras, podem passar por sérios problemas alimentares, sociais e ambientais, caso as pessoas não se conscientizem do tamanho problema que vivemos.  </Paragrafro>
        </div>
        </>
    )
}
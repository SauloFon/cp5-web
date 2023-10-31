import Menu from '../Componentes/menu'
import {TitlePage,Imga,Texto} from '../Estilos/Estilo'
import Eu from '../Componentes/Eu.jpg'
export default ()=>{
    return(
        <>
        <Menu />
        <TitlePage>Um pouco mais sobre o desenvolvedor </TitlePage>
        <Imga>  
            <img src={Eu} alt="Foto minha"  width="500px" height="600px"/>  
        </Imga>
        <Texto>
            Este sou eu, Saulo Gomes, um rapaz que decidiu se aventurar no ramo da programação. O primeiro contato que tive com programação ainda foi enquanto fazia outra faculdade (Eletrônica Industrial), onde tivemos aula
            de programação em microcomputadores, onde basicamente nós aprendemos o básico na linguagem C. Eu nunca tinha ouvido muito se falar sobre a área de desenvolvimento, mas essa matéria me dispertou um interesse... 
        </Texto>
        <Texto>
            Comecei a ler um pouco, e entender como funcionava essa rotina de programar, e a principio me parecia interessante. Depois de muito procurar, acabei encontrando uma faculdade que me dispertou vontade de faze-la.
            E aí começou minha trajetória na FIAP, e quase um ano depois, cá estou, sofrendo com Web (front realmente é um inferno), enfim, apesar de tudo, sinto que a cada dia mais tenho evoluido, olhando para trás, isso é bem perceptível.         
        </Texto>
        <Texto>
            No fim das contas, estou aqui fazendo um projeto sobre veganismo, pois é, logo eu... Mas essa caminhada me ensinou algumas coisas sobre isso, coisas ao qual ao realmente eu não sabia... No fim, o tema é bom porque a "base" é verde,
            e se tem algo que eu amo nesse mundo é meu Palmeiras...
        </Texto>
        </>
    )
}
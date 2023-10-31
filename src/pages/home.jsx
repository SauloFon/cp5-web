import Menu from '../Componentes/menu'
import { TitlePage, Imagem,Paragrafro} from '../Estilos/Estilo'
import img from '../Componentes/touro_planta.jpg'
import sust from '../Componentes/Sust.png'
import corrida from '../Componentes/corrida.jpg'
export default ()=>{
    return(
        <>

        <Menu />
        <TitlePage>Por que virar vegano?</TitlePage>
        <div>
            <Imagem > 
            <img src={img} alt="IMAGEM DE UMA VACA DE LEGUMES" height="350px" width="450px"/>            <Paragrafro>Apesar do que as pessoas possam acreditar, a criação de animais está longe de ser humana, mesmo em circunstâncias ecológicas ou de “alto bem-estar”. Quando as pessoas ficam sabendo do sofrimento que os animais passam durante o processo de criação, não é de se estranhar que muitos não se atrevam a continuar comendo animais. Estudando um pouco mais sobre artigos recentes, vemos desde os horrores da pecuária leiteira, até os problemas da pesca moderna.
            </Paragrafro>
            </Imagem>
        </div>
        <div>
            <Imagem>
                <img src={sust} alt="SUSTENTABILIDADE" height="350px" width="450px"/>
                <Paragrafro>A sustentabilidade é uma questão que nos preocupa mais do que nunca. À medida que aumenta a informação sobre o impacto da carne no meio ambiente, as pessoas estão cada vez mais optando por não comê-la. Hoje pensando no meio ambiente, já temos vários artigos publicados, como por que comer peixe está matando nossos oceanos, como comer carne desperdiça água e muitos outros motivos para experimentar o veganismo em nosso planeta.
                </Paragrafro>
            </Imagem>
        </div>
        <div>
            <Imagem>
                <img src={corrida} alt="CORRIDA NO MEIO AMBIENTE" height="350px" width="450px"/>
                <Paragrafro>Alguns dos melhores atletas do mundo adotam uma dieta baseada em vegetais para melhorar sua saúde, desempenho e recuperação, então não é de admirar que pessoas comuns também estejam seguindo esse exemplo. Os benefícios de uma dieta livre de animais são inúmeros, incluindo a redução dos níveis de colesterol e pressão arterial, além de diminuir o risco de diabetes tipo 2.
                </Paragrafro>
            </Imagem>
        </div>
        
        
        </>
    )
}
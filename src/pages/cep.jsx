import { TitlePage } from "../Estilos/Estilo"
import Menu from '../Componentes/menu'
import axios from "axios"
import React,{useState} from "react"

function Cep(){
    const[cep,setCep] = useState('')
    const[data,setData] = useState({})
    const[error,setError] = useState(null)

    function handleCepChange(e){
        setCep(e.target.value)
    }
    function pesquisaCep(){
        axios
        .get(`http://viacep.com.br/ws/${cep}/json/`)
        .then(
            function(response){
                if(response.data && !response.data.erro){
                    setData(response.data)
                    setError(null)
                }
                else{
                    setData({})
                    setError("CEP NÃO ENCONTRADO")
                }
            }
        )
        .catch(function(error){
            setData({})
            setError('CEP NÃO ENCONTRADO')
        })
    }
    
return(
    <>
    <Menu />
    <TitlePage> Formulario </TitlePage>
    <input type="text" placeholder="DIGITE O CEP" value = {cep} onChange={handleCepChange} />
    <button onClick={pesquisaCep}>PESQUISAR</button>
    {error && <p>{error}</p>}
    {data.cep && (
        <div>

            <p>CEP: {data.cep}</p>
            <p>Logradouro: {data.logradouro}</p>
            <p>complemento: {data.complemento}</p>
            <p>bairro: {data.bairro}</p>
            <p>UF: {data.uf}</p>
            <p>DDD: {data.ddd}</p>
        </div>
    )
    }
    </>
)

}
export default Cep

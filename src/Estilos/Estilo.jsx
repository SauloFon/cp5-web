import styled from "styled-components";

 export const lightTheme={
    corFundo:'white',
    corTexto:'black',
    corTitulo:'black '
 }
 export const darkTheme={
    corFundo:'black',
    corTexto:'white',
    corTitulo:'white'
 }
export const Container = styled.div`
    background-color: ${props=> props.theme.corFundo};
    color: ${props=> props.theme.corTexto};
`
export const Button = styled.button`
        padding:10px;
        border:none;
        background-color:#4caf50;
        color: white;
        margin:10px;
`
export const TitlePage = styled.h1 `
    color:${props=> props.theme.corTitulo};
    font-size:100px;
    text-align: center;

`
export const InformacoesCEP =styled.div`
 padding:10px;
`

export const Imagem = styled.div `
    background-size: cover;
    padding:10px;
    display: inline-flex;
`
export const Paragrafro =styled.p`
    font-size: 30px;
    text-align: center;
    
`
export const Img = styled.ul`
    list-style: none;
    display: flex;
    justify-content : space-around;
    border-color: green;
    
`
export const Imga = styled.div`
    display: flex;
    justify-content: center;
`


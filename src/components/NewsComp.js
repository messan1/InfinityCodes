import React from 'react';
import styled from 'styled-components'
import './css/BlogPost.css'

const Layer = styled.div`
    width:100%;
    background-color:#f8f9fa;
    height:300px;
    margin-top:25px;
    margin-bottom:25px;
    padding:100px;
    display:flex;
    flex-wrap:wrap

    position:relative
    @media(max-width:1186px){
        padding:40px;
    }
    @media(max-width:1002px){
        padding:30px;
    }

`
const Title = styled.p`
    font-size:48px;
    font-weigth:700;
    text-align:center;
    @media(max-width:531px){
        margin-top:45px;
        font-size:30px;
        width:100%
    }
    @media(max-width:1002px){
        font-size:30px;
        width:100%
    }
    
`
const InputGroup = styled.div`
    display:flex;
    justify-content:center;
    margin-top:35px;
    flex-wrap:wrap;
    width:100%
    @media(max-width:800px){
        position:absolute;
        left:0;
        rigth:0;
        bottom:0;
    }
`
const Button = styled.button`
    width:94px;
    height:52px;
    color:white;
    border-style:none;
    background-color:black;
    @media(max-width:1518px){
        display:block
    }
`


const NewsComp = ()=>(
    <Layer>
        <Title>Rester Infomé</Title>
        <InputGroup>
            <input type="text" name="name" placeholder="Entrer Votre Nom" className="nameInput" />
            <input type="text" name="Number" placeholder="Entrer Votre Numero" className="nameInput" />
            <Button>Envoyer</Button>
        </InputGroup>
    </Layer>
)

export default NewsComp
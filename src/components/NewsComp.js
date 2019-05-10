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
`
const Title = styled.p`
    font-size:48px;
    font-weigth:700;
    text-align:center;
    letter-spacing:-1.2px;
    
`
const InputGroup = styled.div`
    display:flex;
    justify-content:center;
    margin-top:35px;
`
const Button = styled.button`
    width:94px;
    height:52px;
    color:white;
    border-style:none;
    background-color:black;
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
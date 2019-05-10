import React from 'react';
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'

const Wrap = styled.div`
    margin:100px auto;
    display: flex;
    justify-content: center;
    cursor:pointer

`
const Text = styled.h6`
    display:inline;
    font-size:24px;
    font-weigth:600;
    color:black;
    text-decoration:underline #707070;
    margin:5px;
    margin-right:15px;

`
const Icons = styled.div`
display:inline;
`


const SocialShare = ()=>(
    <Wrap>
        <Text>Nous Suivre</Text>
        <Icons>
            <Icon icon={facebookSquare} size={35}/>
        </Icons>
    </Wrap>
)

export default SocialShare


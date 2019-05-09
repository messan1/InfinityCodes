import React, { Component } from 'react';
import styled from 'styled-components'

const Wrap = styled.div``
const SiteTitle = styled.h1`
    display:flex;
    justify-content:center;
    margin-top:25px;
    font-weight:600;
    font-size:1.875rem;
`
const Content = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr 1fr;
`

const ArticleContent = styled.div`
    grid-column:2/3
`
const img = styled.img`
    background:url('./images/demo-image-00006.jpg')
`

const Title = styled.h1`
font-weight:600;
font-size:30px;
margin : 25px;
`

class Blogpost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Wrap>
            <SiteTitle>INFINITYCODES</SiteTitle>
            <Content>
                <ArticleContent>
                <img src="../images/demo-image-00006.jpg"/>
                Aenean eleifend ante maecenas pulvinar montes lorem
 et pede dis dolor pretium donec dictum.
Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. 
Adipiscing veni amet luctus enim 
sem libero tellus viverra venenatis aliquam. Commodo natoque quam
 pulvinar elit.

Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium 
metus nullam
 quam aenean sociis
quis sem neque vici libero. Venenatis nullam fringilla pretium 
magnis aliquam nunc vulputate
 integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque
 montes tempus ligula eget vitae pede rhoncus maecenas consectetuer 
commodo condimentum aenean.
                    <Title>Tincidunt veni tellus orci aenean consect
                    </Title>
                    Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque 
vulputate dolor eget dapibus.
Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean 
sit augue curabitur et parturient
nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. 
Lorem eget venenatis dui ante luctus ultricies tellus montes. 
Quis in sapien tempus.
                </ArticleContent>
            </Content>
            </Wrap>
        );
    }
}

export default Blogpost;
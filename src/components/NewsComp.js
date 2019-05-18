import React, { Component } from 'react';
import styled from "styled-components"
import "./css/BlogPost.css"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Layer = styled.div`
  width: 100%;
  background-color: white;
  height: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 100px;
  display: flex;
  grid-column:2/3;
  flex-wrap:wrap;
  position:relative;
  justify-content:center;
   @media(max-width:1186px) {
    padding: 40px;
  }
  @media (max-width: 1002px) {
    padding: 30px;
  }
`
const Title = styled.p`
  font-size: 48px;
  font-weigth: 700;
  text-align: center;
  @media (max-width: 531px) {
    margin-top: 45px;
    font-size: 30px;
    width: 100%;
  }
  @media (max-width: 1002px) {
    font-size: 30px;
    width: 100%;
  }
`
const InputGroup = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  flex-wrap: wrap;
  width:100%;
   @media(max-width:800px) {
    position: absolute;
    left: 0;
    rigth: 0;
    bottom: 0;
  }
`
const Button = styled.button`
  width: 94px;
  height: 52px;
  color: white;
  border-style: none;
  background-color: #ff4133;
  @media (max-width: 1518px) {
    display: block;
  }
`

class NewsComp extends Component {
    constructor() {
        super()
        this.state = {
            email: ``,
        }
    }

    // Update state each time user edits their email address
    _handleEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    // Post to MC server & handle its response
    _postEmailToMailchimp = (email, attributes) => {
        addToMailchimp(email, attributes)
            .then(result => {
                // Mailchimp always returns a 200 response
                // So we check the result for MC errors & failures
                if (result.result !== `success`) {
                    this.setState({
                        status: `error`,
                        msg: "Entrez une adresse valide ou votre adresse existe déjà!",
                    })
                } else {
                    // Email address succesfully subcribed to Mailchimp
                    this.setState({
                        status: `success`,
                        msg: result.msg,
                    })
                }
            })
            .catch(err => {
                // Network failures, timeouts, etc
                this.setState({
                    status: `error`,
                    msg: "Oups!",
                })
            })
    }

    _handleFormSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        if (!this.state.email) {
            this.setState({
                status: `error`,
                msg: "Entrez une adresse valide ou votre adresse existe déjà!",
            })
        }
        else {

            this.setState(
                {
                    status: `sending`,
                    msg: null,
                }

            )
            // setState callback (subscribe email to MC)
            this._postEmailToMailchimp(this.state.email, {
                pathname: document.location.pathname,
            })
        }
    }

  render() {
    return (
      <Layer>
        {this.state.status ===`success` ? (
          <div></div>
        ) : (
          <Title>La communauté</Title>
        )}
        {this.state.status===`success` ? (
            
            <h1>Votre Adresse Email a été Envoyé</h1>
        ) : (
            <InputGroup
            id="email-capture"
            method="post"
            noValidate
            >
              <input
                type="text"
                name="Number"
                placeholder="Entrer Votre Email"
                className="nameInput"
                onChange={this._handleEmailChange}
                required
              />
              <Button     
                className="icon-mail"
                type="submit"
                onClick={this._handleFormSubmit}>Envoyer</Button>
                {this.state.msg}
            </InputGroup>
           
        )}
      </Layer>
    )
  }
}

export default NewsComp

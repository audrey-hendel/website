import React from "react"
import styled from 'styled-components'

const Form = styled.form`
display: grid;
gap: 10px;
grid-template-rows: auto 30px 30px 110px;

@media (min-width: 500px){
  grid-template-rows: auto 60px 60px 200px;
  gap: 20px;
}
.hidden {
  position: fixed;
  top: -1000px;
  }
  .formItem {
    padding: 8px 15px;
    background: rgba(221, 161, 192, 0.06);
    border: 1px solid rgba(247, 62, 151, 0.1);
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.1);
    border-radius: 10px;
    font-family: 'Damion';
    @media (min-width: 500px){
      padding: 14px 30px;
    }
    &[placeholder] {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 1.35;
      letter-spacing: 0.08em;
      color: rgba(0, 0, 0, 0.5);
      @media (min-width: 500px){
        font-size: 14px;
      }
    }
  }
`
const Intro = styled.p`
  margin: 0;
  align-self: center;
  font-family: 'Sitka';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: rgba(51, 51, 51, 0.6);
  margin-bottom: 10px;
    
  @media (min-width: 500px){
    margin-bottom: 24px;
    font-size: 25px;
    line-height: 31px;
  }
`
const Submit = styled.button`
  height: fit-content;
  width: fit-content;
  padding: 8px 45px;
  margin-left: auto;
  background: rgba(247, 62, 151, 0.05);
  border: 2px solid rgba(240, 65, 145, 0.1);
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.12);
  border-radius: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.08em;
  color: rgba(51, 51, 51, 0.6);
  margin-top: 10px;
  @media (min-width: 500px){
    padding: 13px 60px;
    margin-top: 15px;
    font-size: 22px;
  }
  &:hover{
  color: rgba(51, 51, 51, 0.8);
  background: rgba(247, 62, 151, 0.1);
}
`

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" netlify-honeypot="antispam-field"
      data-netlify="true"
    >
      <input type="hidden" className="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="antispam-field" />
        </label>
      </p>
      <Intro>If you have any questions, you can write right here by filling out the form</Intro>
      <input type="text" name="name" placeholder="Name" className="formItem" />
      <input type="email" name="email" placeholder="Email" className="formItem" />
      <textarea name="message" placeholder="Message" className="formItem"></textarea>
      <Submit type="submit">Send</Submit>
    </Form>
  )
}
export default ContactForm

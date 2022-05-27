import React from "react"
import styled from 'styled-components'

const Form = styled.form`
display: grid;
gap: 20px;
grid-template-rows: auto 60px 60px 200px;
.hidden {
  position: fixed;
  top: -1000px;
  }
  .formItem {
    padding: 14px 20px;
    background: rgba(221, 161, 192, 0.06);
    border: 1px solid rgba(247, 62, 151, 0.1);
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.1);
    border-radius: 10px;
      font-family: 'Damion';
    placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.35;
      letter-spacing: 0.08em;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`
const Intro = styled.p`
  margin: 0;
  align-self: center;
  font-family: 'Sitka';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: 0.03em;
  color: rgba(51, 51, 51, 0.6);
`
const Submit = styled.button`
height: fit-content;
width: fit-content;
padding: 14px 60px;
margin-left: auto;
  background: rgba(247, 62, 151, 0.05);
  border: 2px solid rgba(240, 65, 145, 0.1);
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.12);
  border-radius: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.08em;
  color: rgba(51, 51, 51, 0.6);
`

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" netlify-honeypot="sec-field"
      data-netlify="true"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="sec-field" />
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

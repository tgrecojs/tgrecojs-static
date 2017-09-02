import React from 'react';
import Layout from '../src/components/Layout';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    align-items: center;
    padding: 1em;
    input,
    select,
    textarea {
      flex: 1 0 220px;
      padding: .5em;
      border-radius: 5px;
    }
    ::placeholder {
      color: red;
      font-size: 1.5em;
    }
    label {
      text-align: right;
      flex: 1 0 120px;
      margin-right: 2em;
      color: #fff;
    }
    @media (max-width: 669px) {
    label {
      text-align: left;
    }
  }
  }
`;

const BtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: 60%;
    font-family: 'Lato';
    padding: .5em;
    font-size: 1.15em;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    transition: all .3s ease-in;
    background: rgb(147, 205, 227);
    margin: 15px;
    &:hover {
      background: #49768c;
    }
  }
    @media (max-width: 669px) {
      button {
       width: 100%;
      }
    }
  }
`

export default Layout(
  () =>
    <Form action="https://formspree.io/hello@tgrecojs.com" method="POST">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="johndoe@gmail.com" name="_replyto" />
      </div>
      <div>
        <label htmlFor="reasonSelected">Subject</label>
        <select name="reasonSelected">
          <option value="Engineering Opportunity">
            JavaScript Engineering Opportunity
          </option>
          <option value="Development Opportunity">Full Stack Services</option>
          <option value="Graphic Design">Logo & Icon Design</option>
          <option value="books">JavaScript Mentorship</option>
        </select>
      </div>
      <div>
        <label htmlFor="reason">More Info</label>
        <textarea
          type="text"
          rows="10"
          columns="4"
          placeholder="Need more than just two or three sentences? "
          name="reason"
        />
      </div>
      <BtnRow>
      <button type="submit">Click to Submit</button></BtnRow>
    </Form>,
  'Contact'
);

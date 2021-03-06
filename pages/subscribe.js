import React from 'react';
import Layout from '../src/components/Layout';
import styled from 'styled-components';
import axios from 'axios';

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
`;

const APIKEY =
  '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';

const data = JSON.stringify({
  personalizations: [
    {
      to: [
        {
          email: 'john.doe@example.com',
          name: 'John Doe',
        },
      ],
      subject: 'Hello, World!',
    },
  ],
  from: {
    email: 'sam.smith@example.com',
    name: 'Sam Smith',
  },
  reply_to: {
    email: 'sam.smith@example.com',
    name: 'Sam Smith',
  },
  subject: 'Hello, World!',
  content: [
    {
      type: 'text/html',
      value: '<html><p>Hello, world!</p></html>',
    },
  ],
});

const config = {
  headers: {
    Authorization:
      'Bearer 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',
    'content-type': 'application/json',
  },
  url:
    'https://wt-9a23f117fecfd46745cb0cfc8078d671-0.run.webtask.io/tgrecojs-signup',
  data,
};
export default Layout(({ settings, emailData = config }) => {
  axios
    .post(emailData)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(e => new Error('Problem with Sendrid', e));
  return (
    <Form
      action="https://wt-9a23f117fecfd46745cb0cfc8078d671-0.run.webtask.io/tgrecojs-signup"
      method="POST"
    >
      <div>
        <label htmlFor="to_email">Email</label>
        <input type="email" placeholder="from@gmail.com" name="to_email" />
      </div>
      <div>
        <label htmlFor="from_email">Email</label>
        <input type="email" placeholder="from@gmail.com" name="from_email" />
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" placeholder="text" name="title" />
      </div>
      <BtnRow>
        <button type="submit">Click to Submit</button>
      </BtnRow>
    </Form>
  );
}, 'Contact');

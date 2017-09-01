import React from 'react';
import Layout from '../src/components/Layout';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  align-items: center;
  div {
    display: flex;
    padding: 1em;
    label,
    input {
      flex: 1 0 120px;
    }
  }
`;

export default Layout(
  () =>
    <Form
      action="https://formspree.io/thomasjosephgreco@gmail.com"
      method="POST"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="johndoe@gmail.com" name="_replyto" />
      </div>
      <div>
        <label htmlFor="reason">Reason for reaching out</label>
        <textarea
          type="reason"
          placeholder="Write a sentence or two about why you're reaching out..."
          name="_replyto"
        />
      </div>
      <input type="submit" value="Send" />
    </Form>,
  'Contact'
);

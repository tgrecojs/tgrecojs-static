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
    width: 60%;
    padding: 1em;
    label,
    input,
    select,
    textarea {
      flex: 1 0 120px;
    }
    ::placeholder {
      color: red;
      font-size: 1.5em;
    }
  }
`;

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
      <input type="submit" value="Send" />
    </Form>,
  'Contact'
);

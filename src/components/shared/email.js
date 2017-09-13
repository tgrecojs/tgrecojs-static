import $ from 'jquery';

const settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.sendgrid.com/v3/mail/send',
  method: 'POST',
  headers: {
    authorization: 'Bearer <<YOUR_API_KEY>>',
    'content-type': 'application/json',
  },
  processData: false,
  data:
    '{"personalizations":[{"to":[{"email":"john.doe@example.com","name":"John Doe"}],"subject":"Hello, World!"}],"from":{"email":"sam.smith@example.com","name":"Sam Smith"},"reply_to":{"email":"sam.smith@example.com","name":"Sam Smith"},"subject":"Hello, World!","content":[{"type":"text/html","value":"<html><p>Hello, world!</p></html>"}]}',
};

$.ajax(settings).done((response) => {
  console.log(response);
});

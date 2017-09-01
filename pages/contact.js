import React from 'react';

export default () =>
<form action="https://formspree.io/thomasjosephgreco@gmail.com"
method="POST">
<label htmlFor="name">Name</label>
<input type="text" placeholder="" name="name" />
<label htmlFor="email">Email</label>
<input type="email" placeholder="johndoe@gmail.com" name="_replyto" />
<input type="submit" value="Send" />
</form>;

"use strict";

function Header() {
  const name = "Sally Student";
  return (
    <header>
      <h1>{name}</h1>
      <address role="contact-info">
        <p>Email: sallystudent@gmail.com | Phone Number: 123-455-5555</p>
      </address>
    </header>
  );
}

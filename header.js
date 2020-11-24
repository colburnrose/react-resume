"use strict";

function Header() {
  const name = "Sally Mae";
  const resume = "Resume";
  return (
    <header>
      <h1>{resume}</h1>
      <address role="contact-info">
        <p>
          Name: {name} | Email: sallystudent@gmail.com | Phone Number:
          123-455-5555
        </p>
      </address>
    </header>
  );
}

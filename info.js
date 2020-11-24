"use strict";

function Employment() {
  return (
    <section className="tech-projects">
      <h2>EMPLOYMENT HISTORY</h2>
      <p>Google, Inc</p>
      <p>Software Engineer</p>
      <p>2020-Present</p>
      <p>Search Optimization</p>

      <p>Facebook, Inc</p>
      <p>Software Engineer</p>
      <p>2017-2019</p>
      <p>Search Optimization</p>
    </section>
  );
}

function Skills() {
  return (
    <aside className="left-column" role="region">
      <h2>SKILLS</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>Heroku</li>
        <li>Jest</li>
      </ul>
    </aside>
  );
}

function Education() {
  return (
    <aside className="right-column" role="region">
      <h2>EDUCATION</h2>
      <ul>
        <li>
          <p class="title">University of Phoenix</p>
          <p>Associates of Science</p>
          <p>2017-2019</p>
          <p>GPA: 3.64</p>
        </li>
        <li>
          <p class="title">SCAD</p>
          <p>Bachelor of Arts</p>
          <p>2013-2017</p>
          <p>GPA: 3.50</p>
        </li>
      </ul>
    </aside>
  );
}

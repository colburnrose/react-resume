"use strict";

function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />

      <main>
        <Employment />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

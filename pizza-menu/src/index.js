import React from "react";
import ReactDom from "react-dom/client";

function App() {
  const x = "jonbas";

  return <h1>Hello React gdfsgfd</h1>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

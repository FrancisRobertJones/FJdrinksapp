import { html, css, render } from "lit";
import { component, useState, useCallback } from "haunted";

import cocktailLogo from "./src/assets/cocktailLogo.jpeg"

import "./src/components/my-logo.js";
import "./src/components/my-input.js";


const MyApp = () => {
  const style = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #f9f9f9;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
  `;

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");


  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return html`
    <style>
      ${style}
    </style>
    <h1>FJs drink app</h1>
    <div>
      <my-logo logo=${cocktailLogo} link="/"></my-logo>
      <my-input value=${input} onChange=${handleChange}>
    </div>
    <div>
      <button @click=${onClick} part="button">count is ${count}</button>
    </div>
  `;
};

customElements.define("my-app", component(MyApp));
const appRoot = document.getElementById("app");
render(html`<my-app></my-app>`, appRoot);

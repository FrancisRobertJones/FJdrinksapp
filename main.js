import { html, css, render } from "lit";
import { component, useState, useCallback } from "haunted";

import litLogo from "./src/assets/lit.svg";
import hauntedLogo from "./src/assets/haunted.svg";
import viteLogo from "./src/assets/vite.svg";

import "./src/components/my-logo.js";

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
  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return html`
    <style>
      ${style}
    </style>
    <div>
      <my-logo logo=${viteLogo} link="https://vitejs.dev"></my-logo>
      <my-logo
        logo=${hauntedLogo}
        link="https://hauntedhooks.netlify.app/"
      ></my-logo>
      <my-logo logo=${litLogo} link="https://lit.dev"></my-logo>
    </div>
    <h1>Hello world</h1>
    <div>
      <button @click=${onClick} part="button">count is ${count}</button>
    </div>
  `;
};

customElements.define("my-app", component(MyApp));
const appRoot = document.getElementById("app");
render(html`<my-app></my-app>`, appRoot);

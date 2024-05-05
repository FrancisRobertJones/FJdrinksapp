import { html, css, render } from "lit";
import { component } from "haunted";


const Input = ({ value, handleChange }) => {
  const style = css`
  h1 {
    font-size: 2.2em;
    line-height: 1.1;
  }
  input {
    width: 50%;
    padding: 0.5em;
    border: 1px solid #000;
    border-radius: 2px;
    font-size: 0.5em;
    margin-top: 0.5em;
  }
  `;


  return html`<style>
      ${style}
    </style>
    <h1>Enter your cocktail of choice <h1/>
    <input type="text" @change=${e => onChange(e)}/>
    <h4>the input is ${value}</h4>
`;
};

customElements.define(
  "my-input",
  component(Input)
);

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Mukta', sans-serif;
    letter-spacing: 2px;
  }
  
  h1 {font-size:1.6em;}
  h2 {font-size:1.5em;}
  h3 {font-size:1.4em;}
  h4 {font-size:1.3em;}
  h5 {font-size:1.2em;}
  h6 {font-size:1.1em;}
  
  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0;
  }

  p, ul, ol {
    font-size: 1em;
  }
  
  ul {
    margin: 0 0 1em 25px;
    list-style: none;
  }

  a {
    text-decoration: underline;
    color: #000;
    outline:0;
  }

  a:visited {
    color:#999;
  }

  a:hover, a:focus, a:active {
    text-decoration:none;
  }

  fieldset {
    border: none;
  }

  form:focus {
    outline: 0;
  }

  input,
  select,
  textarea {
    font-size: 0.9em;
    font-family: 'Mukta', sans-serif;
    letter-spacing: 2px;
  }

  label {
    cursor: pointer;
    vertical-align: middle;
  }

  input {
    vertical-align: middle;
  }

  textarea {
    overflow: auto;
  }
`;

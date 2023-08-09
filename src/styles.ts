import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff' /**Cor da letra */,
  brancoAmarelado: '#FFF8F2', //**Cor do fundo */
  laranja: '#E66767',
  laranjaClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
  body {
    background-color: ${cores.brancoAmarelado};
    color: ${cores.laranja};
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`

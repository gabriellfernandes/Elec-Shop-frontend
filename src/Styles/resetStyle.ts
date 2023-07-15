import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        outline: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        color: var(--color-grey-5);
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
        transition-delay: 2s;
        /* background-color: #141414; */
      
    }

    :root{
       --red__defaultColor: #D10050;
       /* background-color: #1C1C1C; */
       --player_Color: #D10050;
       overflow-x: hidden;
    }
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
 
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    button, select{
        cursor: pointer;
        
        &:focus{
            outline: none;
        }
    }
    
    a {
        text-decoration: none;
    }
`;

import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1534422873016');
    /* IE9*/
    src: url('./iconfont.eot?t=1534422873016#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), url('iconfont.ttf?t=1534422873016') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1534422873016#iconfont') format('svg');
    /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

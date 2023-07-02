import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#DC6803"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M10.132 7.5v3.333m0 3.334h.008M8.978 3.243 2.124 15.082c-.38.657-.57.985-.543 1.254a.833.833 0 0 0 .34.588c.218.16.598.16 1.357.16h13.708c.758 0 1.138 0 1.357-.16a.833.833 0 0 0 .339-.588c.028-.27-.162-.597-.542-1.254L11.286 3.243c-.38-.654-.569-.981-.816-1.091a.833.833 0 0 0-.677 0c-.247.11-.436.437-.815 1.091Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.132 0h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;

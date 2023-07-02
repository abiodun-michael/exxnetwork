import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}>
    <rect width={24} height={24} x={1} y={1} fill="#fff" rx={12} />
    <path
      stroke="#A0A0AB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M13 8.333v9.334M8.333 13h9.334"
    />
    <rect
      width={24}
      height={24}
      x={1}
      y={1}
      stroke="#D1D1D6"
      strokeDasharray="1 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={12}
    />
  </svg>
);
export default SvgComponent;

import * as React from 'react';
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m17.5 17.5-2.917-2.917m2.084-5a7.083 7.083 0 1 1-14.167 0 7.083 7.083 0 0 1 14.167 0Z"
    />
  </svg>
);
export default SvgComponent;

import React from 'react';

function ExternalLinkIcon({
  width = 15,
  height = 15,
  color = 'currentColor',
  ...rest
}) {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      {...rest}
    >
      <path
        fill={color}
        d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
      />
      <polygon
        fill={color}
        points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
      />
    </svg>
  );
}

export default ExternalLinkIcon;

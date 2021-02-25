/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconlujing768 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m271.36 386.56L479.744 690.0224a37.12 37.12 0 0 1-52.48 0L240.64 503.4752a37.12 37.12 0 0 1 52.48-52.48l160.3328 160.3328 277.376-277.3504A37.1712 37.1712 0 1 1 783.36 386.56z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconlujing768.defaultProps = {
  size: 18,
};

export default Iconlujing768;

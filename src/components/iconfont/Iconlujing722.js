/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconlujing722 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m180.992 647.8592a32.0256 32.0256 0 0 1-45.2864 45.2864l-135.68-135.68-136.5248 136.5248a32.2048 32.2048 0 0 1-45.5424-45.5424l136.5248-136.5248-135.68-135.68a32.0256 32.0256 0 0 1 45.2864-45.2864l135.68 135.68 137.5744-137.5744a32.2048 32.2048 0 0 1 45.5424 45.5424l-137.5744 137.5744z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconlujing722.defaultProps = {
  size: 18,
};

export default Iconlujing722;

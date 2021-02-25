/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconzu1409 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512.094815 0a512 512 0 1 0 512 512 512.493037 512.493037 0 0 0-512-512z m0 945.227852A433.227852 433.227852 0 1 1 945.322667 512a433.739852 433.739852 0 0 1-433.227852 433.227852z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M697.306074 363.121778L471.760593 588.61037l-134.504297-134.504296a39.405037 39.405037 0 0 0-55.732148 55.732148l190.236445 190.236445 281.201777-281.201778a39.405037 39.405037 0 0 0-55.732148-55.732148z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

Iconzu1409.defaultProps = {
  size: 18,
};

export default Iconzu1409;

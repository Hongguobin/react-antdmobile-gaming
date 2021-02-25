/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconzu1410 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M639.222519 682.932148a39.253333 39.253333 0 0 1-27.761778-11.624296l-256-256a39.405037 39.405037 0 0 1 55.732148-55.732148l256 256a39.461926 39.461926 0 0 1 0 55.732148 40.049778 40.049778 0 0 1-27.97037 11.624296z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M383.222519 682.932148a39.461926 39.461926 0 0 1-27.761778-67.356444l256-256a39.405037 39.405037 0 0 1 55.732148 55.732148l-256 256a40.049778 40.049778 0 0 1-27.97037 11.624296z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M512 1024a512 512 0 1 1 512-512 512.493037 512.493037 0 0 1-512 512z m0-945.227852A433.227852 433.227852 0 1 0 945.227852 512 433.739852 433.739852 0 0 0 512 78.772148z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

Iconzu1410.defaultProps = {
  size: 18,
};

export default Iconzu1410;

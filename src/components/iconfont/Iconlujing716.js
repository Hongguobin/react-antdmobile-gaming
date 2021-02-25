/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconlujing716 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1137 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1106.767163 543.56513c38.173782-17.417781 38.310036-45.599616 0-63.062815L69.693835 7.27005A45.145436 45.145436 0 0 0 0.454179 51.23462L0 392.754848l839.936743 119.176684L0 631.108217 0.454179 972.673863a45.0546 45.0546 0 0 0 69.239656 43.987279z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconlujing716.defaultProps = {
  size: 18,
};

export default Iconlujing716;

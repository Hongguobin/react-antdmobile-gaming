/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconlujing539 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0a511.992 511.992 0 1 0 511.992 511.992A512.567991 512.567991 0 0 0 512 0z m-85.230668 760.660115l-228.796425-228.796425 65.438977-65.422978L426.721332 629.75016 760.524117 295.995375l65.438977 65.422978z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconlujing539.defaultProps = {
  size: 18,
};

export default Iconlujing539;

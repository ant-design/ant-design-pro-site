import React from 'react';

export interface IColor {
  /** @description 颜色 */
  color: string;
  /** @description 数量 */
  orbs?: number;
  /** @description 大小 */
  radius?: number;
  /** @description 速度 */
  maxVelocity?: number;
}

const Color: React.FC<IColor> = () => <>Hello World!</>;

export default Color;

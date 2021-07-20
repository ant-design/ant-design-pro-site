import React, { useEffect } from 'react';
import Gaussian from './vendor/gaussianBackground';

export interface IColor {
  color: string;
  orbs?: number;
  radius?: number;
  maxVelocity?: number;
}

export interface IGaussianBackground {
  /** @description 模糊半径 */
  blurRadius: number;
  /** @description 颜色序列 */
  colors: IColor[];
  /** @description 宽度 */
  width?: string | number;
  /** @description 高度 */
  height?: string | number;
}

const defaultColors = [
  { color: '#2f54eb', orbs: 4, radius: 16, maxVelocity: 0.2 },
  { color: '#1890ff', orbs: 4, radius: 8, maxVelocity: 0.2 },
  { color: '#fadb14' },
];

const GaussianBackground: React.FC<IGaussianBackground> = ({
  blurRadius = 16,
  colors = defaultColors,
  width = '100%',
  height = '500px',
}: IGaussianBackground) => {
  useEffect(() => {
    Gaussian.run('gaussian-background', colors, blurRadius);
  }, [colors, blurRadius]);

  return (
    <canvas
      id="gaussian-background"
      style={{
        width,
        height,
        padding: 0,
        margin: 0,
      }}
    />
  );
};

export default GaussianBackground;

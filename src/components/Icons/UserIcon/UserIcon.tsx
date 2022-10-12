import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import Svg, {Path, Ellipse} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
  focused?: boolean;
  isFilled?: boolean;
};

export const UserIcon: FC<TProps> = ({
  color,
  size,
  focused,
  isFilled = false,
}) => {
  const {pallete} = useTheme();

  if (focused) {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M21.8878 21.9429C22.4778 21.8201 22.829 21.2037 22.5495 20.6698C21.7903 19.2199 20.5452 17.9459 18.9326 16.9851C16.9437 15.8002 14.5069 15.1579 12 15.1579C9.49311 15.1579 7.05626 15.8002 5.0674 16.9851C3.45476 17.9459 2.20974 19.2199 1.45053 20.6698C1.17098 21.2036 1.5222 21.8201 2.1122 21.9429L3.85261 22.305C9.22667 23.423 14.7733 23.423 20.1474 22.305L21.8878 21.9429Z"
          fill={pallete.icon[color] as string}
        />
        <Ellipse
          cx="12.0008"
          cy="6.31579"
          rx="6.32669"
          ry="6.31579"
          fill={pallete.icon[color] as string}
        />
      </Svg>
    );
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M22.3878 22.9429C22.9778 22.8201 23.329 22.2037 23.0495 21.6698C22.2903 20.2199 21.0452 18.9459 19.4326 17.9851C17.4437 16.8002 15.0069 16.1579 12.5 16.1579C9.99311 16.1579 7.55626 16.8002 5.5674 17.9851C3.95476 18.9459 2.70974 20.2199 1.95053 21.6698C1.67098 22.2037 2.0222 22.8201 2.6122 22.9429L4.35261 23.305C9.72667 24.423 15.2733 24.423 20.6474 23.305L22.3878 22.9429Z"
        stroke={pallete.icon[color] as string}
        strokeLinecap="round"
        fill={isFilled ? (pallete.icon[color] as string) : 'none'}
      />
      <Ellipse
        cx="12.5008"
        cy="7.31579"
        rx="6.32669"
        ry="6.31579"
        stroke={pallete.icon[color] as string}
        strokeLinecap="round"
        fill={isFilled ? (pallete.icon[color] as string) : 'none'}
      />
    </Svg>
  );
};

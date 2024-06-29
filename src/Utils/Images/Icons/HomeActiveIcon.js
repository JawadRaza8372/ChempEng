import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeActiveIcon(props) {
  const {color}=props
  
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.486 1.21a1 1 0 011.228 0l9 7A1 1 0 0122.1 9v11a3 3 0 01-3 3h-14a3 3 0 01-3-3V9a1 1 0 01.386-.79l9-7zM4.1 9.49V20a1 1 0 001 1h14a1 1 0 001-1V9.49l-8-6.223-8 6.222z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.1 12a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 11-2 0v-9h-4v9a1 1 0 11-2 0V12z"
        fill={color}
      />
    </Svg>
  );
}

export default HomeActiveIcon;

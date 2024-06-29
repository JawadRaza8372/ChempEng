import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InActiveCalenderIcon(props) {
  const {color}=props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 8.25h16.5V19.5a.75.75 0 01-.75.75H5a.75.75 0 01-.75-.75V8.25z"
        fill="#DADADA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 8.25h16.5V4.5a.75.75 0 00-.75-.75H5a.75.75 0 00-.75.75v3.75z"
        fill="#DADADA"
      />
      <Path
        d="M20.75 8.25v.5a.5.5 0 00.5-.5h-.5zm-16.5 0h-.5a.5.5 0 00.5.5v-.5zm16.5-.5H4.25v1h16.5v-1zm.5.5V4.5h-1v3.75h1zm0-3.75c0-.69-.56-1.25-1.25-1.25v1a.25.25 0 01.25.25h1zM20 3.25H5v1h15v-1zm-15 0c-.69 0-1.25.56-1.25 1.25h1A.25.25 0 015 4.25v-1zM3.75 4.5v3.75h1V4.5h-1z"
        fill="#DADADA"
      />
      <Path
        d="M12.5 13.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM16.625 13.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM8.375 17.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM12.5 17.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM16.625 17.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill="#fff"
      />
      <Path
        d="M17 2.25v3M8 2.25v3"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 2.25v3M8 2.25v3"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default InActiveCalenderIcon

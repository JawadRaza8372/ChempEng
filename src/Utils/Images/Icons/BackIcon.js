import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      {...props}
    >
      <Path
        d="M1.717 7.113h15.058"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        d="M1.71729 6.87586L7.02794 1.5652"
      />
      <Path
        transform="scale(1 -1) rotate(-45 -6.278 -5.03)"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        d="M1 -1L8.5104 -1"
      />
    </Svg>
  )
}

export default BackIcon

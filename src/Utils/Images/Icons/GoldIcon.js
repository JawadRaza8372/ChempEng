import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GoldIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <Path
        d="M4.405 15.71h5.242l1.613 5.696H2.792l1.613-5.696zM14.687 15.71h5.242l1.613 5.696h-8.468l1.613-5.696zM9.098 8.629h5.242l1.613 5.696H7.485l1.613-5.696z"
        fill="#5B53FC"
        stroke="#5B53FC"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.308 6.083v3M18.808 7.583h3M5.985 2.333v4.5M3.735 4.583h4.5"
        stroke="#9A81FF"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default GoldIcon

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BotiqueIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_411_11023)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.078 5.75H5.75a.75.75 0 00-.738.884l1.364 7.5a.75.75 0 00.738.616h.6l-1.636-9zm3.16 9h9.646a2.25 2.25 0 002.214-1.848l1.14-6.268a.75.75 0 00-.738-.884H7.602l1.637 9z"
          fill="#5B53FC"
        />
        <Path
          d="M14.632 17.75h-2.014m-9.868-15h2.318L7.48 16.016"
          stroke="#9A81FF"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.125 21.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM18.125 21.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
          fill="#5B53FC"
          stroke="#5B53FC"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_411_11023">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}



export default BotiqueIcon

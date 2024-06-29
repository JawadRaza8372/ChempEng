import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DashBoardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_176_18560)">
        <Path
          d="M5.334 20.25V3.75"
          stroke="#5B53FC"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7.834 10.5h14v3h-14" fill="#5B53FC" />
        <Path
          d="M7.834 10.5h14v3h-14v-3z"
          stroke="#5B53FC"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7.834 15.5h8v3h-8" fill="#9A81FF" />
        <Path
          d="M7.834 15.5h8v3h-8v-3z"
          stroke="#9A81FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7.834 5.5h10v3h-10" fill="#9A81FF" />
        <Path
          d="M7.834 5.5h10v3h-10v-3z"
          stroke="#9A81FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_176_18560">
          <Path fill="#fff" transform="translate(.834)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DashBoardIcon

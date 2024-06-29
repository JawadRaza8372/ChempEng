import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DashboradInActiveIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_436_10690)">
        <Path
          d="M5.333 20.25V3.75"
          stroke="#DADADA"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7.833 10.5h14v3h-14" fill="#DADADA" />
        <Path
          d="M7.833 10.5h14v3h-14v-3z"
          stroke="#DADADA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7.833 15.5h8v3h-8" fill="#DADADA" />
        <Path
          d="M7.833 15.5h8v3h-8v-3z"
          stroke="#DADADA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7.833 5.5h10v3h-10" fill="#DADADA" />
        <Path
          d="M7.833 5.5h10v3h-10v-3z"
          stroke="#DADADA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_436_10690">
          <Path fill="#fff" transform="translate(.833)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DashboradInActiveIcon

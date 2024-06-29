import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PlusIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_411_14785)"
        stroke="#000"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2.188 7h9.624M7 2.188v9.624" />
      </G>
      <Defs>
        <ClipPath id="clip0_411_14785">
          <Path fill="#fff" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PlusIcon

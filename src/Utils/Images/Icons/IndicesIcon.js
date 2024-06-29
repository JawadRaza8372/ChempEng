import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function IndicesICon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_411_14648)">
        <Path
          d="M15.229 12.234l1.26-6.44a.75.75 0 01.745-.644h1.699a.75.75 0 01.744.644l1.406 7.456v4.2"
          fill="#9A81FF"
          stroke="#9A81FF"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.249 8.08a.75.75 0 01.785.07l4.8 3.6v-3a.75.75 0 011.2-.6l5.8 4.35h4.25a.75.75 0 01.75.75v6.6a.75.75 0 01-.75.75h-16.5a.75.75 0 01-.75-.75V8.75a.75.75 0 01.415-.67zm2.185 7.645a1 1 0 011-1h2.625a1 1 0 110 2H7.434a1 1 0 01-1-1zm6.375 0a1 1 0 011-1h2.625a1 1 0 110 2h-2.625a1 1 0 01-1-1z"
          fill="#5B53FC"
        />
        <Path
          d="M3.084 22.7h19.5"
          stroke="#9A81FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_411_14648">
          <Path fill="#fff" transform="translate(.834 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}



export default IndicesICon

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FormationIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_411_11007)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M11.814 2.838a.75.75 0 01.706 0l11.25 6a.75.75 0 010 1.324l-4.628 2.468v-.33c0-.637-.351-1.222-.913-1.522l-5.25-2.8a1.725 1.725 0 00-1.624 3.044l4.337 2.313v1.135l-3.172 1.692a.75.75 0 01-.706 0l-11.25-6a.75.75 0 010-1.324l11.25-6zm6.353 10.312l-1.5.8v-1.2l-4.853-2.588a.75.75 0 11.706-1.324l5.25 2.8a.75.75 0 01.397.662v.85z"
          fill="#5B53FC"
        />
        <Path
          d="M11.505 9.147a.75.75 0 011.015-.309l5.25 2.8a.75.75 0 01.397.662V23a.75.75 0 11-1.5 0V12.75l-4.853-2.588a.75.75 0 01-.309-1.015z"
          fill="#9A81FF"
        />
        <Path
          d="M15.692 15.895l-3.172 1.692a.75.75 0 01-.706 0l-8.647-4.612v3.114c0 .366.133.72.375.995l.005.005c1.15 1.279 3.923 3.661 8.62 3.661 1.326 0 2.499-.19 3.525-.491v-4.364zm2.475 3.305c-.45.26-.95.508-1.5.725v-4.55l1.5-.8V19.2zm.975-.634a10.6 10.6 0 001.646-1.477l.004-.005a1.5 1.5 0 00.375-.995v-3.114l-2.025 1.08v4.511z"
          fill="#9A81FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_411_11007">
          <Path fill="#fff" transform="translate(.167 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}



export default FormationIcon

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LightCrownIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M2.338 4.334l3.5 2.333 3.488-4.884a.833.833 0 011.356 0l3.488 4.884 3.5-2.333a.833.833 0 011.29.79l-1.37 11.64a.833.833 0 01-.827.736H3.245a.833.833 0 01-.828-.736l-1.37-11.64a.833.833 0 011.29-.79zm7.666 8.166a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
        fill="#EBEF13"
      />
    </Svg>
  )
}

export default LightCrownIcon

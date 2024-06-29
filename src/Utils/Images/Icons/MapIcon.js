import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MapIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={19}
      viewBox="0 0 14 19"
      fill="none"
      {...props}
    >
      <Path
        d="M7 1.782c-2.95 0-5.344 2.278-5.344 5.084 0 3.228 3.563 8.344 4.87 10.111a.586.586 0 00.947 0c1.308-1.766 4.87-6.88 4.87-10.111C12.344 4.06 9.95 1.782 7 1.782z"
        stroke="#676767"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.094 8.907a1.781 1.781 0 100-3.563 1.781 1.781 0 000 3.563z"
        stroke="#676767"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MapIcon

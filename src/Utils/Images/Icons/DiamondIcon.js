import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DiamondIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={12}
      viewBox="0 0 11 12"
      fill="none"
      {...props}
    >
      <Path
        transform="rotate(45 5.615 .615)"
        fill="#665EFC"
        d="M5.61523 0.615234H13.230450000000001V8.230454H5.61523z"
      />
    </Svg>
  )
}

export default DiamondIcon

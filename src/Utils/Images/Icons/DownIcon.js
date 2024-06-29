import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={8}
      viewBox="0 0 15 8"
      fill="none"
      {...props}
    >
      <Path
        d="M7.5 7.357a.628.628 0 01-.46-.193L1.135 1.38a.628.628 0 010-.913.66.66 0 01.932 0L7.513 5.8 12.947.48a.66.66 0 01.932 0 .628.628 0 010 .912L7.973 7.177a.666.666 0 01-.46.193L7.5 7.357z"
        fill="#000"
      />
    </Svg>
  )
}

export default DownIcon

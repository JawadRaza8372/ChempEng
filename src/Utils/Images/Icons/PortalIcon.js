import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PortalIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      {...props}
    >
      <Path
        d="M2.083 1.583h9.834c.676 0 1.229.554 1.229 1.23v7.374c0 .677-.553 1.23-1.23 1.23H2.084c-.676 0-1.229-.553-1.229-1.23V2.814c0-.676.553-1.23 1.23-1.23z"
        stroke="#676767"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.146 2.813L7 7.115.854 2.813"
        stroke="#676767"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PortalIcon

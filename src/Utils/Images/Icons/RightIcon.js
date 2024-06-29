import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      {...props}
    >
      <Path
        d="M6.167 8.907L14.593.48l1.296 1.297-9.722 9.722L.333 5.666l1.296-1.297 4.538 4.538z"
        fill="#000"
      />
    </Svg>
  )
}

export default RightIcon

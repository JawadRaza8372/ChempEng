import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LockIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      {...props}
    >
      <Path
        d="M12.375 6.875h-8.75c-.69 0-1.25.56-1.25 1.25V12.5c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25V8.125c0-.69-.56-1.25-1.25-1.25zM4.875 6.875v-2.5a3.125 3.125 0 016.25 0v2.5"
        stroke="#676767"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LockIcon

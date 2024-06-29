import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <Path
        d="M7.5 11.587l4.378 2.642-1.162-4.98 3.868-3.35-5.093-.432L7.5.771 5.51 5.467.417 5.9l3.867 3.35-1.161 4.98L7.5 11.587z"
        fill="#F8A401"
      />
    </Svg>
  )
}

export default StarIcon

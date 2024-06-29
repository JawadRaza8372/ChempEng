import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={13}
      viewBox="0 0 16 13"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M14.125.625c.957 0 1.75.793 1.75 1.75v.875H.125v-.875c0-.957.766-1.75 1.75-1.75h12.25zm1.75 10.5c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-5.25h15.75v5.25zM3.187 9.375a.45.45 0 00-.437.438c0 .246.191.437.438.437h1.75a.45.45 0 00.437-.438.47.47 0 00-.438-.437h-1.75zm3.5.875h3.5a.45.45 0 00.438-.438.47.47 0 00-.438-.437h-3.5a.45.45 0 00-.437.438c0 .246.191.437.438.437z"
        fill="#000"
        fillOpacity={0.88}
      />
    </Svg>
  )
}

export default CardIcon

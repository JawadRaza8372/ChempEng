import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.564 15.464A5 5 0 018.1 14h8a5 5 0 015 5v2a1 1 0 11-2 0v-2a3 3 0 00-3-3h-8a3 3 0 00-3 3v2a1 1 0 11-2 0v-2a5 5 0 011.464-3.536zM12.1 4a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
        fill="#484C52"
      />
    </Svg>
  )
}

export default ProfileIcon

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      {...props}
    >
      <Path
        d="M1.5 14.5v-.813c0-1.508.58-2.955 1.61-4.021A5.41 5.41 0 017 8m0 0c1.459 0 2.858.6 3.89 1.666a5.788 5.788 0 011.61 4.021v.813M7 8c.834 0 1.633-.342 2.222-.952.59-.61.92-1.436.92-2.298 0-.862-.33-1.689-.92-2.298A3.091 3.091 0 007 1.5c-.834 0-1.633.342-2.222.952-.59.61-.92 1.436-.92 2.298 0 .862.33 1.689.92 2.298C5.368 7.658 6.166 8 7 8z"
        stroke="#676767"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default UserIcon

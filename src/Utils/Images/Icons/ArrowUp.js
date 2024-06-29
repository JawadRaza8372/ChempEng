import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowUp(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M7 .875c.246 0 .465.082.629.246l5.25 5.25a.843.843 0 010 1.23.843.843 0 01-1.23 0L7 2.982 2.379 7.6a.843.843 0 01-1.23 0 .843.843 0 010-1.23l5.25-5.25A.848.848 0 017 .875z"
        fill="#000"
      />
    </Svg>
  )
}

export default ArrowUp

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DangerIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={15}
      viewBox="0 0 18 15"
      fill="none"
      {...props}
    >
      <Path
        d="M10.126 1.142l6.832 11.865c.48.836-.14 1.868-1.125 1.868H2.167c-.986 0-1.605-1.032-1.126-1.868L7.874 1.142c.492-.856 1.76-.856 2.252 0z"
        fill="#FFA300"
      />
    </Svg>
  )
}

export default DangerIcon

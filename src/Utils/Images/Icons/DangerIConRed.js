import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DangerIconRed(props) {
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
        d="M14.836 11.152a1.151 1.151 0 01-1.012 1.723H2.148c-.902 0-1.449-.957-1.011-1.723L6.988 1.2c.438-.765 1.559-.765 2.024 0l5.824 9.953zM7.344 4.344v3.5c0 .383.328.656.656.656a.648.648 0 00.656-.656v-3.5c0-.356-.3-.657-.656-.657-.383 0-.656.301-.656.657zM8 11.125a.852.852 0 00.848-.848A.852.852 0 008 9.43a.858.858 0 00-.875.847c0 .465.383.848.875.848z"
        fill="#E41831"
      />
    </Svg>
  )
}

export default DangerIconRed

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowUpIcon(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 .5c5.508 0 10 4.492 10 10 0 5.547-4.492 10-10 10a9.97 9.97 0 01-10-10C0 4.992 4.453.5 10 .5zm4.922 9.648c.117-.234.039-.507-.117-.703L10.43 5.07a.662.662 0 00-.899 0L5.156 9.445c-.156.196-.234.47-.117.703.078.235.313.352.586.352h2.5v3.75c0 .703.547 1.25 1.25 1.25h1.25c.664 0 1.25-.547 1.25-1.25V10.5h2.5c.234 0 .469-.117.547-.352z"
        fill="#5B53FC"
      />
    </Svg>
  )
}

export default ArrowUpIcon

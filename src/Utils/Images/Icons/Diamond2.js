import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Diamond2Icon({ backgroundColor = "transparent", fillColor = "#fff", ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      {...props}
    >
      <Path
        d="M15.194.754a2.612 2.612 0 012.612 0L29.05 7.246a2.612 2.612 0 011.306 2.262v12.984c0 .933-.498 1.796-1.306 2.262l-11.244 6.492a2.612 2.612 0 01-2.612 0L3.95 24.754a2.612 2.612 0 01-1.306-2.262V9.508c0-.933.497-1.795 1.306-2.262L15.194.754z"
        fill="#1C1C1C"
      />
      <Path
        d="M12.908 13.714L15.194 16l-2.286 2.286L10.623 16l2.285-2.286zM20.092 13.714L22.378 16l-2.286 2.286L17.806 16l2.286-2.286z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Diamond2Icon

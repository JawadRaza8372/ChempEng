import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LoudIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <Path
        d="M12.25 5.87V2.333a.583.583 0 00-.583-.583h-.584C9.93 2.904 7.76 3.55 6.417 3.857v6.285c1.343.307 3.512.954 4.666 2.108h.584a.583.583 0 00.583-.583V8.13a1.167 1.167 0 000-2.26zM2.917 4.083c-.645 0-1.167.523-1.167 1.167v3.5c0 .644.522 1.167 1.167 1.167H3.5l.583 2.916H5.25v-8.75H2.917z"
        fill="#000"
        opacity={0.65}
      />
    </Svg>
  )
}

export default LoudIcon

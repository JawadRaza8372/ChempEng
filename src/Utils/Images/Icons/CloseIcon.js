import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M2.339 2.339a7.644 7.644 0 000 10.678 7.644 7.644 0 0010.678 0 7.644 7.644 0 000-10.678 7.643 7.643 0 00-10.678 0zm8.77 2.67L8.44 7.677l2.67 2.67-.763.762-2.67-2.67-2.669 2.67-.762-.763 2.669-2.67-2.67-2.669.763-.762 2.67 2.669 2.67-2.67.762.763z"
        fill="#CD2F0C"
      />
    </Svg>
  )
}

export default CloseIcon

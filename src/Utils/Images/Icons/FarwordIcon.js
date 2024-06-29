import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FarwordIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.347 1.942l6.52 6.53a.594.594 0 01.183.435.635.635 0 01-.184.448c-2.358 2.3-4.63 4.52-6.817 6.66-.113.106-.563.368-.91-.021-.348-.39-.137-.73 0-.87l6.36-6.217-6.071-6.083c-.222-.305-.204-.587.054-.845.257-.258.546-.27.865-.037z"
        fill="#000"
      />
    </Svg>
  )
}

export default FarwordIcon

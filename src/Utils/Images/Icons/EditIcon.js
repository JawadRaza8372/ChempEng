import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <Path
        d="M17.759 6.232l-3.491-3.491a1.25 1.25 0 00-1.768 0l-9.634 9.634a1.24 1.24 0 00-.366.884v3.491A1.25 1.25 0 003.75 18h3.491a1.24 1.24 0 00.884-.366L17.759 8a1.25 1.25 0 000-1.768zM7.24 16.75H3.75V13.26l6.875-6.875 3.491 3.491-6.875 6.875zM15 8.99L11.509 5.5l1.875-1.875 3.491 3.49L15 8.992z"
        fill="#5B53FC"
      />
    </Svg>
  )
}

export default EditIcon

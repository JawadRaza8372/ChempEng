import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotificationIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.1 14.596c0-.38.154-.745.428-1.01l1.03-.994a2 2 0 00.61-1.444l-.01-3.153A7.97 7.97 0 1118.1 7.97v3.2a2 2 0 00.585 1.415l1 1a1.414 1.414 0 01-1 2.414H14.1a4 4 0 01-8 0H1.504A1.404 1.404 0 01.1 14.596zM8.1 16a2 2 0 104 0h-4zm8-4.828A4 4 0 0017.27 14H2.978a4 4 0 001.19-2.858l-.01-3.153A5.97 5.97 0 1116.1 7.97v3.2z"
        fill="#484C52"
      />
    </Svg>
  )
}

export default NotificationIcon

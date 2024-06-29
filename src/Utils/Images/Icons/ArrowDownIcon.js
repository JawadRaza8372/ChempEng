import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrwoDownIcon(props) {
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
        d="M10 20.5a9.97 9.97 0 01-10-10C0 4.992 4.453.5 10 .5c5.508 0 10 4.492 10 10 0 5.547-4.492 10-10 10zm-4.96-9.61c-.118.235-.04.508.116.704l4.375 4.375a.662.662 0 00.899 0l4.375-4.375c.156-.196.234-.469.117-.703a.587.587 0 00-.547-.391h-2.5V6.75c0-.664-.586-1.25-1.25-1.25h-1.25c-.703 0-1.25.586-1.25 1.25v3.75h-2.5c-.273 0-.508.156-.586.39z"
        fill="#E41831"
      />
    </Svg>
  )
}

export default ArrwoDownIcon

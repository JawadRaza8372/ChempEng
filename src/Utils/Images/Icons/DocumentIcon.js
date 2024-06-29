import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DocumentIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={19}
      viewBox="0 0 23 19"
      fill="none"
      {...props}
    >
      <Path
        d="M5.705 14.525a4.815 4.815 0 01-3.327-1.318A4.403 4.403 0 011 10.025c0-1.194.496-2.338 1.378-3.182a4.815 4.815 0 013.327-1.318C5.999 4.212 6.86 3.058 8.1 2.318a5.971 5.971 0 012.025-.749 6.223 6.223 0 012.19.006c.722.131 1.408.39 2.02.76a5.36 5.36 0 011.543 1.397c.408.552.69 1.172.832 1.823.142.65.14 1.32-.006 1.97h1a3.5 3.5 0 110 7h-1M7.705 11.525l3-3m0 0l3 3m-3-3v9"
        stroke="#0C54ED"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DocumentIcon

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WhiteCardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M15.834 3.333a2.5 2.5 0 012.5 2.5v8.334a2.5 2.5 0 01-2.5 2.5H4.167a2.5 2.5 0 01-2.5-2.5V5.833a2.5 2.5 0 012.5-2.5h11.667zm.833 5H3.334v5.834a.833.833 0 00.735.827l.098.006h11.667a.833.833 0 00.827-.736l.006-.097V8.333zm-2.5 2.5a.833.833 0 01.098 1.661l-.098.006h-2.5a.833.833 0 01-.098-1.66l.098-.007h2.5zM15.834 5H4.167a.833.833 0 00-.833.833v.834h13.333v-.834A.833.833 0 0015.834 5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default WhiteCardIcon

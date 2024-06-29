import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function FunnalIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <Rect x={0.00170898} width={25.9981} height={26} rx={6} fill="#fff" />
      <Path
        d="M18.593 9.12l-.005.005-3.795 4.052v3.11a.897.897 0 01-.4.747L12.6 18.23a.897.897 0 01-1.393-.748v-4.305L7.412 9.125l-.005-.005a.897.897 0 01.662-1.5h9.862a.896.896 0 01.663 1.5h-.001z"
        fill="#000"
      />
    </Svg>
  )
}

export default FunnalIcon

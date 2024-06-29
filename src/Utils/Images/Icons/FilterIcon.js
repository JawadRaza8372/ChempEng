import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function FilterIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={26}
      viewBox="0 0 27 26"
      fill="none"
      {...props}
    >
      <Rect x={0.831299} width={25.9981} height={26} rx={6} fill="#fff" />
      <Path
        d="M17.596 9.772a.538.538 0 01.538-.538h1.614a.538.538 0 110 1.076h-1.614a.538.538 0 01-.538-.538zm-9.683.538h6.455v1.076a.538.538 0 00.538.538h1.076a.538.538 0 00.538-.538V8.16a.538.538 0 00-.538-.538h-1.076a.538.538 0 00-.538.538v1.075H7.913a.538.538 0 100 1.076zm11.835 5.38H13.83a.538.538 0 100 1.075h5.918a.538.538 0 100-1.075zm-8.07-1.614h-1.075a.538.538 0 00-.538.538v1.076H7.913a.538.538 0 100 1.075h2.152v1.076a.538.538 0 00.538.538h1.076a.538.538 0 00.538-.538v-3.227a.538.538 0 00-.538-.538z"
        fill="#000"
      />
    </Svg>
  )
}

export default FilterIcon
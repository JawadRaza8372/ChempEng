import * as React from "react"
import Svg, { Path } from "react-native-svg"

function KeyIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M7.71 10.156l-.929.903a.544.544 0 01-.437.191H5.25v1.094c0 .383-.3.656-.656.656H3.5v1.094c0 .383-.3.656-.656.656H.656A.632.632 0 010 14.094v-2.188a.64.64 0 01.191-.465L4.594 7.04c-.164-.465-.219-.957-.219-1.476A4.802 4.802 0 019.188.75 4.82 4.82 0 0114 5.563c0 2.68-2.16 4.812-4.813 4.812-.519 0-1.011-.055-1.476-.219zm2.571-4.594a1.08 1.08 0 001.094-1.093c0-.602-.492-1.094-1.094-1.094a1.08 1.08 0 00-1.094 1.094c0 .629.465 1.093 1.094 1.093z"
        fill="#000"
        fillOpacity={0.88}
      />
    </Svg>
  )
}

export default KeyIcon

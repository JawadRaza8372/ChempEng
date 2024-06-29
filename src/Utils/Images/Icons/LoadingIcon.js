import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LoadingIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={89}
      height={88}
      viewBox="0 0 89 88"
      fill="none"
      {...props}
    >
      <Path
        d="M88.5 44A44 44 0 1155.888 1.5l-1.139 4.25A39.6 39.6 0 1084.1 44h4.4z"
        fill="#5B53FC"
      />
      <Path
        d="M61.5 73.698a34 34 0 00-19.572-63.347l.337 4.442A29.545 29.545 0 0159.273 69.84l2.227 3.858z"
        fill="#9A81FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.164 51.774l-3.306-12.338h-5.052l3.306 12.338h5.052z"
        fill="#5B53FC"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.5 51.774l3.306-12.338h5.052l-3.306 12.338H31.5z"
        fill="#5B53FC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.089 51.737l-3.76-14.035h-5.053l3.77 14.072h5.043v-.037z"
        fill="#5B53FC"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.516 51.737l3.76-14.035h5.052l-3.77 14.072h-5.042v-.037zM48.596 51.774l3.211-16.52h4.971l-3.211 16.52h-4.971z"
        fill="#5B53FC"
      />
    </Svg>
  )
}

export default LoadingIcon

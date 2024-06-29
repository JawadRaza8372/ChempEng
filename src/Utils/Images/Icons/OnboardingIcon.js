import * as React from "react"
import Svg, {
  Rect,
  Path,
  Circle,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient
} from "react-native-svg"

function OnBoardingIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={209}
      height={208}
      viewBox="0 0 209 208"
      fill="none"
      {...props}
    >
      <Rect
        x={0.5}
        width={208}
        height={208}
        rx={16}
        fill="url(#paint0_radial_436_10169)"
        fillOpacity={0.25}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.252 139.999l-14.407-53.77H63.827l14.408 53.77h22.017z"
        fill="#5B53FC"
        fillOpacity={0.4}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.252 139.999l-14.407-53.77H63.827l14.408 53.77h22.017z"
        fill="url(#paint1_linear_436_10169)"
        fillOpacity={0.2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.146 139.838l-16.389-61.165h-22.018L117.172 140h21.974v-.162z"
        fill="#5B53FC"
        fillOpacity={0.4}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.146 139.838l-16.389-61.165h-22.018L117.172 140h21.974v-.162z"
        fill="url(#paint2_linear_436_10169)"
        fillOpacity={0.2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137.917 68l-13.995 72h21.665l13.995-72h-21.665zm-53.568 71.838l16.389-61.165h22.017L106.323 140H84.349v-.162zM49.418 140l14.407-53.772h22.018L71.435 140H49.418z"
        fill="url(#paint3_linear_436_10169)"
      />
      <Circle cx={50} cy={167.5} r={4.5} fill="#5B53FC" />
      <Circle cx={171} cy={42.5} r={5.5} fill="#5B53FC" />
      <Circle cx={45} cy={57.5} r={4.5} fill="#B9B5FE" />
      <Circle cx={159.5} cy={172} r={6} fill="#B9B5FE" />
      <Circle cx={27.5} cy={101} r={3} fill="#B9B5FE" />
      <Circle cx={179.5} cy={62} r={3} fill="#B9B5FE" />
      <Circle cx={89.5} cy={51} r={3} fill="#5B53FC" />
      <Circle cx={119.5} cy={153} r={3} fill="#5B53FC" />
      <Defs>
        <RadialGradient
          id="paint0_radial_436_10169"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 104 -104 0 104.5 104)"
        >
          <Stop stopColor="#9F9AFD" />
          <Stop offset={1} stopColor="#9F9AFD" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="paint1_linear_436_10169"
          x1={82.0399}
          y1={86.2281}
          x2={82.0399}
          y2={139.999}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_436_10169"
          x1={119.942}
          y1={78.673}
          x2={119.942}
          y2={140}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_436_10169"
          x1={104.5}
          y1={68}
          x2={104.5}
          y2={140}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7169FF" />
          <Stop offset={1} stopColor="#5B53FC" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}



export default OnBoardingIcon

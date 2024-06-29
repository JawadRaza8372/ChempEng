import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CryptoICon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_411_14629)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.912 13.865a7.864 7.864 0 11-15.49-2.731 7.864 7.864 0 0115.49 2.731zm-8.779-7.532a.75.75 0 01.75.75v.5h.453v-.5a.75.75 0 011.5 0v.693c.316.135.604.336.845.593a2.69 2.69 0 01.718 1.839c0 .559-.17 1.105-.488 1.556.179.118.345.257.494.416.501.535.775 1.25.775 1.986 0 .737-.274 1.452-.775 1.987a2.66 2.66 0 01-1.569.822v.525a.75.75 0 11-1.5 0V17h-.453v.5a.75.75 0 11-1.5 0V17H9.18a.75.75 0 010-1.5h.031V9.083H9.18a.75.75 0 110-1.5h1.203v-.5a.75.75 0 01.75-.75zm2.344 9.167H10.71v-2.667h2.766c.303 0 .604.128.834.373.231.247.37.592.37.96 0 .37-.139.714-.37.96-.23.246-.531.374-.834.374zM10.71 9.083h2.18c.251 0 .502.106.696.312.195.208.312.5.312.813 0 .313-.117.605-.312.813a.954.954 0 01-.696.312h-2.18v-2.25z"
          fill="#5B53FC"
        />
        <Path
          d="M10.423 22.383c5.459.963 10.664-2.682 11.626-8.14.963-5.459-2.682-10.664-8.14-11.626-5.459-.963-10.664 2.682-11.626 8.14-.963 5.458 2.682 10.664 8.14 11.626z"
          stroke="#9A81FF"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_411_14629">
          <Path fill="#fff" transform="translate(.167 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}



export default CryptoICon

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BillionIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_411_10972)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.362 3.5H5A1.5 1.5 0 003.5 5v15A1.5 1.5 0 005 21.5h8.465a5.74 5.74 0 018.035-7.678V5A1.5 1.5 0 0020 3.5h-2.362a2.162 2.162 0 01-2.153 2.36h-5.97A2.162 2.162 0 017.362 3.5zm1.135 0h8.006a1.04 1.04 0 01-1.018 1.235h-5.97A1.037 1.037 0 018.497 3.5zM7.452 8.543a.75.75 0 100 1.5h8.871a.75.75 0 100-1.5H7.452zm0 3.6a.75.75 0 000 1.5h5.988a.75.75 0 000-1.5H7.452zm-.75 4.35a.75.75 0 01.75-.75h2.994a.75.75 0 010 1.5H7.452a.75.75 0 01-.75-.75z"
          fill="#5B53FC"
        />
        <G clipPath="url(#clip1_411_10972)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.169 18.705a4.31 4.31 0 118.62 0 4.31 4.31 0 01-8.62 0zm6.445-.517a.675.675 0 00-.954-.955l-1.844 1.844-.517-.518a.675.675 0 00-.955.955l.995.995a.675.675 0 00.955 0l2.32-2.321z"
            fill="#9A81FF"
          />
        </G>
        <Path
          d="M8.478 3.698c0-.573.464-1.037 1.037-1.037h5.97a1.037 1.037 0 110 2.074h-5.97a1.037 1.037 0 01-1.037-1.037z"
          fill="#9A81FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_411_10972">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
        <ClipPath id="clip1_411_10972">
          <Path
            fill="#fff"
            transform="translate(13.175 13.4)"
            d="M0 0H10.6094V10.6094H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}


export default BillionIcon

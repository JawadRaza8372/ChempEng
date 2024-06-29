import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ForexIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_411_10906)">
        <Path
          d="M21.753 13.138l1.82-2.61"
          stroke="#5B53FC"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.423 14.472l1.82-2.61M3.243 11.862l.395 2.216a9 9 0 005.932 6.936"
          stroke="#9A81FF"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.753 13.138l-.395-2.215a9 9 0 00-6.046-6.974"
          stroke="#5B53FC"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 16a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-5.214 2.96a2.512 2.512 0 01-2.112-1.149 2.52 2.52 0 01-.242-.476h-.27a.55.55 0 110-1.1h.107v-.475h-.106a.55.55 0 010-1.1h.274a2.515 2.515 0 011.322-1.392 2.513 2.513 0 012.707.421.55.55 0 01-.733.82 1.416 1.416 0 00-2.037.151h.623a.55.55 0 110 1.1h-.95v.475h.59a.55.55 0 010 1.1h-.274a1.413 1.413 0 001.32.508c.272-.042.523-.161.728-.344a.55.55 0 11.733.82 2.513 2.513 0 01-1.68.641z"
          fill="#5B53FC"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.409 11.804a6.486 6.486 0 00-1.186 2.203A5.502 5.502 0 0110 3.3a5.5 5.5 0 015.455 6.204 6.55 6.55 0 00-3.199.295 1.635 1.635 0 00-1.635-1.6H9.38a.436.436 0 110-.87h1.864a.6.6 0 100-1.2h-.644V5.9a.6.6 0 10-1.2 0v.229h-.02a1.636 1.636 0 000 3.27h1.242a.436.436 0 010 .872H8.757a.6.6 0 100 1.2H9.4v.228c0 .036.004.07.01.105z"
        fill="#9A81FF"
      />
      <Defs>
        <ClipPath id="clip0_411_10906">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}





export default ForexIcon

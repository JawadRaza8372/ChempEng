import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OrderIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={22}
      viewBox="0 0 19 22"
      fill="none"
      {...props}
    >
      <Path
        d="M9.38.348l9.345 4.672V16.7L9.38 21.36.037 16.7V5.02L9.381.348zm7.02 5.12L9.38 1.966 6.675 3.312l6.974 3.527 2.752-1.37zM9.38 8.974l2.674-1.326-6.986-3.526L2.362 5.47 9.38 8.973zM1.476 6.637V15.8l7.187 3.594V10.23L1.475 6.637zM10.1 19.395l7.187-3.594V6.637L10.1 10.23v9.165z"
        fill="#484C52"
      />
    </Svg>
  )
}

export default OrderIcon

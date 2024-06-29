import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function MyFlexIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={6}
      height={8}
      viewBox="0 0 6 8"
      fill="none"
      {...props}
    >
      <Path fill="url(#pattern0_361_9393)" d="M0 0H6V8H0z" />
      <Defs>
        <Pattern
          id="pattern0_361_9393"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_361_9393"
            transform="matrix(.04762 0 0 .03571 -.071 0)"
          />
        </Pattern>
        <Image
          id="image0_361_9393"
          width={24}
          height={28}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAHAAAAAAXtdNtAAADA0lEQVRIDa1VTUhUURQ+9/lKM6JEwyGCdLRamIto2yIKWtWioGVqQcsgqKXgFVwqlO4rJmjTIqI2CUK0tlqYm9TRoB8HlGk1qczM7fveu3d6M8+ZcWQOvHfOPb/33HPOvUoahF8Tvada8i13jKj5hF56V89c1VOIyjPj/bfFSCrCG+/WyzqyjpF7DrCu+84pUQvWQxa4g3TBL/ScGF39bvkx5Mc4VRieqJcmlKXh9LKX9weVmFvZfPvvKiYBe08ZRI4mC+fna+24MphXydh1bURb/nQjzmlTN8C6Pn0Nekl82ZzkH9OoEagbAGf4wDqc7tVrfxpxTt2aAdg5IuYKFfez+7oBsPsRKgFS+9k9Dat2kZ3YL9BBv5upgl+c8fLeERpF4a8UfuTkcG5AL+5E+Y6OBciM9z1URg2j509CKRgmq4zhUp8R7CeuiVdKFc+KUZOQlaZ5UQ8cZKBV3XOsXfygdmUBqNAl29suegkr88gYeZ/QK1/Jq5zq6GxY2RuosfPKixykCWc8EgoDwLp7bGXKOefuWBtkcd1qdLTkvfuk2dL2OgmcowBDZRlYA6to3mKd3ZDWhDtfZtgpO1fdLRqZcJqm8A2RAKRwCQ6T2LVNlRQvUYhMnjrnXHXK1plNOThLmtA9tvwCKB0srHNm5pyTv2sAFPMGhSj0c2IHm9L2LRqQGTkZMZ277Bw/FoDtCWESX5ot6BSJK50fl+15sKkbA9aKzFgAvlahtnldbbi4CXTbOjIcRLZz0E/RBtf3E2I6b/XVUdKx9wBVvwnD2PFQmRC0YV59BMkZwQwsaWDJ6H6ioYzumzTifUiMhs9pWQY05q4QZIHnTYtKgGyEPFtMTZqAbrsHhIKruyLFNfIIZQH+G5vZ6HmHquE/J4UJXHzJymJSH/wLHDo3M7SAzxDseH/CKgmlmu+ss9kLLmVwSA5cpHN86UZfrVqBSgGQintYODxNA98+iXAYPiw4nmdN8w5HHq9d9C/vHYCaa+bx0KO/YdpmutQWadkwrTMB0cTfPwd3JmojQtCsAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default MyFlexIcon

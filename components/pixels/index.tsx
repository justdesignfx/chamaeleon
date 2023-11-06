import React from "react"
import s from "./pixels.module.scss"

import cn from "clsx"

type Props = {
  shape: ("x" | "o")[][]
  alignment: "tl" | "tr" | "bl" | "br"
  bg: string
  fill: string
}

const Pixels = (props: Props) => {
  const shape = props.shape.flatMap((innerArray) => innerArray)

  return (
    <div className={cn(s.pixels, [s[props.alignment]])}>
      {Array.from(Array(shape.length).keys()).map((_, i) => {
        return (
          <div
            key={i}
            className={cn(s.pixel, { [s.fill]: shape[i] === "x" })}
            style={{ "--bg": props.bg, "--fill": props.fill } as React.CSSProperties}
          ></div>
        )
      })}
    </div>
  )
}

export default Pixels

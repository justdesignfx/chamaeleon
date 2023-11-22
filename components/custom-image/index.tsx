import { useState } from "react"
import s from "./image.module.scss"

import cn from "clsx"
import NextImage from "next/image"

type Props = {
  className?: string
  style?: React.CSSProperties
  src: string
  loading?: "eager" | "lazy"
  quality?: number
  alt: string
  height: number
  width: number
  [x: string]: any
}

const CustomImage = ({
  src = "",
  className,
  height = 1000,
  width = 1000,
  style,
  loading = "eager",
  quality = 100,
  alt = "",
  ...props
}: Props) => {
  // const [loaded, setLoaded] = useState(loading !== 'lazy')
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      alt={alt}
      src={src}
      className={cn(s.image, className, {
        [s.visible]: loaded,
      })}
      height={height}
      width={width}
      style={{ ...style }}
      loading={loading}
      quality={quality}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  )
}

export default CustomImage

import { useState } from "react"
import s from "./image.module.scss"

import cn from "clsx"

import type { ImageProps } from "next/image"
import NextImage from "next/image"

const CustomImage = ({
  src = "",
  className,
  style,
  loading = "eager",
  height,
  width,
  quality = 100,
  priority,
  alt,
}: ImageProps) => {
  // const [loaded, setLoaded] = useState(loading !== 'lazy')
  const [loaded, setLoaded] = useState(true)

  return (
    <NextImage
      alt={alt}
      src={src}
      className={cn(s.image, className, {
        [s.visible]: loaded,
      })}
      style={{ ...style }}
      loading={loading}
      quality={quality}
      priority={priority}
      onLoad={() => setLoaded(true)}
      {...(height && { height })}
      {...(width && { width })}
    />
  )
}

export { CustomImage }

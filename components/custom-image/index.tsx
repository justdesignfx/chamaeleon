import { useState } from "react"
import s from "./image.module.scss"

import cn from "clsx"

import type { ImageProps } from "next/image"
import NextImage from "next/image"

const CustomImage = ({
  alt,
  className,
  height,
  loading = "eager",
  priority,
  src = "",
  style,
  quality = 100,
  width,
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      alt={alt}
      className={cn(s.image, className, {
        [s.visible]: loaded,
      })}
      loading={loading}
      priority={priority}
      src={src}
      style={{ ...style }}
      onLoad={() => setLoaded(true)}
      quality={quality}
      {...(height && { height })}
      {...(width && { width })}
    />
  )
}

export { CustomImage }

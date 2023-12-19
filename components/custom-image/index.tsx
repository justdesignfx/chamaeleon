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
  placeholder,
  blurDataURL,
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
      {...(blurDataURL && { blurDataURL })}
      {...(placeholder && { placeholder })}
      {...(height && { height })}
      {...(width && { width })}
    />
  )
}

export { CustomImage }

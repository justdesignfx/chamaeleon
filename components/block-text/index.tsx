import React from "react"
import s from "./block-text.module.scss"

type Props = {
  html: string
}
const BlockText = (props: Props) => {
  // console.log("block-text", props)

  return (
    <div className={s.blockText}>
      <article className={s.text} dangerouslySetInnerHTML={{ __html: props.html }}></article>
    </div>
  )
}

export { BlockText }

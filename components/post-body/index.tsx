import React, { FunctionComponent } from "react"
import { BlockProps, PostProps } from "@/types"

import { BlockBody } from "@/components/block-body"
import { BlockImage } from "@/components/block-image"
import { BlockText } from "@/components/block-text"

const blocks = {
  Body: BlockBody,
  Image: BlockImage,
  Text: BlockText,
}

type Props = PostProps

const PostBody = (props: Props) => {
  function renderBlog(data?: BlockProps): React.ReactNode {
    // Don't render anything if the payload is falsey.
    if (!data) return null

    function createComponent(item: BlockProps): React.ReactNode {
      const { data, componentName, id } = item

      if (!data) {
        return React.createElement(blocks[componentName] as FunctionComponent)
      }

      const { components, ...rest } = data

      if (!blocks[componentName]) return

      const el = React.createElement(
        // TODO: This can be improved
        blocks[componentName] as FunctionComponent,
        {
          // Pass all the props coming from the data object.
          ...rest,
          id,
          // Make each react key unique
          key: id,
        } as any,
        // Map if there are components, if not try to render the embedded view as children
        Array.isArray(components) ? components.map(renderer) : renderer(null)
      )

      return React.createElement("div", { className: "post-item" }, el)
    }

    // Don't render anything if the payload is falsey.
    function renderer(config: BlockProps | null): React.ReactNode {
      if (!config) return null

      return createComponent(config)
    }

    return renderer(data)
  }

  return <>{renderBlog(props.body)}</>
}

export { PostBody }

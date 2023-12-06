import React from "react"
import { BlockProps, PostProps } from "@/types"

import { BlockBody } from "@/components/block-body"
import { BlockImage } from "@/components/block-image"
import { BlockText } from "@/components/block-text"

type ComponentList = "Image" | "Text"

enum ComponentNames {
  image = "Image",
  text = "Text",
  body = "Body",
}

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

      // console.log("data", data, componentName, id)

      if (!data) {
        return React.createElement(blocks[componentName])
      }

      const { components, ...rest } = data

      // console.log("block", blocks, componentName)

      if (!blocks[componentName]) return

      const el = React.createElement(
        // TODO: This can be improved
        blocks[componentName],
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

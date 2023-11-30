type Props = {
  fill?: string
  rotate?: number
}

const IconArrow = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L18 9L27 18L18 27L9 18Z" fill={fill} />
        <path d="M0 27L9 18L18 27L9 36L0 27Z" fill={fill} />
        <path d="M0 9L9 0L18 9L9 18L0 9Z" fill={fill} />
      </svg>
    </div>
  )
}

export default IconArrow

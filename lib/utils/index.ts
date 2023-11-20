export const breakpoints = {
  mobile: 800,
}

export function lineBreak(text: string) {
  return text.replace("<br>", "\n")
}

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + "..."
}

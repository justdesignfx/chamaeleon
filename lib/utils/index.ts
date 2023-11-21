export const breakpoints = {
  mobile: 800,
}

export function lineBreak(text: string) {
  return text.replace("<br>", "\n")
}

export function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + "..."
}

export function capitalize(sentence: string): string {
  const words: string[] = sentence.split(" ")
  const capitalizedWords: string[] = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  const result: string = capitalizedWords.join(" ")
  return result
}

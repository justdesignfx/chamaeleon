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

export function shareOnSocialMedia() {
  const title = document.title
  const text = "Check this out!"
  const url = window.location.href

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(`https://producture.justdesignfx.com${location.pathname}`)
      console.log("Content copied to clipboard", `https://producture.justdesignfx.com${location.pathname}`)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  if (navigator.share !== undefined) {
    navigator
      .share({
        title,
        text,
        url,
      })
      .then(() => console.log("Shared!"))
      .catch((err) => console.error(err))
  } else {
    // window.location.href = `mailto:?subject=${title}&body=${text}%0A${url}`
    copyContent()
  }
}

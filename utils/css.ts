const remToPx = (remValue: number) => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  )
  return remValue * rootFontSize
}

const vwToPx = (vwValue: number) => {
  const viewportWidth = window.innerWidth
  return (vwValue * viewportWidth) / 100
}

export const cssLengthStrToPx = (cssLengthStr: string) => {
  if (cssLengthStr.endsWith('px')) {
    return parseFloat(cssLengthStr)
  }
  if (cssLengthStr.endsWith('rem')) {
    return remToPx(parseFloat(cssLengthStr))
  }
  if (cssLengthStr.endsWith('vw')) {
    return vwToPx(parseFloat(cssLengthStr))
  }
  return 0
}

export const formatNumber = (num) => {
  if (num === undefined || num === null) {
    return '0'
  }

  const absNum = Math.abs(num)

  if (absNum >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }

  if (absNum >= 1000) {
    return `${(num / 1000).toFixed(1)}k`
  }

  return num.toString()
}


export const useFormat = () => {
  const period = (startedInfo: string): string => {
    const started = new Date(startedInfo)
    const isInvalidDate = started.getTime()
    if (isInvalidDate) {
      const daysMonth = 365 / 12
      const daysYear = 365
      const now = new Date()
      const diff = now.getTime() - started.getTime()
      let elapsedDay = Math.floor(diff / 86400000)
      const elapsedYear = Math.floor(elapsedDay / daysYear)
      elapsedDay -= elapsedYear * 365
      const elapsedMonth = Math.floor(elapsedDay / daysMonth)
      return `${elapsedYear}年${elapsedMonth}カ月`
    } else {
      return startedInfo
    }
  }

  return {
    period
  }
}

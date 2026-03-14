let studyDates: string[] = []

export function getDates() {
  return studyDates
}

export function addDate(date: string) {
  if (!studyDates.includes(date)) {
    studyDates.push(date)
  }
}



const localizeYearNumber = (year: number): string | undefined => {

  const yearLevels = [
    "first",
    "second",
    "third",
    "fourth"
  ]

  if (year < 1 || year > yearLevels.length) {
    return undefined
  }

  return yearLevels[year - 1]
}

const convertMailTo = (email: string) => {
  return "mailto:" + email
}

export default {
  localizeYearNumber,
  convertMailTo
}
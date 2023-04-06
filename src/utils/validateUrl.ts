const validateUrl = (url: string) => {
  const parsed = new URL(url)
  const urlValidType = ['https:', 'http:']

  const isUrlValid = urlValidType.includes(parsed.protocol)

  if (isUrlValid) return url
  // return new Error('Dangerous URLs Detected!')
  return 'Dangerous URLs Detected!'
}

export default validateUrl

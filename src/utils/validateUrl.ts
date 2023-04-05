const validateUrl = (url) => {
  const parsed = new URL(url)
  const urlValidType = ['https', 'http']

  const isUrlValid = urlValidType.includes(parsed.protocol)

  if (isUrlValid) return url
  return new Error('Dangerous URLs Detected!')
}

export default validateUrl

const MAX_LENGTH = 100

const sliceWords = (words: string) =>
  words.length <= MAX_LENGTH ? words : `${words.slice(0, MAX_LENGTH)}...`

export default sliceWords

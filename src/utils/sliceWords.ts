const MAX_WORDS_LENGTH = 100

const sliceWords = (words: string) =>
  words.length <= MAX_WORDS_LENGTH
    ? words
    : `${words.slice(0, MAX_WORDS_LENGTH)}...`

export default sliceWords

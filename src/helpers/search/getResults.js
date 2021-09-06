import { getLongString } from "../string"
export const getSearchResults = (books, searchTerm) => {
  return books.filter(book => {
    if (searchTerm !== "") {
      const wordRegex = new RegExp(searchTerm.toLowerCase(), "g")

      const { title, genres, tags, authors } = book

      const longString = getLongString(title, genres, tags, authors)

      return wordRegex.test(longString.toLowerCase())
    } else {
      return false
    }
  })
}

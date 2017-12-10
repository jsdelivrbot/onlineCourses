

const selectBook = (book) => {
  // console.log(`A book has selected: ${book.title}`);

  // selectBook is an Action Creator. It needs to return obj that has property name 'type'
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

module.exports = {
  selectBook,
};
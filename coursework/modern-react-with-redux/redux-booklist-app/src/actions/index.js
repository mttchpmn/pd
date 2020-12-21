export function selectBook(book) {
    console.log(`${book.title} has been selected.`);
    // selectBook is an actionCreator and needs to return an action, an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    }
}
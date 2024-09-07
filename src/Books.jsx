import Book from "./Book";

/* eslint-disable react/prop-types */
export default function Books({booksStore}){
    return(
        <div>
            <h3>Books: {booksStore.length}</h3>
            {
                booksStore.map(store => <Book key={store.id} books={store}></Book>)
            }
        </div>
    )
}
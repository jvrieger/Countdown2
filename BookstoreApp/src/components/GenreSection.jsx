import React from 'react'
import '../styles/GenreSection.css'

const GenreSection = ( { genre, bookData } ) => {

    return (
        <>
            <h2>{genre}:</h2>
            <div>
                {bookData.map((book, index) => (
                    <div key={index}>
                        <p>{book.title}, {book.author}, ${book.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GenreSection;
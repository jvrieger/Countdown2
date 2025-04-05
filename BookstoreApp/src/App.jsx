//import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import GenreSection from './components/GenreSection'

const bookData = {
  "fiction": [
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"title": "1984", "author": "George Orwell", "price": 8.50},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
  ],
  "non-fiction": [
    {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
    {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
    {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
  ],
  "children": [
    {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
    {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
    {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
  ]
};

function App() {

  return (
    <>
      <h1>Online Bookstore</h1>
      <div className="buttons">
        <Button label="Hide Fiction"/>
        <Button label="Hide Non-Fiction"/>
        <Button label="Hide Children"/>
      </div>
      <div className="genreSections">
        <GenreSection genre="Fiction" bookData={bookData['fiction']}/>
        <GenreSection genre="Non-Fiction" bookData={bookData['non-fiction']}/>
        <GenreSection genre="Children" bookData={bookData['children']}/>
      </div>
    </>
  )
}

export default App

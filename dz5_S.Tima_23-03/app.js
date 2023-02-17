function filterBooks(...books) {
    let yBooks = [];
    let otherBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].includes('y')) {
            yBooks.push(books[i]);
        } else {
            otherBooks.push(books[i]);
        }
    }
    console.log("Книги, в названиях которых есть буква 'y':");
    console.log(yBooks);
    console.log("Остальные книги:");
    console.log(otherBooks);

}
filterBooks('Winnie-the-Pooh (Alan Alexander Milne)', 'Jeeves and Wooster stories (P.G.Wodehouse)' ,'Harry Potter and the Philosopher’s Stone (J.K. Rowling)' , 'Airport (Arthur Hailey)' , 'The Adventures of Sherlock Holmes (Arthur Conan Doyle)', 'Hitchhiker’s Guide to the Galaxy (Douglas Adams)', 'To Kill a Mockingbird (Harper Lee)', 'Bridget Jones’ Diary (Helen Fielding)', 'Jane Eyre (Charlotte Bronte)', 'Three Men in a Boat (Jerome K. Jerome)');



function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString("привет"));
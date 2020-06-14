## My Library App

This app is an example of management system for the library. It uses simple SQLite  database, Node.js, Express, Pug and SQL ORM Sequelize. 

### What it is doing

- The user can browse the library catalogue. Each entry contains information about the book such as Title, author, genre and year of first publication.
- User can add the books to the database by clicking the "Create New Book" button on the main page. User will be redirected to "New Book" form.
  Form uses validation. The form can't be submitted without filling the "title" or "author" fields. In that case the page will display the error messages.
  If all the required fields will be filled, the form will be submitted, and the book will appear in the database and index page.
- When the entry on the index page is clicked, user will be redirected to the "Edit Book Info" page. On this page user can edit the book informations or delete the book by clicking the "Delete Book" button.
  **!! WARNING !! DELETING A BOOK FROM THE PAGE ALSO DELETES IT FROM THR DATABASE !! WARNING !!**

### How does it work
- ROUTiNG: _main route_ redirects the user to book index route, _new book route_ redirects to "New Book" page, _update book route_ redirects to "Update Book" page. There are also routes for 404 error and 500 error.
- 404: When user tries to access non existing book or URL the "page-not-found" page is rendered.
- 500: Server error will trigger 500 error page redirection.
- All the changes on the page will appear in the database.

### Styling 
- Simple, easy to read Layout.
- The buttons are color coded, and they light up on hover.
- Error messages are in the eye-catching color.
- The colors of the page are visible, but not tiresome for the eyes.

### Setup
1. In the project directory you should run:<br/><br/>
`npm install`<br/><br/> This will download project dependencies which are listed in package.json.<br/><br/>
2. To start an app run:<br/><br/>
    `npm start`<br/><br/>
    and open in a browser http://localhost:3000. The page will automatically reload when you make changes.
    
## Credits
This project uses:
[Sequelize](https://sequelize.org), 
[Sequelize-cli](https://www.npmjs.com/package/sequelize-cli), 
[SQLit](https://www.sqlite.org/index.html), 
[Express](https://expressjs.com) Framework,
[Pug](https://pugjs.org/api/getting-started.html) 

template engine for Node.js and starting files from: [Treehouse](https://teamtreehouse.com). 

Setup readme by: [Monika Frankowska](https://github.com/monifra).  

     

 

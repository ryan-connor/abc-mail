## ABC Mail
Email inspired frontend project.

## Description
Frontend email inspired project to search and display text documents. Using this app a user can perform an inclusive or exclusive search from the listed documents, and then open documents to read in full by clicking on them. Tags can be added to open documents, available tags include `Important` and a dynamic tag based on the search criteria. Once a document is open the user can move through the search constrained documents using the `Next` and `Prev` buttons at the top of the document. Note that this project is frontend only, so all text files are loaded statically, but for a hypothetical full stack version there would be a backend with a database that documents could be fetched from.

## Features
- Inclusive and Exclusive Search, use `-` to search for documents that do not contain the search criteria, example `-apple` will return all results that do not contain `apple`, note that search is case-insensitive
- Tags can be added when a report is open by clicking the tags on the right of the document, or by using number keys. Pressing the 1 key can be used to add an `Important` Tag, pressing the 2 key can be used to add a dynamic search criteria tag if available 
- Reports display in full when selected
- Next/Prev buttons to move through search constrained results in full display mode

## Usage/Install

Clone the project and then cd into the folder.

To install the dependencies, with [npm](https://npmjs.org/) installed, run

```
$ npm install
```

To run the app in development mode, run

```
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

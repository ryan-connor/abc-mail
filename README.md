## ABC Mail
Email inspired frontend project.

## Description
Frontend email inspired project to search and display text documents. Using this app a user can perform an inclusive or exclusive search from the listed documents, and then open documents to read in full by clicking on them. Tags can be added to open documents, available tags include `Important` and a dynamic tag based on the search criteria. Once a document is open the user can move through the search constrained documents using the `Next` and `Prev` buttons at the top of the document. Note that this project is frontend only, so all text files are loaded statically, but for a hypothetical full stack version there would be a backend with a database that documents could be fetched from. Note that the txt files used here are sections of classic books from Project Gutenberg and an arbitrary length of 1000 characters was chosen for the sample txt file body length.

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

## Misc Notes
A script was used to parse the txt files used as the samples for this project. If there was a backend then it is assumed that the backend would parse the files, so a parsing script in the frontend would likely not be needed. The raw files were all committed to github in case anyone wanted to test the script, but note that currently the script just outputs the info to a textarea element, so in order to fully test it the output would need to be modified or rendered.

## Ackowledgements
Thank you to [Project Gutenberg](https://www.gutenberg.org/) for a great free set of classic book txt files to use for sample txt files.
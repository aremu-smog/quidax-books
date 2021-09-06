# Installation and Setup

### Clone this repo

```
git clone https://github.com/aremu-smog/quidax-books.git
```

### Move into the project directory

```
cd quidax-books
```

### Install Packages
```
npm install
```

### Running the App
```
npm start
```
The app will run in your browser at ```http://localhost:3000```


# Assumptions
### Styling (css-in-js)
Since the assessment stated that no css framework should be used. I chose to use styled-components a css-in-js framework which makes it flexible to work with css in React. It does not have any predefined styles or components like bootstrap, semantic UI, and chakra UI.


# Issues Faced
**Search**: The expected fields to for the search query do not have @search directive so the workaround I came up with was to filter the books coming in from the server by concatenating the fields (array fields were converted into a long string) and tested with REGEX to filter the results.



# Feedback
None for now

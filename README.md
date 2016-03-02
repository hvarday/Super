# Super

This project helps understand the implementation of Embedded Javascript(EJS).

-> Wherever in the ejs file '<%= %>' is encountered it puts the value of the variable/resource. This variable can be a object passed on from the backend (index.js).
-> '<% %>' encloses the javascript code. And when the project is run the javascript enclosed inside it is executed. This can be used to create divs dynamically based on quantity or condition.

The index.js file is the backend, it renders index.ejs file and passes along data to index.ejs.

The test1.ejs is the frontend file.

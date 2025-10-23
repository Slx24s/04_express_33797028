Setup: 
npm install express
node index.js

Routes Implemented
1. /contact
URL: http://localhost:8000/contact
Description: Displays contact page
2. /date
URL: http://localhost:8000/date
Description: Displays current date and time
3. /about
URL: http://localhost:8000/about
Description: Displays about page
4. /welcome/:name
URL: http://localhost:8000/welcome/jamal
Description: Displays welcome message with the name from URL parameter
5. /chain
URL: http://localhost:8000/chain
Description: Demonstrates chained route handlers using next() function
First handler adds data to request, second handler processes and sends response
6. /file
URL: http://localhost:8000/file
Description: Serves the a.html file from project root directory


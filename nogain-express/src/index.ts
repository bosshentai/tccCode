
const express = require('express');

const app = express();


const port = 3000;


// Handling '/' Request
app.get('/', (req: any, res: any) => {
  res.send('Hello World');
})

// Sever setup

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
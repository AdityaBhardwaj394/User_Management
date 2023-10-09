const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const apiRoutes = require('./Routes/api');
const PORT = process.env.PORT;
const cookieParser = require('cookie-parser');
const app = express();
// db connection
require('./DB/conn.js');

// Middleware
app.use(cors());
cors({credential:true,origin:'*'})
app.use(express.json());
app.use(cookieParser());
//Routes
app.use('/api',apiRoutes);

app.get('/', (req, res) => {
  res.json('server is Ok');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({error:'Internal Server Error'});
  });
  
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./src/presentation/routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


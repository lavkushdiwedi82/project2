const express = require('express');
const app = express();

// Route to add item to cart
app.post('/add-to-cart', (req, res) => {
    const productId = req.body.productId;
    // Logic to add the product to the user's cart
    res.send('Product added to cart successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
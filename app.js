const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
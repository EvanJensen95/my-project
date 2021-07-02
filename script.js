const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/compliment', (req, res) => {
    const compliments = ['You are beautiful', 'You are an amazing coder', 'You should teach this stuff because you are smarter than anyone I know!', 'Nice hair!', 'Nice shirt!', 'Beautiful smile you have there!']

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
})

function revealMessage() {
    document.getElementById('hiddenMessage').style.display = 'block';
}

function countDown() {
    let currentValue = document.getElementById('countDownButton').innerHTML;
    let newValue = 0;
    if (currentValue > 0) {
        newValue = currentValue - 1;
    }
    document.getElementById('countDownButton').innerHTML = newValue;
}

app.listen(5050, () => console.log("Server running on 5050"));
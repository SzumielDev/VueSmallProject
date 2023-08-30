const express = require('express')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');
const app = express()
const port = 3000
const jsonFromApi = require('./cars.json')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'database'
});

connection.connect(function (err) {
    if (err) throw err;
});

const sortData = (arrayToSort, sortingKey) => {
    if (!sortingKey) {
        return arrayToSort;
    }

    const [key, direction] = sortingKey?.split("-") || [null, null];
    return arrayToSort.sort((a, b) => {
        if (direction === "Asc") {
            return a[key] - b[key];
        }
        if (direction === "Desc") {
            return b[key] - a[key];
        }
        return 0;
    })
}

app.get('/cars', (req, res) => {
    res.set('Content-type', 'application/json')
    res.set('Access-Control-Allow-Origin', '*')

    res.send(sortData(jsonFromApi, req.query.sortingKey))
})

app.get('/cars/featured', (req, res) => {
    res.set('Content-type', 'application/json')
    res.set('Access-Control-Allow-Origin', '*')

    res.send(sortData(jsonFromApi.filter((car) => car.featured), req.query.sortingKey))
})

app.get('/cars/:id', (req, res) => {
    res.set('Content-type', 'application/json')
    res.set('Access-Control-Allow-Origin', '*')

    const carId = req.params.id;

    if (carId) {
        const car = jsonFromApi.find((car) => car.id == carId);

        if (car) {
            res.send({ car, similarCars: jsonFromApi.filter((carToFilter) => carToFilter.id != carId && carToFilter.city === car.city) });
        } else {
            res.status(404).send({ error: "Car not found" });
        }

    } else {
        res.status(400).send({ error: "Bad request" });
    }

})

app.post('/cars/post', (req, res) => {
    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"
    ];
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const formattedDate = `${hours}:${minutes < 10 ? "0" : ""}${minutes}, ${day} ${monthNames[month]} ${year}`

    const newCar = {
        id: jsonFromApi.length + 1,
        date: formattedDate,
        account: req.body.account,
        accountName: req.body.accountName,
        number: req.body.number,
        veryfied: true,
        featured: false,
        city: req.body.city,
        company: req.body.company,
        model: req.body.model,
        image: "image.jpg",
        images: {
            one: "image2.jpg",
            two: "image3.jpg",
        },
        year: req.body.year,
        mileage: req.body.mileage,
        fuel: req.body.fuel,
        power: req.body.power,
        engine: req.body.engine,
        doors: req.body.doors,
        seats: req.body.seats,
        color: req.body.color,
        country: req.body.country,
        registered: req.body.registered,
        vin: req.body.vin,
        price: req.body.price,
        sellerInfo: req.body.sellerInfo,
        description: req.body.description,
    }

    jsonFromApi.push(newCar);
    res.json(jsonFromApi);
})

app.post('/register', [
    body('username').trim().escape(),
    body('email').trim().isEmail().normalizeEmail(),
    body('password').trim(),
    body('number').trim(),
    body('userType').isIn(['0', '1']),
], (req, res) => {
    
    res.set('Content-type', 'application/json')
    res.set('Access-Control-Allow-Origin', '*')

    const valErrors = validationResult(req);
    if (!valErrors.isEmpty()) {
        return res.status(400).json({ errors: valErrors.array() });
    }

    const { username, email, password, number, userType } = req.body;

    const saltRounds = 10;
    const passwordHash = bcrypt.hashSync(password, saltRounds);
    const numberHash = bcrypt.hashSync(number, saltRounds);

    const veryfied = false;

    connection.query(
        `INSERT INTO users (username, password, email, veryfied, number, registration_date, last_login, user_type) 
        VALUES ('${username}', '${passwordHash}', '${email}', '${veryfied}', '${numberHash}',  NOW(), NOW(), '${userType}')`, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
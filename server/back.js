const express = require('express')
const app = express()
const port = 3000
const jsonFromApi = require('./cars.json')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const sortData = (arrayToSort, sortingKey) => {
    if (!sortingKey){
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
            res.send({car, similarCars: jsonFromApi.filter((carToFilter) => carToFilter.id != carId && carToFilter.city === car.city)});
        } else {
            res.status(404).send({error: "Car not found"});
        }

    } else {
        res.status(400).send({error: "Bad request"});
    }

})

app.post ('/cars', (req, res) => {
    console.log(req.body);
    res.json({requestBody: req.body})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
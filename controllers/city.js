const cities = require('cities.json');

// newCityfunction for post city route
const newCity = (req, res, next) => {
    res.json({message: "POST new city"});
};

const getNames = async (req, res, next) => {
    await res.json(cities.filter(el => el.name.substring(0, req.params.prefix.length) === req.params.prefix));
};

module.exports = {
    newCity,
    getNames
};
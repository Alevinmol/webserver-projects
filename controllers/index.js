const awesomeFunction = (req, res, next) => {
    res.json('Jesus Vinay');
}

const dora = (req, res, next) => {
    res.json('Dora Mollinedo');
}

const ale = (req, res, next) => {
    res.json('Alejandra Estrada');
}

module.exports= {awesomeFunction, dora, ale};
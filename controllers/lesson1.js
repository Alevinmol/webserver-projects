const alejandroRoute = (req, res) => {
    res.send("Alejandro Vinay");
};

const jesusRoute = (req, res) => {
    res.send("Jesus Vinay");
};

const doraRoute = (req, res) => {
    res.send("Dora Mollinedo");
};

module.exports = {
    alejandroRoute,
    jesusRoute,
    doraRoute,
};
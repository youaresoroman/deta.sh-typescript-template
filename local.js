var app = require("./dist")["default"];
// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
    console.log('Press Ctrl+C to quit.');
});

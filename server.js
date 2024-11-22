/** Start server for Lunchly. */

const app = require("./app");

app.listen(5501, function() {
  console.log("listening on 5501");
});

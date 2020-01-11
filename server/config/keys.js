// Decide whether to use production or development environment, using NODE_ENV environmental variable set by Heroku

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
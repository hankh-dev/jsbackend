const { Sequelize, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || "development";

const config = require("../config/config.json")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  process.env.LEO_MYSQL_PASS,
  config
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User.js")(sequelize, DataTypes);
db.post = require("./Post.js")(sequelize, DataTypes);
db.comment = require("./Comment.js")(sequelize, DataTypes);

db.post.hasMany(db.comment, {
  foreignKey: 'post_id'
});
db.comment.belongsTo(db.post, {
  foreignKey: "post_id",
});

sequelize
  .sync({ force: true })
  // .sync({ force: false })
  // .sync({ alter: true })
  // .authenticate()
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
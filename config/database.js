import Sequelize from "sequelize";

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const databaseName = process.env.DB_NAME;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const database = new Sequelize(databaseName, user, password, {
  host: host,
  port: port,
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default database;

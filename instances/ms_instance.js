const Sequelize = require("sequelize");
const dbms = new Sequelize("Chinook", "sa", "mic@admin", {
  host: 'PLBIC11',
  dialect: "mssql",
  dialectOptions: {
    options: {
      instanceName: "SQLEXPRESS",
    },
  },
});
(async () => {
  await dbms.authenticate();
})();
module.exports = dbms;
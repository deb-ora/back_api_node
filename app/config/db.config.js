module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Sideral.5",
    DB: "git_ex",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
const db = require('./database');

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

exports.create = (product) => {
  const { name, price } = product;
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO products(name, price) VALUES (?, ?)",
      [name, price],
      function (err) {
        if (err) reject(err);
        resolve({ id: this.lastID, name, price });
      }
    );
  });
};

const Customer = require("../models/customer");

module.exports = app => {
  // Read API Customer
  app.get("/api/customers", (req, res) => {
    Customer.find()
      .then(customers => {
        res.json(customers);
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Post API Customer
  app.post("/api/customers", (req, res) => {
    const newCustomer = new Customer(req.body);
    newCustomer
      .save()
      .then(() => {
        res.json({ info: "Customers Created" });
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Update API Customer
  app.put("/api/customers/:id", (req, res) => {
    Customer.update({ _id: req.params.id }, req.body)
      .then(() => {
        res.json({ info: "Customers Updated" });
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Delete API Customer
  app.delete("/api/customers/:id", (req, res) => {
    Customer.remove({ _id: req.params.id })
      .then(() => {
        res.json({ info: "Customers Deleted" });
      })
      .catch(err => {
        console.error(err);
      });
  });

};

const Vehicle = require("../models/vehicle.js");

module.exports = app => {
  
  // Read API Vehicle
  app.get("/api/vehicles", (req, res) => {
    Vehicle.find()
      .then(vehicles => {
        res.json(vehicles);
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Create API Vehicle
  app.post("/api/vehicles", (req, res) => {
    const newVehicle = new Vehicle(req.body);
    newVehicle
      .save()
      .then(() => {
        res.json({ Info: "Vehicles Created!" });
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Update API Vehicle
  app.put("/api/vehicles/:id", (req, res) => {
    Vehicle.update({ _id: req.params.id }, req.body)
      .then(() => {
        res.json({ info: "Vehicle Updated!" });
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Delete API Vehicle
  app.delete("/api/vehicles/:id", (req, res) => {
    Vehicle.remove({ _id: req.params.id })
      .then(() => {
        res.json({ info: "Vehicles Removed" });
      })
      .catch(err => {
        console.error(err);
      });
  });
};

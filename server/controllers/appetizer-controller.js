const { Appetizer } = require("../models");

const appetizerController = {
  async getAllAppetizer(req, res) {
    try {
      const appetizerItems = await Appetizer.find({});
      res.status(200).json(appetizerItems);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },
  async getOneAppetizer(req, res) {
    try {
      const { id } = req.params;
      const appetizerItem = await Appetizer.findById(id);
      if (!entreeItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        res.status(202).json({ message: `Item: ${id}`, appetizerItem });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  async addOneAppetizer(req, res) {
    try {
      const appetizerItem = await Appetizer.create(req.body);
      res.status(200).json(appetizerItem);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },
  async updateAppetizer(req, res) {
    try {
      const { id } = req.params;
      const appetizerItem = await Appetizer.findByIdAndUpdate(id, req.body);
      if (!appetizerItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        return res
          .status(202)
          .json({ message: "item has been updated", appetizerItem });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },
  async deleteAppetizer(req, res) {
    try {
      const { id } = req.params;
      const appetizerItem = await Appetizer.findByIdAndDelete(id);
      if (!appetizerItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        res.status(200).json({ message: `item has been removed` });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },
};

module.exports = appetizerController;

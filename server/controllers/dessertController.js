const { Dessert } = require("../models");

const dessertController = {
  async getAllDessert(req, res) {
    try {
      const dessertItems = await Dessert.find({});
      res.status(200).json(dessertItems);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },

  async getOneDessert(req, res) {
    try {
      const { id } = req.params;
      const dessertItem = await Dessert.findById(id);
      if (!dessertItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        res.status(202).json({ message: `Item: ${id}`, dessertItem });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },

  async addOneDessert(req, res) {
    try {
      let imgURL = "";
      if (req.file) {
        imgURL = '/uploads/' + req.file.filename;
      }
      const dessertItem = new Dessert({
        ...req.body,
        imgURL: imgURL,
      });
      await dessertItem.save();
      res.status(200).json(dessertItem);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },

  async updateDessert(req, res) {
    try {
      const { id } = req.params;
      let updateData = req.body;
      if (req.file) {
        if (!req.file.filename) {
          return res.status(400).json({ message: "Image upload failed" });
        }
        updateData.imgURL = "/uploads/" + req.file.filename;
      }
      const dessertItem = await Dessert.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      if (!dessertItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        console.log("name of file", req.file);
        return res
          .status(202)
          .json({ message: "item has been updated", dessertItem });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },

  async deleteDessert(req, res) {
    try {
      const { id } = req.params;
      const dessertItem = await Dessert.findByIdAndDelete(id);
      if (!dessertItem) {
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

module.exports = dessertController;

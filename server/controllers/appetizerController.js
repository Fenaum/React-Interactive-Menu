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
      let imgURL = "";
      if (req.file) {
        imgURL = "/uploads/" + req.file.filename;
      }
      const appetizerItem = new Appetizer({
        ...req.body,
        imgURL: imgURL,
      });
      await appetizerItem.save();
      res.status(200).json(appetizerItem);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },

  async updateAppetizer(req, res) {
    try {
      const { id } = req.params;
      let updateData = req.body;
      if (req.file) {
        if (!req.file.filename) {
          return res.status(400).json({ message: "Image upload failed" });
        }
        updateData.imgURL = "/uploads/" + req.file.filename;
      }
      const appetizerItem = await Appetizer.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      if (!appetizerItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        console.log("name of file", req.file);
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

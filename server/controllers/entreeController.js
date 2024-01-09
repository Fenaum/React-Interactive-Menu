const { Entree } = require('../models')

const entreeController = {
  async getAllEntree(req, res) {
    try {
      const entreeItems = await Entree.find({});
      res.status(200).json(entreeItems);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },

  async getOneEntree(req, res) {
    try {
      const { id } = req.params;
      const entreeItem = await Entree.findById(id);
      if (!entreeItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        res.status(202).json({ message: `Item: ${id}`, entreeItem });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },

  async addOneEntree(req, res) {
    try {
      let imgURL = "";
      if (req.file) {
        imgURL = "/uploads/" + req.file.filename;
      }
      const entreeItem = new Entree({
        ...req.body,
        imgURL: imgURL,
      });
      await entreeItem.save();
      res.status(200).json(entreeItem);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },
  
  async updateEntree(req, res) {
    try {
      const { id } = req.params;
      let updateData = req.body;
      if (req.file) {
        if (!req.file.filename) {
          return res.status(400).json({ message: "Image upload failed" });
        }
        updateData.imgURL = "/uploads/" + req.file.filename;
      }
      const entreeItem = await Entree.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      if (!entreeItem) {
        res.status(404).json({ message: `item does not exist` });
      } else {
        console.log("name of file", req.file);
        return res
          .status(202)
          .json({ message: "item has been updated", entreeItem });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: { code: 500, message: err.message } });
    }
  },

  async deleteEntree(req, res) {
    try {
      const { id } = req.params;
      const entreeItem = await Entree.findByIdAndDelete(id);
      if (!entreeItem) {
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

module.exports = entreeController
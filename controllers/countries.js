const { Country, Region } = require("../database/models");

module.exports = {
  // GET
  getAllCountries: async (req, res, next) => {
    try {
      const countries = await Country.findAll({
        include: [
          {
            model: Region,
            as: "regions",
            attributes: ["id", "region", "description"],
          },
        ],
      });
      console.log("All countries:", JSON.stringify(countries, null, 2));
      res.json(countries);
    } catch (error) {
      console.error("Error retrieving countries:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // POST
  createCountry: async (req, res) => {
    const { country, description } = req.body;
    if (!country) {
      return res.status(400).json({ error: "Country is required" });
    }
    try {
      const newCountry = await Country.create({ country, description });
      res
        .status(201)
        .json({ message: "Country created successfully", country: newCountry });
    } catch (error) {
      console.error("Error creating country:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  //DELETE
  deleteCountry: async (req, res) => {
    const { id } = req.params;
    try {
      const country = await Country.findByPk(id);
      if (!country) {
        return res.status(404).json({ error: "Country is not found" });
      }

      await country.destroy();
      // console.log(`Deleted country with ID: ${id}`);
      res.json({ message: `Country with ID: ${id} deleted successfully` });
    } catch (error) {
      console.error("Error deleting country:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // PUT
  updateCountry: async (req, res) => {
    const { id } = req.params;
    const { country, description } = req.body;
    try {
      const countrieToUpdate = await Country.findByPk(id); //
      if (!countrieToUpdate) {
        return res.status(404).json({ error: "Country not found" });
      }

      await countrieToUpdate.update({
        country,
        description,
      });

      console.log(`Updated country with ID: ${id}`);
      res.json({
        message: `Country with ID: ${id} updated successfully`,
        country: countrieToUpdate,
      });
    } catch (error) {
      console.error("Error updating country:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get by Id
  getCountryById: async (req, res) => {
    const { id } = req.params;
    try {
      const country = await Country.findByPk(id);
      if (!country) {
        return res.status(404).json({ error: "Country not found" });
      }
      res.json(country);
    } catch (error) {
      console.error("Error retrieving country by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get by name
  getCountryByName: async (req, res) => {
    const { name } = req.params;
    try {
      const country = await Country.findOne({ where: { country: name } });
      if (!country) {
        return res.status(404).json({ error: "Country not found" });
      }
      res.json(country);
    } catch (error) {
      console.error("Error retrieving country by name:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  //put by name
  updateCountryByName: async (req, res) => {
    const { name } = req.params;
    const { country: newCountrieName, description } = req.body;
    try {
      const countrieToUpdate = await Country.findOne({
        where: { country: name },
      }); //
      if (!countrieToUpdate) {
        return res.status(404).json({ error: "Country not found" });
      }

      await countrieToUpdate.update({
        country: newCountrieName,
        description,
      });

      console.log(`Updated country with name: ${name}`);
      res.json({
        message: `Country with name: ${name} updated successfully`,
        country: countrieToUpdate,
      });
    } catch (error) {
      console.error("Error updating country:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

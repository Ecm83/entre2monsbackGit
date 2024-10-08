"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("wines", {
      /**
       * @param id - integer - not null - autoincrement - primary key
       * @param wine - string - not null - unique
       * @param description - text - nullable
       * @param year - integer - not null
       * @param production - integer - not null
       * @param vineyardAltitude - integer - not null
       * @param img - text - nullable
       * @param cellarId - integer - not null - references cellars.id
       * @param stockId - integer - not null - references stocks.id
       * @param wineTypeId - integer - not null - references wineTypes.id
       * @param sulphiteId - integer - not null - references sulphites.id
       */

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true,
      },
      wine: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      production: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vineyardAltitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      img: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tastingNotes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cellarId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cellars",
          key: "id",
        },
      },
      wineTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "wineTypes",
          key: "id",
        },
      },
      sulphiteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sulphites",
          key: "id",
        },
      },
      stockId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "stocks",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });

    /*
     * Create table wines_icons
     */

    await queryInterface.createTable("wines_icons", {
      wineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "wines",
          key: "id",
        },
      },
      iconId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "icons",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });

    await queryInterface.createTable("wines_labels", {
      wineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "wines",
          key: "id",
        },
      },
      labelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "labels",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("wines_icons");
    await queryInterface.dropTable("wines_labels");
    await queryInterface.dropTable("wines");
  },
};

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class KeyManagerialPersonnel extends Model {}

KeyManagerialPersonnel.init(
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Key Managerial Personnel",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:
        "Our key managerial personnel drive strategy, compliance, and day-to-day leadership across the organization",
    },
    members: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
      comment: "Array of { id, name, position, company, image, bio[], order }",
    },
  },
  {
    sequelize,
    modelName: "KeyManagerialPersonnel",
    tableName: "key_managerial_personnel",
  }
);

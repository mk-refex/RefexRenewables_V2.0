import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class SeniorManagement extends Model {}

SeniorManagement.init(
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Senior Management Personnel",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:
        "Our leadership team brings decades of combined experience across various domains",
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
    modelName: "SeniorManagement",
    tableName: "senior_management",
  }
);

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class BoardOfDirectors extends Model {}

BoardOfDirectors.init(
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Board of Directors",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:
        "Our board comprises experienced professionals who provide strategic guidance and governance",
    },
    members: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
      comment:
        "Array of { id, name, position, din, image, bio[], directorships[], order }",
    },
    ceasedButton: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        label: "RRIL - Directors Ceased",
        url: "/wp-content/uploads/2025/10/RRIL-Ceased-Directors.pdf",
      },
      comment: "{ label, url }",
    },
  },
  {
    sequelize,
    modelName: "BoardOfDirectors",
    tableName: "board_of_directors",
  }
);

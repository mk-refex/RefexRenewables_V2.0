import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class SmtpConfig extends Model {
  constructor(values, options) {
    super(values, options);
  }
}

SmtpConfig.init(
  {
    host: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 587,
    },
    secure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "",
    },
    fromEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    fromName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
    },
    replyToEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "SmtpConfig",
    tableName: "smtp_configs",
  },
);

const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Ticket = require("./Ticket");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

//Relacion db
User.hasMany(Ticket);
Ticket.belongsTo(User);

module.exports = User;

// module.exports = (sequelize) => {
//   sequelize.define('usuario', {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     user: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     mail: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   },{timestamps: false})
// };

// const Alumno = sequelize.define(
//   "Usuario",
//   {
//     key: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

// module.exports = Alumno;
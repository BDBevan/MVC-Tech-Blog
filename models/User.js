// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensure usernames are unique
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return User;
};

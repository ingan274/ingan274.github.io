module.exports = function (sequelize, DataTypes) {
    var work = sequelize.define("work", {
        worktitle: {
            type: DataTypes.STRING,
            allowNull: false,
            Validite: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        codeurl: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [0, 800]
            },
        },
        liveurl: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 800]
            },
        },
        skill1: {
            type: DataTypes.STRING,
            Validite: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        skill2: {
            type: DataTypes.STRING,
            Validite: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        skill3: {
            type: DataTypes.STRING,
            Validite: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        skill4: {
            type: DataTypes.STRING,
            Validite: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        skill5: {
            type: DataTypes.STRING,
            Validite: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        description: {
            type: DataTypes.TEXT,
        },
        imgurl: {
            type: DataTypes.TEXT,
        }

    });
    return work;
};
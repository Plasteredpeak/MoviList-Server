const models = require("../../models");
const { Op } = require("sequelize");

const ServiceError = require("../utils/serviceError");

const Taste = models.Taste;

exports.getUserTaste = async (userId) => {
  try {
    const taste = await Taste.findOne({
      where: {
        userId: userId,
      },
    });

    return taste;
  } catch (error) {
    throw new ServiceError(error.message, 500);
  }
};

exports.updateTaste = async (taste) => {
  try {
    const existingTaste = await Taste.findOne({
      where: {
        userId: taste.userId,
      },
    });

    if (!existingTaste) {
      //create new taste
      const newTaste = await Taste.create(taste);
      if (!newTaste) {
        throw new ServiceError("Could not update taste", 500);
      }

      return newTaste;
    }

    const updatedTaste = await Taste.update(taste, {
      where: {
        userId: taste.userId,
      },
    });

    if (!updatedTaste) {
      throw new ServiceError("Could not update taste", 500);
    }

    return updatedTaste;
  } catch (error) {
    throw new ServiceError(error.message, 500);
  }
};

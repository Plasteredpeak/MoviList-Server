const Validator = require("validatorjs");

const apiResponse = require("../utils/apiResponse");

const tasteServices = require("../services/tasteServices");

exports.getUserTaste = async (req, res) => {
  try {
    const userId = req.userId;

    const taste = await tasteServices.getUserTaste(userId);

    return apiResponse.success(res, req, taste);
  } catch (error) {
    return apiResponse.fail(res, error.message, error.status || 500);
  }
};

exports.updateTaste = async (req, res) => {
  try {
    const validation = new Validator(req.body, {
      reviews: "required|integer",
      compatibility: "required",
    });

    if (validation.fails()) {
      return apiResponse.fail(res, validation.errors, 400);
    }

    req.body.userId = req.userId;

    const taste = await tasteServices.updateTaste(req.body);

    return apiResponse.success(res, req, taste);
  } catch (error) {
    return apiResponse.fail(res, error.message, error.status || 500);
  }
};

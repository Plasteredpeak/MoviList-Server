const Validator = require("validatorjs");

const apiResponse = require("../utils/apiResponse");

const listServices = require("../services/listServices");

exports.getUserList = async (req, res) => {
  try {
    const validation = new Validator(req.params, {
      userId: "required|integer",
    });

    if (validation.fails()) {
      return apiResponse.fail(res, validation.errors, 400);
    }

    const list = await listServices.getUserList(req.params.userId);

    return apiResponse.success(res, req, list);
  } catch (error) {
    return apiResponse.fail(res, error.message, error.status || 500);
  }
};

exports.addToList = async (req, res) => {
  try {
    const validation = new Validator(req.body, {
      type: "required|string|in:movie,series",
      mediaId: "required|string",
      image: "required|string",
      title: "required|string",
      releaseDate: "required|string",
      userId: "required|integer",
      rating: "string",
      userRating: "string",
      status: "required|string|in:completed,planning,watching",
    });

    if (validation.fails()) {
      return apiResponse.fail(res, validation.errors, 400);
    }

    const list = await listServices.addToList(req.body);

    return apiResponse.success(res, req, list);
  } catch (error) {
    return apiResponse.fail(res, error.message, error.status || 500);
  }
};

exports.updateList = async (req, res) => {
  try {
    const validation = new Validator(req.body, {
      type: "string|in:movie,series",
      mediaId: "string",
      image: "string",
      title: "string",
      releaseDate: "string",
      rating: "string",
      userRating: "string",
      userId: "integer",
      status: "string|in:completed,planning,watching",
    });

    if (validation.fails()) {
      return apiResponse.fail(res, validation.errors, 400);
    }

    const list = await listServices.updateList(req.params.id, req.body);

    return apiResponse.success(res, req, list);
  } catch (error) {
    return apiResponse.fail(res, error.message, error.status || 500);
  }
};

exports.deleteFromList = async (req, res) => {
  try {
    const validation = new Validator(req.params, {
      id: "required|integer",
    });

    if (validation.fails()) {
      return apiResponse.fail(res, validation.errors, 400);
    }

    const list = await listServices.deleteFromList(req.params.id);

    return apiResponse.success(res, req, list);
  } catch (error) {
    return apiResponse.fail(res, error.message, error.status || 500);
  }
};

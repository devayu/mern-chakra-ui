const asyncHandler = require('express-async-handler');
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Get Goals api',
  });
});
// @desc Set a goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.payload) {
    res.status(400);
    throw new Error('Text Field cannot be empty');
  }
  res.status(200).json({
    message: 'Set Goals api',
  });
});
// @desc Update a goal
// @route GET /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Update Goals api',
  });
});
// @desc Delete a goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Delete Goals api',
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};

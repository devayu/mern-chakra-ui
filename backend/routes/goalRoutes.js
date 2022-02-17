const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const protectRoute = require("../middlewares/authMiddleware");
const router = express.Router();
// router.get('/', getGoals);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

router.route("/").get(protectRoute, getGoals).post(protectRoute, setGoal);
router
  .route("/:id")
  .put(protectRoute, updateGoal)
  .delete(protectRoute, deleteGoal);

module.exports = router;

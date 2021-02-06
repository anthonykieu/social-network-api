const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/user-controller');
  
// Set up GET all and POST at /api/users
// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .post(addFriend)
  .delete(deleteUser);

  router.route('/:userId/:friendId').delete(removeFriend);

module.exports = router;
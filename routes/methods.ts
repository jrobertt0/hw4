import { Router } from 'express';
import * as MethodsController from '../controllers/methodsController';

const router = Router();

router.route('/').get(MethodsController.example);
router.route('/orderUsersCareer').get(MethodsController.orderUsersCareer);
router.route('/countUsers').get(MethodsController.countUsers);
router.route('/users').get(MethodsController.getUsers);
router.route('/user/:id').get(MethodsController.getUser)
router.route('/addUser').post(MethodsController.addUser);
router.route('/editUser').put(MethodsController.editUser);
router.route('/deleteUser/:id').delete(MethodsController.deleteUser);

export default router;
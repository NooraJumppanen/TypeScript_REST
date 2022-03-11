import { Router } from 'express';
import {
	createTodo,
	getTodos,
	updateTodos,
	removeTodos,
} from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodos);
router.delete('/:id', removeTodos);

export default router;

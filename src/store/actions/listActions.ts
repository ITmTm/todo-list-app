import {
		ADD_LIST,
		ADD_TASK,
		DELETE_LIST,
		DELETE_TASK,
		GET_LIST_BY_ID,
		GET_LISTS,
		List,
		ListsAction,
		SET_LIST_TO_EDIT,
		SET_LISTID_TO_DELETE,
		SET_SELECTED_LIST,
		SET_TASK_TO_DELETE,
		SET_TASK_TO_EDIT,
		Task,
		UNSET_TASK_TO_DELETE, UNSET_TASK_TO_EDIT,
		UPDATE_LIST, UPDATE_TASK
} from "../types";


// Добавляет новый список задач
export const addList = (list: List): ListsAction => {
		return  {
				type: ADD_LIST,
				payload: list
		}
}

// Получает список всех списков задач.
export const getLists = (): ListsAction => {
		return {
				type: GET_LISTS
		}
}

// Получает список задач по его идентификатору.
export const getListyId = (id: string): ListsAction => {
		return {
				type: GET_LIST_BY_ID,
				payload: id
		}
}

// Устанавливает идентификатор списка для удаления.
export const setListIdToDelete = (id: string): ListsAction => {
		return {
				type: SET_LISTID_TO_DELETE,
				payload: id
		}
}

// Устанавливает список для редактирования.
export const setListToEdit = (id: string): ListsAction => {
		return {
				type: SET_LIST_TO_EDIT,
				payload: id
		}
}

// Устанавливает выбранный список.
export const setSelectedList = (id: string): ListsAction => {
		return {
				type: SET_SELECTED_LIST,
				payload: id
		}
}

// Удаляет список задач.
export const deleteList = (id: string): ListsAction => {
		return {
				type: DELETE_LIST,
				payload: id
		}
}

// Обновляет информацию о списке задач.
export const updateList = (id: string, name: string): ListsAction => {
		return {
				type: UPDATE_LIST,
				payload: {
						id,
						name
				}
		}
}

// Добавляет новую задачу в список.
export const addTask = (task: Task, list: List): ListsAction => {
		return {
				type: ADD_TASK,
				payload: {
						task,
						list
				}
		}
}

// Устанавливает задачу для удаления.
export const setTaskToDelete = (task: Task, list: List): ListsAction => {
		return {
				type: SET_TASK_TO_DELETE,
				payload: {
						task,
						list
				}
		}
}

// Сбрасывает задачу для удаления.
export const unsetTaskToDelete = (): ListsAction => {
		return {
				type: UNSET_TASK_TO_DELETE
		}
}

// Удаляет задачу из списка.
export const deleteTask = (task: Task, list: List): ListsAction => {
		return {
				type: DELETE_TASK,
				payload: {
						task,
						list
				}
		}
}

// Устанавливает задачу для редактирования.
export const setTaskToEdit = (task: Task, list: List): ListsAction => {
		return {
				type: SET_TASK_TO_EDIT,
				payload: {
						task,
						list
				}
		}
}

// Сбрасывает задачу для редактирования.
export const unsetTaskToEdit = (): ListsAction => {
		return {
				type: UNSET_TASK_TO_EDIT
		}
}

// Обновляет информацию о задаче.
export const updateTask = (taskId: string, taskName: string, taskState: boolean, list: List): ListsAction => {
		return {
				type: UPDATE_TASK,
				payload: {
						taskId,
						taskName,
						taskState,
						list
				}
		}
}
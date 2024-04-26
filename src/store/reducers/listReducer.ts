import {
		ADD_LIST,
		ADD_TASK,
		DELETE_LIST,
		DELETE_TASK,
		GET_LIST_BY_ID,
		GET_LISTS,
		Lists,
		ListsAction,
		ListState,
		SET_LIST_TO_EDIT,
		SET_LISTID_TO_DELETE,
		SET_SELECTED_LIST,
		SET_TASK_TO_DELETE,
		SET_TASK_TO_EDIT,
		UNSET_TASK_TO_DELETE,
		UNSET_TASK_TO_EDIT,
		UPDATE_LIST,
		UPDATE_TASK
} from "../types";

const initialState: ListState = {
		lists: {},
		listIdToDelete: '',
		listToEdit: null,
		listById: null,
		selectedList: null,
		taskToDelete: null,
		taskToEdit: null
}

// Helper functions
const getListsFromLS = (): Lists => {
		if (localStorage.getItem('task_list')) {
				return JSON.parse(localStorage.getItem('task_list') || '{}')
		}

		return {};
}

const saveListsToLS = (lists: Lists) => {
		localStorage.setItem('task_list', JSON.stringify(lists));
}

// eslint-disable-next-line
export default (state = initialState, action: ListsAction): ListState => {
		const listsFromLS = getListsFromLS();

		switch (action.type) {
				case ADD_LIST:
						const clonedListsFromLS = {...listsFromLS};
						clonedListsFromLS[action.payload.id] = action.payload;
						saveListsToLS(clonedListsFromLS);
						return {
								...state,
								lists: clonedListsFromLS
						}

				case GET_LISTS:
						// Default task
						if (Object.keys(listsFromLS).length === 0) {
								listsFromLS["defaultListId"] = {
										id: "defaultListId",
										name: "Task 1",
										tasks: [
												{
														id: "defaultTaskId",
														name: "Task 1",
														completed: false
												}
										]
								};
								saveListsToLS(listsFromLS);
						}
						return {
								...state,
								lists: listsFromLS
						}

				case GET_LIST_BY_ID:
						const list = listsFromLS[action.payload];
						return  {
								...state,
								listById: list
						}

				case SET_LISTID_TO_DELETE:
						return {
								...state,
								listIdToDelete: action.payload
						}

				case SET_LIST_TO_EDIT:
						const listToEdit = listsFromLS[action.payload];
						return  {
								...state,
								listToEdit
						}

				case DELETE_LIST:
						const clonedListsFromLS2 = {...listsFromLS};
						const listId = clonedListsFromLS2[action.payload].id;
						delete clonedListsFromLS2[action.payload];
						saveListsToLS(clonedListsFromLS2);
						return {
								...state,
								lists: clonedListsFromLS2,
								listIdToDelete: '',
								listById: null,
								selectedList: state.selectedList && listId === state.selectedList.id ? null : state.selectedList
						}

				case UPDATE_LIST:
						const clonedListsFromLS3 = {...listsFromLS};
						clonedListsFromLS3[action.payload.id].name = action.payload.name;
						saveListsToLS(clonedListsFromLS3);
						return {
								...state,
								lists: clonedListsFromLS3,
								listToEdit: null
						}

				case SET_SELECTED_LIST:
						const selectedList = getListsFromLS()[action.payload];
						return {
								...state,
								selectedList: selectedList
						}

				case ADD_TASK:
						const clonedListsFromLS4 = {...listsFromLS};
						clonedListsFromLS4[action.payload.list.id].tasks.push(action.payload.task);
						saveListsToLS(clonedListsFromLS4);
						return {
								...state,
								lists: clonedListsFromLS4,
								selectedList: clonedListsFromLS4[action.payload.list.id]
						}

				case SET_TASK_TO_DELETE:
						return {
								...state,
								taskToDelete: {
										task: action.payload.task,
										list: action.payload.list
								}
						}

				case UNSET_TASK_TO_DELETE:
						return {
								...state,
								taskToDelete: null
						}

				// case DELETE_TASK:
				// 		const clonedListsFromLS5 = {...listsFromLS};
				// 		const clonedTasks = [...clonedListsFromLS5[state.taskToDelete!.list.id].tasks];
				// 		const task = clonedTasks.find(task => task.id === state.taskToDelete!.task.id);
				// 		clonedTasks.slice(clonedTasks.indexOf(task!), 1);
				// 		clonedListsFromLS5[state.taskToDelete!.list.id].tasks = clonedTasks;
				// 		saveListsToLS(clonedListsFromLS5);
				// 		return {
				// 				...state,
				// 				lists: clonedListsFromLS5,
				// 				selectedList: clonedListsFromLS5[state.taskToDelete!.list.id],
				// 				taskToDelete: null
				// 		}

				case DELETE_TASK:
						const clonedListsFromLS5 = { ...listsFromLS };
						const listIdToDeleteTask = state.taskToDelete?.list.id;
						const taskToDeleteId = state.taskToDelete?.task.id;
						const updatedList = {
								...clonedListsFromLS5[listIdToDeleteTask!],
								tasks: clonedListsFromLS5[listIdToDeleteTask!].tasks.filter(task => task.id !== taskToDeleteId)
						};
						clonedListsFromLS5[listIdToDeleteTask!] = updatedList;
						saveListsToLS(clonedListsFromLS5);
						return {
								...state,
								lists: clonedListsFromLS5,
								selectedList: { ...state.selectedList!, tasks: updatedList.tasks },
								taskToDelete: null
						}

				case SET_TASK_TO_EDIT:
						return {
								...state,
								taskToEdit: {
										task: action.payload.task,
										list: action.payload.list
								}
						}

				case UNSET_TASK_TO_EDIT:
						return {
								...state,
								taskToEdit: null
						}

				// case UPDATE_TASK:
				// 		const clonedListsFromLS6 = {...listsFromLS};
				// 		const clonedList = {...clonedListsFromLS6[action.payload.list.id]};
				// 		const clonedTasks2 = [...clonedList.tasks];
				// 		const task2 = clonedTasks2.find(task => task.id === action.payload.taskId);
				// 		const clonedTask = {...task2!};
				// 		clonedTask.name = action.payload.taskName;
				// 		clonedTask.completed = action.payload.taskState;
				// 		const updatedTasks = clonedTasks2.map(task => task.id === clonedTask.id ? clonedTask : task);
				// 		clonedList.tasks = updatedTasks;
				// 		clonedListsFromLS6[clonedList.id] = clonedList;
				// 		saveListsToLS(clonedListsFromLS6);
				//
				// 		return {
				// 				...state,
				// 				lists: clonedListsFromLS6,
				// 				selectedList: clonedList,
				// 				taskToEdit: null
				// 		}

				case UPDATE_TASK:
						const clonedListsFromLS6 = { ...listsFromLS };
						const updatedListForTask = { ...clonedListsFromLS6[action.payload.list.id] };
						updatedListForTask.tasks = updatedListForTask.tasks.map(task =>
								task.id === action.payload.taskId
										? { ...task, name: action.payload.taskName, completed: action.payload.taskState }
										: task
						);
						clonedListsFromLS6[action.payload.list.id] = updatedListForTask;
						saveListsToLS(clonedListsFromLS6);

						return {
								...state,
								lists: clonedListsFromLS6,
								selectedList: updatedListForTask,
								taskToEdit: null
						}


				default:
						return state;
		}
}

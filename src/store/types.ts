export const GET_LISTS = 'GET_LISTS';
export const GET_LIST_BY_ID = 'GET_LIST_BY_ID';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_LISTID_TO_DELETE = 'SET_LISTID_TO_DELETE';
export const SET_LIST_TO_EDIT = 'SET_LIST_TO_EDIT';
export const SET_SELECTED_LIST = 'SET_SELECTED_LIST';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASK_TO_DELETE = 'SET_TASK_TO_DELETE';
export const UNSET_TASK_TO_DELETE = 'UNSET_TASK_TO_DELETE';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_TASK_TO_EDIT = 'SET_TASK_TO_EDIT';
export const UNSET_TASK_TO_EDIT = 'UNSET_TASK_TO_EDIT';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export interface Task {
		name: string;
		id: string;
		completed: boolean;
}

export interface List {
		name: string;
		id: string;
		tasks: Task[];
}

export interface Lists {
		[id: string]: List
}


/* eslint-disable no-unused-vars */
import { createAction } from 'redux-actions';
import { app } from '@/services';

export enum ACTIONS {
	LOAD_IMAGE = 'APP/LOAD_IMAGE',
}

export const loadImageAction = createAction(ACTIONS.LOAD_IMAGE, app.loadImage);

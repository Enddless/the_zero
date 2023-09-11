import * as actions from './actionTypes';

export const selectPost = (postId) => ({
    type: actions.SELECT_POST, //тип экшена (мы его определяли в actionTypes)
    payload: { postId } //данные, которые нам нужно передать в редюсер
})
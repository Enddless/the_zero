import * as actions from './actionTypes';


// здесь свитч с выбором действий для каждого типа описанного в actionTypes
// в моем случае у меня только один тип

// Сам reducer принимает в качестве аргументов state (или равняется пустому массиву) и экшен. 
// Далее мы проверяем тип екшена и в зависимости от этого производим определенные манипуляции со стейтом.
export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.SELECT_POST:
            return action.payload;
        default:
            return state; 
    }
}




// case actions.TASK_ADD:
        //     return [...state, {
        //         id: ++lastId,
        //         title: action.payload.title,
        //         completed: false,
        //     }];
        // case actions.TASK_TOGGLE:
        //     return state.map(task => {
        //         if (task.id === action.payload.id)
        //             return { ...task, completed: !task.completed }
        //         return task;
        //     });
export const getCount = state => { return state.count };


export const getTodoList = state => { return state.todoList.filter((item) => {
    return !item.done;
})};

export const getDoneList = state => { return state.todoList.filter((item) => {
    return item.done;
})};

export const getLearnList = state => { return state.learnList };

export const getIsLoading = state => { return state.isLoading };
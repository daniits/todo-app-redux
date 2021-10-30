const intialState = {
  todos: [
    {
      id: 1,
      content: "codeing",
      completed: false,
    },
  ],
};
const todos = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;

import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  console.log(todos);
  return (
    <Box my={3}>
      {todos.lenght ? (
        todos.map((todo) => <Todo key={`todo-$(todo.id)`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">
          No Todos Yeah!
        </Box>
      )}
    </Box>
  );
};

export default TodoList;

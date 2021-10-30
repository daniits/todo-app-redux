import { Checkbox } from "@chakra-ui/checkbox";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [cheked, isCheked] = useState(false);
  return (
    <Box mb={1} bgColor="lightgreen" p={2}>
      <Checkbox colorScheme="teal" isChecked={cheked}>
        <Text as={todo.compeleted && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};

export default Todo;

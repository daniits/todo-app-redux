import React from "react";
import { useState } from "react";
import { Flex, FormControl, Input, Button } from "@chakra-ui/react";

const Addtodo = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type="text"
            value={value}
            onChange={handleInput}
            borderTopRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="green"
          type="submit"
          disabled={!value}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >
          Add Todo
        </Button>
      </Flex>
    </form>
  );
};

export default Addtodo;

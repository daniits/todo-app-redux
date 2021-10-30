import { Container } from "@chakra-ui/layout";
import { TabList, Tabs, Tab } from "@chakra-ui/tabs";
import React from "react";
import { VISIBILITY_FILTER } from "../constants";

const VisibilityFilter = () => {
  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              <Tab key={`visibility-filter-${currentFilter}`}>
                {currentFilter}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default VisibilityFilter;

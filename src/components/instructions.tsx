import { Box, Button, Collapse } from "@material-ui/core";
import { useState } from "react";
import expImage from "../assets/expResult.png";

const Instructions = () => {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <>
      <hr />
      <Button
        size="small"
        variant="contained"
        endIcon={<div>{collapse ? "-" : "+"}</div>}
        onClick={() => setCollapse(!collapse)}
      >
        Instructions
      </Button>
      <Collapse in={collapse}>
        <Box style={{ fontFamily: "monospace", fontSize: 14 }}>
          <h3>
            The aim of this excercise is to create a list of addresses with
            First Name, Last name, email and address. You should be able to
            search them using search input provided at the top.
          </h3>
          <h4>
            The mock data is already provided in folder
            "src/data/mock_data.json"
          </h4>
          <p>Check "console.log" for the data to get you started</p>

          <ol>
            <li>
              Each item in the list should display at least the First Name, Last
              name, email and address using `flex` or `grid` in their own row.{" "}
              <br />
              Expected result to be something like:
              <br />
              <img src={expImage} alt="expectation" width={400} />
            </li>
            <li>
              The list should also be filterable by `first_name`, i.e., Type "P"
              and it should filter all items that <b>contain</b> "P" in first
              name.{" "}
            </li>
            <li>
              You must create the UI components yourself and feel free to use
              third party libraries such as Material UI.
            </li>
            <li>
              Searching an unvailable tag results in a "No results found with
              keyword" error.
            </li>
            <li>
              Searching also updates the number of items displayed saying,
              "Showing n of 25", when it finds the keywords.
            </li>
            <li>Fix any warnings</li>
          </ol>
          <h3>Good luck!</h3>
        </Box>
      </Collapse>
      <hr />
    </>
  );
};

export default Instructions;

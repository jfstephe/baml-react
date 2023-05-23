import { AppBar, Box, Typography } from "@material-ui/core";
import { FormEvent, useState } from "react";
import Instructions from "./components/instructions";
import data from "./data/mock_data.json";
import { Data } from "./data/data.types";
import UserInfo from "./components/user-info";

export default function App() {
  const [entities, setEntities] = useState(data);

  console.log("data >>>>>>", entities);

  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    const filterText = event.currentTarget.value.toLowerCase();
    setEntities(
      data.filter((datum: Data) => {
        return datum.first_name.toLowerCase().includes(filterText);
      })
    );
  };

  return (
    <Box style={{ fontFamily: "Roboto, sans-serif" }}>
      <AppBar
        variant="elevation"
        position="static"
        style={{ marginBottom: 16, padding: 10 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography>React/TS test for John Stephenson</Typography>
          <input
            className=""
            type="text"
            placeholder="Search by a tag name"
            id="search"
            maxLength={15}
            onChange={onInputChange}
          />
        </div>
      </AppBar>

      <Instructions />

      <Box style={{ marginTop: 20 }}>
        <div>
          Showing {entities.length} of {data.length}
        </div>
        {entities.length > 0 ? (
          entities?.map((p) => <UserInfo key={p.id} data={p} />)
        ) : (
          <div>0 results found with keyword</div>
        )}
      </Box>
    </Box>
  );
}

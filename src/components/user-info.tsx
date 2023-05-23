import { Box } from "@material-ui/core";
import { Data } from "../data/data.types";

interface OwnProp {
  data: Data;
}

const UserInfo = ({ data }: OwnProp) => {
  return (
    <Box
      style={{
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        background: "white",
        border: `1px solid black`,
        borderRadius: 5,
        padding: 5
      }}
    >
      <div>{data.id}</div>
      <div>
        {data.first_name} {data.last_name}
      </div>
      <div>{data.email}</div>
      <div>{data.address}</div>
    </Box>
  );
};

export default UserInfo;

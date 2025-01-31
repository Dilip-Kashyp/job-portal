import { Avatar, Button, Stack } from "../common";

function JobSeekerDashboard() {
  return (
    <>
      <Stack stackProps={{ border: "2px solid red", height: "100vh", p: 4 }}>
        <Stack
          stackProps={{
            border: "2px solid blue",
            height: "100px",
            borderRadius: "10px",
            p: 3,
          }}
        >
          <Avatar />
        </Stack>
        <Stack>
          <Button />
          <Button />
        </Stack>
      </Stack>
    </>
  );
}

export default JobSeekerDashboard;

import { Button, Chip, Paper, Stack, Typography, Avatar } from "../common";
import { FEATURE_PAGE_CONFIG } from "@/constants";

function FeatureCard() {
  const {  APPLY_JOB, JOB_NAME, JOB_DETAILS,  } = FEATURE_PAGE_CONFIG;
  return (
    <Paper
      paperProps={{
        className: "p-4",
        sx: { width: "300px" },
        elevation: 5,
      }}
    >
      <Stack stackProps={{ gap: 3 }}>
        <Stack stackProps={{ direction: "row", gap: 1 }}>
          <Chip
            label={"CPP"}
            sx={{
              backgroundColor: "inherit",
              color: "gray",
              border: "1px solid gray",
            }}
          />
        </Stack>
        <Stack stackProps={{ direction: "row", alignItems: "center", gap: 2 }}>
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
            }
          />
          <Typography {...JOB_NAME("Product Manager")} />
        </Stack>
        <Typography
          {...JOB_DETAILS({ role: "Designer", salary: "4000-5000" })}
        />
        <Button {...APPLY_JOB("Apply Now")} />
      </Stack>
    </Paper>
  );
}

export default FeatureCard;

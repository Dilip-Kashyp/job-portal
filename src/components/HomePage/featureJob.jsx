import { Button, Stack, Typography } from "../common";
import { FEATURE_PAGE_CONFIG } from "@/constants";
import FeatureCard from "./featureCard";

function FeatureJob() {
  const { HOME_HEADER, VIEW_ALL } = FEATURE_PAGE_CONFIG;
  return (
    <Stack stackProps={{ gap: 8}}>
      <Stack stackProps={{ direction: "row", justifyContent: "space-between" }}>
        <Typography {...HOME_HEADER} />
        <Button {...VIEW_ALL("View all")} />
      </Stack>
      <Stack
        stackProps={{
          direction: { xs: "column", md: "row" },
          gap: 4,
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-evenly"
        }}
      >
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </Stack>
    </Stack>
  );
}

export default FeatureJob;

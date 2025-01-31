import { Button, Container, Paper, Stack, Typography } from ".";
import { Router, useRouter } from "next/router";
import {
  FEATURE_WIP_CONFIG,
  JOB_SEEKER_TITLE,
  RECRUITER_TITLE,
} from "@/constants";
import { WarningIcon } from "@/assets";
import { isLoggedInUserJobSeeker } from "@/helper";
import { colorStyles } from "@/styles";

function FeatureWIP({
  title,
  description = "The feature you are trying to access is under development.",
}) {
  const router = useRouter();
  const { userType, name } = {
    name: "John Doe",
    userType: 1,
  };

  const { TITLE_TEXT_CONFIG, DESCRIPTION_TEXT_CONFIG, BUTTON_CONFIG } =
    FEATURE_WIP_CONFIG;
  return (
    <Container
      containerProps={{
        maxWidth: "sm",
        className: "mt-4",
      }}
    >
      <Paper
        paperProps={{
          className: "p-4",
        }}
      >
        <Stack
          stackProps={{
            className: "items-center",
          }}
        >
          {userType !== -1 ? (
            <>
              <Typography
                {...TITLE_TEXT_CONFIG({ text: `Welcome ${name},` })}
              />
              <Typography
                {...DESCRIPTION_TEXT_CONFIG({
                  text: `You are logged in as ${
                    isLoggedInUserJobSeeker({
                      userType,
                    })
                      ? JOB_SEEKER_TITLE
                      : RECRUITER_TITLE
                  }`,
                })}
              />
            </>
          ) : null}
          <WarningIcon style={{ fontSize: "90px", color: "#FFD700" }} />
          <Typography {...TITLE_TEXT_CONFIG({ text: title })} />
          <Typography {...DESCRIPTION_TEXT_CONFIG({ text: description })} />
          <Button {...BUTTON_CONFIG} onClick={() => router.push("/")} />
        </Stack>
      </Paper>
    </Container>
  );
}

export default FeatureWIP;

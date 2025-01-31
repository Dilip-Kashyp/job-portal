import { Paper, Stack, Container, Typography, Button } from "@/components";
import { HOME_PAGE_CONFIG } from "@/constants";
import { useRouter } from "next/navigation";

function HomePage() {
  const {
    HOME_HEADER,
    HOME_TITLE,
    HOME_SUBHEADING,
    LOGIN_BUTTON,
    SIGN_BUTTON,
  } = HOME_PAGE_CONFIG;
  const route = useRouter();
  return (
    <Container
      containerProps={{
        className: "mt-20 flex justify-center ",
      }}
    >
      <Paper
        paperProps={{
          className: "p-10 w-[85%]",
          elevation: 12,
        }}
      >
        <Stack stackProps={{ className: "items-center" }}>
          <Typography {...HOME_HEADER} />
          <Typography {...HOME_TITLE} />
          <Typography {...HOME_SUBHEADING} />
          <Stack stackProps={{ gap: 6, marginTop: "40px", direction: "row" }}>
            <Button {...LOGIN_BUTTON} onClick={() => route.push("/login")} />
            <Button
              {...SIGN_BUTTON}
              onClick={() => route.push("/registration")}
            />
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}

export default HomePage;

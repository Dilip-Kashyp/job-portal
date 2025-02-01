import { Stack, Container, Typography, Button, Input } from "@/components";
import { HOME_PAGE_CONFIG } from "@/constants";
import { useRouter } from "next/navigation";
import { leftHome, rightHome, home } from "@/assets";
import Image from "next/image";
import FeatureJob from "./featureJob";

function HomePage() {
  const { HOME_HEADER, HOME_TITLE, LOGIN_BUTTON, SIGN_BUTTON } =
    HOME_PAGE_CONFIG;
  const route = useRouter();
  return (
    <>
      <Container
        containerProps={{
          className: "mt-32 flex flex-col justify-center gap-8",
        }}
      >
        <Stack stackProps={{ alignItems: "center", gap: 6 }}>
          <Stack
            stackProps={{ direction: "row", justifyContent: "space-between" }}
          >
            <Image src={leftHome.src} width={150} height={100} />
            <Stack stackProps={{ textAlign: "center", width: "50%" }}>
              <Typography {...HOME_HEADER} />
            </Stack>
            <Image src={rightHome.src} width={150} height={100} />
          </Stack>
          <Typography {...HOME_TITLE} />
          <Input
            inputProps={{
              placeholder: "Job Title, keywords......",
              size: "medium",
              variant: "standard",
              sx: { minWidth: 500 },
            }}
          />
          {/* <Image src={home.src} width={1000} height={600} /> */}
        </Stack>
        <FeatureJob />
      </Container>
    </>
  );
}

export default HomePage;

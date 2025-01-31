import { Container, Typography, Stack, Avatar, Link } from "@/components";
import { ABOUT_CONFIG } from "@/constants";
import { profile } from "@/assets";
import Section from "./section";

export default function About() {
  const {
    ABOUT_NAME,
    LANGUAGES,
    FRAMEWORKS,
    DATABASES,
    TOOLS,
    OVERVIEW,
    OVERVIEW_HEADING,
    EDUCATION,
    EDUCATION_HEADING,
    EXPERIENCE,
    EXPERIENCE_HEADING
  } = ABOUT_CONFIG;
  return (
    <Container>
      <Stack stackProps={{ gap: 4, p: { xs: 4, md: 6 } }}>
        <Stack
          stackProps={{
            direction: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <Stack
            stackProps={{
              direction: "column",
              alignItems: "center",
              gap: 4,
              maxWidth: "300px",
            }}
          >
            <Avatar
              src={profile.src}
              sx={{ width: "300px", height: "300px" }}
            />
            <Typography {...ABOUT_NAME} />
            <Stack
              stackProps={{
                direction: "row",
                gap: 3,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Link
                linkProps={{
                  href: "https://github.com/Dilip-Kashyp",
                  target: "_blank",
                }}
              >
                GitHub
              </Link>
              <Link
                linkProps={{
                  href: "https://www.linkedin.com/in/dilip-kashyap/",
                  target: "_blank",
                }}
              >
                LinkedIn
              </Link>
              <Link
                linkProps={{
                  href: "https://dilip-kashyp.github.io/",
                  target: "_blank",
                }}
              >
                Portfolio
              </Link>
            </Stack>
          </Stack>
          <Stack
            stackProps={{
              gap: 4,
              p: { xs: 0, md: 4 },
              flex: 1,
              direction: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Section {...LANGUAGES} />
            <Section {...FRAMEWORKS} />
            <Section {...DATABASES} />
            <Section {...TOOLS} />
          </Stack>
        </Stack>
      </Stack>
      <Stack stackProps={{ gap: 2, p: { xs: 4, md: 6 }, alignItems: "center" }}>
        <Typography {...OVERVIEW_HEADING} />
        <Typography {...OVERVIEW} />

        <Typography {...EDUCATION_HEADING} />
        <Typography {...EDUCATION} />

        <Typography {...EXPERIENCE_HEADING} />
        <Typography {...EXPERIENCE} />

        {/* <Typography {...DESCRIPTION_HEADING} />
        <Typography {...DESCRIPTION} /> */}
      </Stack>
    </Container>
  );
}

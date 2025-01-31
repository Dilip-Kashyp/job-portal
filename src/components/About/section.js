import { Stack, Typography, Chip } from "@/components";
import { SECTION_CONFIG } from "@/constants";
export default function Section({ heading, tags }) {
  const { HEADER } = SECTION_CONFIG;

  return (
    <Stack
      stackProps={{
        gap: 2,
        sx: { width: { xs: "100%", md: "45%" } },
        alignItems: "center",
        height: "100%",
        borderRadius: "10px",
        p: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Typography  {...HEADER(heading)} />
      <Stack
        stackProps={{
          direction: "row",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag.label}
            sx={{
              backgroundColor: "#f1f1f1",
              color: "black",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}

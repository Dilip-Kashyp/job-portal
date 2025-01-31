export const SECTION_CONFIG = {
  HEADER: (heading) => ({
    typographyProps: {
      children: heading,
      variant: "h6",
      sx: {
        textAlign: "center",
      },
    },
  }),
  POINTER: (pointer) => ({
    typographyProps: {
      children: `• ${pointer}`,
      variant: "body1",
      sx: {
        textAlign: "center",
      },
    },
  }),
};


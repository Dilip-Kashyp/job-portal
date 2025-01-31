export const HOME_PAGE_CONFIG = {
  HOME_HEADER: {
    typographyProps: {
      children: "Welcome to Our Job Portal",
      variant: "h4",
    },
  },
  HOME_TITLE: {
    typographyProps: {
      children:
        "Your one-stop solution for finding your dream job or hiring the best talent. Whether you're a Job Seeker or a Recruiter,",
      variant: "body1",
      className: "items-center p-4",
    },
  },
  HOME_SUBHEADING: {
    typographyProps: {
      children: " we are here to simplify your journey.",
      variant: "body1",
      className: "items-center",
    },
  },

  LOGIN_BUTTON: {
    buttonProps: { children: "Login", variant: "contained", size: "medium" },
  },

  SIGN_BUTTON: {
    buttonProps: { children: "register", variant: "outlined", size: "medium" },
  },
};

export const NAVBAR_CONFIG = {
  NAV_BAR_TITLE: (title) => ({
    buttonProps: {
      children: title,
      variant: "h6",
      color: "inherit",
      sx: {
        cursor: "pointer",
        fontSize: "1rem",
      },
      onClick: () => router.push("/"),
    },
  }),
};

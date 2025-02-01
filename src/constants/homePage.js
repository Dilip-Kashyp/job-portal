export const HOME_PAGE_CONFIG = {
  HOME_HEADER: {
    typographyProps: {
      children: "Get your dream job with Find Jobs.",
      variant: "h2",
    },
  },
  HOME_TITLE: {
    typographyProps: {
      children:
        "Your one-stop solution for finding your dream job or hiring the best talent.",
      variant: "h6",
      className: "items-center",
      sx: {
        color: "gray",
      },
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

export const FEATURE_PAGE_CONFIG = {
  HOME_HEADER: {
    typographyProps: {
      children: "Our Features Jobs",
      variant: "h4",
    },
  },

  JOB_NAME: (name) => {
    return {
      typographyProps: {
        children: name,
        variant: "h6",
      },
    };
  },
  JOB_DETAILS: (details) => {
    return {
      typographyProps: {
        children: ` ${details.role}  |  $${details.salary} / Monthly`,
        variant: "body2",
        sx: {
          color: "gray",
        },
      },
    };
  },

  VIEW_ALL: (name) => {
    return {
      buttonProps: {
        children: name,
        variant: "contained",
        size: "medium",
        sx: {
          borderRadius: "100px",
          color: "white",
          backgroundColor: "black",
        },
      },
    };
  },
  APPLY_JOB: (name) => {
    return {
      buttonProps: {
        children: name,
        variant: "outlined",
        size: "medium",
        sx: {
          borderRadius: "100px",
          color: "black",
          backgroundColor: "inherit",
          border: "1px solid black",
        },
      },
    };
  },
};

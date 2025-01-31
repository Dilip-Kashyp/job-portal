import { AppBar, Toolbar, Box } from "@mui/material";
import { Typography, Button, Input } from "@/components";
import { NAVBAR_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { MENU_ITEMS } from "@/constants";

function NavBar() {
  const { NAV_BAR_TITLE } = NAVBAR_CONFIG;
  const router = useRouter();
  const title = "Job Portal";
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          {...NAV_BAR_TITLE(title)}
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          onClick={() => router.push("/")}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.id}
              buttonProps={{
                children: item.label,
                color: "inherit",
              }}
              onClick={() => router.push(item.path)}
            />
          ))}
        </Box>

        <Input
          inputProps={{
            label: "Search",
            size: "small",
            sx: { minWidth: 200 },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

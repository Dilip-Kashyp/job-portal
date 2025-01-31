import { NavBar } from "@/components";

function DashboardLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default DashboardLayout;

import { AboutContainer } from "@/containers";
import { DashboardLayout } from "@/components";

export default function page() {
  return <AboutContainer />;
}

page.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};


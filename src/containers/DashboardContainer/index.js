import { JobSeekerDashboard, RecruiterDashboard } from "@/components";

function DashboradContainer() {
  const userType = 1;
  if (userType === 1) {
    return (
      <>
        <JobSeekerDashboard />
      </>
    );
  } else if (userType === 2) {
    return <RecruiterDashboard />;
  }
}

export default DashboradContainer;

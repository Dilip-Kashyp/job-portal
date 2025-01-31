import { apiClient } from "@/helper";


export async function registerHandler({ email, password, role, name }) {
  const response = await apiClient({
    url: "/user/register",
    method: "POST",
    body: { email, password, role, name },
  });
  return response;
}

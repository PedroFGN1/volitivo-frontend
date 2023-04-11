import { Can } from "@/components/can";
import { useAuth } from "@/hooks/useAuth";
import { setupApiClient } from "@/services/api";
import { withSSRAuth } from "@/utils/withSSRAuth";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <h1>Metrics: {user?.email}</h1>

      <Can
        roles={["USER", "ADMIN"]}
        permissions={["USER_VIEWER", "USER_DELETER"]}
      >
        <Link href="/dashboard">Dashboard</Link>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupApiClient(ctx);

    const response = await apiClient.get("/me");

    console.log(response.data);

    return {
      props: {},
    };
  },
  {
    permissions: ["USER_VIEWER", "USER_DELETER"],
    roles: ["USER", "ADMIN"],
  }
);

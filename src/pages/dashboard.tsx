import { Can } from "@/components/Can";
import { useAuth } from "@/hooks/useAuth";
import { setupApiClient } from "@/services/api";
import { api } from "@/services/apiClient";
import { withSSRAuth } from "@/utils/withSSRAuth";
import Link from "next/link";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button className="block" onClick={signOut}>
        SignOut
      </button>

      <Can
        roles={["USER", "ADMIN"]}
        permissions={["USER_VIEWER", "USER_DELETER"]}
      >
        <Link href="/metrics">Métricas</Link>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});

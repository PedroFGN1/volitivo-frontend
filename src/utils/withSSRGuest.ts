import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

export function withSSRGuest<T>(fn: GetServerSideProps<T>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = ctx.req.cookies;

    if (cookies["nextauth.token"]) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}

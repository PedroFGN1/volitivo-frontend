import { useAuth } from "@/hooks/useAuth";
import { withSSRGuest } from "@/utils/withSSRGuest";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});

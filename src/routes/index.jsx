import { createFileRoute, redirect } from "@tanstack/react-router";
import AccountPage from "../pages/HomePage/HomePage";

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context, location }) => {
    const { isLoggedIn } = context;

    if (!isLoggedIn) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => <AccountPage />,
});

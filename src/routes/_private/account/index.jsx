import { createFileRoute } from "@tanstack/react-router";
import AccountPage from "../../../pages/HomePage/HomePage";

export const Route = createFileRoute("/_private/account/")({
  component: () => <AccountPage />,
});

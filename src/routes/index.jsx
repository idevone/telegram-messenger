import { createFileRoute } from "@tanstack/react-router";
import AccountPage from "../pages/HomePage/HomePage";

export const Route = createFileRoute("/")({
  component: () => <AccountPage />,
});

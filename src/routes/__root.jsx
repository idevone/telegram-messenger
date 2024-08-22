import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Container } from "@mui/material";
export const Route = createRootRoute({
  component: () => {
    return (
      <Container maxWidth="xl">
        <Outlet />
        <TanStackRouterDevtools />
      </Container>
    );
  },
  onError: (err) => console.error(err),
});

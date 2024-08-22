import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { login } from "../../services/api/auth/authApi";
import { useMutation } from "@tanstack/react-query";
import { useUserStoreHook } from "../../store/useUserStore";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { LinearProgress, Alert } from "@mui/material";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setCredentials = useUserStoreHook.useSetCredentials();
  const location = useLocation();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationKey: "auth",
    mutationFn: (values) => login(values),
    onSuccess: (data) => {
      setCredentials(data);
      navigate({
        to: location.search.redirect ?? "/",
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    loginMutation.mutate({ username, password });
  };

  useEffect(() => {
    if (loginMutation.isError) {
      switch (loginMutation.error.response?.status) {
        case 400:
          setError("Не все поля заполнены!");
          break;
        case 401:
          setError("Неверный пароль!");
          break;
        case 403:
          setError("Ваш аккаунт заблокирован!");
          break;
        case 404:
          setError("Пользователь не найден!");
          break;
        default:
          setError("Ошибка сервера!");
          break;
      }
    }
  }, [loginMutation.isError, loginMutation.error]);

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "200px" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Arbitrage Shark Messenger
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Логин"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {loginMutation.isPending ? (
            <LinearProgress />
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
          )}
          {loginMutation.isError && <Alert severity="error">{error}</Alert>}
        </Box>
      </Box>
    </Container>
  );
}

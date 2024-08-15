import { List, Box, Typography, LinearProgress } from "@mui/material";
import AccountItem from "../../modules/AccountItem/AccountItem";
import { useQuery } from "@tanstack/react-query";
import { allAccounts } from "../../services/api/telegram/telegramApi";

export default function HomePage() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: allAccounts,
  });
  const el = data.map((account) => (
    <AccountItem
      key={account?.id}
      first_name={account?.first_name}
      username={account?.username}
      telegram_id={account?.telegram_id}
    />
  ));
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <Typography variant="h4">Привет, dev!</Typography>
      <Typography sx={{ marginBottom: "10px" }} variant="subtitle1">
        Добро пожаловать, в Arbitrage Shark Messenger
      </Typography>
      <Typography sx={{ marginBottom: "20px" }} variant="subtitle1">
        Выбери аккаунт:
      </Typography>
      <List
        sx={{
          display: "flex",
          width: "400px",
          justifyContent: "center",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        {el}
        {isLoading && <LinearProgress />}
      </List>
    </Box>
  );
}

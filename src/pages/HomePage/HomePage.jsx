import { List, Box, Typography } from "@mui/material";
import AccountItem from "../../modules/AccountItem/AccountItem";

export default function HomePage() {
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
        <AccountItem />
      </List>
    </Box>
  );
}

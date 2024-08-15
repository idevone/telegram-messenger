import {
  ListItem,
  Button,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Folder } from "@mui/icons-material";
import { useNavigate } from "@tanstack/react-router";
import { useUserStoreHook } from "../../store/useUserStore";
export default function AccountItem({
  first_name = "",
  username = "",
  telegram_id = "",
}) {
  const navigate = useNavigate();
  const setCredentials = useUserStoreHook.useSetCredentials();

  const onclick = (id) => {
    setCredentials({
      user: {
        first_name,
        username,
      },
    });
    navigate({
      to: "/account/$accountId",
      params: {
        accountId: id,
      },
    });
  };

  return (
    <>
      <ListItem
        sx={{
          border: "1px solid",
          borderRadius: "10px",
        }}
        secondaryAction={
          <Button onClick={() => onclick(telegram_id)} variant="contained">
            Войти
          </Button>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <Folder />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={first_name} secondary={username} />
      </ListItem>
    </>
  );
}

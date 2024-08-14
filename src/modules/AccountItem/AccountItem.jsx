import {
  ListItem,
  Button,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Folder } from "@mui/icons-material";
import { useNavigate } from "@tanstack/react-router";
export default function AccountItem() {
  const navigate = useNavigate();

  const onclick = () => {
    navigate({
      to: "/account/$accountId",
      params: {
        accountId: 12,
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
          <Button onClick={() => onclick()} variant="contained">
            Войти
          </Button>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <Folder />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Single-line item" secondary={"Secondary text"} />
      </ListItem>
    </>
  );
}

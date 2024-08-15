import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Sidebar } from "@chatscope/chat-ui-kit-react";
export default function AccountPanelAction() {
  const [action, setAction] = useState("");

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <Sidebar position="right">
      <Box sx={{ padding: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="change-teg-label">Изменить тег</InputLabel>
          <Select
            labelId="change-teg-label"
            id="dchange-teg"
            value={action}
            label="Изменить тег"
            onChange={handleChange}
            placeholder="Изменить тег"
          >
            <MenuItem value={10}>Совершил оплату</MenuItem>
            <MenuItem value={20}>Совершил повторную оплату</MenuItem>
            <MenuItem value={30}>Игнор</MenuItem>
          </Select>
        </FormControl>
        <List>
          <ListItem>
            <ListItemText
              primary="Single-line item"
              secondary={"Secondary text"}
            />
          </ListItem>
        </List>
      </Box>
    </Sidebar>
  );
}

import {
  Avatar,
  Sidebar,
  Search,
  Conversation,
  ConversationList,
} from "@chatscope/chat-ui-kit-react";
import { useNavigate } from "@tanstack/react-router";
export default function AccountChats({
  chats = [],
  activeChat,
  isLoading = false,
}) {
  const navigate = useNavigate();

  const onActiveChat = (chatId) =>
    navigate({
      search: () => ({ chatId }),
    });
  const el = chats.map((chat) => (
    <Conversation
      active={activeChat === chat?.id}
      onClick={() => onActiveChat(chat?.id)}
      key={chat?.id}
      info={chat?.id}
      lastSenderName={chat?.title}
      name={chat?.title}
    >
      {/* <Avatar
        name="Lilly"
        src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
        status="available"
      /> */}
    </Conversation>
  ));
  return (
    <Sidebar position="left">
      <Search placeholder="Search..." />
      <ConversationList loading={isLoading}>{el}</ConversationList>
    </Sidebar>
  );
}

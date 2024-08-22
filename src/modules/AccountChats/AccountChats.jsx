import {
  Avatar,
  Sidebar,
  Search,
  Conversation,
  ConversationList,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import { useNavigate } from "@tanstack/react-router";
import { useUserStoreHook } from "../../store/useUserStore";
export default function AccountChats({
  chats = [],
  activeChat,
  isLoading = false,
}) {
  const navigate = useNavigate();
  const user = useUserStoreHook.useUser();

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
      <ConversationHeader>
        <ConversationHeader.Back
          onClick={() =>
            navigate({
              to: "/account",
            })
          }
        />
        <ConversationHeader.Content
          userName={user?.first_name ?? ""}
          info={user?.username ?? ""}
        />
      </ConversationHeader>
      <ConversationList loading={isLoading}>{el}</ConversationList>
    </Sidebar>
  );
}

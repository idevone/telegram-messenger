import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import { useUserStoreHook } from "../../store/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import { allMessagesChat } from "../../services/api/telegram/telegramApi";
import { format } from "date-fns";
export default function AccountMessages() {
  const { accountId } = useParams({ strict: false });
  const { chatId = "" } = useSearch({ strict: false });
  const user = useUserStoreHook.useUser();
  const { data = [], isLoading } = useQuery({
    queryKey: ["messages", accountId, chatId],
    queryFn: () => allMessagesChat({ accountId, chatId }),
    enabled: !!chatId,
  });

  console.log(data);
  const filterMessages = data.filter((msg) => msg?.sender_id !== null);

  const el = filterMessages.map((msg) => {
    if (msg?.senderId) {
      return (
        <Message
          key={msg.id}
          model={{
            direction:
              msg?.senderId?.userId === accountId ? "outgoing" : "incoming",
            message: msg.text,
            sender: "Patrik",
            sentTime: formatDate(msg.date),
          }}
        />
      );
    }
  });
  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back />
        <ConversationHeader.Content
          userName={user?.first_name ?? ""}
          info={user?.username}
        />
      </ConversationHeader>
      <MessageList loading={isLoading}>
        {el}
        {/* <Message
          model={{
            direction: "outgoing",
            message: "Hello my friend",
            sender: "Patrik",
            sentTime: "15 mins ago",
          }}
        />

        <Message
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "last",
            sender: "Zoe",
            sentTime: "15 mins ago",
          }}
        >
          <Avatar
            name="Zoe"
            src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
          />
        </Message> */}
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  );
}

const formatDate = (timestamp) => {
  return format(new Date(timestamp), "yyyy-MM-dd HH:mm");
};

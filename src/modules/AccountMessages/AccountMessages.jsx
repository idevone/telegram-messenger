import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import {
  allMessagesChat,
  sendMessage,
} from "../../services/api/telegram/telegramApi";
import { format } from "date-fns";
import { useEffect, useState } from "react";
export default function AccountMessages({ chats = [] }) {
  const { accountId } = useParams({ strict: false });
  const { chatId = "" } = useSearch({ strict: false });
  const [chat, setChat] = useState({ id: "", title: "" });

  const queryClient = useQueryClient();
  const { data = [], isLoading } = useQuery({
    queryKey: ["messages", accountId, chatId],
    queryFn: () => allMessagesChat({ accountId, chatId }),
    enabled: !!chatId,
  });

  useEffect(() => {
    const c = chats.find((chat) => chat.id === chatId);
    setChat(c);
  }, [chatId]);

  const sendMutation = useMutation({
    mutationKey: "messages",
    mutationFn: (text) => sendMessage({ accountId, chatId, text }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: "messages" }),
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
          userName={chat?.title ?? ""}
          info={chat?.id ?? ""}
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
      <MessageInput
        placeholder="Type message here"
        onSend={(innerHtml, text, innerText) => sendMutation.mutate(text)}
      />
    </ChatContainer>
  );
}

const formatDate = (timestamp) => {
  return format(new Date(timestamp), "yyyy-MM-dd HH:mm");
};

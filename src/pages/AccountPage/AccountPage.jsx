import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  Sidebar,
  ExpansionPanel,
} from "@chatscope/chat-ui-kit-react";
import { useParams, useSearch } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { allChats } from "../../services/api/telegram/telegramApi";
import AccountMessages from "../../modules/AccountMessages/AccountMessages";
import AccountChats from "../../modules/AccountChats/AccountChats";
import { useState } from "react";
import AccountPanelAction from "../../modules/AccountPanelAction/AccountPanelAction";

export default function AccountPage() {
  const { accountId } = useParams({ strict: false });
  const { chatId = "" } = useSearch({ strict: false });

  const { data = [], isLoading } = useQuery({
    queryKey: ["chats", accountId],
    queryFn: () => allChats(accountId),
    enabled: !!accountId,
  });
  return (
    <MainContainer
      responsive
      style={{
        height: "900px",
      }}
    >
      <AccountChats isLoading={isLoading} chats={data} activeChat={chatId} />
      <AccountMessages />
      <AccountPanelAction />
    </MainContainer>
  );
}

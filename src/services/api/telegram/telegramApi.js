import { instance } from "../baseApi";

export const allAccounts = async () => {
  const response = await instance.get("telegram/accounts");
  return response.data;
};

export const allChats = async (accountId) => {
  const response = await instance.get(`telegram/chats/${accountId}`);
  return response.data;
};

export const allMessagesChat = async ({ accountId, chatId }) => {
  const response = await instance.get(
    `telegram/messages/${accountId}/${chatId}`
  );
  return response.data;
};

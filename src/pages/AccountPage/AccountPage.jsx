import * as React from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  Sidebar,
  Search,
  Conversation,
  ConversationList,
  MessageSeparator,
  ExpansionPanel,
} from "@chatscope/chat-ui-kit-react";
export default function AccountPage() {
  return (
    <MainContainer
      responsive
      style={{
        height: "900px",
      }}
    >
      <Sidebar position="left">
        <Search placeholder="Search..." />
        <ConversationList>
          <Conversation
            active
            info="Yes i can do it for you"
            lastSenderName="Lilly"
            name="Lilly"
          >
            <Avatar
              name="Lilly"
              src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
              status="available"
            />
          </Conversation>
        </ConversationList>
      </Sidebar>
      <ChatContainer>
        <ConversationHeader>
          <ConversationHeader.Back />
          <ConversationHeader.Content userName="Zoe" />
        </ConversationHeader>
        <MessageList>
          <MessageSeparator content="Saturday, 30 November 2019" />
          <Message
            avatarSpacer
            model={{
              direction: "outgoing",
              message: "Hello my friend",
              position: "single",
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
          </Message>
        </MessageList>
        <MessageInput placeholder="Type message here" />
      </ChatContainer>
      <Sidebar position="right">
        <ExpansionPanel open title="INFO">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </ExpansionPanel>
        <ExpansionPanel title="LOCALIZATION">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </ExpansionPanel>
        <ExpansionPanel title="MEDIA">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </ExpansionPanel>
        <ExpansionPanel title="SURVEY">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </ExpansionPanel>
        <ExpansionPanel title="OPTIONS">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </ExpansionPanel>
      </Sidebar>
    </MainContainer>
  );
}

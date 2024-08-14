import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/account/chat/$chatId')({
  component: () => <div>Hello /_private/account/chat/$chatId!</div>
})
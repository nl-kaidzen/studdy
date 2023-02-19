import { Client, Account } from 'appwrite'

export const client = new Client()

client
  .setEndpoint('http://localhost/v1')
  .setProject('63f122c834826fb2f777')

export const account = new Account(client)

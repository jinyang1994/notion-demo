import { Client } from '@notionhq/client'

async function main(accessToken: string) {
  const notion = new Client()
  const listUsersResponse = await notion.users.list({ auth: accessToken })

  console.log(listUsersResponse)
}

main(process.env.ACCESS_TOKEN as string)

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type Res = NextApiResponse<Data>
export default function handler(
  req: NextApiRequest,
  res: Res
) {
  res.status(200).json({ name: 'John Doe' })
}

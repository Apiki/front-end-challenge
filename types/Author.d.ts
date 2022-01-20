import { Avatar } from './Avatar';

export type Author = {
  className: string,
  name: string,
  avatar_urls: [Avatar]
  size: number
}
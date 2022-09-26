import moment from "moment";

export function relativeDateFormatter(date: string) {
  return moment(date).fromNow();
}
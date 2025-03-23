/* 
* Este módulo recebe uma string de data ISO (no formato isoString) e a converte para um formato de data e hora específico

*/

export default function DateFormatter(
  isoString: string,
  fullTime: boolean = true
): string {
  const date = new Date(isoString);
  let options: Intl.DateTimeFormatOptions;
  if (fullTime)
    options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/Sao_Paulo",
    };
  else {
    options = {
      day: "2-digit",
      month: "long",
      year: "numeric",

      hour12: false,
      timeZone: "America/Sao_Paulo",
    };
  }

  return new Intl.DateTimeFormat("pt-BR", options)
    .format(date)
    .replace(",", "");
}

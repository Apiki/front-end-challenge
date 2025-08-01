import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
  format,
  parseISO,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string | Date) {
  return format(parseISO(date.toString()), "dd/MM/yyyy");
}

export function formatTime(date: string | Date) {
  return format(parseISO(date.toString()), "HH:mm:ss");
}

export function formatDateTime(date: string | Date) {
  return format(parseISO(date.toString()), "dd/MM/yyyy - HH:mm");
}

export function formatDateTimeWithRelative(date: string | Date): string {
  if (!date) return "Sem data disponível";

  const d = typeof date === "string" ? parseISO(date) : date;
  const now = new Date();

  const mins = differenceInMinutes(now, d);
  let rel: string;
  if (mins < 1) {
    rel = "Agora";
  } else if (mins < 60) {
    rel = `${mins} Min`;
  } else {
    const hrs = differenceInHours(now, d);
    if (hrs < 24) {
      rel = `${hrs} Hrs`;
    } else {
      const days = differenceInDays(now, d);
      if (days < 30) {
        rel = `${days} Dias`;
      } else {
        const months = differenceInMonths(now, d);
        if (months < 12) {
          rel = `${months} Meses`;
        } else {
          const years = differenceInYears(now, d);
          rel = `${years} anos`;
        }
      }
    }
  }

  const fixed = format(d, "MMMM dd',' yyyy", { locale: ptBR });

  return `${rel} • ${fixed}`;
}

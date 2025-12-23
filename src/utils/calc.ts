export function dateTohhmm(date: Date) {
  return date?.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function dateToddmmyyyy(date: Date) {
  return date
    ?.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\./g, ".");
}

export function dateToddmm(date: Date) {
  return date
    ?.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
    })
    .replace(/\./g, ".");
}

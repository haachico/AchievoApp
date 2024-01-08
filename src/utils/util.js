export function formatDate(
  dateString,
  formatOptions = { day: "numeric", month: "short", year: "numeric" }
) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", formatOptions);
}

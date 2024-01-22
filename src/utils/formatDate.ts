export function formatDate(dateString: string): string {
  if (dateString !== undefined) {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Set to true for 12-hour clock format
    });
  }
  return "Unknown Date";
}

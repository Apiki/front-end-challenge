export function extractYoastDescription(html: string): string {
  const match = html?.match(
    /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/,
  );
  return match ? match[1] : "";
}

export const formatName = (name: string): string =>
  name.replace(/\s*\(.*?\)\s*/g, "").trim();

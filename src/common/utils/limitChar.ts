const limitChar = (char: string, count: number = 10) =>
  char.slice(0, count) + (char.length > count ? "..." : "");

export default limitChar;

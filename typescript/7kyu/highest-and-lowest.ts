export class Kata {
  static highAndLow(numbers: string): string {
    const numTable = numbers.split(" ").map(Number);
    const highest = Math.max(...numTable);
    const lowest = Math.min(...numTable);
    
    return `${highest} ${lowest}`;
  }
}

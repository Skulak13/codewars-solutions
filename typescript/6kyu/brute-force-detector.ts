export function detectBruteForce(logs: string[]): string[] {
    let failCounts: Record<string, number> = {};
    let suspicious = new Set<string>();
  
    logs.forEach(log => {
      const logTable = log.split(" ");
      
      if (logTable[1] === "LOGIN_FAIL") {
        failCounts[logTable[0]] = (failCounts[logTable[0]] || 0) + 1;
        
        if (failCounts[logTable[0]] >= 3) {
          suspicious.add(logTable[0]);
        }
      } else {
        failCounts[logTable[0]] = 0;
      }
    })
  
    return [...suspicious].sort();
}

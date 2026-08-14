export function humanReadable(seconds:number):string {
  const hours = Math.floor(seconds / 3600);
  
  const remaining = seconds % 3600;
  
  const min = Math.floor(remaining / 60);
  const sec = Math.floor(remaining % 60);
  
  return `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

}

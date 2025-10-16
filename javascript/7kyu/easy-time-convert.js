// Codewars kata: "Easy Time Convert"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/5a084a098ba9146690000969
// Date completed: 2025-09-26

// Description: Given a number representing minutes, convert it to a time string (HH:MM).

function timeConvert(num) {
  const h = Math.floor(num / 60);
  const m = num % 60;
  
  return num <= 0 ? "00:00" : `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

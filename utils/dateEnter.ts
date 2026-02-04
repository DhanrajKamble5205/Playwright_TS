export { Page } from '@playwright/test';

export function getDate(dayAdd: number): string {
  const d = new Date();
  d.setDate(d.getDate() + dayAdd);

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${year}-${month}-${day}`;
}

// const start = getDate(0);   // today
// const end = getDate(30);    // +30 days

// console.log(start, end);

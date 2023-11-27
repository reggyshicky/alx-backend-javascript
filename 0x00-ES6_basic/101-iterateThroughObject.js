export default function iterateThroughObject(reportWithIterator) {
  let Empstring = '';
  for (const emp of reportWithIterator) {
    Empstring += `${emp} | `;
  }
  return Empstring;
}

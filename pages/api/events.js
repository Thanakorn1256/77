export default async function handler(req, res) {
  const response = await fetch('https://prolap-7543d-default-rtdb.asia-southeast1.firebasedatabase.app/Eventlist.json');
  const data = await response.json();
  res.status(200).json(data);
}
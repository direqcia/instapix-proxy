export default async function handler(req, res) {
  const upstream = 'http://api.instapix.ge:29998/Stat';
  const r = await fetch(upstream);
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}

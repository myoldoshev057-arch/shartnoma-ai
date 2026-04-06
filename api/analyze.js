// api/analyze.js - BU FAYLNI GitHub'ga yuklang
export default async function handler(req, res) {
  // CORS ruxsat
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { text, lang, messages, type } = req.body;
  
  // To'lov tekshiruvi (keyinroq qo'shamiz)
  // const token = req.headers['x-user-token'];
  // if (!await verifyToken(token)) return res.status(401).json({error:'Ruxsat yo\'q'});

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY, // Vercel env da yashiringan
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: type === 'chat' ? 600 : 2500,
      system: req.body.system,
      messages: messages || [{ role: 'user', content: text }]
    })
  });

  const data = await response.json();
  res.json(data);
}

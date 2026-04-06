// api/analyze.js — Vercel Serverless Function
// Bu faylda API kalit yashiringan — foydalanuvchilar ko'ra olmaydi

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-user-token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ─── TOKEN TEKSHIRUVI ───────────────────────────────────────────
  // Har bir to'lagan foydalanuvchiga token berasiz (qo'lda yoki Gumroad orqali)
  // Hozircha: DEMO_MODE = hamma foydalana oladi (dastlabki testlar uchun)
  // Keyinchalik: tokenlarni Vercel KV yoki oddiy JSON faylda saqlaysiz

  const DEMO_MODE = process.env.DEMO_MODE === 'true'; // Vercel env da o'rnating
  const userToken = req.headers['x-user-token'];
  const VALID_TOKENS = (process.env.VALID_TOKENS || '').split(',').filter(Boolean);

  if (!DEMO_MODE && VALID_TOKENS.length > 0) {
    if (!userToken || !VALID_TOKENS.includes(userToken)) {
      return res.status(401).json({ error: 'token_invalid', message: 'To\'lov qilinmagan yoki token noto\'g\'ri.' });
    }
  }

  // ─── API SO'ROVI ────────────────────────────────────────────────
  try {
    const body = req.body;
    
    if (!body || (!body.messages && !body.text)) {
      return res.status(400).json({ error: 'bad_request', message: 'Matn kiritilmagan.' });
    }

    const messages = body.messages || [{ role: 'user', content: body.text }];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: body.maxTokens || 2500,
        system: body.system,
        messages: messages
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      return res.status(response.status).json({ error: 'api_error', message: errData.error?.message });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'server_error', message: 'Server xatoligi yuz berdi.' });
  }
}

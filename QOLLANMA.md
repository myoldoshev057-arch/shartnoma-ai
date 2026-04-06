# ShartnomAI — To'liq O'rnatish Qo'llanmasi
## Barcha bosqichlar ketma-ket

---

## 📁 FAYL TUZILMASI
Quyidagi 3 ta faylni bir papkaga qo'ying:

```
shartnoma-ai/
├── index.html          ← Asosiy sayt
├── api/
│   └── analyze.js      ← Backend (API kalitni yashiradi)
└── vercel.json         ← Vercel sozlamalari
```

---

## 🚀 1-BOSQICH: GitHub'ga yuklash

1. **github.com** ga kiring (hisob oching, bepul)
2. Yuqori o'ngda **"+"** → **"New repository"** bosing
3. Nom: `shartnoma-ai` → **Public** → **Create repository**
4. **"uploading an existing file"** ga bosing
5. 3 ta faylni tortib tashlang (`index.html`, `api/analyze.js`, `vercel.json`)
6. **"Commit changes"** bosing

---

## ⚡ 2-BOSQICH: Vercel'da ishga tushirish

1. **vercel.com** ga kiring → **"Sign up with GitHub"**
2. **"Add New Project"** → `shartnoma-ai` ni tanlang → **"Deploy"**
3. 2 daqiqada saytingiz tayyor!

Siz manzil olasiz:
```
https://shartnoma-ai.vercel.app
```

---

## 🔐 3-BOSQICH: API kalitni yashirish (MUHIM!)

Vercel saytida:
1. **Settings** → **Environment Variables**
2. Quyidagilarni qo'shing:

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-api03-sizning-kalitingiz` |
| `DEMO_MODE` | `true` (hozircha hamma bepul kirita olsin) |

3. **Redeploy** qiling (Settings → Deployments → Redeploy)

---

## 💳 4-BOSQICH: To'lov tizimini ulash

### Eng oson yo'l — Gumroad (5 daqiqa):

1. **gumroad.com** ga kiring → hisob oching
2. **"New Product"** → **"Digital Product"**
3. 3 ta mahsulot yarating:
   - **Starter** — $9.99/oy — "20 ta tahlil uchun token"
   - **Pro** — $29.99/oy — "Cheksiz tahlil uchun token"  
   - **Bir marta** — $3.99 — "3 ta tahlil uchun token"
4. Har bir mahsulot linkini nusxalang

### `index.html` faylida linkni o'zgartiring:

```javascript
// Bu qatorlarni toping va o'z linklaringizni qo'ying:
const PAY_LINKS = {
  starter: 'https://SIZNING_ISMINGIZ.gumroad.com/l/starter',
  pro:     'https://SIZNING_ISMINGIZ.gumroad.com/l/pro',
  single:  'https://SIZNING_ISMINGIZ.gumroad.com/l/single'
};
```

---

## 🎟️ 5-BOSQICH: Token tizimi

Har bir to'lagan mijozga **token** berasiz. Token formati:
```
SH-XXXX-XXXX-XXXX
```
Masalan: `SH-A1B2-C3D4-E5F6`

### Tokenni saqlash (hozircha qo'lda):

`api/analyze.js` faylidagi `VALID_TOKENS` ni to'ldiring:

```
VALID_TOKENS = SH-A1B2-C3D4-E5F6,SH-G7H8-I9J0-K1L2,SH-M3N4-O5P6-Q7R8
```

Vercel → Settings → Environment Variables → `VALID_TOKENS`

### Token yaratish:
```
SH-{4 tasodifiy harf/raqam}-{4 tasodifiy}-{4 tasodifiy}
```
Har bir to'lovdan keyin Gumroad "Thank you" emailiga token yozing.

---

## 📢 6-BOSQICH: Mijozlarga xabar berish

### Telegram guruhlarda yuboring:
```
Salom! Shartnomalaringizni 1 daqiqada AI tahlil qiladi 🤖

✅ Xavfli bandlarni topadi
✅ Muhim muddatlarni ko'rsatadi  
✅ Oddiy tilda tushuntiradi
✅ O'zbek, Rus, Ingliz tili

3 ta bepul demo: https://shartnoma-ai.vercel.app

#shartnoma #yurist #biznes
```

### LinkedIn postida namuna ko'rsating:
- Real shartnomani yuklang → screenshot oling → post qiling
- "Shu shartnomada 3 ta xavfli band bor edi, AI 40 soniyada topdi"

---

## 📊 DAROMAD HISOBI

| Oy | Mijozlar | Daromad | Xarajat | Foyda |
|----|----------|---------|---------|-------|
| 1  | 10       | $100    | $30     | $70   |
| 3  | 30       | $450    | $50     | $400  |
| 6  | 80       | $1,400  | $100    | $1,300|

---

## ❓ KO'P SO'RALADIGAN SAVOLLAR

**Sayt ishlamasa nima qilaman?**
→ Vercel dashboard → Logs → xatoni tekshiring

**API kalit tugab qolsa?**
→ console.anthropic.com → Billing → kredit qo'shing

**Mijoz pul to'ladi lekin token olmadi?**
→ Gumroad saytida "Purchase" bo'limini ko'ring → email orqali token yuboring

**Ko'proq mijoz kelsa server yiqiladimi?**
→ Yo'q! Vercel avtomatik kengayadi, $0 qo'shimcha xarajat

---

## 📞 QO'LLAB-QUVVATLASH

Saytingizga telegram: `@sizning_telegram`
Email: `sizning@email.com`

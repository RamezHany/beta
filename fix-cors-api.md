# حل مشكلة CORS في الباك إند API

## المشكلة:
```
Access to fetch at 'https://helal-back.vercel.app/api/newsletter' from origin 'https://ramezhany.github.io' has been blocked by CORS policy
```

## الحل المطلوب في الباك إند:

### 1. إضافة CORS Headers في API Routes

في ملف `/pages/api/newsletter.js` و `/pages/api/contact.js`:

```javascript
export default async function handler(req, res) {
  // إضافة CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // أو تحديد النطاق المحدد
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // باقي كود API...
}
```

### 2. أو استخدام Next.js Middleware

إنشاء ملف `middleware.js` في root directory:

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

### 3. أو استخدام CORS Package

```bash
npm install cors
```

في API routes:

```javascript
import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
  origin: ['https://ramezhany.github.io', 'http://localhost:3000'], // إضافة النطاقات المسموحة
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  
  // باقي كود API...
}
```

## الإعدادات المطلوبة:

### للإنتاج (Production):
```javascript
origin: ['https://ramezhany.github.io']
```

### للتطوير (Development):
```javascript
origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
```

### للاثنين معاً:
```javascript
origin: [
  'https://ramezhany.github.io', 
  'http://localhost:3000',
  'http://127.0.0.1:3000'
]
```

## تطبيق الحل:

1. اختر إحدى الطرق أعلاه
2. طبقها في الباك إند API
3. اعمل deploy للتحديثات
4. جرب الفورم مرة تانية

**ملحوظة:** لازم الحل يتطبق في الباك إند API مش في الفرونت إند.

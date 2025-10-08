## Hiring API - Backend Updates (Latest)

### TL;DR
- New required field: `portfolioUrl` (Portfolio/Behance) is sent by the frontend.
- Updated positions for `employmentType = Job`: now includes `Video editor (Senior)` and `Media buyer`.

---

### Endpoint
- POST `/api/hiring`

### Request Body (final schema)
```json
{
  "employmentType": "Job | Internship",
  "position": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "linkedinUrl": "https://...",
  "cvUrl": "https://...",
  "portfolioUrl": "https://...",
  "notes": "string (optional)"
}
```

### Validation
- `portfolioUrl`: REQUIRED, must be a valid `https` URL.
- `linkedinUrl`, `cvUrl`: REQUIRED, valid `https` URLs.
- `email`: REQUIRED, valid email.
- `employmentType`: REQUIRED, enum: `Job`, `Internship`.
- `position`: REQUIRED. Make sure backend accepts the new values below without rejecting.

### Accepted Positions (frontend list)
- For `Job`:
  - `Video editor (Senior)`
  - `Social media specialist (Entry level)`
  - `Graphic designer (Entry level)`
  - `Videographer (Mid-level)`
  - `Content creator (Entry level)`
  - `Media buyer`
- For `Internship`:
  - `Script writer`
  - `Videographer`
  - `Social media marketing`
  - `Business development`
  - `Media buyer`

### Storage/Notifications
- Persist `portfolioUrl` with the candidate record.
- Include `portfolioUrl` in any email/Slack notifications or admin dashboards.

### Notes
- If schema validation (Zod/Joi/Yup) is used, update it to mark `portfolioUrl` as required.
- If you normalize positions into categories/seniority, account for `Video editor (Senior)` and `Media buyer`.

### Example Payload
```json
{
  "employmentType": "Job",
  "position": "Video editor (Senior)",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+20 100 000 0000",
  "linkedinUrl": "https://www.linkedin.com/in/janedoe",
  "cvUrl": "https://drive.google.com/file/d/XXXX",
  "portfolioUrl": "https://www.behance.net/janedoe",
  "notes": "Available next month"
}
```



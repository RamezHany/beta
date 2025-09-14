# API Documentation

This document describes the available API endpoints for the contact form and newsletter subscription functionality.

## Overview

This API provides two main endpoints:
- `/api/contact` - For contact form submissions
- `/api/newsletter` - For newsletter email subscriptions

Both endpoints accept POST requests and store data in Google Sheets.

## Base URL

```
http://localhost:3000  (development)
https://your-domain.com  (production)
```

## Authentication

No authentication is required for these public endpoints.

## Endpoints

### 1. Contact Form API

**Endpoint:** `POST /api/contact`

**Description:** Submits a contact form with user information and message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "message": "Hello, I would like to get in touch regarding your services."
}
```

**Required Fields:**
- `name` (string): User's full name
- `email` (string): Valid email address
- `phone` (string): Phone number
- `message` (string): Contact message

**Success Response:**
```json
{
  "message": "Contact form submitted successfully!",
  "success": true
}
```

**Error Responses:**

*400 Bad Request:*
```json
{
  "error": "Invalid data provided. Please ensure all fields are filled correctly.",
  "details": "Required fields: name, email, phone, message"
}
```

*500 Internal Server Error:*
```json
{
  "error": "Failed to save contact information. Please try again later."
}
```

### 2. Newsletter Subscription API

**Endpoint:** `POST /api/newsletter`

**Description:** Subscribes an email address to the newsletter.

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Required Fields:**
- `email` (string): Valid email address

**Success Response:**
```json
{
  "message": "Successfully subscribed to newsletter!",
  "success": true
}
```

**Error Responses:**

*400 Bad Request:*
```json
{
  "error": "Invalid email provided. Please enter a valid email address.",
  "details": "Required field: email (must be a valid email format)"
}
```

*500 Internal Server Error:*
```json
{
  "error": "Failed to subscribe to newsletter. Please try again later."
}
```

## JavaScript Examples

### Contact Form Submission

```javascript
const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      })
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Success:', result.message);
      return { success: true, message: result.message };
    } else {
      console.error('Error:', result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, error: 'Network error occurred' };
  }
};

// Usage example
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  message: 'Hello world!'
};

submitContactForm(formData).then(result => {
  if (result.success) {
    alert('Form submitted successfully!');
  } else {
    alert('Error: ' + result.error);
  }
});
```

### Newsletter Subscription

```javascript
const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Success:', result.message);
      return { success: true, message: result.message };
    } else {
      console.error('Error:', result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, error: 'Network error occurred' };
  }
};

// Usage example
subscribeToNewsletter('user@example.com').then(result => {
  if (result.success) {
    alert('Successfully subscribed to newsletter!');
  } else {
    alert('Error: ' + result.error);
  }
});
```

### React/Next.js Form Components

#### Contact Form Component

```jsx
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setMessage(result.error || 'An error occurred');
      }
    } catch (error) {
      setMessage('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ContactForm;
```

#### Newsletter Component

```jsx
import { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Successfully subscribed to newsletter!');
        setEmail('');
      } else {
        setMessage(result.error || 'An error occurred');
      }
    } catch (error) {
      setMessage('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default NewsletterSubscription;
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install googleapis tsx
```

### 2. Environment Variables

Make sure your `.env` file contains:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
GOOGLE_SHEET_ID=your-google-sheet-id
```

### 3. Initialize Google Sheets

Run the setup script to create the necessary sheet headers:

```bash
npm run setup-sheets
```

This will create two sheets in your Google Spreadsheet:
- **Contact**: With columns for Timestamp, Name, Email, Phone, Message
- **Newsletter**: With columns for Timestamp, Email

### 4. Google Sheets Permissions

1. Create a Google Service Account
2. Download the JSON key file
3. Share your Google Sheet with the service account email
4. Give edit permissions to the service account

## Data Storage

All form submissions are stored in Google Sheets with the following structure:

### Contact Sheet
| Timestamp | Name | Email | Phone | Message |
|-----------|------|-------|-------|---------|
| 2024-01-01T12:00:00.000Z | John Doe | john@example.com | +1234567890 | Hello world! |

### Newsletter Sheet
| Timestamp | Email |
|-----------|-------|
| 2024-01-01T12:00:00.000Z | subscriber@example.com |

## Error Handling

The API includes comprehensive error handling:

- **Input Validation**: All required fields are validated
- **Email Validation**: Email format is validated using regex
- **Google Sheets Errors**: API errors are logged and user-friendly messages are returned
- **Network Errors**: Graceful handling of network and server errors

## Security Considerations

- Input sanitization is performed on all user data
- Email addresses are normalized (trimmed and lowercased)
- Google Sheets API credentials are stored securely in environment variables
- CORS is handled automatically by Next.js API routes

## Testing

You can test the APIs using any HTTP client like curl, Postman, or directly from JavaScript:

```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "phone": "+1234567890",
    "message": "Test message"
  }'

# Test newsletter subscription
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## Support

For issues or questions, check the server logs for detailed error messages. All errors are logged to the console with specific details about what went wrong.

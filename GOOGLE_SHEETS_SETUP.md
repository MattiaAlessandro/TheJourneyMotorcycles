# Google Sheets Setup Instructions

Follow these steps to connect your forms to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "The Journey Motorcycles - Form Submissions"
4. You'll have two sheets: "Newsletter" and "Prossime Uscite"

## Step 2: Set Up Newsletter Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire content from `google-apps-script-newsletter.js`
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) and name the project "Newsletter Form Handler"
6. Click **Run** → Select `setupSheet` function → Click **Run** (this creates the Newsletter sheet with headers)
7. Authorize the script when prompted
8. Click **Deploy** → **New deployment**
9. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
10. Configure:
    - Description: "Newsletter Form"
    - Execute as: **Me**
    - Who has access: **Anyone**
11. Click **Deploy**
12. **Copy the Web app URL** - you'll need this!

## Step 3: Set Up Trips Script

1. Go back to your Google Sheet
2. Click **Extensions** → **Apps Script** (opens the same project)
3. Click the **+** next to Files → **Script**
4. Name it "TripsHandler"
5. Copy the entire content from `google-apps-script-trips.js`
6. Paste it into this new script file
7. Click **Save**
8. Click **Run** → Select `setupSheet` function → Click **Run** (this creates the Prossime Uscite sheet)
9. Click **Deploy** → **New deployment**
10. Click the gear icon ⚙️ → Choose **Web app**
11. Configure:
    - Description: "Trips Form"
    - Execute as: **Me**
    - Who has access: **Anyone**
12. Click **Deploy**
13. **Copy the Web app URL** - you'll need this too!

## Step 4: Update Your Website

1. Open `js/forms.js` in your code editor
2. Replace `YOUR_NEWSLETTER_SCRIPT_URL_HERE` with the Newsletter Web app URL from Step 2
3. Replace `YOUR_TRIPS_SCRIPT_URL_HERE` with the Trips Web app URL from Step 3
4. Save the file

## Step 5: Add Script to HTML Pages

Add this line before the closing `</body>` tag in:

### newsletter.html
```html
<script src="js/forms.js"></script>
```

### prossime.html
```html
<script src="js/forms.js"></script>
```

## Your Google Sheet Structure

### Newsletter Sheet
| Timestamp | Nome | Email | Privacy |
|-----------|------|-------|---------|
| (auto)    | ...  | ...   | Sì/No   |

### Prossime Uscite Sheet
| Timestamp | Nome | Telefono | Modello Moto | Uscita | Privacy |
|-----------|------|----------|--------------|--------|---------|
| (auto)    | ...  | ...      | ...          | ...    | Sì/No   |

## Testing

1. Submit a test form on your website
2. Check your Google Sheet - data should appear within seconds
3. If nothing appears, check the browser console for errors

## Troubleshooting

- **CORS errors**: These are normal with `mode: 'no-cors'` - data still gets saved
- **Nothing in sheet**: Make sure you deployed as "Anyone" can access
- **Script errors**: Check that you ran `setupSheet()` for both scripts
- **Wrong sheet**: Make sure sheet names match exactly: "Newsletter" and "Prossime Uscite"

## Share Your Google Sheet

To share the Google Sheet link:
1. Click the **Share** button in your Google Sheet
2. Change access to "Anyone with the link can view"
3. Copy the link

**Your Google Sheet URL will look like:**
https://docs.google.com/spreadsheets/d/1Ap80z_6rWTHGkmVc9o0J8-s4hLV4zIsNXTzikNy3vfs/edit?usp=sharing
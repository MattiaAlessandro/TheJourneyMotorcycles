// Google Apps Script for Newsletter Form
// Deploy this as a Web App in Google Apps Script

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Newsletter');
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append row to sheet: Timestamp, Nome, Email, Privacy
    sheet.appendRow([
      data.timestamp,
      data.nome,
      data.email,
      data.privacy
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Newsletter form endpoint is working!');
}

// Run this once to set up the sheet headers
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Newsletter');
  
  if (!sheet) {
    sheet = ss.insertSheet('Newsletter');
  }
  
  // Set headers
  sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Nome', 'Email', 'Privacy']]);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.setFrozenRows(1);
}

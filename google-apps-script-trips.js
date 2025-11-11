// Google Apps Script for Trip Registration Forms
// Deploy this as a Web App in Google Apps Script

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Prossime Uscite');
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append row to sheet: Timestamp, Nome, Telefono, Moto, Uscita, Privacy
    sheet.appendRow([
      data.timestamp,
      data.nome,
      data.telefono,
      data.moto,
      data.uscita,
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
  return ContentService.createTextOutput('Trip registration endpoint is working!');
}

// Run this once to set up the sheet headers
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Prossime Uscite');
  
  if (!sheet) {
    sheet = ss.insertSheet('Prossime Uscite');
  }
  
  // Set headers
  sheet.getRange(1, 1, 1, 6).setValues([['Timestamp', 'Nome', 'Telefono', 'Modello Moto', 'Uscita', 'Privacy']]);
  sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  sheet.setFrozenRows(1);
}

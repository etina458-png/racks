export async function sendTelegramNotification(message) {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(data.description || 'Telegram API error');
    }
    
    console.log('✅ Telegram notification sent');
  } catch (error) {
    console.error('❌ Telegram send failed:', error.message);
    // Don't throw - let registration succeed even if notification fails
  }
}
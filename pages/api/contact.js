import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "apollocleans@gmail.com",
      from: "keseans446@gmail.com",
      subject: `New Form Submission From Apollo's Cleaning Services`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <p>You've got mail from <b>${req.body.name}</b></p>
              <p> ${
                req.body.message
              }</p><p>You can get back to them via their email: <b>${
        req.body.email
      }</b> ${
        req.body.phone && `or by phone number: <b>${req.body.phone}</b>`
      }</p>
              </div>
        </body>
        </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;

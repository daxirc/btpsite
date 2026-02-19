import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();

    // Configure your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your app password or password
      },
    });

    // Format the email body
    const emailBody = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom:</strong> ${formData.nom}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.telephone}</p>
      <p><strong>Type de travaux:</strong> ${formData.typesTravaux}</p>
      <p><strong>Type de bien:</strong> ${formData.typeBien}</p>
      <p><strong>Type de client:</strong> ${formData.typeClient}</p>
      <p><strong>Budget estimé:</strong> ${formData.budget}</p>
      <p><strong>Date de début souhaitée:</strong> ${formData.dateDebut}</p>
      <p><strong>Lieu du projet:</strong> ${formData.lieu}</p>
      <p><strong>Description:</strong></p>
      <p>${formData.description || 'Aucune description'}</p>
    `;

    // Send email to your company email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'btpsolution.pro@gmail.com',
      subject: `Nouvelle demande de devis - ${formData.nom}`,
      html: emailBody,
      replyTo: formData.email,
    });

    // Optionally send a confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Confirmation de votre demande de devis',
      html: `
        <h2>Merci pour votre demande!</h2>
        <p>Nous avons bien reçu votre demande de devis et nous vous recontacterons dans les 48 heures.</p>
        <p>Cordialement,<br/>L'équipe BTP Solution</p>
      `,
    });

    return Response.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}

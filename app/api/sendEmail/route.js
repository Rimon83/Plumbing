import { transporter, mailOptions } from "@/app/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      from: {
        name: email,
        address: email,
      },
      subject: subject,
      text: message,
      html: `<div>${message}</div>`,
    });

    return NextResponse.json({ message: "The email is sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering." },
      { status: 500 }
    );
  }
}

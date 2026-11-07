import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional(),
  subject: z.string().max(120).optional(),
});

export async function POST(req) {
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return Response.json({ ok: false }, { status: 400 });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message, subject } = parsed.data;
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject ? `${subject} (من ${name})` : `رسالة جديدة من ${name}`,
      text: message,
    });

       if (error) {
  console.error("RESEND ERROR:", error);
  return Response.json({ ok: false }, { status: 500 });
}

    return Response.json({ ok: true });
   } catch (err) {
  console.error("SERVER ERROR:", err);
  return Response.json({ ok: false }, { status: 500 });
}
}
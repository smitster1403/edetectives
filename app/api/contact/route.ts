import { NextResponse } from "next/server";

const requiredFields = ["name", "organisation", "email", "message"];

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    organisation: String(formData.get("organisation") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const missingRequired = requiredFields.some((field) => {
    return payload[field as keyof typeof payload].length === 0;
  });

  if (missingRequired) {
    return NextResponse.redirect(new URL("/contact?status=missing", request.url));
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);

  if (!isValidEmail) {
    return NextResponse.redirect(new URL("/contact?status=email", request.url));
  }

  console.info("Confidential enquiry received", {
    ...payload,
    message: `${payload.message.slice(0, 500)}${payload.message.length > 500 ? "..." : ""}`,
  });

  return NextResponse.redirect(new URL("/contact?status=success", request.url));
}

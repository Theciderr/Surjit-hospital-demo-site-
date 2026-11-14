import { NextResponse } from "next/server";

type AppointmentPayload = {
  name?: string;
  phone?: string;
  department?: string;
  preferredDate?: string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.phone?.trim() || !payload.department?.trim() || !payload.preferredDate?.trim()) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: "Online submission is not connected. Please use the WhatsApp request form or call the hospital." },
    { status: 503 }
  );
}

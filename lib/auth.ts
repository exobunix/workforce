import { cookies } from "next/headers";
import { db } from "@/lib/db";

const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@workforceinfotech.com";
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Workforce@2027";
const SESSION_COOKIE = "wf_admin_session";

export function getCurrentAdminEmail(): string {
  const creds = db.getAdminCredentials();
  return creds?.email || DEFAULT_ADMIN_EMAIL;
}

export async function verifyAdminCredentials(email: string, pass: string): Promise<boolean> {
  const creds = db.getAdminCredentials();
  const normalizedInputEmail = email.trim().toLowerCase();

  if (creds && creds.email) {
    return normalizedInputEmail === creds.email.toLowerCase() && pass === creds.passwordHash;
  }

  return (
    normalizedInputEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() &&
    pass === DEFAULT_ADMIN_PASSWORD
  );
}

export async function createAdminSession(email?: string): Promise<string> {
  const cookieStore = await cookies();
  const userEmail = email || getCurrentAdminEmail();
  
  const token = Buffer.from(
    JSON.stringify({
      user: userEmail,
      role: "ADMIN",
      issuedAt: Date.now()
    })
  ).toString("base64");

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/"
  });

  return token;
}

export async function getAdminSession(): Promise<{ user: string; role: string } | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return null;

    const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
    const currentEmail = getCurrentAdminEmail();
    
    if (decoded && (decoded.user.toLowerCase() === currentEmail.toLowerCase() || decoded.user.toLowerCase() === DEFAULT_ADMIN_EMAIL.toLowerCase())) {
      return { user: decoded.user, role: decoded.role || "ADMIN" };
    }
    return null;
  } catch {
    return null;
  }
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

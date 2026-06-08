// app/api/download-resume/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const GOOGLE_DRIVE_FILE_ID = "1l0bq3sx1vD6ngVG3cb6VzXPeeKSkvN-MaHcJb1TACKs";

  // Method 1: Direct download with confirm parameter
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}&confirm=t`;

  // Return a response that forces download
  return NextResponse.redirect(downloadUrl);
}

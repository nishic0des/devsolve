import { NextResponse, NextRequest } from "next/server";
import getOrCreateDB from "./models/server/dbSetup";
import createStorageCollection from "./models/server/storageSetup";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await Promise.all([getOrCreateDB(), createStorageCollection()]);

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

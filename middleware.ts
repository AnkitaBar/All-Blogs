import { NextRequest, NextResponse } from "next/server";
export function middleware(request:NextRequest) {
  const token = request.cookies.get("token");

  if (!token || token === undefined) {
    request.nextUrl.pathname = "/auth/login";

    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/cms/all-blogs","/cms/all-services","/cms/blog-category","/cms/latest-post"],

};

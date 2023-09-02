import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { JWT, getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = (await getToken({ req, secret })) as JWT | null;
  const PATH_NAME = req.nextUrl.pathname;

  // Redirects user to login page if token does not exist
  if (!token && PATH_NAME.startsWith('/user')) {
    return NextResponse.redirect(new URL(`/auth/signin`, req.url));
  }

  // Hides authentication pages if token does not exist
  if (token && PATH_NAME.startsWith('/auth')) {
    const redirectURL = shouldRedirectToDashboard(token) ? 'dashboard' : 'account-setup';
    return NextResponse.redirect(new URL(`/user/${redirectURL}`, req.url));
  }

  // Hides authentication pages if token does not exist
  if (token && shouldRedirectToDashboard(token) && !PATH_NAME.startsWith('/user/dashboard')) {
    return NextResponse.redirect(new URL(`/user/dashboard/users`, req.url));
  }

  // Hides authentication pages if token does not exist
  if (token && !shouldRedirectToDashboard(token) && !PATH_NAME.startsWith('/user/account')) {
    return NextResponse.redirect(new URL(`/user/account-setup`, req.url));
  }

  return NextResponse.next();
}

function shouldRedirectToDashboard(token: JWT) {
  return token.is_verified && !!token.onboarding_completed;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/auth/:path*', '/user/:path*'],
};

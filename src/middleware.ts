import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = ['/login', '/signup', '/verifyemail'].includes(path);
    const token = request.cookies.get("token")?.value || '';

    // If logged-in user goes to login/signup → log them out
    if (isPublicPath && token) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: true,
            path: '/',
            expires: new Date(0)
        });
        return response;
    }

    // If accessing private route without token → send to login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dash-page/:path*']
}

import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
  id: string;
}

export const getDataFromToken = (request: NextRequest): string | null => {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) return null;

    const decoded = jwt.verify(
      token,
      process.env.TOKEN_SECRET as string
    ) as DecodedToken;

    return decoded.id ?? null;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

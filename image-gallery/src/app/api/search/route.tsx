import { UnsplashSearchResponse } from "@/models/unsplash-image";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json({error: "no query provided"}, {status: 400});
    }

    const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${query}`);
    const {results}:UnsplashSearchResponse = await response.json();

    return NextResponse.json(results);
}


export const runtime = 'edge'; 

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_MAP_API;
    const placeId = 'ChIJ7ccNV1uP4TgRvQMFSZYKJOg';

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key is missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
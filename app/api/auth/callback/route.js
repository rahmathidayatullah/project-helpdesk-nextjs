import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
  console.log('request', request);
  const url = new URL(request.url);
  console.log('url', url);
  const code = url.searchParams.get('code');
  console.log('code', code);

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(url.origin);
}

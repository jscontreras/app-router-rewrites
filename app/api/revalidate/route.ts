import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')
  const tag = request.nextUrl.searchParams.get('tag')

  if (path) {
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, type: 'path', path, now: Date.now() })
  }

  if (tag) {
    revalidateTag(tag)
    return NextResponse.json({ revalidated: true, type: 'tag', tag, now: Date.now() })
  }

  return NextResponse.json({ revalidated: false, now: Date.now() })
}


import { ImageResponse } from 'next/og'

export const alt = 'My App'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <OgImage title="My App" description="Welcome to my app" />,
    { ...size },
  )
}

// ページ固有の opengraph-image.tsx から再利用できる共通レイアウト
export function OgImage({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '64px',
        background: '#09090b',
        fontFamily: 'sans-serif',
      }}
    >
      {/* アクセントライン */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '6px',
          background: 'linear-gradient(to right, #6366f1, #a855f7)',
          display: 'flex',
        }}
      />

      {/* サイト名 */}
      <div
        style={{
          position: 'absolute',
          top: '52px',
          left: '64px',
          fontSize: '22px',
          color: '#71717a',
          letterSpacing: '0.1em',
          display: 'flex',
        }}
      >
        MY APP
      </div>

      {/* タイトル */}
      <div
        style={{
          fontSize: '72px',
          fontWeight: 700,
          color: '#fafafa',
          lineHeight: 1.1,
          maxWidth: '900px',
          display: 'flex',
        }}
      >
        {title}
      </div>

      {/* 説明文 */}
      {description && (
        <div
          style={{
            marginTop: '24px',
            fontSize: '28px',
            color: '#a1a1aa',
            maxWidth: '800px',
            display: 'flex',
          }}
        >
          {description}
        </div>
      )}
    </div>
  )
}

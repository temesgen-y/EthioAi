import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'EthioTech AI Solutions | Enterprise-Grade AI & Custom Software Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1f7a4a 0%, #0ea5a4 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 60,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              marginBottom: 16,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            EthioTech AI Solutions
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: 800,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Enterprise-Grade AI & Custom Software Engineering
          </div>
          <div
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.8)',
              marginTop: 24,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Addis Ababa, Ethiopia • Africa
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

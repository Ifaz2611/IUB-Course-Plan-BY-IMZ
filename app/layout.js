import './globals.css';

import icon192 from '../assets/icons/icon-192.png';
import icon512 from '../assets/icons/icon-512.png';
import iconMaskable from '../assets/icons/icon-maskable.png';
import iconRound from '../assets/icons/icon-round.png';

export const metadata = {
  title: 'Course Planner By IMZ',
  description: 'Build conflict‑free course plans from IRAS course offers. Fast, mobile‑friendly, and option to export your plan as JPG.',
  applicationName: 'Course Planner By IMZ',
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Course Planner By IMZ',
    description: 'Build conflict‑free course plans from IRAS course offers. Fast, mobile‑friendly, and option to export your plan as JPG.',
    url: '/',
    siteName: 'Course Planner By IMZ',
    type: 'website',
    images: []
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Course Planner By IMZ',
    description: 'Build conflict‑free course plans from IRAS course offers. Fast, mobile‑friendly, and option to export your plan as JPG.',
    images: []
  },
  icons: {
    icon: [
      { url: icon192.src, type: 'image/png', sizes: '192x192' },
      { url: icon512.src, type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: icon192.src, type: 'image/png', sizes: '192x192' }
    ],
    shortcut: [
      { url: iconRound.src, type: 'image/png', sizes: '192x192' }
    ],
    other: [
      { rel: 'mask-icon', url: iconMaskable.src, color: '#121821' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

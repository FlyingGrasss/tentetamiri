import { readFileSync, writeFileSync } from 'fs';

let c = readFileSync('app/layout.tsx', 'utf8');

// Fix 1: font display optional (eliminates CLS from font swap)
c = c.replace('  display: "swap",', '  display: "optional",');

// Fix 2: Replace broken <link> in body with ReactDOM.preload import call
// First, add the preload import at the top
c = c.replace(
  'import type { Metadata, Viewport } from "next";',
  'import type { Metadata, Viewport } from "next";\nimport { preload } from "react-dom";'
);

// Fix 3: Remove the <link> preload in body (it's in body, not head - doesn't work)
c = c.replace(
  `        <link
          rel="preload"
          as="image"
          href="/_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=828&q=75"
          imageSrcSet="/_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=828&q=75 828w"
          imageSizes="(max-width: 760px) 100vw, 49vw"
          fetchPriority="high"
        />
        {children}`,
  '        {children}'
);

// Fix 4: Add preload() call inside the RootLayout function body (before return)
c = c.replace(
  'export default function RootLayout({',
  `export default function RootLayout({`
);

// Insert preload call at the start of RootLayout function body
c = c.replace(
  '}: Readonly<{ children: React.ReactNode }>) {\n  return (',
  `}: Readonly<{ children: React.ReactNode }>) {
  preload(
    "/_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=828&q=75",
    {
      as: "image",
      fetchPriority: "high",
      imageSrcSet:
        "/_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=828&q=75 828w",
      imageSizes: "(max-width: 760px) 100vw, 49vw",
    }
  );
  return (`
);

writeFileSync('app/layout.tsx', c, 'utf8');
console.log('Done!');
console.log('Has preload import:', c.includes('import { preload } from "react-dom"'));
console.log('Has display optional:', c.includes('display: "optional"'));
console.log('Has preload call:', c.includes('preload('));
console.log('Has broken link tag:', c.includes('<link\n          rel="preload"'));

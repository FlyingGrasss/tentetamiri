import { readFileSync, writeFileSync } from 'fs';

let c = readFileSync('app/layout.tsx', 'utf8');

// 1. Fix import — remove unused fonts
c = c.replace(
  `import { DM_Sans, Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";`,
  `import { Space_Grotesk } from "next/font/google";`
);

// 2. Fix html className — only space.variable
c = c.replace(
  `\${manrope.variable} \${space.variable} \${dmSans.variable} \${instrument.variable}`,
  `\${space.variable}`
);

// 3. Add LCP preload link in <head> — inject before </body> closing isn't right,
//    add it as a <link> in the <html> body opening. Actually inject in RootLayout return,
//    right before {children}
c = c.replace(
  `        {children}`,
  `        <link
          rel="preload"
          as="image"
          href="https://www.tentetamiri.com.tr/admin/image/653-tente-tamiri10.jpg"
          fetchPriority="high"
        />
        {children}`
);

writeFileSync('app/layout.tsx', c, 'utf8');
console.log('Done!');
console.log('Line 2:', c.split('\n')[1]);
console.log('className area:', c.match(/className=\{[^}]+\}/)?.[0]);

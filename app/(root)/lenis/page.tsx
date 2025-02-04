// app/page.tsx

import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
          <div style={{ height: '200vh', padding: '20px' }}>
            <h1>Welcome to Next.js with Lenis Smooth Scroll</h1>
            <p>Scroll down to see the smooth scrolling effect.</p>
            <div style={{ marginTop: '1000px' }}>
              <h2>You've reached the bottom!</h2>
            </div>
          </div>
  );
}
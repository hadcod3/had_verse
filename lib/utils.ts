import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const animatePageIn = () => {
  const banners = Array.from(document.querySelectorAll('.banner')); // Select all banners by class

  if (banners.length > 0) {
    const tl = gsap.timeline();
    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.05,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = Array.from(document.querySelectorAll('.banner')); // Select all banners by class

  if (banners.length > 0) {
    const tl = gsap.timeline();
    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.05,
      onComplete: () => {
        router.refresh();
        router.push(href);
      },
    });
  }
};

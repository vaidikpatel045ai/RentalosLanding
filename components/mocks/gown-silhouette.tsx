export function GownSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 340"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 8c-10 0-18 8-18 18 0 8 4 14 10 17-14 6-22 18-24 34l-8 54c26 12 56 12 80 0l-8-54c-2-16-10-28-24-34 6-3 10-9 10-17 0-10-8-18-18-18Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M60 131c-30 46-46 104-44 168 28 18 58 27 84 27s56-9 84-27c2-64-14-122-44-168"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M76 131c-6 60-6 168 24 195M124 131c6 60 6 168-24 195"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeOpacity="0.55"
      />
      <path
        d="M42 245c38 14 78 14 116 0M34 285c46 18 86 18 132 0"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

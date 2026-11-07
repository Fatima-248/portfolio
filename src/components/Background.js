export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Light mode blobs */}
      <div className="absolute -left-32 -top-32 size-[30rem] rounded-full bg-brand-200/50 blur-3xl animate-float dark:bg-brand-900/30" />
      <div className="absolute -right-40 top-1/3 size-[36rem] rounded-full bg-brand-300/25 blur-3xl animate-float [animation-delay:2s] dark:bg-brand-800/20" />
      <div className="absolute -bottom-40 left-1/4 size-[28rem] rounded-full bg-brand-100/70 blur-3xl animate-float [animation-delay:4s] dark:bg-brand-900/40" />
    </div>
  );
}

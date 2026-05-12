import { useEffect } from 'react';

type SubmissionSuccessOverlayProps = {
  onDone: () => void;
};

export default function SubmissionSuccessOverlay({
  onDone,
}: SubmissionSuccessOverlayProps) {
  useEffect(() => {
    const id = window.setTimeout(onDone, 10000);
    return () => window.clearTimeout(id);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06121f]/90 p-4">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-[#06121f] via-[#071a2c] to-[#06121f] shadow-2xl">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="relative h-20 w-20 shrink-0">
                <div
                  className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20"
                  aria-hidden
                />
                <div
                  className="absolute -inset-3 animate-spin rounded-full border border-emerald-400/30 [animation-duration:6s]"
                  aria-hidden
                />
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30">
                    <span className="text-2xl font-bold leading-none text-white">
                      ✓
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-2xl rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-6 py-5">
                <p className="text-lg font-semibold text-white md:text-xl">
                  Your enquiry has been{' '}
                  <span className="text-emerald-300">submitted successfully!</span>
                </p>
                <div className="mt-2 text-sm leading-relaxed text-slate-200/90 md:text-base">
                  <p>Thank you for reaching out to us.</p>
                  <p className="mt-2">
                    Our{' '}
                    <span className="font-semibold text-emerald-200">
                      Agentic AI
                    </span>{' '}
                    will call you shortly for further enquiry and details. During
                    the call, you can provide more details and also ask any queries
                    regarding our businesses and our products.
                  </p>
                </div>
                <p className="mt-3 text-sm font-semibold text-emerald-200">
                  We&apos;re here to help!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onDone}
              className="mt-2 text-xs text-slate-200/70 underline underline-offset-4 hover:text-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { suggestions } from "@/lib/constants";
import { SparklesIcon } from "./icons";

export function Preview() {
  const router = useRouter();

  const handleAction = (query?: string) => {
    const url = query ? `/?query=${encodeURIComponent(query)}` : "/";
    router.push(url);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-tl-2xl bg-background">
      <div className="flex h-14 shrink-0 items-center gap-3 border-b border-border/20 px-5">
        <div className="flex size-5 items-center justify-center rounded bg-muted/60 ring-1 ring-border/50">
          <SparklesIcon size={10} />
        </div>
        <span className="text-[13px] text-muted-foreground">Nate's Shop</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            Shop simple products
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Browse two starter products and message to order.
          </p>
        </div>

        <div className="grid w-full max-w-md grid-cols-1 gap-3 md:grid-cols-2">
  <button
    className="rounded-xl border border-border/30 bg-card/30 px-4 py-4 text-left text-sm text-muted-foreground hover:bg-card/50"
    onClick={() => handleAction("I want to order Product One for $25.")}
    type="button"
  >
    <div className="font-semibold text-foreground">Product One</div>
    <div className="mt-1">$25</div>
    <div className="mt-2 text-xs">A clean starter product.</div>
  </button>

  <button
    className="rounded-xl border border-border/30 bg-card/30 px-4 py-4 text-left text-sm text-muted-foreground hover:bg-card/50"
    onClick={() => handleAction("I want to order Product Two for $40.")}
    type="button"
  >
    <div className="font-semibold text-foreground">Product Two</div>
    <div className="mt-1">$40</div>
    <div className="mt-2 text-xs">A premium option.</div>
  </button>
</div>
      </div>

      <div className="shrink-0 px-5 pb-5">
        <button
          className="flex w-full items-center rounded-2xl border border-border/30 bg-card/30 px-4 py-3 text-left text-[13px] text-muted-foreground/40 transition-colors hover:border-border/50 hover:text-muted-foreground/60"
          onClick={() => handleAction()}
          type="button"
        >
          Message to order or ask a product question...
        </button>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { SparklesIcon } from "./icons";

const products = [
  {
    name: "Product One",
    price: "$25",
    description: "A clean starter product.",
    prompt: "I want to order Product One for $25.",
  },
  {
    name: "Product Two",
    price: "$40",
    description: "A premium option.",
    prompt: "I want to order Product Two for $40.",
  },
];

export function Preview() {
  const router = useRouter();

  const handleAction = (query?: string) => {
    const url = query ? `/?query=${encodeURIComponent(query)}` : "/";
    router.push(url);
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto px-5 py-6">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between border-border/30 border-b pb-4">
        <div className="font-semibold text-foreground text-lg">Nate's Shop</div>
        <div className="flex gap-4 text-muted-foreground text-sm">
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 py-10">
        <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1 text-muted-foreground text-sm">
              <SparklesIcon size={14} />
              Small shop, simple ordering
            </div>

            <h1 className="max-w-xl font-semibold text-4xl text-foreground tracking-tight md:text-6xl">
              Simple products. Easy ordering.
            </h1>

            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Browse a small collection and message to order. The assistant can
              help later, but the shop works without AI.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-foreground px-5 py-3 font-medium text-background text-sm"
                href="#products"
              >
                View Products
              </a>
              <a
                className="rounded-xl border border-border/40 px-5 py-3 font-medium text-sm"
                href="#contact"
              >
                How to Order
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card/30 p-5">
            <div className="text-muted-foreground text-sm">Featured</div>
            <div className="mt-3 rounded-xl bg-background/80 p-5">
              <div className="font-semibold text-foreground text-xl">
                Product Two
              </div>
              <div className="mt-2 text-3xl text-foreground">$40</div>
              <p className="mt-3 text-muted-foreground text-sm">
                A premium option for people who want the upgraded version.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2" id="products">
          {products.map((product) => (
            <article
              className="rounded-2xl border border-border/40 bg-card/25 p-5"
              key={product.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-foreground text-xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>
                <div className="font-semibold text-foreground text-xl">
                  {product.price}
                </div>
              </div>

              <button
                className="mt-5 w-full rounded-xl border border-border/40 bg-background/70 px-4 py-3 font-medium text-sm hover:bg-card/60"
                onClick={() => handleAction(product.prompt)}
                type="button"
              >
                Message to Order
              </button>
            </article>
          ))}
        </section>

        <section
          className="rounded-2xl border border-border/40 bg-card/20 p-5"
          id="contact"
        >
          <h2 className="font-semibold text-foreground text-xl">
            To order, send a message with the product name.
          </h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Real checkout links can be added later with PayPal, Stripe Payment
            Links, Cash App, Etsy, or another payment option.
          </p>
        </section>
      </main>
    </div>
  );
}
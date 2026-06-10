import { motion } from "framer-motion";

const products = [
  {
    name: "Product One",
    price: "$25",
    description: "A clean starter product.",
  },
  {
    name: "Product Two",
    price: "$40",
    description: "A premium option.",
  },
];

export const Greeting = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-8">
      <motion.nav
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between border-border/30 border-b pb-4"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="font-semibold text-foreground text-lg">Nate's Shop</div>
        <div className="flex gap-4 text-muted-foreground text-sm">
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="mb-3 text-muted-foreground text-sm">
            Small shop, simple ordering
          </p>
          <h1 className="max-w-xl font-semibold text-4xl text-foreground tracking-tight md:text-6xl">
            Simple products. Easy ordering.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Browse a small collection and message to order. The assistant can be
            upgraded later, but the shop works without paid AI.
          </p>
        </div>

        <div className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="text-muted-foreground text-sm">Featured product</div>
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
      </motion.section>

      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 md:grid-cols-2"
        id="products"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
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

            <a
              className="mt-5 block w-full rounded-xl border border-border/40 bg-background/70 px-4 py-3 text-center font-medium text-sm hover:bg-card/60"
              href="#contact"
            >
              Message to Order
            </a>
          </article>
        ))}
      </motion.section>

      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border/40 bg-card/20 p-5"
        id="contact"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.65, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-semibold text-foreground text-xl">
          To order, send a message with the product name.
        </h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Real checkout links can be added later with PayPal, Stripe Payment
          Links, Cash App, Etsy, or another payment option.
        </p>
      </motion.section>
    </div>
  );
};
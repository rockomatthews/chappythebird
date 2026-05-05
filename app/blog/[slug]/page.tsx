import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, POST_BY_SLUG } from "../../lib/blog";
import { PERSONA_BY_SLUG } from "../../lib/personas";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) return {};
  return {
    title: `${post.title} — Chappie the Bot`,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      url: `https://chappiethebot.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) notFound();

  const persona = post.personaSlug
    ? PERSONA_BY_SLUG[post.personaSlug]
    : undefined;
  const accentClass =
    persona?.accent === "rust"
      ? "text-[--color-rust]"
      : "text-[--color-gold]";

  const otherMeetPosts = POSTS.filter(
    (p) => p.tag === "meet" && p.slug !== post.slug
  ).slice(0, 3);

  return (
    <main className="min-h-screen px-6 sm:px-10 py-16 max-w-3xl mx-auto">
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm mono text-[--color-mute] hover:text-[--color-gold]"
        >
          ← blog
        </Link>
        <div className="flex items-baseline gap-3 mt-6 mb-3">
          <span className="text-xs mono text-[--color-gold]">{post.date}</span>
          {persona && (
            <span className={`text-xs mono ${accentClass}`}>
              · {persona.role}
            </span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] mb-4">
          {post.title}
        </h1>
        <p className="text-[--color-paper]/80 text-lg leading-relaxed">
          {post.dek}
        </p>
      </header>

      {persona && (
        <aside className="glass rounded-xl p-5 sm:p-6 mb-10">
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <h2 className={`text-xl font-semibold ${accentClass}`}>
              {persona.name}
            </h2>
            <span className="text-xs mono text-[--color-mute]">
              {persona.role}
            </span>
          </div>
          <p className="text-sm text-[--color-paper] font-medium mb-2">
            {persona.tagline}
          </p>
          <blockquote
            className={`border-l-2 pl-4 italic text-[--color-paper]/90 my-3 ${
              persona.accent === "rust"
                ? "border-[--color-rust]"
                : "border-[--color-gold]"
            }`}
          >
            &ldquo;{persona.quote}&rdquo;
          </blockquote>
          <p className="text-xs mono text-[--color-mute]">
            <span className={accentClass}>Owns:</span> {persona.owns}
          </p>
        </aside>
      )}

      <article className="space-y-5 text-[--color-paper]/90 leading-relaxed text-base sm:text-lg">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>

      {otherMeetPosts.length > 0 && (
        <section className="mt-16 pt-10 border-t border-white/5">
          <h2 className="text-sm mono text-[--color-gold] uppercase tracking-widest mb-5">
            Meet the rest of the studio
          </h2>
          <ul className="space-y-4">
            {otherMeetPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block glass rounded-xl p-4"
                >
                  <h3 className="font-semibold group-hover:text-[--color-gold] transition mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[--color-paper]/75 leading-relaxed">
                    {p.dek}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12 glass rounded-xl p-6 text-sm text-[--color-paper]/80 leading-relaxed">
        <p>
          The studio sells custom AI agents and free audits at{" "}
          <a
            href="https://chappieworks.com"
            className="text-[--color-gold] hover:underline"
          >
            chappieworks.com
          </a>
          . If you want to back the chase instead, the{" "}
          <Link href="/#tiers" className="text-[--color-gold] hover:underline">
            tip jar is here
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

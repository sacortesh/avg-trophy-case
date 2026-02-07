/**
 * Individual trophy page — renders a single MDX trophy.
 *
 * DOC TRAIL — Dynamic Routes
 * The `[slug]` folder name creates a dynamic URL segment. When someone visits
 * `/trophy/minor-blues-riff`, Next.js passes `{ params: { slug: "minor-blues-riff" } }`
 * to this page component. The slug is used to look up the matching MDX file.
 *
 * DOC TRAIL — generateStaticParams
 * This function tells Next.js which slugs to pre-render at build time. It
 * returns an array of `{ slug: string }` objects. At build time, Next.js calls
 * this function, then renders each page as static HTML. This means trophy pages
 * load instantly with no server computation — they're just HTML files.
 *
 * DOC TRAIL — next-mdx-remote/rsc
 * The `MDXRemote` component from `next-mdx-remote/rsc` compiles MDX on the
 * server at build/request time. No MDX runtime ships to the browser — the
 * output is plain HTML. This keeps the page fast and the bundle small.
 */

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllTrophies, getTrophyBySlug } from "@/lib/trophies";

/** Pre-render all trophy pages at build time. */
export function generateStaticParams() {
  return getAllTrophies().map((t) => ({ slug: t.slug }));
}

/** Generate per-page metadata for <title> tags. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trophy = getTrophyBySlug(slug);
  return { title: trophy ? `${trophy.title} — Trophy Case` : "Not Found" };
}

/** Render the artifact embed based on file extension. */
function ArtifactEmbed({ path }: { path: string }) {
  const ext = path.split(".").pop()?.toLowerCase();

  if (ext === "mp3" || ext === "wav" || ext === "ogg") {
    return (
      <div className="rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-4">
        <p className="text-xs text-gold-dim mb-2 uppercase tracking-wider">
          Audio artifact
        </p>
        <audio controls className="w-full" preload="metadata">
          <source src={`/${path}`} />
        </audio>
      </div>
    );
  }

  if (ext === "mp4" || ext === "webm") {
    return (
      <div className="rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-4">
        <p className="text-xs text-gold-dim mb-2 uppercase tracking-wider">
          Video artifact
        </p>
        <video controls className="w-full rounded" preload="metadata">
          <source src={`/${path}`} />
        </video>
      </div>
    );
  }

  if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif" || ext === "webp") {
    return (
      <div className="rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-4">
        <p className="text-xs text-gold-dim mb-2 uppercase tracking-wider">
          Image artifact
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/${path}`} alt="Trophy artifact" className="rounded max-w-full" />
      </div>
    );
  }

  // Generic download link for any other file type
  return (
    <div className="rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-4">
      <p className="text-xs text-gold-dim mb-2 uppercase tracking-wider">
        Artifact
      </p>
      <a
        href={`/${path}`}
        download
        className="text-sm text-gold underline hover:text-gold-light"
      >
        Download {path.split("/").pop()}
      </a>
    </div>
  );
}

export default async function TrophyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trophy = getTrophyBySlug(slug);

  if (!trophy) notFound();

  return (
    <article className="space-y-6">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gold-dim hover:text-gold transition-colors"
      >
        &larr; Back to feed
      </Link>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-zinc-100">{trophy.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <time dateTime={trophy.date} className="text-gold-dim">
            {new Date(trophy.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="inline-flex items-center rounded-md bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold ring-1 ring-gold/20">
            {trophy.outlet}
          </span>
          {trophy.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-[#1A1A1A] px-2 py-0.5 text-xs text-zinc-400 ring-1 ring-[#2A2A2A]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Artifact */}
      {trophy.artifact && <ArtifactEmbed path={trophy.artifact} />}

      {/* MDX body */}
      <div className="prose">
        <MDXRemote source={trophy.content} />
      </div>
    </article>
  );
}

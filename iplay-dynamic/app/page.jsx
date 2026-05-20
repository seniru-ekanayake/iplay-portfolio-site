"use client";

import React from "react";

export default function Home() {
  return (
    <main className="bg-[#030712] text-white overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source
            src="https://i.imgur.com/jkPGaVA.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />

        <header className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
            <h1 className="text-3xl font-black tracking-tight">
              iPLAY Dynamic
            </h1>

            <nav className="hidden gap-8 md:flex">
              {["ABOUT", "SERVICES", "PROJECTS", "TEAM", "CONTACT"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-bold tracking-[0.2em] hover:text-[#60A5FA]"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </header>

        <div className="relative z-20 flex min-h-[85vh] items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              Addictive
              <br />
              Brand
              <br />
              Marketing<span className="text-[#60A5FA]">.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              We design experiences that people choose to engage with.
              Experiences that feel less like campaigns and more like
              participation.
            </p>

            <button className="mt-10 rounded-2xl bg-[#60A5FA] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-black">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-28 text-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.3em] text-[#60A5FA]">
                About Us
              </span>

              <h2 className="mt-6 text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                Redefining
                <br />
                <span className="italic text-[#60A5FA]">
                  Entertainment
                </span>
                <br />
                & Marketing
              </h2>

              <p className="mt-10 text-lg leading-8 text-black/70">
                iPLAY Dynamic creates entertainment-driven marketing systems
                blending esports, digital storytelling, gaming culture,
                activations, and social-first experiences into one ecosystem.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                "2020 — Founded",
                "3 Countries Active",
                "360° Campaign Systems",
                "20M+ Social Reach",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-[#D8E7FF] bg-[#F8FBFF] p-8"
                >
                  <h3 className="text-3xl font-black tracking-tight">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#030712] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-[#60A5FA]">
            Services
          </span>

          <h2 className="mt-6 text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            Creative Systems
            <br />
            Built To Scale.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              "Digital Marketing",
              "Esports & Gaming",
              "Gamification",
              "Platforms & Tools",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-3xl font-black tracking-tight">
                  {item}
                </h3>

                <p className="mt-5 leading-8 text-white/65">
                  Entertainment-first campaigns and engagement systems built
                  for modern audiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

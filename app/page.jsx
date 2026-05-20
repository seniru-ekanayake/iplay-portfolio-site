"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight, Play, Users, Globe, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const services = [
    "Digital Marketing",
    "Esports & Gaming",
    "Brand Activations",
    "Content Production",
    "Music & Culture Events",
    "Gamification",
    "Influencer Campaigns",
    "Web & App Development",
  ];

  return (
    <main className="overflow-x-hidden bg-[#030712] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-75"
        >
          <source src="https://i.imgur.com/jkPGaVA.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[#60A5FA]/20 blur-3xl" />

        <header className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
            <h1 className="text-3xl font-black tracking-tight">iPLAY Dynamic</h1>

            <nav className="hidden gap-8 md:flex">
              {["ABOUT", "SERVICES", "PROJECTS", "TEAM", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-bold tracking-[0.2em] transition hover:text-[#60A5FA]"
                >
                  {item}
                </a>
              ))}
            </nav>

            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </header>

        {open && (
          <div className="fixed inset-0 z-50 bg-[#030712]">
            <div className="flex items-center justify-between px-6 py-8">
              <h2 className="text-2xl font-black">iPLAY Dynamic</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex h-[80vh] flex-col items-center justify-center gap-10">
              {["ABOUT", "SERVICES", "PROJECTS", "TEAM", "CONTACT"].map((item) => (
                <a key={item} href="#" className="text-4xl font-black">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="relative z-20 flex min-h-[85vh] items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-5xl font-black uppercase leading-none tracking-tight md:text-8xl">
              Addictive
              <br />
              Brand
              <br />
              Marketing<span className="text-[#60A5FA]">.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              We design experiences that people choose to engage with.
              Experiences that feel less like campaigns and more like participation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#60A5FA] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-105">
                Get Started
              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-black uppercase tracking-[0.2em]">
                <Play className="h-4 w-4 text-[#60A5FA]" />
                Watch Reel
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-[#030712] py-8">
        <div className="animate-marquee flex gap-16 whitespace-nowrap text-3xl font-black uppercase text-white/30">
          <span>MSI</span>
          <span>ASUS</span>
          <span>AORUS</span>
          <span>ViewSonic</span>
          <span>Predator</span>
          <span>Gigabyte</span>
          <span>MSI</span>
          <span>ASUS</span>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-28 text-black">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.3em] text-[#60A5FA]">
              About Us
            </span>

            <h2 className="mt-6 text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
              Redefining
              <br />
              <span className="italic text-[#60A5FA]">Entertainment</span>
              <br />
              & Marketing
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-black/70">
              <p>
                iPlay.LK was established in 2020 by a dynamic and exceptionally talented team of individuals who shared a passion for creating unforgettable experiences and a vision to redefine the entertainment and marketing landscape in Sri Lanka.
              </p>

              <p>
                What began as a dedicated gaming and esports event organizer has since evolved into a multifaceted creative powerhouse — delivering digital marketing, brand activations, music and cultural events, gamification, content creation, and integrated 360° campaigns.
              </p>

              <p>
                With operations spanning three South Asian countries and growing, we continue to innovate, engage, and inspire for global and local brands alike.
              </p>
            </div>
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
                className="rounded-3xl border border-[#D8E7FF] bg-[#F8FBFF] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#60A5FA]/40"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black tracking-tight">{item}</h3>
                  <ArrowRight className="text-[#60A5FA]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030712] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-[#60A5FA]">
            Services
          </span>

          <h2 className="mt-6 text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
            Creative Systems
            <br />
            Built To Scale.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#60A5FA]/40"
              >
                <div className="mb-6 h-5 w-5 rounded-full bg-[#60A5FA]" />

                <h3 className="text-2xl font-black tracking-tight">{service}</h3>

                <p className="mt-4 leading-8 text-white/65">
                  Entertainment-first systems built for modern digital audiences and brands.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 text-black">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-[#60A5FA]">
            Team
          </span>

          <h2 className="mt-6 text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
            Built By
            <br />
            Operators.
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              "Vihanga Yuwanthaka",
              "Kamith Lakmal",
              "Danstan Abeyruwan",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#D8E7FF] bg-[#F8FBFF] p-8"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#60A5FA]/10">
                  <Users className="text-[#60A5FA]" />
                </div>

                <h3 className="mt-8 text-3xl font-black tracking-tight text-[#030712]">
                  {item}
                </h3>

                <p className="mt-3 uppercase tracking-[0.2em] text-[#60A5FA]">
                  Creative Leadership
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#030712] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div>
            <h3 className="text-3xl font-black tracking-tight">iPLAY Dynamic</h3>

            <p className="mt-3 text-white/50">
              Entertainment-driven marketing systems.
            </p>
          </div>

          <div className="flex gap-4">
            {[Instagram, Youtube, Linkedin, Globe].map((Icon, idx) => (
              <div
                key={idx}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
              >
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

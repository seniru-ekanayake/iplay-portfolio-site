
"use client";

import {
  Megaphone,
  Gamepad2,
  Rocket,
  Clapperboard,
  Music2,
  Trophy,
  Users,
  Code2,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const services = [
    {
      title: "Digital Marketing",
      icon: Megaphone,
    },
    {
      title: "Esports & Gaming",
      icon: Gamepad2,
    },
    {
      title: "Brand Activations",
      icon: Rocket,
    },
    {
      title: "Content Production",
      icon: Clapperboard,
    },
    {
      title: "Music & Culture",
      icon: Music2,
    },
    {
      title: "Gamification",
      icon: Trophy,
    },
    {
      title: "Influencer Campaigns",
      icon: Users,
    },
    {
      title: "Web Development",
      icon: Code2,
    },
  ];

  const clients = [
    "MSI",
    "ASUS",
    "GIGABYTE",
    "PREDATOR",
    "Dialog",
    "Pizza Hut",
    "KFC",
    "Red Bull",
  ];

  return (
    <main className="overflow-x-hidden bg-[#020617] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source
            src="https://i.imgur.com/jkPGaVA.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#020617]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />

        <header className="relative z-30">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
            <h1 className="text-3xl font-black tracking-tight">
              iPLAY Dynamic
            </h1>

            <nav className="hidden items-center gap-10 md:flex">
              {["ABOUT", "SERVICES", "CLIENTS", "TEAM", "CONTACT"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-bold tracking-[0.2em] text-white/80 transition hover:text-[#60A5FA]"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </header>

        {open && (
          <div className="fixed inset-0 z-50 bg-[#020617]">
            <div className="flex items-center justify-between px-6 py-8">
              <h2 className="text-3xl font-black">iPLAY Dynamic</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex h-[80vh] flex-col items-center justify-center gap-10">
              {["ABOUT", "SERVICES", "CLIENTS", "TEAM", "CONTACT"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-4xl font-black"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}

        <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              Entertainment. Marketing. Experiences.
            </p>

            <h2 className="text-[56px] font-black uppercase leading-[0.9] tracking-tight sm:text-[72px] lg:text-[110px]">
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

            <button className="mt-10 flex items-center gap-3 rounded-2xl bg-[#60A5FA] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-105">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              About Us
            </p>

            <h2 className="text-[52px] font-black uppercase leading-[0.95] tracking-tight sm:text-[72px]">
              Redefining
              <br />
              <span className="italic text-[#60A5FA]">
                Entertainment
              </span>
              <br />
              & Marketing
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-black/70">
              <p>
                iPlay.LK was established in 2020 by a dynamic and
                exceptionally talented team who shared a passion for
                creating unforgettable experiences.
              </p>

              <p>
                What began as a dedicated gaming and esports organizer
                evolved into a multifaceted creative powerhouse delivering
                digital marketing, brand activations, gamification,
                content creation, and integrated 360° campaigns.
              </p>

              <p>
                With operations spanning multiple South Asian countries,
                we continue to innovate and inspire for global and local
                brands alike.
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
                className="flex items-center justify-between rounded-3xl border border-[#DDE8FF] bg-[#F8FBFF] p-8"
              >
                <h3 className="text-3xl font-black tracking-tight">
                  {item}
                </h3>

                <ArrowRight className="text-[#60A5FA]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#020617] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
            Services
          </p>

          <h2 className="max-w-5xl text-[52px] font-black uppercase leading-[0.95] tracking-tight sm:text-[80px]">
            Creative Systems
            <br />
            Built To Scale.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-[#60A5FA]/40"
                >
                  <Icon className="h-10 w-10 text-[#60A5FA]" />

                  <h3 className="mt-8 text-2xl font-black tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/65">
                    Entertainment-first systems built for modern digital
                    audiences and brands.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-black">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
            Clients
          </p>

          <h2 className="text-[52px] font-black uppercase leading-[0.95] tracking-tight sm:text-[80px]">
            Trusted By
            <br />
            Leading Brands.
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-[120px] items-center justify-center rounded-3xl border border-[#DDE8FF] bg-[#F8FBFF]"
              >
                <span className="text-3xl font-black tracking-tight">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#020617] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
            Team
          </p>

          <h2 className="text-[52px] font-black uppercase leading-[0.95] tracking-tight sm:text-[80px]">
            Built By
            <br />
            Operators.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Vihanga Yuwanthaka",
              "Kamith Lakmal",
              "Danstan Abeyruwan",
            ].map((member) => (
              <div
                key={member}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#60A5FA]/10">
                  <Users className="text-[#60A5FA]" />
                </div>

                <h3 className="mt-8 text-3xl font-black tracking-tight">
                  {member}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#60A5FA]">
                  Creative Leadership
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#020617] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div>
            <h3 className="text-3xl font-black">
              iPLAY Dynamic
            </h3>

            <p className="mt-3 text-white/50">
              Entertainment-driven marketing systems.
            </p>
          </div>

          <div className="flex gap-4">
            {[Instagram, Youtube, Linkedin, Globe].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
                >
                  <Icon className="h-5 w-5" />
                </div>
              )
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}

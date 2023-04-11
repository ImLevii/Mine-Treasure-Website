import Head from "next/head";
import React, { useRef } from "react";
import Image from "next/image";
import {
  faArrowRight,
  faCircleCheck,
  faCircleExclamation,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Footer from "../components/Footer";
import Review from "../components/Review";
import StatisticsChart from "../components/StatisticsChart";
import useRequest from "../hooks/useRequest";
import { scrollTo } from "../utils/scrollTo";
import Header from "../components/layout/Header";

const index = () => {
  const [statistics] = useRequest("/api/statistics");
  const whySectionRef = useRef();

  return (
    <>
      <Head>
        <title>HcRaid | Mine Treasure</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="HcRaid's datapack aims to enhance the mining experience. Making treasure randomly spawn while mining."
          key="desc"
        />
        <meta property="og:title" content="Mine Treasure" />
        <meta
          property="og:description"
          content="HcRaid's Mining datapack which aims to enhance the mining experience."
        />
        <meta property="og:image" content="/images/minetreasuretext.png" />
      </Head>
      <div className="bg-white py-6 h-screen relative">
        <div className="lg:px-24">
          <Header />
          <main className="flex justify-center content-center w-full h-[70%]">
            <div className="pt-10 xl:pt-3 grid xl:grid-cols-2 w-full md:border-t">
              <section className="flex justify-center items-center">
                <div className="pl-5">
                  <h1 className="inline-block font-bold text-4xl">
                    Making mining enjoyable again
                  </h1>
                  <p className="max-w-[90%] sm:max-w-[60%] pt-3">
                    Ever gotten tired of mining endlessly with no goal in mind?
                    No motivation to go strip-mining? No means to go on this
                    repetitive task for ores? Well, HcRaid's data pack aims to
                    change exactly that.
                  </p>
                  <button
                    className="cursor-pointer mt-2"
                    onClick={() =>
                      scrollTo({
                        id: "why",
                        ref: whySectionRef,
                        duration: 2000,
                      })
                    }
                  >
                    <em>Read more...</em>
                  </button>
                  <br />
                  <Link
                    href="/download"
                    className="mt-5 md:mt-10 inline-block px-10 text-white py-3 rounded-full bg-blue-500"
                  >
                    Start playing{" "}
                    <FontAwesomeIcon
                      height={20}
                      icon={faArrowRight}
                      className="inline-block align-middle"
                    />
                  </Link>
                </div>
              </section>
              <section className="hidden xl:flex items-center">
                <Image
                  src="/images/treasure.svg"
                  alt="header"
                  width={500}
                  height={500}
                  priority
                ></Image>
              </section>
            </div>
          </main>
        </div>
        {/* Read more arrows in the center */}
        <div className="absolute bottom-5 md:bottom-10 w-full hidden sm:inline-block">
          <div
            className="flex w-full justify-center items-center flex-col cursor-pointer"
            onClick={() =>
              scrollTo({ id: "why", ref: whySectionRef, duration: 2000 })
            }
          >
            <p>Read more</p>
            <div className="box-border w-4 h-4 md:w-8 md:h-8 border border-black border-t-0 border-l-0 rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-6 lg:px-24 py-12">
        <h1
          className="text-center text-3xl font-bold"
          ref={whySectionRef}
          id="why"
        >
          Why this datapack?
        </h1>
        <section className="w-[90%] md:w-[70%] xl:w-[60%] mx-auto pt-5 grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-0">
          <div className="2xl:h-64 bg-gray-300 hidden xl:flex items-center">
            <Image
              className="mx-auto block 2xl:w-full max-h-full"
              src="/images/treeasure-tiers.gif"
              alt="treasure tiers gif"
              width={500}
              height={300}
            ></Image>
          </div>
          <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
            <div>
              <h1 className="text-2xl font-medium">Custom treasures</h1>
              <p>
                HcRaid introduces a whole new way of approaching mining with a
                huge reward system. Treasure has a chance to spawn when mining a
                stone-related block. These treasures are divided into several
                different tiers: Common, Rare, Epic and Legendary.
              </p>
            </div>
          </div>
          <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
            <div>
              <h1 className="text-2xl font-medium">Biome specific</h1>
              <p>
                There are biome-specific treasures depending on which biome the
                player is in, which also motivates different bases in different
                biomes.
              </p>
            </div>
          </div>
          <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
            <Image
              className="mx-auto block 2xl:w-full max-h-full"
              src="/images/biomes.jpg"
              alt="biomes"
              width={500}
              height={300}
            ></Image>
          </div>
          <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
            <Image
              className="mx-auto block 2xl:w-full max-h-full"
              src="/images/items.png"
              alt="treasure items"
              width={500}
              height={300}
            ></Image>
          </div>
          <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
            <div>
              <h1 className="text-2xl font-medium">Custom items</h1>
              <p>
                HcRaid includes over 80+ loot tables with custom armor, custom
                weapons, custom food, custom advancements and custom utility
                items and randomized stats, making many items feel unique.
              </p>
            </div>
          </div>
          <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
            <div>
              <h1 className="text-2xl font-medium">Advancements</h1>
              <p>
                There is a custom advancement system with 201 new advancements!
                This data pack introduces an insane addition of new achievements
                designed around the new custom features this data pack provides.
              </p>
            </div>
          </div>
          <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
            <Image
              className="mx-auto block 2xl:w-full max-h-full"
              src="/images/advancements.png"
              alt="advancements"
              width={500}
              height={300}
            ></Image>
          </div>
        </section>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Review
            text="So much content, I can tell a lot of work went into this, very impressive!"
            username={"bobs100"}
          />
          <Review
            text="I love this server so much. Mining is one of those grindy things in minecraft I used to hate so much but now it's got such an allure!"
            username={"SailTeam6"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;

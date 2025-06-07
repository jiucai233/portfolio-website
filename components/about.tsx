"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am studying in Yonsei University{" "}
        <span className="font-medium">Applied Information Engineering </span>major, 
        I decided to pursue my passion for programming.{" "}
        <span className="italic">My favorite part of programming or AI is that </span> 
        I <span className="underline">love</span> the feeling of making a model to learn 
        from data, it's like caring a kid and see this kid grows, which gains a lot of sense
         of accomplishment. My core skill
        is{" "}
        <span className="font-medium">
          Python, Pytorch and Computer Vision 
        </span>
        .  I am currently looking for a{" "}
        <span className="font-medium">Internship</span> as a Data Scientist or AI Engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and play football. I also enjoy{" "}
        <span className="font-medium">Photography</span>. You can check the "Photos"
        section to see more of my photos, hope you enjoy it!
      </p>
    </motion.section>
  );
}

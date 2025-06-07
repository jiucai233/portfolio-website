import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import YoloDetectionImg from "@/public/YoloDetection.jpg";
import SochiWinterOlympicsImg from "@/public/SochiWinterOlympics.png";
import GLCAIChatbotImg from "@/public/GLCAIChatbot.png";
export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Photos",
    hash: "/photo",
  },
  {
    name: "Blogs",
    hash: "/blogs",
  },
] as const;

export const experiencesData = [
  {
    title: "Yonsei University",
    location: "Seoul, South Korea",
    description:
      "Global Leaders College, Applied Information Engineering major",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2027",
  },
] as const;

export const projectsData = [
  {
    title: "2014 Sochi Winter Olympics analysis",
    description:
      "I analyzed the data of the 2014 Sochi Winter Olympics. I crawled the data from the website and visualized the data.",
    tags: ["Pandas", "Data Analysis", "Sentiment Analysis","Data Visualization","Web Crawling"],
    imageUrl: SochiWinterOlympicsImg,
  },
  {
    title: "Object Detection with YOLO",
    description:
      "I used YOLO to detect objects in the image and video. And experienced the whole process of model finetuning, training and inference.",
    tags: ["Python", "Pytorch", "YOLO", "Computer Vision", "Data Analysis"],
    imageUrl:YoloDetectionImg
  },
  {
    title: "GLC AI Chatbot",
    description:
      "I used RAG to build a chatbot for the Global Leaders College.",
    tags: ["Python", "RAG", "LLM", "Chatbot"],
    imageUrl:GLCAIChatbotImg
  },
] as const;

export const skillsData = [
  "Git",
  "Machine Learning",
  "Data Analysis",
  "Python",
  "Deep Learning",
  "Transformer",
  "3D Image processing",
  "LLM finetuning",
  "Computer Vision",
  "Natural Language Processing",
  "RAG",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Notion",
  "Multilingual"
] as const;

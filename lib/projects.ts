import cds_screenshot from "@/public/cds_screenshot.png";
import nlpmed_screenshot from "@/public/nlpmed_screenshot.png";
import cdm_erd from "@/public/cdm_erd.png";
import fl_screenshot from "@/public/fl_screenshot.png";

export const projectsData = [
  {
    name: "CDS",
    intranetOnly: false,
    description: "Cancer Associated Venous Thromboembolism (VTE) Decision Aid portal.",
    imageUrl: cds_screenshot,
    link: "https://cds.angli-lab.com/",
  },
  {
    name: "NLPMed",
    intranetOnly: false,
    description: "A platform for healthcare professionals to upload, preprocess, and analyze medical records using advanced NLP and LLM technologies.",
    imageUrl: nlpmed_screenshot,
    link: "https://nlpmed.demo.angli-lab.com/",
  },
  {
    name: "CDM",
    intranetOnly: false,
    description: "A Common Data Model developed to streamline research on electronic health record (EHR) databases.",
    imageUrl: cdm_erd,
    link: "",
  },
  {
    name: "FL",
    intranetOnly: false,
    description: "Secure federated learning prototypes using OpenFL and NVIDIA Flare.",
    imageUrl: fl_screenshot,
    link: "",
  },
];
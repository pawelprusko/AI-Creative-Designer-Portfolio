export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'motion' | 'prompting' | 'interactive' | 'persona';
  categoryLabel: string;
  tags: string[];
  scope: string;
  technicalLogicLabel: string;
  technicalLogic: string;
  impactOrTechLabel: string;
  impactOrTech: string;
  primaryButton: {
    label: string;
    url: string;
  };
  secondaryButton?: {
    label: string;
    url: string;
  };
  modalContent: {
    overview: string;
    keyDeliverables: string[];
    agentLogicSnippet?: string;
    agentLogicDescription?: string;
    architectureSteps: { step: string; detail: string }[];
    metrics: { label: string; value: string }[];
  };
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Paweł Prusko",
    role: "AI-first Creative Designer | GenAI Engineer & UX Architect",
    location: "Warsaw, Poland",
    status: "Immediately Available",
    email: "pruskopawel@gmail.com",
    linkedin: "https://www.linkedin.com/in/pawelprusko/",
    summary:
      "Senior UX Architect & Creative AI Specialist bridging core design fundamentals (typography, spatial layout, Figma design systems) with cutting-edge Generative AI workflows, custom System Agents, and multi-modal GenAI pipelines.",
  },
  metrics: [
    { value: "75%", label: "Overhead Reduction", note: "In Commercial F&B GenAI Pipeline" },
    { value: "100%", label: "Anatomical & Material Consistency", note: "Cross-format Seed Constraint System" },
    { value: "80%", label: "Content Workflow Automation", note: "Modular System Prompting Architecture" },
    { value: "10+ Yrs", label: "UX & System Architecture", note: "Design Systems, Micro-Interactions & AI" },
  ],
  sectionIntro: {
    title: "Flagship GenAI Projects",
    subtitle:
      "These featured projects demonstrate the full spectrum of my capabilities — ranging from multi-modal AI video/image production and custom System Agents architecture to interactive GenAI web apps and automated content engines.",
  },
  projects: [
    {
      id: "culinary-art-studio",
      title: "NewGen AI Culinary Art Studio",
      subtitle: "Multi-Modal Visual & Motion Pipeline",
      category: "motion",
      categoryLabel: "Multi-Modal Motion",
      tags: ["Gemini System Agents", "Midjourney", "PixVerse", "F&B Art Direction", "4K Motion"],
      scope:
        "Engineered a commercial-grade GenAI production pipeline for luxury F&B and CPG brands, replacing physical shoots with deterministic material modeling.",
      technicalLogicLabel: "AI & Agent Logic",
      technicalLogic:
        "Authored custom Gemini System Agents controlling fluid viscosity, lighting optics, and multi-angle scene architecture.",
      impactOrTechLabel: "Impact",
      impactOrTech:
        "Reduced visual production overhead by 75% with 100% asset consistency.",
      primaryButton: {
        label: "View Project Architecture & Showcase",
        url: "https://www.pawelprusko.com/",
      },
      modalContent: {
        overview:
          "Traditional commercial gastronomy photography requires specialized food stylists, high-speed macro optics, and high studio rental overheads. This production pipeline establishes a fully reproducible GenAI pipeline producing luxury Michelin-grade food and beverage assets with sub-millimeter consistency.",
        keyDeliverables: [
          "Commercial GenAI Art Direction Guidelines for luxury CPG brands",
          "Custom Gemini System Agent library parameterizing viscosity, refraction, and surface tension",
          "Deterministic multi-angle rendering seeds bridging Midjourney v6.1 and PixVerse v3",
          "Color-graded 4K master motion clips tailored for social and digital billboards",
        ],
        agentLogicDescription:
          "The Gemini System Agent operates as an optical physics engine, translating client brand recipes into exact camera, lighting, and physical material directives.",
        agentLogicSnippet: `// Gemini System Agent: Gastronomy Material & Optical Director
SYSTEM_INSTRUCTION:
"You are a master food stylist and commercial culinary DP.
Strictly enforce material laws:
1. FLUID DYNAMICS: Viscosity Index [0.72 - 0.94], surface tension meniscus 1.8mm.
2. OPTICS: 85mm f/1.4 T-stop macro, specular rim kicker at 45°, key-to-fill ratio 3:1.
3. SCENE ARCHITECTURE: Multi-angle coordinates [X: 0, Y: -15°, Z: 300mm], dark slate pedestal, micro-particulate mist.
4. CONSISTENCY TOKEN: Preserve ingredient geometries across variations."`,
        architectureSteps: [
          { step: "01. Material Specification", detail: "F&B texture parameters (viscosity, sheen, temperature, particulate suspension) mapped in System Agent." },
          { step: "02. Multi-Angle Rendering", detail: "High-resolution seed generation matching commercial food styling standards." },
          { step: "03. Motion Synthesis", detail: "PixVerse temporal interpolation with camera orbit & micro-fluid fluid simulation at 60fps." },
          { step: "04. Post-Color Grading", detail: "LUT alignment and high-frequency sharpness retention for 4K commercial export." },
        ],
        metrics: [
          { label: "Production Cost", value: "-75%" },
          { label: "Asset Consistency", value: "100%" },
          { label: "Turnaround Time", value: "48 Hours" },
        ],
      },
    },
    {
      id: "linkedin-content-engine",
      title: "Posts & LinkedIn Content Engine",
      subtitle: "Data AI Advocate to AI Culinary Art Director",
      category: "prompting",
      categoryLabel: "Prompt Systems & Automation",
      tags: ["System Prompting", "LinkedIn Personal Branding", "Content Engineering", "Automation"],
      scope:
        "Designed an end-to-end LinkedIn content prompt engine used to build personal brand authority across Data UX and AI Art Direction.",
      technicalLogicLabel: "System Architecture",
      technicalLogic:
        "Developed a modular System Prompt framework (JSON/Markdown) transforming complex research into high-converting carousels & visual hooks.",
      impactOrTechLabel: "Impact",
      impactOrTech:
        "Automated 80% of the content creation workflow for LinkedIn posts.",
      primaryButton: {
        label: "View Prompt System",
        url: "https://drive.google.com/drive/folders/1e288MeczqI85amkAHnJCEtSeszkjRfhx?usp=drive_link",
      },
      secondaryButton: {
        label: "Visit LinkedIn Profile",
        url: "https://www.linkedin.com/in/pawelprusko/",
      },
      modalContent: {
        overview:
          "To scale authority in both Data UX and AI Culinary Art Direction, this system automates the intellectual synthesis of research papers, prompt experiments, and visual tutorials into structured, high-engagement LinkedIn posts, carousel decks, and visual hooks.",
        keyDeliverables: [
          "Modular System Prompt architecture written in structured JSON and Markdown",
          "Automated Hook Matrix optimizing 3-line scroll-stoppers for technical design audiences",
          "Carousel generation template translating case studies into 10-slide visual outlines",
          "Automated tone governor shifting effortlessly between Data Architect and Culinary AI Director",
        ],
        agentLogicDescription:
          "The Prompt Engine accepts rough research notes or visual experiments, analyzes them through a 5-layer content taxonomy, and outputs formatted post markdown ready for scheduling.",
        agentLogicSnippet: `{
  "system_role": "AI Thought-Leadership Content Architect",
  "audience": "Senior Design Directors, GenAI Practitioners, Brand VPs",
  "transformation_pipeline": [
    "1. Deconstruct core thesis into a counter-intuitive observation",
    "2. Generate 3 hook variants (curiosity gap, proof-first, technical contrast)",
    "3. Structure narrative: Friction -> Architectural Paradigm -> Concrete Proof -> Actionable Agent",
    "4. Format Carousel slide deck: Max 28 words per slide with layout directives"
  ],
  "constraints": {
    "no_buzzword_fluff": true,
    "require_quantitative_proof": true,
    "formatting": "scannable, short blocks, typographic bullet punctuation"
  }
}`,
        architectureSteps: [
          { step: "01. Ingestion", detail: "Raw case study notes, experiment prompt logs, and visual stills fed into the engine." },
          { step: "02. Synthesis", detail: "System prompt extracts core insight, key numbers, and architectural takeaways." },
          { step: "03. Multi-Format Outlines", detail: "Generates long-form text, 7-slide carousel layout directives, and visual prompts." },
          { step: "04. Quality Gate", detail: "Automated check for clarity, anti-fluff compliance, and call-to-action precision." },
        ],
        metrics: [
          { label: "Workflow Automation", value: "80%" },
          { label: "Editorial Velocity", value: "4x Faster" },
          { label: "Audience Engagement", value: "+140%" },
        ],
      },
    },
    {
      id: "data-alchemist",
      title: "Data Alchemist",
      subtitle: "Interactive Generative AI Knowledge Hub",
      category: "interactive",
      categoryLabel: "Agentic UX & Web Apps",
      tags: ["Google AI Studio App", "Agentic UX", "Generative UI", "Data Visualization"],
      scope:
        "Built a Google AI Studio-powered web application delivering deep-dive insights on data visualization, agentic UX, and generative workflows.",
      technicalLogicLabel: "Design & UX",
      technicalLogic:
        "Combined structured UX layout standards with LLM-generated interactive widgets and explainable visual storytelling.",
      impactOrTechLabel: "Architecture",
      impactOrTech:
        "React SPA with server-authoritative state, tabular telemetry, and zero-latency exploration.",
      primaryButton: {
        label: "Open Interactive Web App",
        url: "https://data-experience-alchemist.vercel.app/",
      },
      modalContent: {
        overview:
          "Data Alchemist explores the bleeding edge of Agentic User Experience (Agentic UX) and Generative UI (GenUI). Rather than static reports or traditional chat bots, it dynamically synthesizes interactive visual nodes, explainable decision trees, and live data telemetry into an intuitive canvas.",
        keyDeliverables: [
          "Interactive Agentic UX pattern library for enterprise GenAI applications",
          "Dynamic Generative UI components rendered based on intent classification",
          "Visual storytelling nodes explaining multi-step LLM reasoning paths",
          "Zero-latency reactive data playground built with React and Tailwind",
        ],
        agentLogicDescription:
          "The hub incorporates structured JSON schema generation to drive dynamic client-side widget mounting without unpredictable hallucination.",
        agentLogicSnippet: `interface AgenticDecisionNode {
  nodeId: string;
  intent: "explore_taxonomy" | "simulate_pipeline" | "benchmark_latency";
  confidenceScore: 0.98;
  explainabilityTrace: {
    retrievedSource: "GenAI_Design_Systems_v2.1";
    reasoningPillar: "Human-in-the-Loop Verification";
  };
  recommendedWidget: "interactive_node_matrix" | "comparative_metric_stream";
}`,
        architectureSteps: [
          { step: "01. Intent Classification", detail: "Agent analyzes user query and determines the optimal visual representation mode." },
          { step: "02. Schema Enforcement", detail: "LLM emits strictly typed JSON defining data points, bounds, and interactive controls." },
          { step: "03. Component Hydration", detail: "Client-side React widgets mount dynamically with instant user interactivity." },
          { step: "04. Continuous Feedback", detail: "User interactions feed back into the agent context for adaptive visual exploration." },
        ],
        metrics: [
          { label: "Interface Latency", value: "<150ms" },
          { label: "Information Density", value: "3.2x" },
          { label: "User Task Completion", value: "94%" },
        ],
      },
    },
    {
      id: "anya-persona-pipeline",
      title: "Anya — Scalable Hyper-Realistic AI Persona Pipeline",
      subtitle: "Human Consistency & Motion Pipeline",
      category: "persona",
      categoryLabel: "Persona Consistency & Motion",
      tags: ["Human Persona Consistency", "Multi-Modal Video", "Retouching", "System Agents"],
      scope:
        "Architected a multi-tiered prompt pipeline guaranteeing 100% facial, anatomical, and lighting consistency across photo and video formats.",
      technicalLogicLabel: "Tech Stack",
      technicalLogic:
        "Midjourney, PixVerse, Gemini Video, Claude 3.5, Advanced Photoshop Refinement.",
      impactOrTechLabel: "Consistency Benchmark",
      impactOrTech:
        "Zero facial identity drift across 500+ generated editorial stills and motion clips.",
      primaryButton: {
        label: "View Pipeline Documentation",
        url: "https://drive.google.com/drive/folders/1_XryE8oQ6R4f1GqAh1Zh3ACCilr93pQ2?usp=drive_link",
      },
      modalContent: {
        overview:
          "Character identity drift is the foremost challenge in GenAI brand marketing. 'Anya' is an enterprise-grade virtual persona pipeline engineered to maintain 100% anatomical fidelity, lighting coherence, and facial landmark consistency across high-fashion editorial stills and commercial video campaigns.",
        keyDeliverables: [
          "Facial Landmark & Seed Locking protocol for cross-model deployment",
          "Comprehensive physical profile and wardrobe tokenization system",
          "Multi-model translation matrix (Midjourney character references -> PixVerse video motion)",
          "High-frequency skin texture and micro-wrinkle restoration pipeline in Photoshop",
        ],
        agentLogicDescription:
          "System Agents enforce strict negative space, camera focal lengths, and identity invariant tokens to prevent morphing between shots.",
        agentLogicSnippet: `{
  "subject_token": "ANYA_IDENTITY_PRIME_v4",
  "anatomical_invariants": {
    "facial_structure": "high cheekbones, subtle asymmetry in left eyebrow arch, soft jawline",
    "skin_optics": "natural micro-pores, un-retouched epidermis texture, natural subsurface scattering",
    "eye_color": "warm amber hazel with distinct iris limbal ring"
  },
  "camera_rig": "85mm f/1.8 Hasselblad optical character, neutral studio fill",
  "video_motion_constraints": {
    "expression_rate": "natural micro-movements, relaxed blinking, zero uncanny mouth stretching",
    "motion_vector_damping": 0.85
  }
}`,
        architectureSteps: [
          { step: "01. Base Identity Anchor", detail: "Master 8K identity portrait generated and indexed with 3D facial landmark coordinates." },
          { step: "02. Multi-Angle Dataset", detail: "Created 24-pose reference matrix covering profile, 3/4 angle, candid, and macro close-ups." },
          { step: "03. Motion Translation", detail: "PixVerse motion synthesis using character reference locks to prevent facial deformation." },
          { step: "04. Editorial Retouching", detail: "Final pass in Photoshop ensuring natural skin grain and chromatic authenticity." },
        ],
        metrics: [
          { label: "Identity Drift", value: "0.0%" },
          { label: "Stills & Clips Produced", value: "500+" },
          { label: "Video Consistency", value: "60fps 4K" },
        ],
      },
    },
  ] as Project[],
  competencies: [
    {
      title: "Core Design Fundamentals",
      subtitle: "Typography & Spatial Systems",
      description:
        "Rooted in classical Swiss typography, strict typographic hierarchies, mathematical whitespace pacing, and Figma component design tokens. Built for seamless developer handoff and pixel-perfect design-to-code execution.",
      skills: ["Figma Design Systems", "Responsive Grid Math", "Zero-Pill Discipline", "WCAG AA Contrast", "Micro-Interactions"],
    },
    {
      title: "Custom System Agents & Logic",
      subtitle: "Prompt Architecture & Structuring",
      description:
        "Authoring deterministic Gemini System Agents and modular JSON/Markdown prompts that force LLMs into strict, production-ready operational roles without generic hallucinations or fluff.",
      skills: ["Gemini System Agents", "JSON Schema Enforcement", "Few-Shot Prompt Engineering", "Temperature Modulation", "Context Window Optimization"],
    },
    {
      title: "Multi-Modal AI Pipelines",
      subtitle: "Image, Video & Motion Synthesis",
      description:
        "Directing commercial visual pipelines that merge Midjourney, PixVerse, and Gemini models with deterministic identity anchors, material physics, and editorial post-production.",
      skills: ["Persona Consistency", "Physics & Lighting Optics", "PixVerse Motion Interpolation", "4K Commercial Upscaling", "F&B Art Direction"],
    },
  ],
};

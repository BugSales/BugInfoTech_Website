export interface RelevantService {
  name: string;
  href: string;
}

export interface SolutionDetails {
  slug: string;
  title: string;
  subtitle: string;
  challenges: string[];
  digitalSolutions: string[];
  relevantServices: RelevantService[];
  useCase: {
    title: string;
    description: string;
  };
}

export const solutionsData: Record<string, SolutionDetails> = {
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare Technology Solutions",
    subtitle: "Secure, compliant, and scalable digital structures built for healthcare providers and patient check-ins.",
    challenges: [
      "Securing patient record databases against data leaks and unauthorized logins.",
      "Administrative bottlenecks managing patient bookings and scheduling.",
      "Fragmented doctor-patient communication leading to missed consultations.",
      "Outdated website profiles failing to educate patients on service availability."
    ],
    digitalSolutions: [
      "Secure patient intake forms and online booking portal systems.",
      "Custom administrative dashboards representing doctor schedules and room bookings.",
      "Encrypted communication channels ensuring secure patient messaging.",
      "HIPAA-compliant hosting configuration and secure cloud firewalls."
    ],
    relevantServices: [
      { name: "Website Design & Dev", href: "/services/website-development" },
      { name: "Web Application Dev", href: "/services/application-development" },
      { name: "Cybersecurity Auditing", href: "/services/cybersecurity" }
    ],
    useCase: {
      title: "Patient Booking Portal Realization",
      description: "We designed and coded a custom patient booking and schedule management application for a regional medical center. The application securely manages appointment selections, patient intake checklists, and automatically updates the administrative scheduling dashboard, replacing manual spreadsheet management."
    }
  },
  "education": {
    slug: "education",
    title: "Education & Portal Solutions",
    subtitle: "High-performance learning management interfaces, student portals, and scheduling tools.",
    challenges: [
      "Inefficient student registration, fee payment, and course sign-up workflows.",
      "Outdated student profiles making academic transcripts access slow.",
      "Difficulty managing and tracking course assignments and grading.",
      "Lack of centralized hubs for parents, students, and teachers to share updates."
    ],
    digitalSolutions: [
      "Custom Student Information Systems (SIS) managing profiles and enrollment.",
      "Secure student/parent portals allowing instant grades and transcript downloads.",
      "Centralized assignment submission systems with teacher grading panels.",
      "Payment gateway integrations allowing secure tuition payment processing."
    ],
    relevantServices: [
      { name: "Web Application Dev", href: "/services/application-development" },
      { name: "Custom Software Solutions", href: "/services/software-development" },
      { name: "Maintenance & Support", href: "/services/it-support" }
    ],
    useCase: {
      title: "Student Information Panel Integration",
      description: "We engineered a secure student registration and scheduling database panel for a regional training institute. The platform streamlined course selection, validated student pre-requisites, and provided a custom dashboard for class scheduling."
    }
  },
  "small-business": {
    slug: "small-business",
    title: "Small & Medium Business Solutions",
    subtitle: "Workforce optimization, lead-generation sites, and workflow automation built for local market leaders.",
    challenges: [
      "Losing potential clients to competitors with modern, mobile-responsive websites.",
      "Spending too many hours copying client information between spreadsheets manually.",
      "Lack of secure corporate email and shared data access for employees.",
      "No clear method to track exactly where new client inquiries originate."
    ],
    digitalSolutions: [
      "Credible, search-engine-optimized business profile website layouts.",
      "Custom CRM databases centralizing client inquiries and contact details.",
      "Shared office file servers and VPN configurations for remote team access.",
      "Lead generation forms connected to marketing analytics dashboards."
    ],
    relevantServices: [
      { name: "Website Design & Dev", href: "/services/website-development" },
      { name: "IT Infrastructure & Networking", href: "/services/it-infrastructure" },
      { name: "Digital Marketing & SEO", href: "/services/digital-marketing" }
    ],
    useCase: {
      title: "Corporate Profile & Lead Capture Setup",
      description: "We redesigned the digital presence of a B2B logistics firm. By creating a responsive corporate profile site optimized for local search and linking their booking query forms to a central database dashboard, we automated the onboarding of qualified shipment inquiries."
    }
  },
  "startups": {
    slug: "startups",
    title: "Startup Technology Solutions",
    subtitle: "Minimum Viable Product (MVP) development, scalable cloud configurations, and product launches.",
    challenges: [
      "Struggling to translate product ideas into high-performance web software blueprints.",
      "High licensing costs from commercial software limiting seed capital runway.",
      "Servers crashing during product launch events due to poor server scaling rules.",
      "Underestimating cybersecurity vulnerabilities prior to public platform launch."
    ],
    digitalSolutions: [
      "Modular web software development allowing fast operational changes.",
      "Scale-ready cloud server setup using AWS/Azure pay-as-you-use resources.",
      "Custom database planning avoiding complex commercial software licensing fees.",
      "Security audit assessments hardening administrative access gates."
    ],
    relevantServices: [
      { name: "Web Application Dev", href: "/services/application-development" },
      { name: "Cloud Services & Infrastructure", href: "/services/cloud-services" },
      { name: "Custom Software Solutions", href: "/services/software-development" }
    ],
    useCase: {
      title: "SaaS Operations MVP Construction",
      description: "We built a scalable backend system for a local logistics startup, managing order entry and driver dispatch queues. We deployed the dashboard to a scalable hosting platform configured with automatic backup rules to secure transaction logs."
    }
  },
  "retail": {
    slug: "retail",
    title: "Retail & Ecommerce Solutions",
    subtitle: "High-speed storefront development, product catalogs, payment gateways, and inventory sync.",
    challenges: [
      "Losing sales from mobile shoppers who abandon slow, complex checkout forms.",
      "Struggling to synchronize warehouse stock counts with online store listings.",
      "Inability to create custom sales campaigns, discounts, and customer coupons.",
      "Transaction security concerns during peak holiday shopping periods."
    ],
    digitalSolutions: [
      "Fast, single-page catalog navigation and simplified cart checkout layouts.",
      "Real-time database sync linking orders directly with shipping APIs.",
      "Flexible promotional databases allowing easy discount configuration.",
      "Encrypted payment processing checks protecting customer card logs."
    ],
    relevantServices: [
      { name: "Ecommerce Solutions", href: "/services/ecommerce" },
      { name: "Web Application Dev", href: "/services/application-development" },
      { name: "Maintenance & Support", href: "/services/it-support" }
    ],
    useCase: {
      title: "Multi-Channel Storefront Synchronization",
      description: "We engineered a clean online catalog and checkout layout for a regional distributor. By connecting the frontend shopping cart securely with their warehouse inventory database, we automated product stock level updates and tracking alert emails."
    }
  }
};

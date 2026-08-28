export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetails {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  isPrimary: boolean;
  businessProblemsSolved: string[];
  keyCapabilities: string[];
  commonUseCases: string[];
  benefits: string[];
  process: string[];
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceDetails> = {
  "website-development": {
    slug: "website-development",
    title: "Website Design & Development",
    subtitle: "Custom, responsive corporate and business websites engineered for credibility and customer acquisition.",
    description: "Your digital storefront is the primary validation point for potential clients, partners, and talent. We build websites that combine corporate credibility with conversion-oriented layouts. Every site is designed around your specific customer acquisition funnel, optimized for search engines, and configured for absolute responsiveness across mobile, tablet, and desktop screens.",
    isPrimary: true,
    businessProblemsSolved: [
      "Low lead generation and poor conversion rates from online visitors.",
      "Outdated digital presence that fails to establish authority or trust.",
      "Slow loading speeds and poor responsiveness causing high mobile bounce rates.",
      "Difficult content updates requiring expensive developer help."
    ],
    keyCapabilities: [
      "Custom corporate and business website design matching brand guidelines.",
      "Healthcare, legal, financial, and professional service layouts.",
      "Lead generation and landing page funnel optimization.",
      "Content Management System (CMS) setups for easy client editing.",
      "Search Engine Optimization (SEO) schema integration."
    ],
    commonUseCases: [
      "Corporate Profile Websites: Establishing online brand credibility for enterprises.",
      "Healthcare Provider Sites: Patient education, services listings, and inquiry points.",
      "Lead Generation Pages: Tailored funnels capturing structured sales inquiries."
    ],
    benefits: [
      "Increased Credibility: Establish premium brand authority to attract higher-value contracts.",
      "Better Conversions: Streamline pathways from visitor to qualified inquiry.",
      "Total Independence: Edit text, images, and blogs directly without waiting on support."
    ],
    process: [
      "Requirement Alignment: Define target demographics and inquiry actions.",
      "Wireframe & UX Layout: Design user pathways and screen wireframes.",
      "Visual Design: Create polished UI screens matching corporate colors.",
      "Custom Coding: Build clean, optimized layouts with search schema.",
      "Staging Audit: Perform speed, accessibility, and link validation.",
      "Launch & Support: Go live and provide active platform maintenance."
    ],
    faqs: [
      {
        question: "How long does a custom business website take to build?",
        answer: "A standard corporate website takes between 4 to 8 weeks depending on the number of distinct layouts, page requirements, and content approval cycles."
      },
      {
        question: "Will I be able to edit the website content myself?",
        answer: "Yes. Every website we build includes a visual administration dashboard, allowing your team to update text, graphics, blogs, and services without writing code."
      },
      {
        question: "Is search engine optimization (SEO) included?",
        answer: "Yes, every website is built with clean HTML hierarchies, schema markup, and optimized speeds to ensure it satisfies search engine index criteria."
      }
    ]
  },
  "application-development": {
    slug: "application-development",
    title: "Web Application Development",
    subtitle: "High-performance web applications and cloud dashboards tailored to streamline your business workflows.",
    description: "Off-the-shelf software rarely fits proprietary business workflows perfectly. We engineer custom web applications, operations dashboards, client portals, and booking systems built around your specific business logic. By moving manual processes to secure cloud interfaces, we help you eliminate bottlenecks, reduce administrative overhead, and improve operational transparency.",
    isPrimary: true,
    businessProblemsSolved: [
      "Fragmented data scattered across spreadsheets and disconnected systems.",
      "Time-consuming manual workflows and human-error in admin calculations.",
      "Lack of real-time operational visibility and metrics reporting.",
      "Difficulty sharing secure data and portals with clients or field partners."
    ],
    keyCapabilities: [
      "Custom operations dashboards and analytics panels.",
      "Secure client and partner portal development.",
      "Booking, scheduling, and service management software.",
      "Automation of manual office workflows and reports generation.",
      "API integrations connecting legacy business tools."
    ],
    commonUseCases: [
      "Client Management Portals: Secure environments for clients to download files and track projects.",
      "Operations Dashboards: Real-time visual tracking of key performance metrics.",
      "Workflow Automation Tools: Centralizing internal approvals and task routing."
    ],
    benefits: [
      "Enhanced Efficiency: Eliminate repetitive manual data entry.",
      "Real-Time Analytics: Make data-driven decisions using live metrics dashboards.",
      "Customer Satisfaction: Provide clients with self-service transparency portals."
    ],
    process: [
      "Operational Mapping: Audit existing workflows to map the software design.",
      "Database & Flow Design: Establish data models and user permission tiers.",
      "UI/UX Prototyping: Build interactive layouts of the panels and screens.",
      "Agile Development: Write secure code, modules, and API integrations.",
      "Security Audit: Run vulnerability assessments and input sanitization.",
      "Deployment & Training: Guide staff on application controls and release the product."
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer: "A website is primarily informational, designed to share details and generate leads. A web application is highly interactive, managing user accounts, running business processes, storing data, and performing complex operational logic."
      },
      {
        question: "Can the web application integrate with our current systems?",
        answer: "Yes. We design custom application layers to connect with third-party software databases, payment pathways, CRMs, and email tools via secure APIs."
      }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    subtitle: "Custom iOS and Android mobile software designed to engage customers and coordinate mobile workforces.",
    description: "Mobile accessibility is a necessity for modern client engagement and field operations. We design and build secure, native mobile applications for iOS and Android. Whether you are launching a client-facing platform or organizing mobile workflows for field operations, we ensure your app works offline, synchronizes data seamlessly, and provides intuitive touch-oriented controls.",
    isPrimary: true,
    businessProblemsSolved: [
      "Inability to engage customers on their primary devices via push alerts.",
      "Inbound field data delays due to lack of mobile forms and offline entry.",
      "Disconnected mobile workforces working with outdated project instructions.",
      "Poor user engagement on standard web layouts opened via mobile browsers."
    ],
    keyCapabilities: [
      "Custom iOS and Android mobile software engineering.",
      "Offline data synchronization and background tasks management.",
      "Push notification systems configuration and alert triggers.",
      "Location mapping and mobile GPS tracking tools.",
      "Biometric security login and device hardware integrations."
    ],
    commonUseCases: [
      "Client Services App: Direct customer booking, account tracking, and payments.",
      "Field Operations App: Mobile check-ins, tasks checklist tracking, and image uploads.",
      "Internal Business App: Employee portal access and operations validation."
    ],
    benefits: [
      "Continuous Engagement: Keep your brand one tap away with push alerts.",
      "Field Integrity: Capture structured field data with GPS verification.",
      "High Accessibility: Enable offline work that syncs automatically when network returns."
    ],
    process: [
      "Device Strategy: Identify key offline features and hardware requirements.",
      "App Flow Design: Establish screen hierarchies for quick mobile input.",
      "Core Construction: Develop cross-platform or native layouts.",
      "Offline Synchronization Audit: Test local storage sync and caching.",
      "App Store Compliance: Review guidelines and submit to Apple and Google stores.",
      "Operational Launch: Monitor performance and manage updates."
    ],
    faqs: [
      {
        question: "Do you build for both Apple iOS and Google Android?",
        answer: "Yes. We build native-performance apps targeting both platforms to maximize audience reach and maintain uniform business logic."
      },
      {
        question: "How do updates work after the app is in the app stores?",
        answer: "We support ongoing mobile updates, ensuring new releases comply with platform OS updates and deployment requirements."
      }
    ]
  },
  "software-development": {
    slug: "software-development",
    title: "Custom Software Development",
    subtitle: "Proprietary software assets built from scratch to support unique operations and legacy integrations.",
    description: "When commercial off-the-shelf software limits your capacity to scale, custom software provides the absolute answer. We design and build bespoke software applications, middle-tier connectors, and automation scripts. We translate complex business rules into reliable software code, ensuring your systems talk to each other and your operations remain resilient.",
    isPrimary: true,
    businessProblemsSolved: [
      "Legacy software tools unable to communicate or sync databases.",
      "High monthly licensing fees for features your team never uses.",
      "Security vulnerabilities inside outdated custom tools.",
      "Operational constraints imposed by commercial software structures."
    ],
    keyCapabilities: [
      "Proprietary backend business engine development.",
      "Custom data synchronizer scripting and ETL systems.",
      "Secure legacy database migration and restructuring.",
      "Multi-tenant application models and security tier setups.",
      "Automated PDF, Excel, and doc report compilers."
    ],
    commonUseCases: [
      "Legacy Connector: Bridging old database structures with modern analytics tools.",
      "Workflow Engine: Custom business rules calculator and automated routing.",
      "Enterprise Panel: Custom ERP/CRM dashboard suited to proprietary metrics."
    ],
    benefits: [
      "Zero License Waste: Own the intellectual property and pay no seat licenses.",
      "Unlimited Flexibility: Code features exactly how your operations function.",
      "Enhanced Security: Minimize attack vectors by running proprietary logic."
    ],
    process: [
      "Architecture Blueprinting: Design the structural schema and integrations.",
      "Database Modeling: Clean, normalize, and structure secure tables.",
      "Core Code Assembly: Write modular algorithms and validation logic.",
      "Stress & Load Audit: Test transaction rates and data processing loads.",
      "User Integration Setup: Connect active directory or secure logins.",
      "Support & Scaling SLA: Provide SLA support for database indexing."
    ],
    faqs: [
      {
        question: "Do we own the software code once it is built?",
        answer: "Yes, you own 100% of the custom codebase, database schemas, and intellectual property. There are no ongoing licensing fees."
      },
      {
        question: "Can you rebuild an existing legacy desktop application?",
        answer: "Yes. We specialize in modernizing outdated systems, turning legacy desktop software into secure, high-performance web applications."
      }
    ]
  },
  "ecommerce": {
    slug: "ecommerce",
    title: "Ecommerce Solutions",
    subtitle: "High-performance digital stores designed to optimize conversions, orders, and customer experiences.",
    description: "Online sales require more than just listing products. We build modern e-commerce storefronts designed to optimize checkout speeds, secure payments, and synchronize inventory. From clean product grid layouts to secure visual checkouts and backend inventory panels, we build everything needed to convert traffic into revenue.",
    isPrimary: true,
    businessProblemsSolved: [
      "High cart abandonment rates due to complex, slow checkout layouts.",
      "Manual inventory tracking errors across online sales channels.",
      "Inability to run custom marketing discounts and promotional rules.",
      "Difficulty managing and fulfilling customer orders from back-office panels."
    ],
    keyCapabilities: [
      "Conversion-optimized digital storefront layout and product catalogs.",
      "Secure checkout funnels with single-step payment integrations.",
      "Real-time inventory sync and order management workflows.",
      "Custom promotional engines for coupon codes and dynamic discounts.",
      "Secure integrations with shipping APIs and warehouse systems."
    ],
    commonUseCases: [
      "Direct-to-Consumer (D2C) Store: Premium storefront layout optimized for consumer checkout.",
      "B2B Wholesale Portal: Bulk pricing tiers, credit terms checkout, and company account setups.",
      "Subscription Sales Platform: Recurrent payments management and customer panel access."
    ],
    benefits: [
      "Fewer Abandoned Carts: Simplify the checkout journey to lift order rates.",
      "Automated Fulfillment: Sync stock counts and trigger shipping alerts automatically.",
      "Data Sovereignty: Track customer habits directly without third-party platform lock-in."
    ],
    process: [
      "Catalog Blueprinting: Map categories, options, and inventory channels.",
      "Checkout Flow Mapping: Simplify the cart-to-payment path.",
      "Visual UI/UX Design: Brand product lists and visual cart elements.",
      "Gateway Configuration: Securely integrate credit, debit, or invoice payments.",
      "Testing & Integrity Check: Perform order simulations, tax loops, and speed checks.",
      "Release & Live Support: Go live and connect fulfillment workflows."
    ],
    faqs: [
      {
        question: "What payment gateways can you integrate?",
        answer: "We integrate all leading secure payment providers, including Stripe, PayPal, Authorize.net, and local bank checkout protocols."
      },
      {
        question: "Will the storefront handle high traffic volume?",
        answer: "Yes, our e-commerce templates are configured with static page caching and content networks to load instantly even during major promotions."
      }
    ]
  },
  "cloud-services": {
    slug: "cloud-services",
    title: "Cloud Services & Infrastructure",
    subtitle: "Secure cloud configuration, hosting management, and database migrations.",
    description: "We configure, secure, and manage cloud host environments built to scale B2B operations. We ensure your web systems stay online, run efficiently, and keep backup recovery channels ready.",
    isPrimary: false,
    businessProblemsSolved: [
      "Unplanned server downtime causing lost business leads.",
      "Slow database responses under peak corporate workloads.",
      "Lack of secure system backups in case of emergency data loss."
    ],
    keyCapabilities: [
      "AWS and Microsoft Azure environment setup.",
      "Serverless deployment and database performance tuning.",
      "Automated database backup routines and redundancy setups.",
      "Cloud access control tiers and security group audits."
    ],
    commonUseCases: [
      "Secure Migration: Shifting legacy databases to hosted cloud structures.",
      "Disaster Recovery: Setting up redundant mirrors for operational failover."
    ],
    benefits: [
      "99.9% Uptime: Keep your customer tools accessible around the clock.",
      "Fast Data Load: Cache layouts to ensure rapid responses globally.",
      "Constant Redundancy: Recover systems instantly if databases fail."
    ],
    process: [
      "Audit: Assess local data size and network throughput requirements.",
      "Design: Plan virtual cloud network and security structures.",
      "Migration: Perform secure transfer with zero downtime staging.",
      "Monitoring: Connect health monitors and backup alerts."
    ],
    faqs: [
      {
        question: "Do you manage our hosting costs?",
        answer: "Yes. We configure cloud resources with scaling rules to prevent waste, ensuring you only pay for resources your platforms actually consume."
      }
    ]
  },
  "it-infrastructure": {
    slug: "it-infrastructure",
    title: "IT Infrastructure & Networking",
    subtitle: "Reliable B2B office networks, system routing, and server configurations.",
    description: "We configure, clean, and document secure internal networking infrastructure. We ensure company computers, server racks, and routing systems work in unison to protect staff productivity.",
    isPrimary: false,
    businessProblemsSolved: [
      "Unreliable office Wi-Fi and network drops disrupting business workflows.",
      "Undocumented cabling and network hardware causing troubleshooting delays.",
      "Inability to securely share local files and server access across offices."
    ],
    keyCapabilities: [
      "Corporate network routing, firewall layouts, and switch setup.",
      "Secure local file server configuration and network storage.",
      "VPN setups allowing employees to securely access company files from home.",
      "Network documentation mapping and hardware cleanup audits."
    ],
    commonUseCases: [
      "Office Setup: Installing switches, access points, and server racks for new sites.",
      "Secure VPN: Configuring encrypted pathways for remote employees."
    ],
    benefits: [
      "Consistent Speeds: Prevent network drops from stalling office meetings.",
      "Rapid Fixes: Maintain documented mapping for quick diagnostic repairs.",
      "Secure Access: Connect home workers securely to internal file shares."
    ],
    process: [
      "Site Audit: Inspect physical layouts, cables, and routing hardware.",
      "Network Blueprinting: Map address allocations and VPN access rules.",
      "Hardware Installation: Securely mount routers, switches, and wiring.",
      "Performance Check: Test speeds, firewall rules, and VPN access."
    ],
    faqs: [
      {
        question: "Can you configure VPNs for multiple remote offices?",
        answer: "Yes. We set up secure site-to-site VPN tunnels allowing different branch locations to share secure files seamlessly."
      }
    ]
  },
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    subtitle: "Proactive vulnerability assessments, firewall setups, and compliance checks.",
    description: "We audit and secure your digital assets to prevent data leaks, unauthorized logins, and malware attacks. We implement proactive security protocols to protect business operations and maintain customer trust.",
    isPrimary: false,
    businessProblemsSolved: [
      "Risks of data leaks exposing sensitive customer records.",
      "Spam bots and unauthorized actors attempting to access back-office portals.",
      "Lack of compliance documentation required by insurance or business partners."
    ],
    keyCapabilities: [
      "Security auditing and software vulnerability checks.",
      "Advanced firewall installation and threat monitoring alerts.",
      "Secure user credential setups and Multi-Factor Auth (MFA) rules.",
      "Data encryption protocols for database storage and transfers."
    ],
    commonUseCases: [
      "Compliance Ready: Upgrading security rules to satisfy partner requirements.",
      "Access Hardening: Securing administrative portals behind MFA validation."
    ],
    benefits: [
      "Prevent Breaches: Stop database attempts before hackers access data.",
      "Protect Reputation: Avoid costly disclosure events by securing data logs.",
      "Satisfy Compliance: Pass security checks from corporate insurers."
    ],
    process: [
      "Threat Assessment: Run diagnostic checks on public portals.",
      "Security Design: Outline firewall configuration, MFA rules, and encryption.",
      "Implementation: Deploy protection layers on cloud and network systems.",
      "Security Review: Run mock validation checks and prepare documentation."
    ],
    faqs: [
      {
        question: "Do you perform manual penetration testing?",
        answer: "Yes. We run tests mimicking real-world threat actors to find weak configuration entry points before they are compromised."
      }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    subtitle: "Strategic search engine optimization, analytics setup, and lead tracking.",
    description: "We configure marketing analytics and search engine optimization schemas to ensure your B2B services attract qualified corporate interest. We connect visitor actions with measurable business statistics.",
    isPrimary: false,
    businessProblemsSolved: [
      "Corporate site receiving traffic but failing to capture contact leads.",
      "Inability to track which marketing efforts generate the best clients.",
      "Low visibility on search engines for primary B2B keywords."
    ],
    keyCapabilities: [
      "On-page B2B SEO audits and keyword intent mapping.",
      "Analytics dashboards connecting site actions to traffic sources.",
      "Conversion funnel tracking for contact and quote forms.",
      "Technical site audits to speed up layouts for mobile search ranks."
    ],
    commonUseCases: [
      "Rank Tracking: Optimizing layouts for primary B2B keywords.",
      "ROI Dashboards: Setting up tracking showing exactly where leads originate."
    ],
    benefits: [
      "Targeted Interest: Attract buyers actively searching for your service.",
      "Clear Insights: Stop guessing which marketing channels drive phone calls.",
      "Stable Ranks: Maintain index ranks using clean, search-approved structures."
    ],
    process: [
      "Competitor Research: Analyze search keywords and competitor gaps.",
      "Technical Optimization: Correct site speed logs, schema metadata, and sitemaps.",
      "Goal Integration: Connect analytics systems to form submit actions.",
      "Monthly Review: Review conversion statistics, traffic reports, and rank gains."
    ],
    faqs: [
      {
        question: "How long until we see SEO ranking improvements?",
        answer: "SEO is a progressive process. Initial technical ranks and speed optimization improvements take 3 to 6 months to mature on search engines."
      }
    ]
  },
  "it-support": {
    slug: "it-support",
    title: "Maintenance & IT Support",
    subtitle: "Ongoing website updates, database optimizations, and system monitoring.",
    description: "We provide monthly maintenance support to keep your web platforms updated, secure, and running fast. We monitor database indexing, apply OS patches, and quickly fix layout errors.",
    isPrimary: false,
    businessProblemsSolved: [
      "Broken layout links and page errors remaining unnoticed for weeks.",
      "Outdated software versions rendering web platforms open to bugs.",
      "Dev support unavailable when systems experience operational issues."
    ],
    keyCapabilities: [
      "Proactive database index tuning and load speed updates.",
      "Application dependency updates and framework version patches.",
      "Priority troubleshooting support for critical layout bugs.",
      "Monthly health reports listing server speeds and backup status."
    ],
    commonUseCases: [
      "Framework Updates: Upgrading React or Next dependencies to ensure security.",
      "SLA Support: Having emergency dev access if customer checkout fails."
    ],
    benefits: [
      "Zero Downtime: Solve bugs before they impact user workflows.",
      "Fast Resolutions: Rely on a dedicated help desk for immediate diagnostic support.",
      "Total Security: Keep all server software updated against modern vulnerabilities."
    ],
    process: [
      "System Audit: Catalog all dependencies, database sizes, and access points.",
      "Monitor Setup: Set up automatic alerts for server load and link errors.",
      "Monthly Patches: Apply security version upgrades to dependencies.",
      "SLA Response: Maintain developers ready to address incoming emergency tickets."
    ],
    faqs: [
      {
        question: "What is covered under monthly maintenance?",
        answer: "It covers server health checks, framework updates, database backup confirmation, speed diagnostics, and troubleshooting support for layout or code errors."
      }
    ]
  }
};

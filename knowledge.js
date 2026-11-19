/*
  MADHVI'S PROFILE KNOWLEDGE BASE
  ---------------------------------------------------------------
  This file is everything the "Ask my AI" assistant knows. It only
  answers from the text below. If a question does not match, it does
  NOT guess: it asks the visitor to message Madhvi directly.

  HOW TO EDIT: each entry has
    k : words or phrases that should trigger this answer
    a : the answer shown to the visitor
  Keep every answer true. Add new entries for new questions.

  PRIVACY: this file is public (anyone can view the source of a website).
  Do not put a phone number, salary or anything confidential in it.
*/
window.PROFILE_KB = {
  fallback: 'I can’t answer that reliably from the information I have, and I’d rather not guess. Please message Madhvi directly and she will reply by email.',
  suggestions: [
    'Tell me about yourself',
    'Is there a gap in your resume?',
    'What’s your core tech stack?',
    'Tell me about Review Kiosk',
    'Are you available for freelance or full-time roles?',
    'How can I contact you?'
  ],
  entries: [
    { id: 'hello', k: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
      a: 'Hello, and thank you for visiting. You can ask about Madhvi’s experience, skills, projects, career history or availability.' },
    { id: 'thanks', k: ['thanks', 'thank you', 'thx', 'great', 'awesome', 'perfect'],
      a: 'You’re welcome. If you would like to speak with Madhvi directly, open the “Message Madhvi” tab.' },

    { id: 'about', k: ['who are you', 'about yourself', 'tell me about yourself', 'tell me about madhvi', 'about madhvi', 'introduce yourself', 'introduce', 'summary', 'overview', 'what do you do', 'describe yourself', 'profile'],
      a: 'Madhvi Jha is a Business Analyst, Business Intelligence Analyst and Product Owner-minded professional based in Hong Kong, with 9+ years of experience across aviation, retail, banking, insurance, finance and consulting. She owns the full cycle: understanding the business problem, gathering and prioritising requirements, modelling data in SQL and SAP, delivering Power BI reporting and driving adoption with stakeholders. She also applies generative AI and no-code automation, and has launched a live AI product, Review Kiosk.' },

    { id: 'years', k: ['years', 'experience', 'how long', 'seniority', 'senior', 'work history', 'how experienced'],
      a: 'Madhvi has 9+ years of experience. She started in January 2017 as a Power BI Developer at Tata Consultancy Services in India, then worked at Explora, Lululemon and HAESL in Hong Kong. Since June 2026 she has been building AI products and automations independently.' },

    { id: 'gap', k: ['career gap', 'gap in', 'gap', 'resume gap', 'employment gap', 'break', 'sabbatical', 'between jobs', 'not working', 'unemployed', 'what were you doing', 'why did you leave', 'maternity', 'parenting', 'motherhood', 'son', 'mother', '2023', '2024'],
      a: 'Yes. There is a career break between Madhvi’s role at Lululemon (which ended in June 2023) and HAESL (which began in September 2024). She took that time to raise her young son, a choice she is proud of. She kept learning and experimenting with data throughout, and then returned to lead Power BI delivery for the Rolls-Royce engine maintenance programme at HAESL, delivering to agreed timelines. If you would like to discuss it further, she is happy to speak with you directly.' },

    { id: 'avail', k: ['available', 'availability', 'open to', 'looking for', 'full-time', 'full time', 'freelance', 'contract', 'hire', 'hiring', 'recruit', 'job', 'role', 'roles', 'position', 'opportunity', 'opportunities', 'consulting work', 'client projects', 'work with you'],
      a: 'Madhvi is based in Hong Kong and is seeking Business Intelligence, Business Analyst, Product Owner and AI-focused roles. She also takes on selected client projects. For start dates, notice period or rates, please send her a message, as those details are not published here.' },

    { id: 'stack', k: ['tech stack', 'stack', 'technology', 'technologies', 'tools', 'software', 'platforms', 'core skills', 'skills', 'skillset', 'skill set', 'capabilities'],
      a: 'Core data tools: Power BI, DAX, Power Query, advanced SQL, SAP, SSIS and Xtract Universal. AI and automation: Claude, ChatGPT, Gemini, DeepSeek, Ollama (Gemma 3), Voiceflow and Make.com. Product tools: Vercel, Supabase, Stripe and the WhatsApp Business Platform. She also has working knowledge of Microsoft Fabric and Databricks.' },

    { id: 'bi', k: ['power bi', 'powerbi', 'dax', 'power query', 'dashboard', 'dashboards', 'bi', 'analytics', 'analyst', 'data', 'sql', 'kpi', 'kpis', 'reporting', 'report', 'visualisation', 'visualization', 'data storytelling'],
      a: 'In BI and analytics Madhvi works with Power BI (DAX, Power Query), data modelling, KPI design, dashboard development, data storytelling and advanced SQL. Examples: Power BI reporting for the Rolls-Royce engine maintenance programme at HAESL, and real-time CAPEX/OPEX dashboards for Lululemon’s APAC store openings.' },

    { id: 'modelling', k: ['data model', 'data modelling', 'data modeling', 'modelling', 'modeling', 'star schema', 'schema'],
      a: 'Madhvi designs data models and has led SQL-based extraction and transformation for enterprise reporting at TCS. At HAESL she mapped relationships between SAP tables with a diagramming tool to speed up data modelling.' },

    { id: 'selfservice', k: ['self-service bi', 'self service bi', 'self-service', 'self service', 'governance', 'data governance', 'rollout', 'standardise', 'standardize'],
      a: 'Self-service BI and data governance are part of Madhvi’s skills. At Explora she defined a data governance framework and led the Power BI rollout to standardise reporting practices across stakeholders.' },

    { id: 'ba', k: ['business analysis', 'business analyst', 'requirements', 'requirement', 'stakeholder', 'stakeholders', 'solution design', 'process improvement', 'roadmap', 'communication', 'communicate', 'communicates'],
      a: 'Business analysis is a core strength: requirements gathering and prioritisation, stakeholder management, solution design, process improvement and roadmap planning. At HAESL she gathered and prioritised requirements from engineering and finance stakeholders and turned complex SAP and SQL data into a reporting roadmap for technical and business audiences.' },

    { id: 'uat', k: ['uat', 'user acceptance', 'quality strategy', 'testing', 'test', 'tested'],
      a: 'Madhvi has strong UAT and quality experience. At TCS she owned UAT and quality strategy for POS payment terminal (PIN pad) functionality, validating reliability ahead of store rollouts. She also validated SecureKnowAI against a self-built set of 16 business questions.' },

    { id: 'po', k: ['product owner', 'product ownership', 'product manager', 'product', 'owns', 'ownership', 'backlog', 'prioritise', 'prioritize', 'launch'],
      a: 'Madhvi works as a product owner end to end. For Review Kiosk she defined the problem, users and requirements, specified the features and the Free and Pro plans, directed the AI-assisted build, tested it and launched it. At HAESL she owned delivery of the Power BI reporting solution from requirements discovery to deployment.' },

    { id: 'lead', k: ['lead', 'led', 'leading', 'leadership', 'team', 'teams', 'managed', 'managing', 'manage', 'project lead', 'cross-functional', 'cross functional', 'scope'],
      a: 'As Project Lead at TCS, Madhvi led cross-functional teams end to end, coordinating stakeholders, managing scope and ensuring on-time releases aligned to business needs. At Lululemon she coordinated cross-functional readiness workstreams for new store launches across APAC.' },

    { id: 'approach', k: ['how do you work', 'approach', 'process', 'methodology', 'full cycle', 'end to end', 'end-to-end', 'way of working'],
      a: 'Madhvi owns the full cycle: understand the business problem, gather and prioritise requirements, model the data in SQL and SAP, deliver Power BI reporting, and drive adoption with stakeholders.' },

    { id: 'ai', k: ['ai tools', 'which ai', 'ai', 'artificial intelligence', 'llm', 'llms', 'claude', 'chatgpt', 'gemini', 'deepseek', 'ollama', 'gemma', 'prompt', 'prompting', 'generative', 'automation', 'automate', 'make.com', 'voiceflow', 'midjourney', 'chatbot'],
      a: 'Madhvi works with Claude, ChatGPT, Gemini and DeepSeek, and runs local models with Ollama (Gemma 3). She is strong at prompt engineering, builds no-code workflows in Make.com, designs chatbots in Voiceflow, and uses AI-assisted development to build products.' },

    { id: 'rk', k: ['review kiosk', 'reviewkiosk', 'kiosk', 'google review', 'reviews', 'qr', 'saas'],
      a: 'Review Kiosk is Madhvi’s live AI product for small businesses, at reviewkiosk.in. Customers scan a QR code. Happy customers get a one-tap, AI-written Google review, and unhappy customers send feedback privately to the owner. It includes a voice-review flow (speak in any language, translated to English), Free and Pro plans with monthly AI usage limits, and subscription payments tested end to end in Stripe test mode.' },

    { id: 'ska', k: ['secureknowai', 'secure know', 'on-device', 'on device', 'private ai', 'local ai', 'confidential', 'document q&a', 'documents', 'pdf'],
      a: 'SecureKnowAI is a private, on-device document Q&A prototype. It uses Gemma 3 via Ollama, so no data leaves the machine, and answers questions across PDF, Excel and CSV files with a summarisation mode and a web interface for adding and removing documents. It was validated against 16 business questions, including cross-document ones. Code: github.com/Mad-16/SecureKnowAI. Demo: mad-16.github.io.' },

    { id: 'wa', k: ['whatsapp', 'alerts', 'feedback automation', 'google sheets'],
      a: 'Madhvi designed a WhatsApp review and feedback automation in Make.com: a one-tap review link, customer feedback captured to Google Sheets, and instant WhatsApp alerts to the business owner.' },

    { id: 'research', k: ['market research', 'research form', 'landing page', 'business owners'],
      a: 'Madhvi created a market-research form and landing page to collect business problems directly from owners, which guides which AI solutions are worth building.' },

    { id: 'sap', k: ['sap', 'xtract', 'vbscript', 'etl', 'ssis', 'extraction', 'pipelines', 'pipeline'],
      a: 'At HAESL, Madhvi used AI to generate a VBScript automation for Xtract Universal jobs that loads large SAP tables into SQL in seconds instead of hours of manual work. She also worked with ETL pipelines (SSIS, Xtract Universal). A generalised concept demo is public at github.com/Mad-16/ai-enterprise-data-extraction, with employer-confidential details excluded.' },

    { id: 'haesl', k: ['haesl', 'rolls-royce', 'rolls royce', 'engine', 'engines', 'aviation', 'aero', 'turnaround'],
      a: 'At HAESL (Hongkong Aero Engine Services Limited, Rolls-Royce engine maintenance account, Hong Kong, September 2024 to June 2026), Madhvi was Business Intelligence Analyst. She owned the Power BI solution from requirements to deployment, defined and tracked KPIs such as engine performance, turnaround time and cost efficiency, and drove adoption of cost-saving solutions.' },

    { id: 'lulu', k: ['lululemon', 'capex', 'opex', 'retail', 'store', 'stores', 'p&l', 'forecasting', 'finance', 'budget', 'billing'],
      a: 'At Lululemon (Hong Kong, APAC, June 2022 to June 2023) Madhvi was Billing and Data Analyst. She delivered a Power BI solution combining inventory, supply chain and finance data for real-time CAPEX/OPEX visibility on new store openings, and built P&L dashboards and forecasting models for store-expansion decisions.' },

    { id: 'explora', k: ['explora'],
      a: 'At Explora (Hong Kong, March to June 2022) Madhvi was Business Data Consultant. She defined a data governance framework, led the Power BI rollout to standardise reporting, and delivered structured analytics to support decision-making.' },

    { id: 'tcs', k: ['tcs', 'tata', 'citi', 'citibank', 'walgreens', 'microsoft', 'arval', 'banking', 'bank', 'insurance', 'loyalty', 'pin pad', 'pos', 'india'],
      a: 'At Tata Consultancy Services (India, January 2017 to March 2022) Madhvi was Power BI Developer, Business Analyst and Project Lead. She owned BI delivery for Citi Bank, Microsoft, Walgreens and Arval. For Citi she analysed life and health insurance KPIs; for Walgreens she delivered a loyalty-program analytics solution and owned UAT and quality strategy for POS PIN pad functionality.' },

    { id: 'ind', k: ['which industries', 'what industries', 'industries', 'industry', 'sector', 'sectors', 'domain', 'clients', 'client', 'companies', 'company', 'employers'],
      a: 'Madhvi has worked across aviation, retail, banking, insurance, finance and consulting. Enterprise clients and employers include Rolls-Royce (via HAESL), Citi, Microsoft, Walgreens, Lululemon and Arval.' },

    { id: 'edu', k: ['education', 'degree', 'university', 'college', 'study', 'studied', 'qualification', 'btech', 'b.tech', 'graduate'],
      a: 'B.Tech in Information Technology from GL Bajaj Institute (AKTU), India, 2012 to 2016.' },

    { id: 'loc', k: ['where', 'location', 'located', 'based', 'hong kong', 'country', 'city', 'live'],
      a: 'Madhvi is based in Hong Kong.' },

    { id: 'links', k: ['github', 'portfolio', 'demo', 'repository', 'repo', 'code samples', 'linkedin', 'links'],
      a: 'LinkedIn: linkedin.com/in/madhvi-jha. GitHub: github.com/Mad-16. Portfolio and demo video: mad-16.github.io. Live product: reviewkiosk.in.' },

    { id: 'contact', k: ['contact', 'email', 'e-mail', 'reach', 'phone', 'number', 'call', 'message', 'talk', 'meeting', 'schedule', 'book'],
      a: 'The quickest way is the “Message Madhvi” tab on this page, and she will reply by email. You can also write to jha.madhvi001@gmail.com or connect on LinkedIn (linkedin.com/in/madhvi-jha). A phone number is not published on this site.' },

    { id: 'strength', k: ['why hire', 'strengths', 'strength', 'different', 'unique', 'best at', 'good at', 'value', 'why should'],
      a: 'Madhvi combines business understanding, clear communication and hands-on delivery. She owns the full cycle from requirements to adoption, works comfortably with executives, engineers and finance teams, and backs it with data skills and a live AI product she specified and launched herself.' },

    { id: 'unlisted', k: ['salary', 'rate', 'rates', 'pricing', 'price', 'cost', 'fee', 'fees', 'quote', 'expected', 'compensation', 'ctc', 'notice', 'notice period', 'start date', 'join', 'visa', 'work permit', 'sponsorship', 'relocate', 'relocation', 'remote', 'references', 'reference', 'certification', 'certifications', 'certificate', 'certificates', 'language', 'languages', 'age', 'married', 'family', 'children', 'nationality'],
      a: 'That isn’t something I have on file, and I’d rather not guess. Please message Madhvi directly using the “Message Madhvi” tab, and she will reply by email.' }
  ]
};

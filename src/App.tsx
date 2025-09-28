import { useState, useEffect } from "react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { 
  WaveEmoji, 
  LaptopEmoji, 
  ArtEmoji, 
  GearEmoji, 
  DatabaseEmoji, 
  ToolsEmoji, 
  RobotEmoji, 
  MasksEmoji, 
  PhoneEmoji, 
  EmailEmoji, 
  CameraEmoji, 
  MegaphoneEmoji 
} from './components/CustomEmojis';
import {
  FloatingParticles,
  TypingAnimation,
  AnimatedCounter,
  GlitchText,
  TiltCard,
  ParallaxSection,
  HoverGlow,
  FloatingIcons,
  TelegramLogo,
  InstagramLogo,
  EmailLogo,
  GitHubLogo
} from './components/InteractiveElements';

function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Bosh sahifa" },
    { id: "about", label: "Men haqimda" },
    { id: "projects", label: "Loyihalar" },
    { id: "skills", label: "Ko'nikmalar" },
    { id: "contacts", label: "Aloqa" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 drop-shadow-lg">Javlon Ilyasov</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50 border border-cyan-400/30"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 border-t border-cyan-500/20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const typingTexts = [
    "Junior Developer",
    "Bot Creator", 
    "Web Developer",
    "Tech Enthusiast"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16 relative overflow-hidden"
    >
      {/* Enhanced 3D animated neon background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-full blur-3xl animate-float shadow-2xl shadow-cyan-500/30"
          style={{
            top: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-purple-500/40 to-pink-600/40 rounded-full blur-3xl animate-float delay-1000 shadow-2xl shadow-purple-500/30"
          style={{
            bottom: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float delay-500 shadow-2xl shadow-blue-500/20"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        ></div>
        
        {/* Matrix-style digital rain */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent animate-matrix"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content with enhanced animations */}
          <ParallaxSection speed={0.2} className="space-y-8">
            <div className="space-y-6">
              <GlitchText className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="animate-neon">Hi, I'm Javlon</span>
                  <WaveEmoji />
                </div>
              </GlitchText>
              
              <div className="text-xl md:text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent min-h-[3rem]">
                <TypingAnimation 
                  texts={typingTexts}
                  className="animate-neon"
                />
              </div>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                Tashrif buyurganingiz uchun rahmat!  Umid qilamanki, ㅤㅤ  
                <span className="text-cyan-400 font-semibold"> Saytim sizga yoqadi!</span>
              </p>
            </div>

            <HoverGlow className="inline-block">
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-purple-600 hover:via-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden border border-cyan-500/30 animate-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="text-lg font-semibold relative z-10 drop-shadow-lg">🚀 Loyihalarimni ko'rish</span>
              </button>
            </HoverGlow>
            
            {/* Floating achievement badges */}
            <div className="flex gap-4 mt-8">
              <div className="bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 animate-float">
                <span className="text-cyan-400 font-semibold">20+ Loyihalar</span>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-purple-400 font-semibold">2+ Yil</span>
              </div>
            </div>
          </ParallaxSection>

          {/* Right content - Profile image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto group">
              {/* Cyberpunk neon grid background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-600/40 to-purple-600/40 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-all duration-700 animate-pulse shadow-2xl shadow-cyan-500/40"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/40 via-pink-600/40 to-cyan-500/40 rounded-3xl transform -rotate-3 group-hover:-rotate-1 transition-all duration-700 animate-pulse delay-300 shadow-2xl shadow-purple-500/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-all duration-700 animate-pulse delay-700 shadow-2xl shadow-blue-500/30"></div>
              
              {/* Cyberpunk scanning lines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              
              {/* Main image container with cyberpunk frame */}
              <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95 backdrop-blur-lg p-3 rounded-3xl shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-700 border-2 border-cyan-400/50 group-hover:border-cyan-300/70">
                {/* Inner neon frame */}
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500">
                  <ImageWithFallback
                    src="https://i.postimg.cc/Y9qg2pyS/photo-2025-09-24-22-12-32.jpg"
                    alt="Javlon Ilyasov - Developer and Bot Creator"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                  />
                  
                  {/* Cyberpunk overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 via-transparent to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                  
                  {/* Cyberpunk corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Cyberpunk floating elements */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/60"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200 shadow-lg shadow-purple-400/60"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-400 shadow-lg shadow-blue-400/60"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-600 shadow-lg shadow-pink-400/60"></div>
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gray-900/80 px-2 py-1 rounded-full border border-green-400/50">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/60"></div>
                  <span className="text-xs text-green-300 font-mono">ONLINE</span>
                </div>
              </div>
              
              {/* Cyberpunk data streams */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute top-4 left-8 w-16 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent animate-pulse"></div>
                <div className="absolute top-12 right-6 w-12 h-0.5 bg-gradient-to-l from-purple-400/60 to-transparent animate-pulse delay-300"></div>
                <div className="absolute bottom-8 left-4 w-20 h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent animate-pulse delay-500"></div>
                <div className="absolute bottom-16 right-8 w-14 h-0.5 bg-gradient-to-l from-pink-400/60 to-transparent animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-blue-900/50 to-purple-900/50 relative overflow-hidden">
      {/* Neon background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-2xl animate-pulse shadow-2xl shadow-cyan-500/20"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-2xl animate-pulse delay-700 shadow-2xl shadow-purple-500/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">Men haqimda</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Men innovatsion Telegram botlari, veb-ilovalar va avtomatlashtirish vositalarini yaratishga qiziqgan bo'lajak dasturchiman.
              Frontend va backend texnologiyalarida tajribaga ega bo‘lib, g‘oyalarni toza va samarali kod orqali hayotga tatbiq etmoqchiman.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Shu paytgacha ko‘plab muvaffaqiyatli loyihalarni yaratishga olib keldi -
              AI quvvatli Telegram botlaridan tortib, keng qamrovli veb-yechimlargacha. Doimiy ravishda 
              yangi texnologiyalarni o'rganishga va ilg‘or yechimlarni taqdim etishga harakat qilaman.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Men hamma dasturlash tillarini mukammal bilmayman lekin hozirgi raqamlashgan 
              dunyoda ilojsiz narsani o'zi yo'q. koplab qiyin loyihalarni suniy intellekt bilan yarataman.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <TiltCard className="bg-gradient-to-br from-gray-800/50 to-blue-900/50 p-6 rounded-xl text-center hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 border border-cyan-500/30 group backdrop-blur-sm hover-lift">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg animate-neon">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-gray-300">Yarimtayyor loyihalar</div>
            </TiltCard>
            <TiltCard className="bg-gradient-to-br from-gray-800/50 to-purple-900/50 p-6 rounded-xl text-center hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 border border-purple-500/30 group backdrop-blur-sm hover-lift">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg animate-neon">
                <AnimatedCounter end={2} suffix="+" />
              </div>
              <div className="text-gray-300">Yillik tajriba</div>
            </TiltCard>
            <TiltCard className="bg-gradient-to-br from-gray-800/50 to-cyan-900/50 p-6 rounded-xl text-center hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 border border-cyan-500/30 group backdrop-blur-sm hover-lift">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg animate-neon">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-gray-300">Bot foydalanuvchilari😅</div>
            </TiltCard>
            <TiltCard className="bg-gradient-to-br from-gray-800/50 to-green-900/50 p-6 rounded-xl text-center hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 border border-green-500/30 group backdrop-blur-sm hover-lift">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg animate-neon">8 ta</div>
              <div className="text-gray-300">Telegram obunachilar😅</div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Telegram Bot Loyihalar",
      description: "Admin va foydalanuvchilar uchun AI quvvatli xususiyatlar va silliq o'zaro ta'sir imkoniyatlari bilan Telegram botlari.",
      image: "telegram bot interfeysi",
      tags: ["Python", "aiogram", "AI Integratsiya"]
    },
    {
      title: "DEKU_AIBOT",
      description: "DEKU_AI — Instagram’dan videolarni va Reels’larni tez va oson yuklab olish imkonini beruvchi qulay Telegram boti.",
      image: "Yuklovchi bot",
      tags: ["Python", "Instagram API", "Avtomatlashtirish"]
    },
    {
      title: "Telegram Kanal Boshqaruvi",
      description: "Avto-post joylash, moderatsiya va analitika xususiyatlari bilan Telegram kanallarini boshqarish uchun ilg'or bot.",
      image: "telegram kanal avto post",
      tags: ["Python", "Telegram Bot API", "Analitika"]
    },
    {
      title: "AI Yordamchi bot",
      description: "Turli Savol javob uchun zamonaviy AI texnologiyalari bilan ishlaydigan aqlli chatbot.",
      image: "ai chatbot ",
      tags: ["Python", "AI/ML", "Tabiiy Til Qayta Ishlash"]
    },
    {
      title: "Shaxsiy Veb-sayt",
      description: "shaxsiy loyihalarni korsatish uchun React va Next.js bilan qurilgan zamonaviy,  portfolio veb-sayt.",
      image: "zamonaviy veb-sayt",
      tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Ob-havoni aytuvchi bot",
      description: "Ob-havoBot — sizga har doim joriy ob-havo va ertangi prognozni tez va aniq yetkazib beruvchi qulay Telegram bot",
      image: "Kreativ ob-havo bot",
      tags: ["HTML", "CSS", "JavaScript", "Python"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50 relative overflow-hidden">
      {/* Animated neon background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse shadow-2xl shadow-cyan-500/20"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000 shadow-2xl shadow-purple-500/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">Loyihalar</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Bu yerda men bot ishlab chiqish, veb-ilovalar yaratish va avtomatlashtirish yechimlari bo‘yicha 
            malakamni namoyish etadigan so‘nggi loyihalarimni taqdim etaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const gradients = [
    "from-cyan-500 via-blue-600 to-purple-600",
    "from-purple-500 via-pink-600 to-cyan-600", 
    "from-blue-500 via-cyan-600 to-teal-600",
    "from-pink-500 via-purple-600 to-blue-600",
    "from-green-500 via-cyan-600 to-blue-600",
    "from-orange-500 via-pink-600 to-purple-600"
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-cyan-500/30 group">
      <div className={`h-48 bg-gradient-to-br ${randomGradient} flex items-center justify-center relative overflow-hidden`}>
        {/* Animated neon overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div className="text-white text-center p-4 relative z-10">
          <div className="mb-2 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg flex justify-center">
            <LaptopEmoji />
          </div>
          <div className="text-sm opacity-90 font-medium drop-shadow-lg">{project.image}</div>
        </div>
        
        {/* Floating neon particles effect */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping shadow-lg shadow-cyan-400/40"></div>
        <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/40"></div>
        <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse delay-700 shadow-lg shadow-blue-400/40"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-3 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 drop-shadow-lg">{project.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:scale-105 transition-all duration-200 cursor-default border border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <ArtEmoji />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <GearEmoji />,
      skills: ["Node.js", "Express.js", "Python", "Django", "Flask"]
    },
    {
      title: "Ma'lumotlar bazasi",
      icon: <DatabaseEmoji />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "Vositalar va Texnologiyalar",
      icon: <ToolsEmoji />,
      skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"]
    },
    {
      title: "Bot Ishlab Chiqish",
      icon: <RobotEmoji />,
      skills: ["Telegram Bot API", "aiogram", "pyTelegramBotAPI", "Webhooks"]
    },
    {
      title: "Dizayn",
      icon: <MasksEmoji />,
      skills: ["Figma", "Canva", "Adobe XD", "UI/UX Dizayn"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900/50 to-blue-900/50 relative overflow-hidden">
      {/* Neon background decorative elements */}
      <div className="absolute top-10 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse shadow-2xl shadow-purple-500/20"></div>
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-full blur-2xl animate-pulse delay-1000 shadow-2xl shadow-cyan-500/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">Ko'nikmalar</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Men turli texnologiyalar va freymvorklar bilan ishlash tajribasiga mukammal ega emasman, bu esa frontenddan backendgacha keng qamrovli 
            yechimlar yaratishimga qiyinchilik korsatadi lekin suniy intellekt bilan hamma narsaning iloji bor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const gradientColors = [
              "from-gray-800/50 to-blue-900/50 border-cyan-500/30",
              "from-gray-800/50 to-purple-900/50 border-purple-500/30", 
              "from-gray-800/50 to-cyan-900/50 border-cyan-500/30",
              "from-gray-800/50 to-green-900/50 border-green-500/30",
              "from-gray-800/50 to-orange-900/50 border-orange-500/30",
              "from-gray-800/50 to-pink-900/50 border-pink-500/30"
            ];
            
            const iconGradients = [
              "from-cyan-400 to-blue-400",
              "from-purple-400 to-pink-400",
              "from-cyan-400 to-teal-400", 
              "from-green-400 to-emerald-400",
              "from-orange-400 to-yellow-400",
              "from-pink-400 to-rose-400"
            ];
            
            const shadowColors = [
              "hover:shadow-cyan-500/20",
              "hover:shadow-purple-500/20",
              "hover:shadow-cyan-500/20",
              "hover:shadow-green-500/20", 
              "hover:shadow-orange-500/20",
              "hover:shadow-pink-500/20"
            ];
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradientColors[index]} border ${gradientColors[index].split(' ')[2]} rounded-xl p-6 hover:shadow-2xl ${shadowColors[index]} hover:scale-105 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm`}
              >
                {/* Animated neon background element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg flex justify-center">{category.icon}</div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${iconGradients[index]} bg-clip-text text-transparent drop-shadow-lg`}>{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-700/60 backdrop-blur-sm rounded-lg px-4 py-2 text-center hover:bg-gray-600/70 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-600/30 group-hover:border-cyan-500/30 text-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  const contacts = [
    {
      icon: <TelegramLogo className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />,
      title: "Telegram",
      value: "@ilyasov09",
      link: "https://t.me/ilyasov09"
    },
    {
      icon: <EmailLogo className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
      title: "Email", 
      value: "javlonilyasov97@gmail.com",
      link: "mailto:javlonilyasov97@gmail.com"
    },
    {
      icon: <InstagramLogo className="w-12 h-12 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />,
      title: "Instagram",
      value: "@javlonbek070409", 
      link: "https://instagram.com/javlonbek070409"
    },
    {
      icon: <TelegramLogo className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
      title: "Telegram Kanal",
      value: "@cyberdevuz",
      link: "https://t.me/cyberdevuz"
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/40 relative overflow-hidden">
      {/* Neon background animated elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse shadow-2xl shadow-purple-500/20"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-full blur-2xl animate-pulse delay-700 shadow-2xl shadow-cyan-500/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">Aloqa</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Menga murojaat qilishingiz mumkin. Yangi loyihalar, ajoyib g‘oyalar 
            yoki qiziqarli dasturlar ustida birga ishlash uchun tayyorman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => {
            const gradients = [
              "from-gray-800/50 to-cyan-900/50 border-cyan-500/30 hover:from-gray-700/60 hover:to-cyan-800/60",
              "from-gray-800/50 to-purple-900/50 border-purple-500/30 hover:from-gray-700/60 hover:to-purple-800/60",
              "from-gray-800/50 to-pink-900/50 border-pink-500/30 hover:from-gray-700/60 hover:to-pink-800/60",
              "from-gray-800/50 to-blue-900/50 border-blue-500/30 hover:from-gray-700/60 hover:to-blue-800/60"
            ];
            
            const shadowColors = [
              "hover:shadow-cyan-500/30",
              "hover:shadow-purple-500/30", 
              "hover:shadow-pink-500/30",
              "hover:shadow-blue-500/30"
            ];

            return (
              <TiltCard key={index}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-gradient-to-br ${gradients[index]} border rounded-xl p-6 text-center hover:shadow-2xl ${shadowColors[index]} hover:scale-105 transition-all duration-500 transform group relative overflow-hidden backdrop-blur-sm hover-lift`}
                >
                  {/* Enhanced neon hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 filter group-hover:drop-shadow-lg flex justify-center animate-float">
                      {contact.icon}
                    </div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 drop-shadow-lg animate-neon">{contact.title}</h3>
                    <p className="text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 font-medium">
                      {contact.value}
                    </p>
                  </div>
                  
                  {/* Enhanced floating neon dots */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse shadow-lg shadow-cyan-400/40"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/40"></div>
                  <div className="absolute top-1/2 left-1 w-1 h-1 bg-pink-400/40 rounded-full animate-ping delay-700"></div>
                </a>
              </TiltCard>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto border border-cyan-500/30 relative overflow-hidden group">
            {/* Neon background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">Saytimga tashrifingiz uchun raxmat!</h3>
              <p className="text-gray-300 mb-6">
                Barcha loyihalaringizga omad ! 
              </p>
              <a
                href="mailto:javlonilyasov97@gmail.com"
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-purple-600 hover:via-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden group/button border border-cyan-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 drop-shadow-lg">Ko'rishguncha</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = [
    { 
      icon: <TelegramLogo className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 hover-glow" />, 
      label: "Telegram", 
      href: "https://t.me/ilyasov09" 
    },
    { 
      icon: <InstagramLogo className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-all duration-300 hover-glow" />, 
      label: "Instagram", 
      href: "https://instagram.com/javlonbek070409" 
    },
    { 
      icon: <TelegramLogo className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-all duration-300 hover-glow" />, 
      label: "Telegram Channel", 
      href: "https://t.me/cyberdevuz" 
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 relative overflow-hidden border-t border-cyan-500/20">
      {/* Neon background decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-2xl shadow-cyan-500/10"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-2xl shadow-purple-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">
              © 2025 Javlon Ilyasov. Barcha huquqlar himoyalangan.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <HoverGlow key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2 hover:scale-125 hover:rotate-12 p-3 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 backdrop-blur-sm border border-transparent hover:border-cyan-500/30 animate-float"
                  aria-label={link.label}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="filter hover:drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    {link.icon}
                  </span>
                </a>
              </HoverGlow>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Interactive floating elements */}
      <FloatingParticles />
      <FloatingIcons />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
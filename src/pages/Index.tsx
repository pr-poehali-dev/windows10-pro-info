import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Data Analytics",
      description: "Аналитика данных для принятия обоснованных решений",
      icon: "BarChart",
      features: ["Machine Learning", "Predictive Analysis", "Real-time Processing"]
    },
    {
      id: 2,
      title: "Network Solutions",
      description: "Современные сетевые решения для вашего бизнеса",
      icon: "Network",
      features: ["Cloud Integration", "Security", "Scalability"]
    },
    {
      id: 3,
      title: "Digital Innovation",
      description: "Цифровые инновации для трансформации бизнеса",
      icon: "Zap",
      features: ["AI Solutions", "Automation", "Digital Transformation"]
    }
  ];

  const team = [
    {
      name: "Анна Иванова",
      role: "CTO",
      description: "Эксперт по архитектуре систем",
      avatar: "👩‍💼"
    },
    {
      name: "Михаил Петров",
      role: "Lead Developer",
      description: "Специалист по машинному обучению",
      avatar: "👨‍💻"
    },
    {
      name: "Екатерина Смирнова",
      role: "Product Manager",
      description: "Управление цифровыми продуктами",
      avatar: "👩‍💻"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Cpu" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TechCorp</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Команда</a>
            </div>
            <Button>Связаться</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge variant="outline" className="text-sm px-3 py-1">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Инновационные технологии
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Будущее <span className="text-primary">технологий</span> начинается здесь
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Создаем передовые решения для цифровой трансформации вашего бизнеса. 
                  Инновации, которые меняют мир.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3">
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-muted/50 rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
                      <div className="w-6 h-6 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">
              <Icon name="Settings" size={16} className="mr-2" />
              Наши решения
            </Badge>
            <h2 className="text-4xl font-bold">Интерактивная презентация услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Инновационные технологические решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Узнать больше
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">
              <Icon name="Users" size={16} className="mr-2" />
              Команда экспертов
            </Badge>
            <h2 className="text-4xl font-bold">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы, которые создают технологии будущего
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Button size="sm" variant="outline" className="group-hover:border-primary transition-colors">
                      <Icon name="Linkedin" size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="group-hover:border-primary transition-colors">
                      <Icon name="Github" size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="group-hover:border-primary transition-colors">
                      <Icon name="Mail" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Cpu" size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Windows 10 Pro</span>
              </div>
              <p className="text-muted-foreground">
                Создаем технологии будущего для вашего успеха сегодня.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Analytics Platform</div>
                <div>Network Solutions</div>
                <div>AI Tools</div>
                <div>Cloud Services</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>О нас</div>
                <div>Команда</div>
                <div>Карьера</div>
                <div>Новости</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@techcorp.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TechCorp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
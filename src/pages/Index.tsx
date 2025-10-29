import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const equipment = [
    {
      id: 1,
      category: 'Компрессоры',
      name: 'Дизельный компрессор Borey',
      specs: '5 м³/мин, 7 атмосфер',
      price: '9 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/a30e08c1-842f-4f59-92ae-a1e6b6fd7b95.jpg',
      features: ['Дизельный двигатель', 'Высокая производительность', 'Надежная конструкция']
    },
    {
      id: 2,
      category: 'Генераторы',
      name: 'Дизельный генератор JCB 10 кВт',
      specs: '10 кВт',
      price: '4 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/de859114-538a-4dfb-9f8e-879242ca0edf.jpg',
      features: ['Экономичный расход', 'Тихая работа', 'Компактные размеры']
    },
    {
      id: 3,
      category: 'Генераторы',
      name: 'Дизельный генератор JCB 35 кВт',
      specs: '35 кВт',
      price: '7 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/de859114-538a-4dfb-9f8e-879242ca0edf.jpg',
      features: ['Средняя мощность', 'Автоматический запуск', 'Защита от перегрузок']
    },
    {
      id: 4,
      category: 'Генераторы',
      name: 'Дизельный генератор JCB 50 кВт',
      specs: '50 кВт',
      price: '8 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/de859114-538a-4dfb-9f8e-879242ca0edf.jpg',
      features: ['Высокая мощность', 'Длительная работа', 'Профессиональное использование']
    },
    {
      id: 5,
      category: 'Генераторы',
      name: 'Дизельный генератор JCB 100 кВт',
      specs: '100 кВт',
      price: '12 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/de859114-538a-4dfb-9f8e-879242ca0edf.jpg',
      features: ['Максимальная мощность', 'Промышленное применение', 'Запас производительности']
    },
    {
      id: 6,
      category: 'Отбойные молотки',
      name: 'Компрессор с отбойными молотками',
      specs: 'Комплект',
      price: '10 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/ed600288-d143-439c-b847-8cd13872e509.jpg',
      features: ['Полная комплектация', 'Готовность к работе', 'Мощное оборудование']
    },
    {
      id: 7,
      category: 'Пескоструйное оборудование',
      name: 'Пескоструйное оборудование',
      specs: 'Профессиональное',
      price: '3 000',
      image: 'https://cdn.poehali.dev/projects/c7f2dd33-7266-430a-ad3d-05ac252c6979/files/ed600288-d143-439c-b847-8cd13872e509.jpg',
      features: ['Эффективная очистка', 'Универсальное применение', 'Простота использования']
    }
  ];

  const services = [
    {
      icon: 'Fuel',
      title: 'Дозаправка оборудования',
      description: 'Обеспечиваем дозаправку арендованного оборудования на объекте'
    },
    {
      icon: 'Truck',
      title: 'Бесплатная доставка по городу',
      description: 'Доставка компрессоров в черте города абсолютно бесплатно'
    },
    {
      icon: 'MapPin',
      title: 'Доставка по всей РО',
      description: 'Осуществляем доставку оборудования по всей Ростовской области'
    },
    {
      icon: 'Shield',
      title: 'Опыт более 10 лет',
      description: 'Профессиональная команда с большим опытом работы'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Settings" className="text-accent" size={32} />
            <span className="text-xl font-bold">ТехноАренда</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection('equipment')} className="text-sm font-medium hover:text-accent transition-colors">Оборудование</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-accent transition-colors">Цены</button>
            <button onClick={() => scrollToSection('delivery')} className="text-sm font-medium hover:text-accent transition-colors">Доставка</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">Контакты</button>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Более 10 лет на рынке</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Аренда промышленного<br />оборудования
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Компрессоры, генераторы и специализированное оборудование для профессионалов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('equipment')}>
              <Icon name="Package" size={20} className="mr-2" />
              Посмотреть оборудование
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={20} className="mr-2" />
              8-928-226-46-38
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наше оборудование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <Badge className="absolute top-4 right-4 bg-accent">{item.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-accent mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <Separator />
                <CardFooter className="pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-accent">{item.price} ₽</p>
                    <p className="text-sm text-muted-foreground">за сутки</p>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90">
                    Арендовать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <div key={item.id}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.specs}</p>
                      </div>
                      <p className="text-xl font-bold text-accent whitespace-nowrap">{item.price} ₽</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Доставка</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-left">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-accent" size={24} />
                </div>
                <CardTitle>По городу</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Бесплатная доставка компрессоров в черте города</p>
                <p className="text-2xl font-bold text-accent">Бесплатно</p>
              </CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Truck" className="text-accent" size={24} />
                </div>
                <CardTitle>По Ростовской области</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Доставка оборудования по всей области</p>
                <p className="text-lg font-semibold">По договоренности</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <Card className="bg-primary-foreground text-foreground">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" className="text-accent" size={32} />
                  <a href="tel:+79282264638" className="text-3xl font-bold hover:text-accent transition-colors">
                    8-928-226-46-38
                  </a>
                </div>
                <p className="text-muted-foreground">Звоните с 8:00 до 20:00 ежедневно</p>
                <Separator className="my-6" />
                <div className="space-y-3">
                  <p className="font-semibold text-lg">Мы работаем для вас:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" className="text-accent" size={20} />
                      <span>Опыт более 10 лет</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="text-accent" size={20} />
                      <span>Быстрая подача</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ThumbsUp" className="text-accent" size={20} />
                      <span>Качественный сервис</span>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-accent hover:bg-accent/90 mt-4">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 ТехноАренда. Аренда промышленного оборудования в Ростовской области</p>
          <p className="mt-2">Компрессоры • Генераторы • Отбойные молотки • Пескоструйное оборудование</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

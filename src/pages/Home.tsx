import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary py-6 px-4 sm:px-8 bg-card shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: 'VT323, monospace' }}>
              CODING SCHOOL
            </h1>
            <nav className="hidden sm:flex gap-6" style={{ fontFamily: 'Press Start 2P, monospace' }}>
              <Link to="/" className="text-xs hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/schedule" className="text-xs hover:text-primary transition-colors">
                Расписание
              </Link>
              <Link to="/contacts" className="text-xs hover:text-primary transition-colors">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <section className="mb-20 text-center animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl mb-6" style={{ fontFamily: 'Press Start 2P, monospace', lineHeight: '1.3' }}>
              # Unlock the Secrets of Code
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8" style={{ fontFamily: 'VT323, monospace' }}>
              Научись программировать в стиле 80-х с современными технологиями
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-sm" style={{ fontFamily: 'Press Start 2P, monospace' }}>
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-sm" style={{ fontFamily: 'Press Start 2P, monospace' }}>
              <Icon name="Play" className="mr-2" size={16} />
              Демо урок
            </Button>
          </div>
        </section>

        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center" style={{ fontFamily: 'VT323, monospace' }}>
            О нашей школе
          </h2>
          <Card className="border-4 border-primary shadow-lg">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Code" size={32} className="text-primary" />
                    <h3 className="text-2xl" style={{ fontFamily: 'VT323, monospace' }}>
                      Ретро подход
                    </h3>
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Мы учим программированию через призму классических технологий, 
                    показывая эволюцию от простого к сложному.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Sparkles" size={32} className="text-secondary" />
                    <h3 className="text-2xl" style={{ fontFamily: 'VT323, monospace' }}>
                      Современные навыки
                    </h3>
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    При этом вы получаете актуальные знания востребованных 
                    языков программирования и фреймворков.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Users" size={32} className="text-accent" />
                    <h3 className="text-2xl" style={{ fontFamily: 'VT323, monospace' }}>
                      Сообщество
                    </h3>
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Присоединяйтесь к комьюнити энтузиастов, которые любят 
                    как винтажную эстетику, так и современный код.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Trophy" size={32} className="text-muted" />
                    <h3 className="text-2xl" style={{ fontFamily: 'VT323, monospace' }}>
                      Сертификация
                    </h3>
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    По окончании курса вы получаете сертификат 
                    и портфолио выполненных проектов.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center" style={{ fontFamily: 'VT323, monospace' }}>
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-2 border-primary mb-4 px-6 rounded-lg bg-card">
              <AccordionTrigger className="text-xl hover:no-underline" style={{ fontFamily: 'VT323, monospace' }}>
                Нужен ли опыт программирования?
              </AccordionTrigger>
              <AccordionContent className="text-lg pt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Нет, наши курсы подходят для начинающих. Мы начинаем с основ 
                и постепенно переходим к более сложным темам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary mb-4 px-6 rounded-lg bg-card">
              <AccordionTrigger className="text-xl hover:no-underline" style={{ fontFamily: 'VT323, monospace' }}>
                Какие языки программирования вы преподаете?
              </AccordionTrigger>
              <AccordionContent className="text-lg pt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Мы предлагаем курсы по Python, JavaScript, TypeScript, React, 
                а также основам веб-разработки (HTML, CSS).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary mb-4 px-6 rounded-lg bg-card">
              <AccordionTrigger className="text-xl hover:no-underline" style={{ fontFamily: 'VT323, monospace' }}>
                Сколько длится обучение?
              </AccordionTrigger>
              <AccordionContent className="text-lg pt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Продолжительность зависит от курса: базовые курсы — 2-3 месяца, 
                продвинутые — до 6 месяцев. Занятия проходят 2-3 раза в неделю.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary mb-4 px-6 rounded-lg bg-card">
              <AccordionTrigger className="text-xl hover:no-underline" style={{ fontFamily: 'VT323, monospace' }}>
                Есть ли у вас онлайн формат?
              </AccordionTrigger>
              <AccordionContent className="text-lg pt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Да, все наши курсы доступны как в онлайн, так и в офлайн форматах. 
                Вы можете выбрать удобный для вас вариант.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-primary mb-4 px-6 rounded-lg bg-card">
              <AccordionTrigger className="text-xl hover:no-underline" style={{ fontFamily: 'VT323, monospace' }}>
                Помогаете ли вы с трудоустройством?
              </AccordionTrigger>
              <AccordionContent className="text-lg pt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Да, мы помогаем составить резюме, подготовиться к собеседованиям 
                и предоставляем контакты партнерских компаний для трудоустройства.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center py-16 bg-secondary/20 rounded-3xl border-4 border-secondary animate-fade-in">
          <h2 className="text-3xl sm:text-4xl mb-6" style={{ fontFamily: 'Press Start 2P, monospace' }}>
            Готовы начать?
          </h2>
          <p className="text-xl mb-8" style={{ fontFamily: 'VT323, monospace' }}>
            Присоединяйтесь к нашей школе и начните карьеру в IT
          </p>
          <Link to="/contacts">
            <Button size="lg" className="text-sm" style={{ fontFamily: 'Press Start 2P, monospace' }}>
              Записаться на курс
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t-4 border-primary py-8 px-4 sm:px-8 mt-20 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg" style={{ fontFamily: 'VT323, monospace' }}>
            © 2024 CODING SCHOOL. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-2" style={{ fontFamily: 'VT323, monospace' }}>
            Made with 💜 in retro style
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

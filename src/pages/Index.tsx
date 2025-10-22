import Header from '@/components/Header';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Школа Программирования
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Изучайте код в атмосфере ретро. Проверенные временем методики обучения с современным подходом
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-primary">
              Записаться на курс
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-secondary">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">О нас</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg border-4 border-accent/30 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">Опытные преподаватели</h3>
              <p className="text-center text-muted-foreground">
                Наши учителя — практикующие разработчики с опытом работы более 10 лет в индустрии
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border-4 border-secondary/30 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="BookOpen" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">Проверенная программа</h3>
              <p className="text-center text-muted-foreground">
                Учебный план, основанный на реальных проектах и требованиях современного рынка труда
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border-4 border-muted/30 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">Сертификаты</h3>
              <p className="text-center text-muted-foreground">
                После окончания курса выдаём официальный сертификат, признанный работодателями
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border-4 border-accent/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Нужен ли опыт в программировании?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, наши курсы подходят для начинающих. Мы начинаем с основ и постепенно переходим к более сложным темам. Главное — желание учиться!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border-4 border-secondary/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Какова длительность обучения?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Базовый курс длится 6 месяцев при занятиях 3 раза в неделю. Также есть интенсивные программы на 3 месяца и расширенные на год.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border-4 border-primary/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Помогаете ли с трудоустройством?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! У нас есть карьерный центр, который помогает составить резюме, подготовиться к собеседованиям и связывает с компаниями-партнёрами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border-4 border-muted/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Можно ли учиться онлайн?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, все наши курсы доступны в онлайн-формате с возможностью участия в живых занятиях или просмотра записей в удобное время.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border-4 border-accent/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Какие языки программирования вы преподаёте?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы обучаем Python, JavaScript, Java, C++ и Go. Также есть специализированные курсы по веб-разработке, мобильной разработке и Data Science.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-card border-t-4 border-primary/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 CodeSchool. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const courses = [
    {
      title: 'Python для начинающих',
      days: 'Пн, Ср, Пт',
      time: '18:00 - 20:00',
      level: 'Начальный',
      icon: 'Code',
      color: 'primary'
    },
    {
      title: 'JavaScript & React',
      days: 'Вт, Чт',
      time: '19:00 - 21:30',
      level: 'Средний',
      icon: 'Globe',
      color: 'secondary'
    },
    {
      title: 'Java Enterprise',
      days: 'Сб',
      time: '10:00 - 14:00',
      level: 'Продвинутый',
      icon: 'Coffee',
      color: 'accent'
    },
    {
      title: 'Data Science & ML',
      days: 'Вт, Чт',
      time: '18:00 - 20:00',
      level: 'Средний',
      icon: 'Brain',
      color: 'primary'
    },
    {
      title: 'Web-дизайн',
      days: 'Пн, Ср',
      time: '19:00 - 21:00',
      level: 'Начальный',
      icon: 'Palette',
      color: 'secondary'
    },
    {
      title: 'Мобильная разработка',
      days: 'Сб, Вс',
      time: '12:00 - 16:00',
      level: 'Средний',
      icon: 'Smartphone',
      color: 'accent'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Расписание курсов</h1>
          <p className="text-xl text-muted-foreground">Выберите удобное время для обучения</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg border-4 border-accent/30 hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-${course.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon name={course.icon as any} size={28} className="text-primary" />
                </div>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                  {course.level}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">{course.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <span>{course.days}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>{course.time}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 border-2 border-primary">
                Записаться
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 rounded-lg shadow-lg border-4 border-secondary/30">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Дополнительная информация</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Icon name="CheckCircle2" size={24} className="text-primary" />
                Что входит в курс
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-8">
                <li>• Доступ к записям всех занятий</li>
                <li>• Практические задания и проекты</li>
                <li>• Индивидуальные консультации</li>
                <li>• Сертификат по окончанию</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Icon name="Info" size={24} className="text-primary" />
                Важно знать
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-8">
                <li>• Можно присоединиться в любое время</li>
                <li>• Первое занятие бесплатно</li>
                <li>• Скидка 15% при оплате за семестр</li>
                <li>• Возможна рассрочка платежа</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-4 border-primary/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 CodeSchool. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Schedule;

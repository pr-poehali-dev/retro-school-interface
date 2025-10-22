import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Контакты</h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Свяжитесь с нами удобным для вас способом
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border-4 border-border rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-card-foreground">Как нас найти</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-card-foreground">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Программистов, д. 42</p>
                  <p className="text-muted-foreground text-sm">м. Технопарк, 5 минут пешком</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-card-foreground">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground text-sm">Пн-Пт: 10:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-card-foreground">Email</h3>
                  <p className="text-muted-foreground">info@codeschool.ru</p>
                  <p className="text-muted-foreground text-sm">Ответим в течение 24 часов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-card-foreground">Часы работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 10:00 - 21:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border-4 border-border rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-card-foreground">Напишите нам</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block font-bold mb-2 text-card-foreground">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-border rounded bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-card-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-border rounded bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-card-foreground">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-border rounded bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-card-foreground">Сообщение</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-border rounded bg-background text-foreground focus:outline-none focus:border-primary resize-none"
                  placeholder="Расскажите, чем мы можем вам помочь..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground border-2 border-foreground/20 rounded font-bold hover:bg-primary/90 transition-all"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-muted/30 border-4 border-border rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-foreground text-center">Мы в социальных сетях</h2>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="bg-card border-2 border-border p-4 rounded-lg hover:bg-secondary/50 transition-all">
              <Icon name="Send" size={32} className="text-primary" />
            </a>
            <a href="#" className="bg-card border-2 border-border p-4 rounded-lg hover:bg-secondary/50 transition-all">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </a>
            <a href="#" className="bg-card border-2 border-border p-4 rounded-lg hover:bg-secondary/50 transition-all">
              <Icon name="Youtube" size={32} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
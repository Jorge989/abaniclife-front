import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594824804732-ca8db7d1457c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mulher aplicando produto de beleza natural"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-abanic-gray-dark mb-6">
                Fique por dentro das{' '}
                <span className="abanic-orange">novidades</span>
              </h2>
              <p className="text-lg text-abanic-gray leading-relaxed mb-8">
                Receba em primeira mão as últimas tendências em beleza natural, 
                dicas exclusivas de cuidados com a pele e lançamentos especiais 
                da ABANIC diretamente no seu e-mail.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-abanic-gray">Dicas exclusivas de beleza natural</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-abanic-gray">Acesso antecipado a novos produtos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-abanic-gray">Ofertas especiais para assinantes</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <span className="font-semibold text-abanic-gray-dark">
                        Inscreva-se na nossa newsletter
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <Button
                        type="submit"
                        disabled={isLoading || !email}
                        className="bg-abanic-orange hover:bg-orange-600 text-white px-8 py-2 font-semibold transition-smooth hover-lift disabled:opacity-50"
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Inscrevendo...</span>
                          </div>
                        ) : (
                          'Inscrever-se'
                        )}
                      </Button>
                    </div>
                    
                    <p className="text-xs text-abanic-gray">
                      Ao se inscrever, você concorda com nossa política de privacidade. 
                      Você pode cancelar a inscrição a qualquer momento.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-abanic-gray-dark mb-2">
                      Inscrição realizada com sucesso!
                    </h3>
                    <p className="text-abanic-gray">
                      Obrigado por se inscrever. Você receberá nossas novidades em breve.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 text-sm text-abanic-gray">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span>Mais de 10.000 pessoas já se inscreveram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;


'use client';

import { useState } from 'react';
import { Heart, BookOpen, Users, Award, Play, Calendar, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DogEducationApp() {
  const [activeTab, setActiveTab] = useState('home');

  const trainingPrograms = [
    {
      id: 1,
      title: "Treinamento Básico",
      description: "Comandos essenciais: sentar, ficar, vir",
      duration: "4 semanas",
      difficulty: "Iniciante",
      image: "🐕",
      progress: 75,
      lessons: 12
    },
    {
      id: 2,
      title: "Socialização",
      description: "Interação com outros cães e pessoas",
      duration: "6 semanas",
      difficulty: "Intermediário",
      image: "🐕‍🦺",
      progress: 30,
      lessons: 18
    },
    {
      id: 3,
      title: "Comportamento Avançado",
      description: "Truques e comandos complexos",
      duration: "8 semanas",
      difficulty: "Avançado",
      image: "🎾",
      progress: 0,
      lessons: 24
    }
  ];

  const behaviorTips = [
    {
      id: 1,
      title: "Latido Excessivo",
      category: "Comportamento",
      tip: "Identifique a causa do latido e use técnicas de redirecionamento positivo.",
      urgency: "medium"
    },
    {
      id: 2,
      title: "Ansiedade de Separação",
      category: "Bem-estar",
      tip: "Crie uma rotina gradual de saídas curtas e aumente progressivamente.",
      urgency: "high"
    },
    {
      id: 3,
      title: "Mastigação Destrutiva",
      category: "Comportamento",
      tip: "Forneça brinquedos apropriados e redirecione o comportamento.",
      urgency: "low"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Aula de Socialização",
      date: "Hoje, 15:00",
      type: "Presencial",
      instructor: "Dr. Maria Silva"
    },
    {
      id: 2,
      title: "Webinar: Nutrição Canina",
      date: "Amanhã, 19:00",
      type: "Online",
      instructor: "Vet. João Santos"
    },
    {
      id: 3,
      title: "Treino Avançado",
      date: "Sábado, 10:00",
      type: "Presencial",
      instructor: "Trainer Ana Costa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  PawEducation
                </h1>
                <p className="text-xs text-gray-600">
                  Educação e comportamento canino
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar dicas, treinos..."
                  className="pl-10 pr-4 py-2.5 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'home', label: 'Início', icon: Heart },
              { id: 'training', label: 'Treinamentos', icon: BookOpen },
              { id: 'community', label: 'Comunidade', icon: Users },
              { id: 'progress', label: 'Progresso', icon: Award }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bem-vindo ao PawEducation! 🐾
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transforme a relação com seu cão através de técnicas comprovadas de educação e comportamento canino.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Lições Concluídas</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">Programas Ativos</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-orange-600">7</div>
                  <div className="text-sm text-gray-600">Dias de Sequência</div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Agenda de Hoje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.date} • {event.instructor}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={event.type === 'Online' ? 'secondary' : 'default'}>
                          {event.type}
                        </Badge>
                        <Button size="sm">
                          <Play className="w-4 h-4 mr-1" />
                          Participar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Behavior Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Dicas de Comportamento</CardTitle>
                <CardDescription>
                  Soluções rápidas para problemas comuns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {behaviorTips.map((tip) => (
                    <div key={tip.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{tip.category}</Badge>
                        <div className={`w-2 h-2 rounded-full ${
                          tip.urgency === 'high' ? 'bg-red-500' :
                          tip.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}></div>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">{tip.title}</h4>
                      <p className="text-sm text-gray-600">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Programas de Treinamento</h2>
              <p className="text-gray-600">Escolha o programa ideal para o nível do seu cão</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">{program.image}</div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duração: {program.duration}</span>
                        <Badge variant={
                          program.difficulty === 'Iniciante' ? 'secondary' :
                          program.difficulty === 'Intermediário' ? 'default' : 'destructive'
                        }>
                          {program.difficulty}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso</span>
                          <span>{program.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${program.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{program.lessons} lições</span>
                        <Button size="sm">
                          {program.progress > 0 ? 'Continuar' : 'Começar'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Comunidade PawEducation</h2>
              <p className="text-gray-600">Conecte-se com outros donos e compartilhe experiências</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussões Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { user: "Maria S.", topic: "Meu Golden Retriever não para de latir", replies: 12, time: "2h" },
                        { user: "João P.", topic: "Dicas para ensinar o comando 'fica'", replies: 8, time: "4h" },
                        { user: "Ana L.", topic: "Socialização com outros cães", replies: 15, time: "6h" }
                      ].map((discussion, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <h4 className="font-medium text-gray-900 mb-1">{discussion.topic}</h4>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Por {discussion.user}</span>
                            <span>{discussion.replies} respostas • {discussion.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Especialistas Online</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Dr. Maria Silva", specialty: "Comportamento", status: "online" },
                        { name: "Vet. João Santos", specialty: "Nutrição", status: "online" },
                        { name: "Ana Costa", specialty: "Treinamento", status: "offline" }
                      ].map((expert, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">{expert.name}</div>
                            <div className="text-sm text-gray-600">{expert.specialty}</div>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${
                            expert.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                          }`}></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Seu Progresso</h2>
              <p className="text-gray-600">Acompanhe a evolução do treinamento do seu cão</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conquistas Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { achievement: "Primeira semana completa", date: "Hoje", icon: "🏆" },
                      { achievement: "Comando 'sentar' dominado", date: "Ontem", icon: "⭐" },
                      { achievement: "5 lições consecutivas", date: "2 dias atrás", icon: "🔥" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="font-medium text-gray-900">{item.achievement}</div>
                          <div className="text-sm text-gray-600">{item.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas Semanais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Lições Concluídas</span>
                        <span className="text-sm font-medium">12/15</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Tempo de Prática</span>
                        <span className="text-sm font-medium">4.5h/6h</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Comandos Aprendidos</span>
                        <span className="text-sm font-medium">8/12</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">PawEducation</span>
            </div>
            <p className="text-gray-600">
              © 2024 PawEducation. Transformando vidas caninas com amor e ciência.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
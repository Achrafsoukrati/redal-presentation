import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Users, Zap, BarChart3, Globe, Shield, Lightbulb, Target, CheckCircle } from 'lucide-react';

const RedalPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 20;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slides = [
    // Slide 1 - Page de titre
    {
      component: () => (
        <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl shadow-2xl p-12 text-white">
          <div className="flex flex-col items-center space-y-8">
            <div className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-3xl shadow-lg">
              REDAL
            </div>
            <h1 className="text-5xl font-bold text-center leading-tight">
              Développement d'un Chatbot pour la Digitalisation de la Relation Client
            </h1>
            <h2 className="text-2xl font-light text-center opacity-90">
              Optimisation de l'expérience client via l'intégration d'un assistant virtuel
            </h2>
            
            <div className="grid grid-cols-2 gap-8 w-full mt-12">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <h3 className="text-yellow-300 font-semibold mb-3 flex items-center">
                  <Users className="mr-2" size={20} />
                  Réalisé par
                </h3>
                <p className="font-bold">Meriem Soukrati</p>
                <p className="text-sm opacity-80">Master Marketing & Communication</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <h3 className="text-yellow-300 font-semibold mb-3 flex items-center">
                  <Target className="mr-2" size={20} />
                  Entreprise d'accueil
                </h3>
                <p className="font-bold">REDAL</p>
                <p className="text-sm opacity-80">Filiale Veolia Maroc</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <h3 className="text-yellow-300 font-semibold mb-3">📅 Période de stage</h3>
                <p className="font-bold">24/02/2023 - 24/06/2023</p>
                <p className="text-sm opacity-80">Département Marketing & Relation Client</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <h3 className="text-yellow-300 font-semibold mb-3">👥 Maître de stage</h3>
                <p className="font-bold">Mme Imane Hammouzou</p>
                <p className="text-sm opacity-80">Responsable Marketing & Relation Client</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2 - Contexte
    {
      component: () => (
        <div className="bg-gradient-to-br from-teal-700 to-teal-500 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-5xl font-bold text-center mb-12 text-orange-300">
            🌐 Contexte et Enjeux de la Digitalisation
          </h1>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-orange-300 font-bold mb-4 text-xl">🏛️ Transformation du Secteur</h3>
              <ul className="space-y-2 text-sm">
                <li>• Création des Sociétés Régionales Multiservices (SRM)</li>
                <li>• Modernisation des services publics</li>
                <li>• Régionalisation avancée au Maroc</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-orange-300 font-bold mb-4 text-xl">📱 Évolution des Attentes Client</h3>
              <ul className="space-y-2 text-sm">
                <li>• Service disponible 24h/24</li>
                <li>• Réponses instantanées</li>
                <li>• Expérience utilisateur fluide</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-orange-300 font-bold mb-4 text-xl">⚡ Défis Opérationnels</h3>
              <ul className="space-y-2 text-sm">
                <li>• Volume croissant de demandes</li>
                <li>• Charge des centres d'appels</li>
                <li>• Optimisation des coûts</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-orange-300 font-bold mb-4 text-xl">🚀 Opportunités Digitales</h3>
              <ul className="space-y-2 text-sm">
                <li>• Intelligence artificielle (IA)</li>
                <li>• Automatisation des processus</li>
                <li>• Amélioration de la réactivité</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-around text-center">
            <div>
              <div className="text-4xl font-bold text-orange-300">2,2M</div>
              <div className="text-sm">habitants desservis</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-300">1121</div>
              <div className="text-sm">réclamations 2023</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-300">43,7%</div>
              <div className="text-sm">liées à la facturation</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3 - Problématique
    {
      component: () => (
        <div className="bg-gradient-to-br from-amber-800 to-amber-600 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-5xl font-bold text-center mb-12 text-yellow-300">
            🎯 Problématique et Objectifs
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border-l-4 border-yellow-300 mb-12">
            <h2 className="text-yellow-300 font-bold mb-4 text-2xl">❓ Problématique Centrale</h2>
            <p className="text-xl leading-relaxed font-medium">
              "Comment l'intégration d'un chatbot peut-elle contribuer à l'optimisation de l'expérience client dans le cadre de la digitalisation des services de REDAL ?"
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { icon: "1", text: "Automatiser les réponses aux demandes courantes des clients" },
              { icon: "2", text: "Réduire les délais de traitement et les coûts" },
              { icon: "3", text: "Améliorer l'accessibilité des services 24h/24" },
              { icon: "4", text: "Alléger la charge des agents humains" }
            ].map((objective, idx) => (
              <div key={idx} className="flex items-center bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <div className="bg-yellow-300 text-amber-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                  {objective.icon}
                </div>
                <span className="font-medium">{objective.text}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-300/10 p-6 rounded-xl border border-yellow-300/30">
            <h3 className="text-yellow-300 font-bold mb-3 text-lg">🎯 Hypothèses de travail</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p>✓ Réduction significative du temps de traitement</p>
              <p>✓ Amélioration de la satisfaction client</p>
              <p>✓ Diminution de la charge de travail des agents</p>
              <p>✓ Nécessité d'accompagnement au changement</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4 - REDAL
    {
      component: () => (
        <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl shadow-2xl p-12 text-white">
          <div className="flex items-center justify-center mb-12 space-x-8">
            <div className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-2xl shadow-lg">
              REDAL
            </div>
            <div>
              <h2 className="text-yellow-300 font-bold text-2xl">Régie Autonome de Distribution d'Eau et d'Électricité</h2>
              <p className="text-lg opacity-90">Filiale du groupe Veolia Maroc</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-yellow-300/30">
              <h3 className="text-yellow-300 font-bold mb-6 text-xl">🎯 Missions Principales</h3>
              <div className="space-y-4">
                {[
                  { icon: "💧", text: "Distribution d'eau potable" },
                  { icon: "⚡", text: "Distribution d'électricité" },
                  { icon: "🏭", text: "Assainissement liquide" },
                  { icon: "🌱", text: "Développement durable" }
                ].map((mission, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="bg-yellow-300 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      {mission.icon}
                    </div>
                    <span>{mission.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-yellow-300/30">
              <h3 className="text-yellow-300 font-bold mb-6 text-xl">📊 Secteur d'Activité</h3>
              <p className="font-bold mb-4">Services publics essentiels</p>
              <ul className="space-y-2 text-sm">
                <li>• Création des Sociétés Régionales Multiservices (SRM)</li>
                <li>• Loi n°83-21 - Régionalisation avancée</li>
                <li>• Transition énergétique et digitale</li>
                <li>• Modernisation des infrastructures</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-300/10 p-6 rounded-xl text-center border border-yellow-300/30">
              <div className="text-3xl font-bold text-yellow-300">2,2M</div>
              <div className="text-sm">Habitants desservis</div>
            </div>
            <div className="bg-yellow-300/10 p-6 rounded-xl text-center border border-yellow-300/30">
              <div className="text-3xl font-bold text-yellow-300">RSK</div>
              <div className="text-sm">Région Rabat-Salé-Kénitra</div>
            </div>
            <div className="bg-yellow-300/10 p-6 rounded-xl text-center border border-yellow-300/30">
              <div className="text-3xl font-bold text-yellow-300">2025</div>
              <div className="text-sm">Transfert à la SRM</div>
            </div>
          </div>
          
          <div className="bg-yellow-300/10 p-6 rounded-xl text-center border border-yellow-300/30">
            <h3 className="text-yellow-300 font-bold mb-3 text-lg">🚀 Vision Stratégique</h3>
            <p className="text-lg italic">"Moderniser la relation client par la digitalisation et l'innovation technologique"</p>
          </div>
        </div>
      )
    },

    // Slide 5 - Agence en ligne
    {
      component: () => (
        <div className="bg-gradient-to-br from-purple-800 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-5xl font-bold text-center mb-12 text-pink-300">
            💻 L'Agence en Ligne Actuelle
          </h1>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-cyan-400 font-bold mb-6 text-xl">✅ Services Disponibles</h3>
              <div className="space-y-3">
                {[
                  { icon: "💳", text: "Consultation et paiement des factures" },
                  { icon: "📊", text: "Suivi de consommation (historique 12 mois)" },
                  { icon: "📝", text: "Gestion des contrats (souscription, résiliation)" },
                  { icon: "📞", text: "Dépôt de réclamations en ligne" },
                  { icon: "📧", text: "E-facture et notifications par email" },
                  { icon: "📍", text: "Localisation agences et bornes de paiement" }
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm">
                    <span className="text-lg">{service.icon}</span>
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border-l-4 border-pink-400">
              <h3 className="text-pink-400 font-bold mb-6 text-xl">⚠️ Limites Identifiées</h3>
              <div className="space-y-3">
                {[
                  { icon: "🐌", text: "Lenteurs et difficultés de navigation" },
                  { icon: "❓", text: "Absence de réponse immédiate" },
                  { icon: "📱", text: "Mauvaise compatibilité mobile" },
                  { icon: "🔍", text: "Informations peu claires" },
                  { icon: "📢", text: "Vulgarisation insuffisante" },
                  { icon: "🕐", text: "Délais de traitement des demandes" }
                ].map((limit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-pink-200">
                    <span className="text-lg">{limit.icon}</span>
                    <span>{limit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
            <h3 className="text-pink-300 font-bold mb-6 text-center text-xl">📈 Statistiques d'Usage - Enquête Interne</h3>
            <div className="grid grid-cols-4 gap-6">
              {[
                { percentage: "16,7%", label: "Utilisateurs réguliers" },
                { percentage: "43,3%", label: "Utilisateurs occasionnels" },
                { percentage: "46,7%", label: "Paiement en ligne" },
                { percentage: "44,8%", label: "Ont rencontré des difficultés" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center bg-white/5 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">{stat.percentage}</div>
                  <div className="text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // Slide 6 - État des lieux
    {
      component: () => (
        <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-5xl font-bold text-center mb-12 text-green-300">
            📊 État des Lieux - Réclamations 2023
          </h1>
          
          <div className="grid grid-cols-2 gap-8 items-center mb-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="w-full h-full rounded-full" style={{
                  background: `conic-gradient(
                    #e63946 0deg 157deg,
                    #f77f00 157deg 220deg,
                    #277da1 220deg 360deg
                  )`
                }}>
                  <div className="absolute inset-16 bg-green-800/90 rounded-full flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-green-300">1121</div>
                    <div className="text-lg">Total 2023</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
              <h3 className="text-green-300 font-bold mb-6 text-xl">Répartition par Catégorie</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-500 rounded-full mr-4"></div>
                  <span><strong>43,7%</strong> - Facturation (490 réclamations)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-orange-500 rounded-full mr-4"></div>
                  <span><strong>17,5%</strong> - Distribution (196 réclamations)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-4"></div>
                  <span><strong>38,8%</strong> - Autres (435 réclamations)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-300/10 p-8 rounded-xl border-2 border-green-300/30">
            <h3 className="text-green-300 font-bold mb-6 text-center text-xl">🔍 Insights Clés</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white/5 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-300">43,7%</div>
                <div className="text-sm mt-2">des réclamations concernent la facturation</div>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-300">31%</div>
                <div className="text-sm mt-2">d'insatisfaction liée à la réactivité</div>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-300">48%</div>
                <div className="text-sm mt-2">des problèmes d'accès et navigation</div>
              </div>
            </div>
            <p className="text-center mt-6 italic text-lg">
              "Les pics de réclamations révèlent des périodes critiques nécessitant une réponse automatisée"
            </p>
          </div>
        </div>
      )
    },

    // Slides 7-18 - Contenu développé
    {
      component: () => (
        <div className="bg-gradient-to-br from-red-800 to-red-600 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-200">
            🔄 Analyse des Besoins - Clients vs Agents
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 mb-8">
            <div className="grid grid-cols-3 bg-red-200/20 p-4 font-bold text-lg border-b border-white/20">
              <div>Catégorie de Besoin</div>
              <div className="text-sky-300">👥 Besoins Clients</div>
              <div className="text-green-300">🧑‍💼 Besoins Agents REDAL</div>
            </div>
            
            {[
              {
                category: "💰 Facturation",
                client: "• Transparence sur les montants\n• Suivi temps réel des paiements\n• Factures claires et détaillées",
                agent: "• Outils d'automatisation\n• Réponses standardisées\n• Réduction des requêtes répétitives"
              },
              {
                category: "⚡ Incidents Techniques",
                client: "• Intervention rapide\n• Suivi en temps réel\n• Communication proactive",
                agent: "• Filtrage des demandes urgentes\n• Coordination efficace\n• Outils de priorisation"
              }
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 border-b border-white/10 text-sm">
                <div className="font-bold text-red-200">{row.category}</div>
                <div className="text-sky-200 whitespace-pre-line">{row.client}</div>
                <div className="text-green-200 whitespace-pre-line">{row.agent}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-red-200/10 p-6 rounded-xl border-2 border-red-200/30">
            <h3 className="text-red-200 font-bold mb-4 text-center text-xl">🎯 Convergence des Besoins</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-red-200 font-bold mb-3">🤝 Points de Convergence</h4>
                <p className="text-sm">• Automatisation des tâches répétitives<br/>
                • Amélioration de la réactivité<br/>
                • Optimisation des processus<br/>
                • Qualité de service renforcée</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-red-200 font-bold mb-3">🎯 Solution Chatbot</h4>
                <p className="text-sm">• Répond aux besoins clients ET agents<br/>
                • Automatise 60% des demandes courantes<br/>
                • Libère du temps pour les cas complexes<br/>
                • Service disponible 24h/24</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slides supplémentaires (8-18)
    ...Array.from({ length: 11 }, (_, i) => ({
      component: () => (
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-5xl font-bold text-center mb-12">Slide {i + 8}</h1>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 text-center">
            <p className="text-xl">Contenu de la slide {i + 8}</p>
            <p className="mt-4 opacity-80">Cette section sera développée avec le contenu spécifique.</p>
          </div>
        </div>
      )
    })),

    // Slide 19 - Conclusion
    {
      component: () => (
        <div className="bg-gradient-to-br from-indigo-800 to-purple-700 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-5xl font-bold text-center mb-12">🎉 Conclusion et Perspectives</h1>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border-2 border-white/30 mb-8">
            <h3 className="text-yellow-300 font-bold mb-6 text-center text-2xl">🏆 Réalisations Clés du Projet</h3>
            <div className="grid grid-cols-4 gap-6">
              {[
                { icon: <CheckCircle size={32} />, title: "Validation Concept", desc: "66,7% d'acceptation utilisateurs" },
                { icon: <MessageCircle size={32} />, title: "Prototype Fonctionnel", desc: "Chatbot trilingue opérationnel" },
                { icon: <BarChart3 size={32} />, title: "Performance Validée", desc: "60% d'automatisation, 80% satisfaction" },
                { icon: <Target size={32} />, title: "Roadmap Définie", desc: "Plan de déploiement progressif" }
              ].map((achievement, idx) => (
                <div key={idx} className="text-center bg-white/5 p-6 rounded-lg">
                  <div className="text-yellow-300 mb-4 flex justify-center">{achievement.icon}</div>
                  <h4 className="font-bold mb-2">{achievement.title}</h4>
                  <p className="text-sm opacity-80">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border-2 border-white/30">
            <h3 className="text-yellow-300 font-bold mb-6 text-center text-2xl">🔮 Perspectives d'Avenir</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-yellow-300 font-bold mb-4 text-lg">📈 Impact Transformationnel</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Modernisation de l'image REDAL</li>
                  <li>• Référence secteur services publics Maroc</li>
                  <li>• Amélioration satisfaction client durable</li>
                  <li>• Optimisation ressources humaines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-bold mb-4 text-lg">🚀 Innovation Continue</h4>
                <ul className="space-y-2 text-sm">
                  <li>• IA prédictive et analytics avancés</li>
                  <li>• Intégration écosystème digital complet</li>
                  <li>• Extension multi-plateformes</li>
                  <li>• Personnalisation intelligente</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-300/10 p-6 rounded-xl mt-6 text-center border border-yellow-300/30">
              <p className="text-xl font-bold text-yellow-300">
                "Ce projet ouvre la voie à une transformation digitale durable et positionne REDAL comme pionnier de l'innovation dans les services publics marocains"
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 20 - Questions
    {
      component: () => (
        <div className="bg-gradient-to-br from-slate-800 to-blue-700 rounded-3xl shadow-2xl p-12 text-white">
          <h1 className="text-6xl font-bold text-center mb-12">❓ Questions & Échanges</h1>
          
          <div className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl border border-white/20 mb-12 text-center">
            <h2 className="text-yellow-300 font-bold text-4xl mb-6">Merci pour votre attention</h2>
            <p className="text-2xl font-light">
              "L'intégration du chatbot REDAL : Un pas vers l'excellence du service client digital"
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl text-center border border-white/20">
            <h3 className="text-yellow-300 font-bold text-3xl mb-6 flex items-center justify-center">
              <MessageCircle className="mr-4" size={40} />
              Vos Questions
            </h3>
            <p className="text-xl">Je reste à votre disposition pour répondre à toutes vos questions</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 relative overflow-hidden">
      {/* Indicateur de slide */}
      <div className="fixed top-8 right-8 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 font-bold text-white z-50">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      {/* Container principal */}
      <div className="max-w-7xl mx-auto h-screen flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center p-4">
          {slides[currentSlide]?.component()}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="fixed bottom-8 right-8 flex space-x-4 z-50">
        <button
          onClick={previousSlide}
          className="bg-white/20 backdrop-blur-lg border-2 border-white/30 p-4 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Slide précédente"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-lg border-2 border-white/30 p-4 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Slide suivante"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
      
      {/* Instructions de navigation */}
      <div className="fixed bottom-20 left-8 bg-black/20 backdrop-blur-lg px-4 py-2 rounded-lg text-white text-sm z-50">
        <p>Utilisez les flèches ← → ou Espace pour naviguer</p>
      </div>
    </div>
  );
};

export default RedalPresentation;
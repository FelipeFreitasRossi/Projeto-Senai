const translations = {
    pt: {
        back: "Voltar",
        theme: "Tema",
        ourProjects: "Nossos Projetos",
        working: "Funcionamento",
        visitSite: "Visitar site",
        
        // Footer
        footerCity: "SENAI São Carlos",
        footerText: "Centro de referência em formação técnica e tecnológica.",
        footerSlogan: "Formando o futuro da tecnologia",
        footerDevTitle: "Desenvolvedor",
        footerDevelopedBy: "Desenvolvido por",
        footerRights: "© 2025 SENAI São-Carlos - Todos os direitos reservados",

        // Títulos e Descrições dos Projetos (3TDS)
        controlTechTitle: "Gerenciamento de Estoque",
        controlTechDesc: "Desenvolvimento de um sistema completo de automação para controle de processos industriais, utilizando IoT e sensores inteligentes para otimização de produção.",
        
        ioTurnTitle: "Sua operação mais inteligente",
        ioTurnDesc: "Ecossistema IoT robusto utilizando comunicação LoRa para coleta de dados e algoritmos de Inteligência Artificial.",
        
        stockBotTitle: "Gerenciamento de almoxarifado",
        stockBotDesc: "O StockBot visa preencher lacunas em seu estoque, sem a existência de falhas utilizando um sistema prático.",
        
        lyriaTitle: "Assistente comunicativo com IA",
        lyriaDesc: "Lyria tem como objetivo facilitar o cotidiano, com chatbot e robô capazes de adotar diferentes personalidades.",
        
        communityTitle: "Rede Social do SENAI",
        communityDesc: "Plataforma para conectar alunos e projetos em um ambiente inovador.",
        
        lingoLensTitle: "Tradutor de Libras inteligente",
        lingoLensDesc: "Tradutor de Libras em tempo real que captura gestos e converte em texto.",
        
        faceShieldTitle: "Sistema de Segurança Inteligente",
        faceShieldDesc: "Solução de reconhecimento facial e alertas em tempo real."
    },
    en: {
        back: "Back",
        theme: "Theme",
        ourProjects: "Our Projects",
        working: "How it works",
        visitSite: "Visit site",
        
        // Footer
        footerCity: "SENAI São Carlos",
        footerText: "Reference center in technical and technological education.",
        footerSlogan: "Shaping the future of technology",
        footerDevTitle: "Developer",
        footerDevelopedBy: "Developed by",
        footerRights: "© 2025 SENAI São-Carlos - All rights reserved",

        // Títulos e Descrições dos Projetos (EN)
        controlTechTitle: "Inventory Management",
        controlTechDesc: "Development of a complete automation system for industrial process control, using IoT and smart sensors for production optimization.",
        
        ioTurnTitle: "Your operation smarter",
        ioTurnDesc: "Robust IoT ecosystem using LoRa communication for data collection and Artificial Intelligence algorithms.",
        
        stockBotTitle: "Warehouse Management",
        stockBotDesc: "StockBot aims to fill gaps in your stock without failures, using a practical system.",
        
        lyriaTitle: "Communicative AI Assistant",
        lyriaDesc: "Lyria aims to facilitate daily life, with a chatbot and robot capable of adopting different personalities.",
        
        communityTitle: "SENAI Social Network",
        communityDesc: "Platform to connect students and projects in an innovative environment.",
        
        lingoLensTitle: "Smart Sign Language Translator",
        lingoLensDesc: "Real-time Sign Language translator that captures gestures and converts them into text.",
        
        faceShieldTitle: "Smart Security System",
        faceShieldDesc: "Facial recognition solution and real-time alerts."
    }
};

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const span = element.querySelector('span');
            if (span) {
                span.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    const langBtn = document.getElementById('current-lang');
    if(langBtn) langBtn.textContent = lang.toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('language-toggle');
    let currentLang = 'pt';
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(currentLang);
        });
    }
});
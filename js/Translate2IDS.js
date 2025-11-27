const translations = {
    pt: {
        back: "Voltar",
        theme: "Tema",
        ourProjects: "Projetos 2IDS",
        working: "Funcionamento",
        commercial: "Comercial",
        visitSite: "Visitar site",
        
        // Grupos
        group1: "Grupo 1",
        group2: "Grupo 2",
        group3: "Grupo 3",
        group4: "Grupo 4",
        group5: "Grupo 5",
        group6: "Grupo 6",
        group7: "Grupo 7",

        // Footer
        footerCity: "SENAI São Carlos",
        footerText: "Centro de referência em formação técnica e tecnológica.",
        footerSlogan: "Formando o futuro da tecnologia",
        footerDevTitle: "Desenvolvedor",
        footerDevelopedBy: "Desenvolvido por",
        footerRights: "© 2025 SENAI São-Carlos - Todos os direitos reservados",

        // Títulos e Descrições dos Projetos (2IDS)
        ids_p1_title: "Sistema de Automação Industrial",
        ids_p1_desc: "Desenvolvimento de um sistema completo de automação para controle de processos industriais, utilizando IoT e sensores inteligentes para otimização de produção.",
        
        ids_p2_title: "Robô Autônomo de Navegação",
        ids_p2_desc: "Criação de um robô capaz de navegar autonomamente em ambientes internos, utilizando visão computacional e algoritmos de inteligência artificial.",
        
        ids_p3_title: "Plataforma de Monitoramento Ambiental",
        ids_p3_desc: "Sistema web e mobile para monitoramento em tempo real de parâmetros ambientais, auxiliando na gestão sustentável de recursos naturais.",
        
        ids_p4_title: "Aplicativo de Gestão Educacional",
        ids_p4_desc: "Desenvolvimento de uma plataforma completa para gestão escolar, integrando professores, alunos e responsáveis em um ambiente digital colaborativo.",
        
        ids_p5_title: "Sistema de Energia Renovável",
        ids_p5_desc: "Projeto de implementação de um sistema híbrido de energia solar e eólica, com monitoramento inteligente e otimização de consumo energético.",
        
        ids_p6_title: "Impressora 3D de Baixo Custo",
        ids_p6_desc: "Desenvolvimento de uma impressora 3D acessível e eficiente, democratizando o acesso à tecnologia de fabricação digital.",
        
        ids_p7_title: "Sistema de Segurança Inteligente",
        ids_p7_desc: "Solução completa de segurança utilizando reconhecimento facial, alertas em tempo real e integração com dispositivos móveis para proteção residencial."
    },
    en: {
        back: "Back",
        theme: "Theme",
        ourProjects: "2IDS Projects",
        working: "How it works",
        commercial: "Commercial",
        visitSite: "Visit site",

        // Groups
        group1: "Group 1",
        group2: "Group 2",
        group3: "Group 3",
        group4: "Group 4",
        group5: "Group 5",
        group6: "Group 6",
        group7: "Group 7",
        
        // Footer
        footerCity: "SENAI São Carlos",
        footerText: "Reference center in technical and technological education.",
        footerSlogan: "Shaping the future of technology",
        footerDevTitle: "Developer",
        footerDevelopedBy: "Developed by",
        footerRights: "© 2025 SENAI São-Carlos - All rights reserved",

        // Títulos e Descrições dos Projetos (EN)
        ids_p1_title: "Industrial Automation System",
        ids_p1_desc: "Development of a complete automation system for industrial process control, using IoT and smart sensors for production optimization.",
        
        ids_p2_title: "Autonomous Navigation Robot",
        ids_p2_desc: "Creation of a robot capable of autonomous navigation in indoor environments, using computer vision and artificial intelligence algorithms.",
        
        ids_p3_title: "Environmental Monitoring Platform",
        ids_p3_desc: "Web and mobile system for real-time monitoring of environmental parameters, assisting in the sustainable management of natural resources.",
        
        ids_p4_title: "Educational Management App",
        ids_p4_desc: "Development of a complete platform for school management, integrating teachers, students, and guardians in a collaborative digital environment.",
        
        ids_p5_title: "Renewable Energy System",
        ids_p5_desc: "Implementation project of a hybrid solar and wind energy system, with smart monitoring and energy consumption optimization.",
        
        ids_p6_title: "Low-Cost 3D Printer",
        ids_p6_desc: "Development of an accessible and efficient 3D printer, democratizing access to digital manufacturing technology.",
        
        ids_p7_title: "Smart Security System",
        ids_p7_desc: "Complete security solution using facial recognition, real-time alerts, and integration with mobile devices for residential protection."
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
const translations = {
    pt: {
        back: "Voltar",
        theme: "Tema",
        ourProjects: "Projetos 2IMEC",
        working: "Funcionamento",
        visitSite: "Visitar site",
        
        // Footer
        footerCity: "SENAI São Carlos",
        footerText: "Centro de referência em formação técnica e tecnológica.",
        footerSlogan: "Formando o futuro da tecnologia",
        footerDevTitle: "Desenvolvedor",
        footerDevelopedBy: "Desenvolvido por",
        footerRights: "© 2025 SENAI São-Carlos - Todos os direitos reservados",

        // Títulos e Descrições dos Projetos (2IMEC)
        mec_p1_title: "Robô Móvel Autônomo",
        mec_p1_desc: "Plataforma robótica móvel com sistema de navegação autônoma utilizando sensores ultrassônicos, LIDAR e algoritmos de mapeamento SLAM.",
        
        mec_p2_title: "Sistema Hidráulico Automatizado",
        mec_p2_desc: "Bancada didática de sistema hidráulico com controle eletrônico de pressão e vazão, simulando operações industriais.",
        
        mec_p3_title: "Drone para Inspeção",
        mec_p3_desc: "Drone equipado com câmera térmica e sensores para inspeção de torres e estruturas de difícil acesso.",
        
        mec_p4_title: "Impressora 3D Inteligente",
        mec_p4_desc: "Impressora 3D FDM customizada com sistema de auto-nivelamento e sensores de filamento via IoT.",
        
        mec_p5_title: "Sistema de Monitoramento Térmico",
        mec_p5_desc: "Rede de sensores térmicos para monitoramento contínuo de temperatura em processos industriais.",
        
        mec_p6_title: "AGV Industrial",
        mec_p6_desc: "Veículo de transporte autônomo para movimentação de materiais utilizando navegação por fita magnética.",
        
        mec_p7_title: "Célula Robotizada",
        mec_p7_desc: "Célula de manufatura integrada com braço robótico e sistema de visão computacional.",
        
        mec_p8_title: "Seletora de Brocas",
        mec_p8_desc: "Seletora de brocas automatizada que organiza o ambiente de trabalho e controla dados.",
        
        mec_p9_title: "Desenho com IA",
        mec_p9_desc: "Mesa cartesiana de baixo custo controlada por IA para desenhos técnicos e escritas com precisão.",
        
        mec_p10_title: "Braço Robótico",
        mec_p10_desc: "Braço robótico em menor escala para soluções práticas e aulas dinâmicas.",
        
        mec_p11_title: "CNC Arduino",
        mec_p11_desc: "Fresadora CNC de 3 eixos controlada por GRBL e Arduino para usinagem em madeira, plástico e alumínio.",
        
        mec_p12_title: "Visão Computacional",
        mec_p12_desc: "Visão computacional para organização precisa e eficiente com qualidade garantida.",
        
        mec_p13_title: "Sistema IoT",
        mec_p13_desc: "Monitoramento em tempo real de temperatura, umidade e vibração via IoT."
    },
    en: {
        back: "Back",
        theme: "Theme",
        ourProjects: "2IMEC Projects",
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
        mec_p1_title: "Autonomous Mobile Robot",
        mec_p1_desc: "Mobile robotic platform with autonomous navigation system using ultrasonic sensors, LIDAR, and SLAM mapping algorithms.",
        
        mec_p2_title: "Automated Hydraulic System",
        mec_p2_desc: "Hydraulic system didactic bench with electronic pressure and flow control, simulating industrial operations.",
        
        mec_p3_title: "Inspection Drone",
        mec_p3_desc: "Drone equipped with thermal camera and sensors for inspection of towers and hard-to-access structures.",
        
        mec_p4_title: "Smart 3D Printer",
        mec_p4_desc: "Custom FDM 3D printer with auto-leveling system and IoT filament sensors.",
        
        mec_p5_title: "Thermal Monitoring System",
        mec_p5_desc: "Thermal sensor network for continuous temperature monitoring in industrial processes.",
        
        mec_p6_title: "Industrial AGV",
        mec_p6_desc: "Autonomous transport vehicle for material handling using magnetic tape navigation.",
        
        mec_p7_title: "Robotic Cell",
        mec_p7_desc: "Integrated manufacturing cell with robotic arm and computer vision system.",
        
        mec_p8_title: "Drill Selector",
        mec_p8_desc: "Automated drill selector that organizes the workspace and controls data.",
        
        mec_p9_title: "AI Drawing",
        mec_p9_desc: "Low-cost Cartesian table controlled by AI for precise technical drawings and writing.",
        
        mec_p10_title: "Robotic Arm",
        mec_p10_desc: "Small-scale robotic arm for practical solutions and dynamic classes.",
        
        mec_p11_title: "Arduino CNC",
        mec_p11_desc: "3-axis CNC milling machine controlled by GRBL and Arduino for machining wood, plastic, and aluminum.",
        
        mec_p12_title: "Computer Vision",
        mec_p12_desc: "Computer vision for precise and efficient organization with guaranteed quality.",
        
        mec_p13_title: "IoT System",
        mec_p13_desc: "Real-time monitoring of temperature, humidity, and vibration via IoT."
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
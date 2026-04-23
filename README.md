# EduMoz — Sistema de Administração Educacional
### Ministério da Educação e Cultura · República de Moçambique

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Activo-006B3C)](https://SEU-USUARIO.github.io/edumoz)
[![Versão](https://img.shields.io/badge/Versão-1.0.0-FCDD09)](.)
[![Língua](https://img.shields.io/badge/Língua-Português-CC0000)](.)

---

## 🌍 Sobre o Projecto

**EduMoz** é uma plataforma integrada de administração educacional desenvolvida para o **Ministério da Educação e Cultura (MEC) de Moçambique**. O sistema centraliza dados de matrículas, desempenho académico, evasão escolar e recursos humanos para todas as 11 províncias do país.

### 🔗 Demo ao Vivo
👉 **https://SEU-USUARIO.github.io/edumoz**

---

## 📦 Estrutura do Projecto

```
edumoz/
├── index.html              # Página institucional (landing page)
├── pages/
│   ├── dashboard.html      # Dashboard interactivo com KPIs e gráficos
│   └── ...                 # Futuras páginas (escolas, alunos, relatórios)
├── css/                    # Estilos globais (futuro)
├── js/                     # Scripts globais (futuro)
├── assets/                 # Imagens e recursos
├── .github/
│   └── workflows/
│       └── deploy.yml      # Deploy automático para GitHub Pages
└── README.md
```

---

## 🚀 Como Publicar no GitHub (Passo a Passo)

### 1. Criar repositório no GitHub

1. Acede a [github.com](https://github.com) e faz login
2. Clica em **"New repository"**
3. Nome: `edumoz` (ou outro à tua escolha)
4. Selecciona **Public**
5. Clica em **"Create repository"**

### 2. Enviar o código

```bash
# Na pasta do projecto:
git init
git add .
git commit -m "🚀 Lançamento inicial EduMoz v1.0"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/edumoz.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. No repositório, vai a **Settings → Pages**
2. Em **Source**, selecciona **"GitHub Actions"**
3. O site fica disponível em: `https://SEU-USUARIO.github.io/edumoz`

> **Nota:** O ficheiro `.github/workflows/deploy.yml` já está configurado para deploy automático a cada `git push`.

---

## 📊 Módulos Incluídos

| Módulo | Estado | Descrição |
|--------|--------|-----------|
| **Landing Page Institucional** | ✅ Completo | Página de apresentação para o MEC |
| **Dashboard Nacional** | ✅ Completo | KPIs, gráficos interactivos, tabela por província |
| **Estatísticas de Matrículas** | ✅ Completo | Evolução temporal, género, distribuição |
| **Taxa de Aprovação** | ✅ Completo | Por nível de ensino e província |
| **Monitorização de Evasão** | ✅ Completo | Por província, causas e tendências |
| **Ratio Professor/Aluno** | ✅ Completo | Comparativo por província |
| Gestão de Escolas | 🔄 Em desenvolvimento | Cadastro, distritos, províncias |
| Gestão de Alunos | 🔄 Em desenvolvimento | Matrículas, histórico, boletins |
| Gestão de Professores | 🔄 Em desenvolvimento | Qualificações, alocação |
| Notas e Avaliações | 🔄 Em desenvolvimento | Lançamento, médias, boletins |
| Frequência | 🔄 Em desenvolvimento | Registo de presenças |

---

## 🛠 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Gráficos**: [Chart.js 4.4](https://www.chartjs.org/)
- **Tipografia**: Google Fonts (Playfair Display + DM Sans)
- **Hospedagem**: GitHub Pages (gratuito, sempre disponível)
- **CI/CD**: GitHub Actions (deploy automático)

---

## 🔒 Perfis de Acesso

| Perfil | Acesso |
|--------|--------|
| **Admin MEC** | Total — todos os dados nacionais |
| **Coordenador Regional** | Dados da sua província/distrito |
| **Diretor de Escola** | Dados da sua escola |
| **Professor** | Apenas as suas turmas e disciplinas |

---

## 📋 Requisitos Técnicos

- ✅ Interface em Português
- ✅ Gráficos interactivos com Chart.js
- ✅ Filtros por ano lectivo
- ✅ Tabela pesquisável por província
- ✅ Design responsivo (mobile/desktop)
- ✅ Compatível com todos os navegadores modernos
- 🔄 Exportação PDF/Excel (em desenvolvimento)
- 🔄 Modo offline (em desenvolvimento)
- 🔄 Backend/API (próxima fase)

---

## 📞 Contacto

Para integração com o MEC ou mais informações sobre o projecto:

- 📧 **admin@edumoz.gov.mz** *(a activar)*
- 🌐 Ministério da Educação e Cultura — República de Moçambique

---

*Desenvolvido com 🇲🇿 para Moçambique*

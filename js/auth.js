// ============================================================
// EduMoz — Sistema de Autenticação
// Inclui este ficheiro em todas as páginas protegidas:
// <script src="../js/auth.js"></script>
// ============================================================

var EduMozAuth = (function() {

  // Verifica se o utilizador está autenticado
  function verificar() {
    var raw = sessionStorage.getItem('edumoz_user');
    if (!raw) {
      window.location.href = 'login.html';
      return null;
    }
    try {
      var user = JSON.parse(raw);
      if (!user.loggedIn) {
        window.location.href = 'login.html';
        return null;
      }
      return user;
    } catch(e) {
      window.location.href = 'login.html';
      return null;
    }
  }

  // Obter utilizador actual
  function getUser() {
    try {
      return JSON.parse(sessionStorage.getItem('edumoz_user'));
    } catch(e) {
      return null;
    }
  }

  // Logout
  function logout() {
    sessionStorage.removeItem('edumoz_user');
    window.location.href = 'login.html';
  }

  // Verificar se tem permissão para um perfil
  function temPermissao(perfisPermitidos) {
    var user = getUser();
    if (!user) return false;
    return perfisPermitidos.indexOf(user.perfil) !== -1;
  }

  // Injectar barra de utilizador no topo do sidebar
  function injectarUser() {
    var user = getUser();
    if (!user) return;

    // Atualiza o nome e role no sidebar
    var nomeEl = document.querySelector('.sb-user-name');
    var roleEl = document.querySelector('.sb-user-role');
    var avatarEl = document.querySelector('.sb-avatar');

    var roles = {
      admin:       'Administrador Nacional',
      coordenador: 'Coordenador Regional',
      diretor:     'Director de Escola',
      professor:   'Professor'
    };

    if (nomeEl) nomeEl.textContent = user.nome || user.email;
    if (roleEl) roleEl.textContent = roles[user.perfil] || user.perfil;
    if (avatarEl) {
      var iniciais = (user.nome || user.email).split(' ').map(function(p) { return p[0]; }).join('').substring(0,2).toUpperCase();
      avatarEl.textContent = iniciais;
    }

    // Adiciona botão de logout
    var sbUser = document.querySelector('.sb-user');
    if (sbUser) {
      var logoutBtn = document.createElement('button');
      logoutBtn.innerHTML = '🚪';
      logoutBtn.title = 'Sair do sistema';
      logoutBtn.style.cssText = 'margin-left:auto;background:none;border:none;cursor:pointer;font-size:16px;opacity:0.4;transition:opacity .15s;';
      logoutBtn.onmouseover = function() { this.style.opacity = '1'; };
      logoutBtn.onmouseout  = function() { this.style.opacity = '0.4'; };
      logoutBtn.onclick = function() {
        if (confirm('Tem a certeza que quer sair do sistema?')) logout();
      };
      sbUser.appendChild(logoutBtn);
    }

    // Esconde itens do menu baseado no perfil
    aplicarPermissoes(user.perfil);
  }

  // Esconde menus consoante o perfil
  function aplicarPermissoes(perfil) {
    // Professores não vêem relatórios nacionais
    if (perfil === 'professor') {
      document.querySelectorAll('[data-perfil-min="coordenador"]').forEach(function(el) {
        el.style.display = 'none';
      });
    }
    // Directores não vêem dados nacionais
    if (perfil === 'diretor') {
      document.querySelectorAll('[data-perfil-min="coordenador"]').forEach(function(el) {
        el.style.display = 'none';
      });
    }
  }

  return { verificar, getUser, logout, temPermissao, injectarUser };
})();

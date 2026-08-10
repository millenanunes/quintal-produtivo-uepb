const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function mostrarSlide(indice) {

  // Remove o slide ativo e esconde todas as frases
  slides.forEach(slide => {
    slide.classList.remove("active");

    const overlay = slide.querySelector(".overlay");

    if (overlay) {
      overlay.classList.remove("show");
    }
  });

  // Mostra o slide
  slides[indice].classList.add("active");

  // Espera 1 segundo para mostrar a frase
  setTimeout(() => {

    const overlay = slides[indice].querySelector(".overlay");

    if (overlay) {
      overlay.classList.add("show");
    }

  }, 5000);

}

function proximoSlide() {

  slideAtual++;

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  mostrarSlide(slideAtual);

}

// Mostra o primeiro slide
mostrarSlide(slideAtual);

// Troca de slide a cada 7 segundos
setInterval(proximoSlide, 7000);

// ===== MODAL DOS SETORES =====

const setorItens = document.querySelectorAll(".setor-item");
const modalSetor = document.getElementById("modalSetor");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const modalFechar = document.getElementById("modalFechar");

setorItens.forEach(item => {
  item.addEventListener("click", () => abrirModalSetor(item));
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirModalSetor(item);
    }
  });
});

function abrirModalSetor(item) {
  const nome = item.getAttribute("data-nome");
  const texto = item.getAttribute("data-texto");

  modalTitulo.textContent = nome;
  modalTexto.textContent = texto;
  modalSetor.classList.add("ativo");
}

function fecharModalSetor() {
  modalSetor.classList.remove("ativo");
}

modalFechar.addEventListener("click", fecharModalSetor);

// Fecha ao clicar fora da caixa branca (no fundo escuro)
modalSetor.addEventListener("click", (e) => {
  if (e.target === modalSetor) {
    fecharModalSetor();
  }
});

// Fecha com a tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    fecharModalSetor();
  }
});

/* ===============
   DADOS DA EQUIPE
   =============== */
const equipe = [
  {
    nome: "Sérgio De Faria Lopes",
    cargo: "Professor",
    foto: "img/Menu-Equipe/sergio.jpg",
    bio: "Professor do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Coordenador E-mail Institucional: sergiolopes@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/7106113858621739"
  },
  {
    nome: "Elisabeth Emília Tölke",
    cargo: "Professora",
    foto: "img/Menu-Equipe/elizabete.jpg",
    bio: "Professora do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaboradora E-mail Institucional: elisabeth.tolke@gmail.com",
    lattes: "http://lattes.cnpq.br/3968869624321191"
  },
  {
    nome: "Simão Lindoso de Souza",
    cargo: "Professor",
    foto: "img/Menu-Equipe/simao.jpg",
    bio: "Professor do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaborador E-mail Institucional: simao@ccbs.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/5989971498245736"
  },
  {
    nome: "Adrianne Teixeira Barros",
    cargo: "Professora",
    foto: "img/Menu-Equipe/adriane.jpg",
    bio: "Professora do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaboradora E-mail Institucional: adribarrosbio@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/1941254548684801"
  },
  {
    nome: "Edson G. de Moura Júnior",
    cargo: "Professor",
    foto: "img/Menu-Equipe/edson.jpg",
    bio: "Professor do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaborador E-mail Institucional: moura.junior@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/0000000000003"
  },
  {
    nome: "Márcia Adelino da Silva Dias",
    cargo: "Professora",
    foto: "img/Menu-Equipe/marcia.jpg",
    bio: "Professora do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaboradora E-mail Institucional: marcia@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/9674492903954108"
  },
  {
    nome: "Délcio de Castro Felismino",
    cargo: "Professor",
    foto: "img/Menu-Equipe/delcio.jpg",
    bio: "Professor do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaborador E-mail Institucional: delcio@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/3053523117942610"
  },
  {
    nome: "Élida Barbosa Corrêa",
    cargo: "Professora",
    foto: "img/Menu-Equipe/elida.jpg",
    bio: "Professora do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaboradora E-mail Institucional: elida@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/3308762941982851"
  },
  {
    nome: "Ana Paula Lacchia",
    cargo: "Professora",
    foto: "img/Menu-Equipe/ana-paula.jpg",
    bio: "Professora do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaboradora E-mail Institucional: anapaulalacchia@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/1529549740698780"
  },

  {
    nome: "Antônio Augusto P. de Sousa",
    cargo: "Professor",
    foto: "img/Menu-Equipe/antonio.jpg",
    bio: "Professor do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Colaborador E-mail Institucional: antonioaugusto@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/7565157858730632"
  },

  {
    nome: "Fernanda Kalina Monteiro",
    cargo: "Professora",
    foto: "img/Menu-Equipe/fernanda.jpg",
    bio: "Professora do Departamento de Biologia, Centro de Ciências Biológicas e da Saúde - UEPB Função no projeto: Coordenadora do Setor Casa de Sementes",
    lattes: "http://lattes.cnpq.br/0930461931383150"
  },

  {
    nome: "Tito Matheus Trigueiro Matias",
    cargo: "Colaborador",
    foto: "img/Menu-Equipe/tito.jpg",
    bio: "Mestrando em Ciências Agrárias pela Universidade Estadual da Paraíba Função no projeto: Coordenador dos Setores Viveiro e Compostagem",
    lattes: "http://lattes.cnpq.br/2981479620530301"
  },

  {
    nome: "Thereza Vitória F. Silva",
    cargo: "Colaboradora",
    foto: "img/Menu-Equipe/thereza.jpg",
    bio: "Graduanda do curso de Licenciatura em Ciências Biológicas pela Universidade Estadual da Paraíba Função no projeto: Coordenadora do Setor Mandala",
    lattes: "http://lattes.cnpq.br/1590035689533841"
  },

  {
    nome: "Igor Bruny N. Sá",
    cargo: "Colaborador",
    foto: "img/Menu-Equipe/igor.jpg",
    bio: "Graduando do curso de Licenciatura em Ciências Biológicas pela Universidade Estadual da Paraíba Função no projeto: Coordenador do Setor SAF",
    lattes: "http://lattes.cnpq.br/2822186186676166"
  },
  {
    nome: "Jasmine Asnathe Rodrigues",
    cargo: "Colaboradora",
    foto: "img/Menu-Equipe/jasmine.jpg",
    bio: "Doutoranda do Programa de Pós-graduação de Ecologia e Conservação pela Universidade Estadual da Paraíba Função no projeto: Coordenadora do Setor Pomar",
    lattes: "http://lattes.cnpq.br/8436662351338446"
  },
  {
    nome: "Rômulo Pereira L. de Oliveira",
    cargo: "Colaborador",
    foto: "img/Menu-Equipe/romulo.jpg",
    bio: "Biólogo pela Universidade Estadual da Paraíba Função no projeto: Coordenador do Setor Meliponário",
    lattes: "http://lattes.cnpq.br/0128966804418029"
  },

  {
    nome: "Heloísa Almeida Costa",
    cargo: "Colaboradora",
    foto: "img/Menu-Equipe/heloisa.jpg",
    bio: "Bióloga pela Universidade Estadual da Paraíba Função no projeto: Coordenadora de Mídias",
    lattes: "http://lattes.cnpq.br/8322208337583806"
  },
  {
    nome: "Vinícius de Souza Teixeira",
    cargo: "Colaborador",
    foto: "img/Menu-Equipe/vinicius.jpg",
    bio: "Mestrando pelo Programa de Pós-Graduação de Ciências Agrárias pela Universidade Estadual da Paraíba Função no projeto: Coordenador do Setor Pedagógico",
    lattes: "http://lattes.cnpq.br/1152550031869385"
  },
  {
    nome: "Millena Nunes Isidro",
    cargo: "Colaboradora",
    foto: "img/Menu-Equipe/millena.jpg",
    bio: "Bióloga pela Universidade Estadual da Paraíba Função no projeto: Coordenadora Administrativa",
    lattes: "http://lattes.cnpq.br/8579769914802490"
  },
  {
    nome: "Luiz Teodoro C. do Prado",
    cargo: "Colaborador",
    foto: "img/Menu-Equipe/luis.jpg",
    bio: "Agroecólogo pela Universidade Estadual da Paraíba Função no projeto: Coordenador do Setor Horta",
    lattes: "http://lattes.cnpq.br/0000000000003"
  },

];

const track = document.getElementById('track');
const indicadoresEl = document.getElementById('indicadores');
let ativo = 2;

function criarCards() {
  track.innerHTML = '';
  equipe.forEach((pessoa, i) => {
    const el = document.createElement('div');
    el.className = 'membro';
    el.dataset.index = i;
    el.innerHTML = `
      <div class="foto-container">
        <img src="${pessoa.foto}" alt="Foto de ${pessoa.nome}">
      </div>
      <div class="nome">${pessoa.nome}</div>
      <div class="cargo">${pessoa.cargo}</div>
`;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `Ver perfil de ${pessoa.nome}`);
    el.addEventListener('click', () => onClickMembro(i));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClickMembro(i);
      }
    });
    track.appendChild(el);
  });

  indicadoresEl.innerHTML = '';
  equipe.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Ir para ' + equipe[i].nome);
    dot.addEventListener('click', () => { ativo = i; render(); });
    indicadoresEl.appendChild(dot);
  });
}

function distanciaCircular(i, centro, total) {
  let d = i - centro;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

function render() {
  const total = equipe.length;
  const cards = track.querySelectorAll('.membro');
  const espacamento = 220; // distância horizontal entre cada posição

  cards.forEach((card, i) => {
    const dist = distanciaCircular(i, ativo, total);
    const abs = Math.abs(dist);

    card.classList.remove('ativo', 'prox-1', 'prox-2', 'oculto');

    if (abs === 0) card.classList.add('ativo');
    else if (abs === 1) card.classList.add('prox-1');
    else if (abs === 2) card.classList.add('prox-2');
    else card.classList.add('oculto');

    const x = dist * espacamento;
    card.style.transform = `translateX(${x}px) translateX(-50%)`;
  });

  const dots = indicadoresEl.querySelectorAll('button');
  dots.forEach((d, i) => d.classList.toggle('ativo', i === ativo));
}

function mover(delta) {
  ativo = (ativo + delta + equipe.length) % equipe.length;
  render();
}

function onClickMembro(i) {
  abrirModal(i);
}

// ---------- Modal ----------
const modalOverlay = document.getElementById('modalOverlay');
const modalFoto = document.getElementById('modalFoto');
const modalNome = document.getElementById('modalNome');
const modalCargo = document.getElementById('modalCargo');
const modalBio = document.getElementById('modalBio');
const modalLattes = document.getElementById('modalLattes');

function abrirModal(i) {
  const pessoa = equipe[i];
  modalFoto.src = pessoa.foto;
  modalFoto.alt = 'Foto de ' + pessoa.nome;
  modalNome.textContent = pessoa.nome;
  modalCargo.textContent = pessoa.cargo;

  const partesBio = pessoa.bio.split(/(?=Função no projeto:)|(?=E-mail Institucional:)/);
  modalBio.innerHTML = ''; // limpa o conteúdo anterior
  partesBio.forEach(parte => {
    const p = document.createElement('p');
    p.textContent = parte.trim();
    modalBio.appendChild(p);
  });

  modalLattes.href = pessoa.lattes;
  modalOverlay.classList.add('aberto');
}

function fecharModal() {
  modalOverlay.classList.remove('aberto');
}

document.getElementById('modalFecharEquipe').addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) fecharModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});

document.querySelector('.seta-prev').addEventListener('click', () => {
  mover(-1);
  reiniciarAutoplay();
});
document.querySelector('.seta-next').addEventListener('click', () => {
  mover(1);
  reiniciarAutoplay();
});

criarCards();
render();

// ---------- Autoplay ----------
const INTERVALO_AUTOPLAY = 4000; // tempo em milissegundos (4000 = 4 segundos)
let autoplayId = null;

function iniciarAutoplay() {
  autoplayId = setInterval(() => mover(1), INTERVALO_AUTOPLAY);
}

function pausarAutoplay() {
  clearInterval(autoplayId);
}

function reiniciarAutoplay() {
  pausarAutoplay();
  iniciarAutoplay();
}

iniciarAutoplay();

// ===== Troca de conteúdo dentro da seção Eventos =====

(function () {
  const evViews = document.querySelectorAll('#eventos .ev-view');
  const hive = document.querySelector('#eventos .ev-hive-stage');

  function showEvViewFromHash() {
    const hash = (window.location.hash || '').replace('#', '');
    const map = ['minicursos', 'visitas-guiadas', 'aulas-praticas', 'eventos-cientificos'];
    const isCategoria = map.includes(hash);
    const id = isCategoria ? hash : 'home';

    evViews.forEach(el => {
      el.hidden = el.id !== 'ev-view-' + id;
    });

    if (hive) hive.hidden = isCategoria;
  }

  window.addEventListener('hashchange', showEvViewFromHash);
  showEvViewFromHash();
})();

function copiarPix() {
  const chave = document.getElementById('chave-pix').innerText;
  navigator.clipboard.writeText(chave).then(() => {
    const btn = document.querySelector('.apoie-pix-btn');
    const textoOriginal = btn.innerText;
    btn.innerText = 'Copiado!';
    setTimeout(() => { btn.innerText = textoOriginal; }, 1800);
  });
}

const secoes = document.querySelectorAll('section[id]');
const linksMenu = document.querySelectorAll('nav a');
const secoesVisiveis = new Map(); // id -> posição do topo da seção na tela

const observerMenu = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (entry.isIntersecting) {
      secoesVisiveis.set(id, entry.boundingClientRect.top);
    } else {
      secoesVisiveis.delete(id);
    }
  });

  if (secoesVisiveis.size === 0) return;

  // escolhe a seção mais próxima do topo da faixa de detecção
  const idAtivo = [...secoesVisiveis.entries()]
    .sort((a, b) => a[1] - b[1])[0][0];

  linksMenu.forEach(link => {
    const estaAtivo = link.getAttribute('href') === `#${idAtivo}`;
    link.classList.toggle('ativo', estaAtivo);
    if (estaAtivo) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });

}, {
    root: null,
      rootMargin: '-130px 0px -60% 0px', // topo: compensa o header fixo (130px, igual ao scroll-margin-top); base: encolhe a área de detecção
        threshold: 0
  });

secoes.forEach(secao => observerMenu.observe(secao));


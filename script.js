  const EMAIL_EQUIPE = "equipe@cs.cscruzeirodosul.edu.br"; // coloque o e-mail da consultoria, se houver
    const SEDE = [-23.5598819, -46.658073];

    const PONTOS = [
      {
        id: "sede",
        nome: "Sede — Universidade Cruzeiro do Sul, Campus Paulista",
        tipo: "sede",
        regiao: "centro",
        lat: -23.5598819,
        lng: -46.658073,
        materiais: ["papel", "plastico", "madeira"],
        horario: "Atendimento acadêmico do projeto",
        endereco: "Av. Paulista, 1415, Bela Vista, São Paulo/SP, CEP 01311-925",
        contato: "",
        fonte: "Endereço oficial do campus"
      },
      {
        id: "coopamare",
        nome: "Coopamare — cooperativa de catadores",
        tipo: "cooperativa",
        regiao: "centro",
        lat: -23.5548406,
        lng: -46.6812023,
        materiais: ["papel", "plastico", "vidro", "metal"],
        horario: "Confirmar no local",
        endereco: "Rua Galeno de Almeida, 659, Pinheiros (sob o Viaduto Paulo VI)",
        contato: "(11) 3064-3976",
        fonte: "Endereço público da cooperativa",
        parceiro: true
      },
      {
        id: "paissandu",
        nome: "Largo do Paissandu — referência da Central de Reciclagem da Virada Cultural 2026",
        tipo: "cultura",
        regiao: "centro",
        lat: -23.5430259,
        lng: -46.6381925,
        materiais: ["papel", "plastico", "metal"],
        horario: "Pontual, em eventos",
        endereco: "Largo do Paissandu, República, São Paulo",
        contato: "",
        fonte: "Pesquisa: Virada Cultural 2026"
      },
      {
        id: "eco-santa-cruz",
        nome: "Ecoponto Santa Cruz",
        tipo: "ecoponto",
        regiao: "centro",
        lat: -23.5969317,
        lng: -46.6319111,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Rua Santa Cruz, 1452 (baixo do Viaduto Santa Cruz), Vila Mariana",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-taylor",
        nome: "Ecoponto Comandante Taylor",
        tipo: "ecoponto",
        regiao: "centro",
        lat: -23.600172,
        lng: -46.6010847,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Rua Comandante Taylor, 690 (baixo do viaduto), Ipiranga",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-guarani",
        nome: "Ecoponto Parque Guarani",
        tipo: "ecoponto",
        regiao: "leste",
        lat: -23.5202836,
        lng: -46.4636235,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Rua Manuel Alves da Rocha, 584, Parque Guarani, Itaquera",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-carmo",
        nome: "Ecoponto Parque do Carmo",
        tipo: "ecoponto",
        regiao: "leste",
        lat: -23.5786771,
        lng: -46.4841818,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Rua Machado Nunes, 95, Jardim Nossa Senhora do Carmo",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-valle",
        nome: "Ecoponto Oswaldo Valle Cordeiro",
        tipo: "ecoponto",
        regiao: "leste",
        lat: -23.5606752,
        lng: -46.4836135,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal", "gesso"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Av. Osvaldo Valle Cordeiro, 405, Jardim Brasília (Zona Leste)",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-paraisopolis",
        nome: "Ecoponto Paraisópolis",
        tipo: "ecoponto",
        regiao: "sul",
        lat: -23.6225259,
        lng: -46.7250662,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Rua Irapará, 73, Paraíso do Morumbi / Paraisópolis",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-santo-dias",
        nome: "Ecoponto Santo Dias",
        tipo: "ecoponto",
        regiao: "sul",
        lat: -23.6647123,
        lng: -46.7746298,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Travessa Rosifloras, 301, Capão Redondo",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      },
      {
        id: "eco-jabaquara",
        nome: "Ecoponto Jabaquara",
        tipo: "ecoponto",
        regiao: "sul",
        lat: -23.6536383,
        lng: -46.6502123,
        materiais: ["entulho", "madeira", "papel", "plastico", "metal", "gesso"],
        horario: "Ter–sáb 6h–22h · Dom 6h–18h (confirmar)",
        endereco: "Rua Jupatis, 140, Vila Mira, Jabaquara",
        contato: "",
        fonte: "Prefeitura de São Paulo"
      }
    ];

    const cores = {
      sede: "#214c2c",
      ecoponto: "#3b7a49",
      cooperativa: "#c9a227",
      cultura: "#c24e1f",
      sugerido: "#5b6b8a"
    };

    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }));

    const sugeridos = JSON.parse(localStorage.getItem("pontosSugeridos") || "[]");
    const mapa = L.map("mapa-leaflet").setView(SEDE, 12);
    
    // CORREÇÃO DEFINITIVA APLICADA: Utilização da camada Wikimedia Maps (sem exigência de chave de API)
    L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & Wikimedia'
    }).addTo(mapa);

    const camada = L.layerGroup().addTo(mapa);
    const marcadores = [];

    function icone(tipo) {
      return L.divIcon({
        className: "",
        html: `<span style="display:block;width:16px;height:16px;border-radius:50%;background:${cores[tipo] || "#214c2c"};border:2px solid #fff;box-shadow:0 0 0 2px ${cores[tipo] || "#214c2c"}"></span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });
    }

    function todosPontos() {
      return PONTOS.concat(sugeridos);
    }

    function filtrados() {
      const r = document.getElementById("filtro-regiao").value;
      const t = document.getElementById("filtro-tipo").value;
      const m = document.getElementById("filtro-material").value;
      return todosPontos().filter((p) => {
        if (r !== "todas" && p.regiao !== r) return false;
        if (t !== "todos" && p.tipo !== t) return false;
        if (m !== "todos" && !(p.materiais || []).includes(m)) return false;
        return true;
      });
    }

    function popupHtml(p) {
      const selo = p.parceiro ? "<p><strong>Selo: parceiro do projeto</strong></p>" : "";
      return `<strong>${p.nome}</strong>
        <p>${p.endereco || ""}</p>
        <p>${(p.materiais || []).join(", ")}</p>
        <p>${p.horario || ""}</p>
        <p>${p.contato || ""}</p>
        <p><small>${p.fonte || ""}</small></p>${selo}`;
    }

    function renderMapa() {
      camada.clearLayers();
      marcadores.length = 0;
      const lista = document.getElementById("lista-pontos");
      lista.innerHTML = "";
      const pts = filtrados();
      pts.forEach((p) => {
        const mk = L.marker([p.lat, p.lng], { icon: icone(p.tipo) }).addTo(camada);
        mk.bindPopup(popupHtml(p));
        marcadores.push({ ponto: p, marker: mk });
        const b = document.createElement("button");
        b.className = "ponto-item";
        b.type = "button";
        b.textContent = p.nome;
        b.addEventListener("click", () => {
          mapa.setView([p.lat, p.lng], 16);
          mk.openPopup();
        });
        lista.appendChild(b);
      });
      if (!pts.length) {
        lista.innerHTML = "<p class='muted'>Nenhum ponto com esse filtro.</p>";
      }
    }

    document.getElementById("btn-filtrar").addEventListener("click", renderMapa);
    ["filtro-regiao", "filtro-tipo", "filtro-material"].forEach((id) => {
      document.getElementById(id).addEventListener("change", renderMapa);
    });
    renderMapa();
    function ajustarMapa() { mapa.invalidateSize(); }
    setTimeout(ajustarMapa, 300);
    window.addEventListener("resize", ajustarMapa);
    document.querySelectorAll('a[href="#mapa"]').forEach((a) => {
      a.addEventListener("click", () => setTimeout(ajustarMapa, 400));
    });

    document.getElementById("form-ponto").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const lat = parseFloat(fd.get("lat")) || SEDE[0] + (Math.random() - 0.5) * 0.02;
      const lng = parseFloat(fd.get("lng")) || SEDE[1] + (Math.random() - 0.5) * 0.02;
      sugeridos.push({
        id: "sug-" + Date.now(),
        nome: fd.get("nome"),
        tipo: "sugerido",
        regiao: "centro",
        lat, lng,
        materiais: ["papel", "plastico"],
        horario: "A confirmar",
        endereco: fd.get("endereco"),
        fonte: "Sugestão local (neste navegador)"
      });
      localStorage.setItem("pontosSugeridos", JSON.stringify(sugeridos));
      e.target.reset();
      renderMapa();
    });

    document.getElementById("form-consultoria").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const corpo = [
        "Pedido de consultoria circular",
        "Nome: " + fd.get("nome"),
        "Coletivo: " + fd.get("coletivo"),
        "Região: " + fd.get("regiao"),
        "Contato: " + fd.get("contato"),
        "Tipo: " + fd.get("tipo"),
        "Reuso: " + fd.get("reuso"),
        "Mensagem: " + fd.get("mensagem")
      ].join("\n");
      const destino = EMAIL_EQUIPE || "equipe@cs.cscruzeirodosul.edu.br";
      const url = "mailto:" + destino + "?subject=" + encodeURIComponent("Consultoria Circular — " + fd.get("coletivo")) + "&body=" + encodeURIComponent(corpo);
      window.location.href = url;
      const ok = document.getElementById("ok-consultoria");
      ok.style.display = "block";
    });
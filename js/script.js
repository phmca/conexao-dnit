(function() {
const rawData = [
  // ===== MAIO =====
  { municipio: 'Guaiúba', mes: 'Maio', data: '18/05/2026', participantes: 'Prof. Carlos Paiva', agentes: 0, alunos: 3953, professores: 216, escolas: 21, situacao: 'Convênio assinado', proxima: 'Implantação do programa' },
  { municipio: 'Pacatuba', mes: 'Maio', data: '18/05/2026', participantes: 'Prof. Elizânio Umbelino', agentes: 0, alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Pacajus', mes: 'Maio', data: '19/05/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  // ACARAPE - DUAS VISITAS SEPARADAS
  { municipio: 'Acarape', mes: 'Maio', data: '20/05/2026', participantes: 'Jonas Campelo', agentes: 0, alunos: 2337, professores: 160, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Acarape', mes: 'Maio', data: '28/05/2026', participantes: 'Jonas Campelo', agentes: 0, alunos: 2337, professores: 160, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  // BARREIRA - DUAS VISITAS SEPARADAS
  { municipio: 'Barreira', mes: 'Maio', data: '20/05/2026', participantes: 'Prof. Glória Maria e equipe pedagógica', agentes: 0, alunos: 3864, professores: 216, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Barreira', mes: 'Maio', data: '28/05/2026', participantes: 'Prof. Glória Maria e equipe pedagógica', agentes: 0, alunos: 3864, professores: 216, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Chorozinho', mes: 'Maio', data: '21/05/2026', participantes: 'Prefeita Célia Marinho, Prof. Lourdes e Nilo Vieira', agentes: 0, alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Baturité', mes: 'Maio', data: '21/05/2026', participantes: 'Prof. Lindomar Soares', agentes: 0, alunos: 6421, professores: 361, escolas: 30, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
  { municipio: 'Mulungu', mes: 'Maio', data: '21/05/2026', participantes: 'Michel Platini', agentes: 0, alunos: 1635, professores: 93, escolas: 8, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
  { municipio: 'Redenção', mes: 'Maio', data: '22/05/2026', participantes: 'Jane Jacaúna', agentes: 0, alunos: 5609, professores: 359, escolas: 25, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },

  // ===== JUNHO =====
  { municipio: 'Aratuba', mes: 'Junho', data: '11/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 4499, professores: 207, escolas: 13, situacao: 'Apresentação realizada', proxima: 'Aguardando assinatura do convênio' },
  { municipio: 'Mulungu', mes: 'Junho', data: '11/06/2026', participantes: 'Michel Platini', agentes: 0, alunos: 1635, professores: 93, escolas: 8, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Capistrano', mes: 'Junho', data: '11/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 2848, professores: 207, escolas: 14, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Capistrano', mes: 'Junho', data: '17/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 2848, professores: 207, escolas: 14, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Itapiúna', mes: 'Junho', data: '11/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 2902, professores: 202, escolas: 15, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Itapiúna', mes: 'Junho', data: '18/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 2902, professores: 202, escolas: 15, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Pacajus', mes: 'Junho', data: '12/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Barreira', mes: 'Junho', data: '19/06/2026', participantes: 'Prof. Alan Lucas de Oliveira', agentes: 0, alunos: 3864, professores: 216, escolas: 12, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Guaiúba', mes: 'Junho', data: '19/06/2026', participantes: 'Prof. Carlos Paiva', agentes: 0, alunos: 3953, professores: 216, escolas: 21, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Redenção', mes: 'Junho', data: '24/06/2026', participantes: 'Jane Jacaúna', agentes: 0, alunos: 5609, professores: 359, escolas: 25, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Pacatuba', mes: 'Junho', data: '24/06/2026', participantes: 'Prof. Elizânio Umbelino', agentes: 0, alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Pacoti', mes: 'Junho', data: '29/06/2026', participantes: 'Prof. Maraline Rocha', agentes: 0, alunos: 1585, professores: 144, escolas: 13, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },

  // ===== JULHO =====
  { municipio: 'Caucaia', mes: 'Julho', data: '06/07/2026', participantes: 'Secretário de Educação Daniel Costa', agentes: 0, alunos: 51000, professores: 5000, escolas: 186, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Pacajus', mes: 'Julho', data: '16/07/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 11966, professores: 446, escolas: 44, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
  { municipio: 'Chorozinho', mes: 'Julho', data: '20/07/2026', participantes: 'Nilo Vieira', agentes: 0, alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Caucaia', mes: 'Julho', data: '21/07/2026', participantes: 'Carlos Costa', agentes: 100, alunos: 51000, professores: 5000, escolas: 186, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa', tipo_orgao: 'Autarquia' },
  { municipio: 'Chorozinho', mes: 'Julho', data: '22/07/2026', participantes: 'Prof. Lourdes', agentes: 0, alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Guaiúba', mes: 'Julho', data: '29/07/2026', participantes: 'Prof. Carlos Paiva', agentes: 0, alunos: 3953, professores: 216, escolas: 21, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Barreira', mes: 'Julho', data: '29/07/2026', participantes: 'Bruno Jacó', agentes: 0, alunos: 3864, professores: 216, escolas: 12, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
  { municipio: 'Acarape', mes: 'Julho', data: '29/07/2026', participantes: 'Jonas Campelo', agentes: 0, alunos: 2337, professores: 160, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
  { municipio: 'Redenção', mes: 'Julho', data: '30/07/2026', participantes: 'Jane Jacaúna', agentes: 0, alunos: 5609, professores: 359, escolas: 25, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Caucaia', mes: 'Julho', data: '31/07/2026', participantes: 'Secretário de Educação Daniel Costa', agentes: 0, alunos: 51000, professores: 5000, escolas: 186, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },

 // ===== AGOSTO =====
{ municipio: 'Redenção', mes: 'Agosto', data: '05/08/2026', participantes: 'Paulo Henrique Ramos da Silva', agentes: 15, alunos: 0, professores: 0, escolas: 0, situacao: 'Convênio assinado', proxima: 'Aguardando início das atividades', tipo_orgao: 'Departamento' },
{ municipio: 'Fortaleza', mes: 'Agosto', data: '07/08/2026', participantes: 'Cristina Costa', agentes: 0, alunos: 245000, professores: 14000, escolas: 673, situacao: 'Apresentação realizada', proxima: 'Aguardando assinatura do convênio' },
{ municipio: 'Itaitinga', mes: 'Agosto', data: '11/08/2026', participantes: 'Prof. Virgílio Oliveira', agentes: 0, alunos: 10100, professores: 424, escolas: 34, situacao: 'Apresentação realizada', proxima: 'Aguardando agenda para implantação do programa' },
{ municipio: 'Baturité', mes: 'Agosto', data: '12/08/2026', participantes: 'Profª. Eliziana Duarte', agentes: 0, alunos: 6421, professores: 361, escolas: 30, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
{ municipio: 'Cascavel', mes: 'Agosto', data: '18/08/2026', participantes: 'Ribamar Ferreira Junior', agentes: 0, alunos: 9223, professores: 607, escolas: 65, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
{ municipio: 'Cascavel', mes: 'Agosto', data: '18/08/2026', participantes: 'Diones Souza de Lima (SETRAN)', agentes: 38, alunos: 0, professores: 0, escolas: 0, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa', tipo_orgao: 'Secretaria' },
{ municipio: 'Caucaia', mes: 'Agosto', data: '13/08/2026', participantes: 'AMT de Caucaia', agentes: 25, alunos: 0, professores: 0, escolas: 0, situacao: 'Implantado', proxima: 'Acompanhamento da implantação', tipo_orgao: 'Autarquia' },
{ municipio: 'Caucaia', mes: 'Agosto', data: '14/08/2026', participantes: 'AMT de Caucaia', agentes: 25, alunos: 0, professores: 0, escolas: 0, situacao: 'Implantado', proxima: 'Acompanhamento da implantação', tipo_orgao: 'Autarquia' },
{ municipio: 'Caucaia', mes: 'Agosto', data: '19/08/2026', participantes: 'AMT de Caucaia', agentes: 25, alunos: 0, professores: 0, escolas: 0, situacao: 'Implantado', proxima: 'Acompanhamento da implantação', tipo_orgao: 'Autarquia' },
{ municipio: 'Caucaia', mes: 'Agosto', data: '20/08/2026', participantes: 'AMT de Caucaia', agentes: 25, alunos: 0, professores: 0, escolas: 0, situacao: 'Implantado', proxima: 'Acompanhamento da implantação', tipo_orgao: 'Autarquia' },
  { municipio: 'Pacoti', mes: 'Agosto', data: '25/08/2026', participantes: 'Prof. Maraline Rocha', agentes: 0, alunos: 1585, professores: 144, escolas: 13, situacao: 'Implantado', proxima: 'Acompanhamento da implantação' },
  { municipio: 'Acarape', mes: 'Agosto', data: '26/08/2026', participantes: 'Jonas Campelo', agentes: 0, alunos: 2337, professores: 160, escolas: 12, situacao: 'Apresentação realizada', proxima: 'Aguardando agenda para implantação do programa' },
{ municipio: 'Aracoiaba', mes: 'Agosto', data: '26/08/2026', participantes: 'Prof. Naiara', agentes: 0, alunos: 4320, professores: 355, escolas: 25, situacao: 'Apresentação realizada', proxima: 'Aguardando agenda para implantação do programa' },
{ municipio: 'Itapiúna', mes: 'Agosto', data: '26/08/2026', participantes: 'Assessor Pedagógico Dr. Américo', agentes: 0, alunos: 2902, professores: 202, escolas: 15, situacao: 'Apresentação realizada', proxima: 'Aguardando agenda para implantação do programa' },
];
  let currentData = [...rawData];
  let currentFilter = { sort: 'data', order: 'asc' };
  let selectedMunicipio = null;
  let currentTab = 'escolas';
  let currentStatusFilter = null;

  const tbodyEscolas = document.getElementById('tableBodyEscolas');
  const tbodyAutarquias = document.getElementById('tableBodyAutarquias');
  const totalMunicipios = document.getElementById('totalMunicipios');
  const totalAlunos = document.getElementById('totalAlunos');
  const totalProfessores = document.getElementById('totalProfessores');
  const totalEscolas = document.getElementById('totalEscolas');
  const totalMunicipiosGeral = document.getElementById('totalMunicipiosGeral');
  const mediaAlunos = document.getElementById('mediaAlunos');
  const detailContent = document.getElementById('detailContent');
  const filterPanel = document.getElementById('filterPanel');
  const searchInput = document.getElementById('searchInput');
  const monthSelect = document.getElementById('monthSelect');
  const themeToggle = document.getElementById('themeToggle');

  const statusImplantado = document.getElementById('statusImplantado');
  const statusConvenio = document.getElementById('statusConvenio');
  const statusAnalise = document.getElementById('statusAnalise');
  const statusApresentacao = document.getElementById('statusApresentacao');

  function loadPDFLibraries() {
    if (typeof window.jspdf === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = () => {
        const autoTableScript = document.createElement('script');
        autoTableScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js';
        document.head.appendChild(autoTableScript);
      };
      document.head.appendChild(script);
    }
  }

  function getFilteredData() {
    let filtered = [...currentData];
    const month = monthSelect.value;
    if (month !== 'Todos') {
      filtered = filtered.filter(d => d.mes === month);
    }
    const search = searchInput.value.trim().toLowerCase();
    if (search) {
      filtered = filtered.filter(d => d.municipio.toLowerCase().includes(search));
    }
    if (currentStatusFilter) {
      filtered = filtered.filter(d => d.situacao === currentStatusFilter);
    }
    return filtered;
  }

  function applySort(data, sortKey, order) {
    return data.sort((a, b) => {
      let va = a[sortKey] ?? '';
      let vb = b[sortKey] ?? '';
      if (sortKey === 'data') {
        const parseDate = (str) => {
          const parts = str.split(' - ');
          const first = parts[0].split('/');
          return new Date(2026, parseInt(first[1])-1, parseInt(first[0]));
        };
        va = parseDate(va);
        vb = parseDate(vb);
      } else if (typeof va === 'string') {
        va = va.toLowerCase();
        vb = vb.toLowerCase();
      }
      if (va < vb) return order === 'asc' ? -1 : 1;
      if (va > vb) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  function getStatusClass(situacao) {
    if (situacao === 'Implantado') return 'status-implantado';
    if (situacao === 'Convênio assinado') return 'status-convenio';
    if (situacao === 'Em análise jurídica') return 'status-analise';
    return 'status-apresentacao';
  }

  function getTipoOrgao(item) {
    if (item.tipo_orgao) return item.tipo_orgao;
    return 'Autarquia';
  }

 function getBadgeOrgao(item) {
  const tipo = getTipoOrgao(item);
  if (tipo === 'Departamento') {
    return `<span class="badge-departamento"><i class="fas fa-building"></i> Departamento</span>`;
  }
  if (tipo === 'Secretaria') {
    return `<span class="badge-secretaria"><i class="fas fa-university"></i> Secretaria</span>`;
  }
  return `<span class="badge-autarquia"><i class="fas fa-building"></i> Autarquia</span>`;
}

  function getLabels(tabType) {
    if (tabType === 'escolas') {
      return ['Município', 'Data', 'Participantes', 'Alunos', 'Professores', 'Escolas', 'Situação', 'Próxima Etapa'];
    }
    return ['Município', 'Data', 'Participantes', 'Agentes', 'Tipo', 'Situação', 'Próxima Etapa'];
  }

function render() {
  // ===== DADOS COM FILTROS (mês, busca, status) =====
  const filtered = getFilteredData();
  const sortKey = currentFilter.sort || 'data';
  const order = currentFilter.order || 'asc';
  const sorted = applySort([...filtered], sortKey, order);

  const autarquias = sorted.filter(d => d.agentes > 0);
  const escolas = sorted.filter(d => d.agentes === 0);

  renderTableEscolas(escolas);
  renderTableAutarquias(autarquias);

  // ===== CARDS DE RESUMO (Municípios ÚNICOS, Alunos, etc.) =====
  // Usa os dados filtrados (com status)
  const apenasEscolas = filtered.filter(d => d.agentes === 0);
  const municipiosEscolas = new Map();
  apenasEscolas.forEach(d => {
    const existing = municipiosEscolas.get(d.municipio);
    if (!existing) {
      municipiosEscolas.set(d.municipio, d);
    } else {
      const dataExistente = existing.data.split('/').reverse().join('-');
      const dataNova = d.data.split('/').reverse().join('-');
      if (dataNova > dataExistente) {
        municipiosEscolas.set(d.municipio, d);
      }
    }
  });

  const todosMunicipios = new Map();
  filtered.forEach(d => {
    if (!todosMunicipios.has(d.municipio)) {
      todosMunicipios.set(d.municipio, d);
    }
  });

  const municipiosUnicosEscolas = Array.from(municipiosEscolas.values());
  const totalMun = todosMunicipios.size;
  const totalAlu = municipiosUnicosEscolas.reduce((s, d) => s + (d.alunos || 0), 0);
  const totalProf = municipiosUnicosEscolas.reduce((s, d) => s + (d.professores || 0), 0);
  const totalEsc = municipiosUnicosEscolas.reduce((s, d) => s + (d.escolas || 0), 0);

  totalMunicipios.textContent = totalMun;
  totalAlunos.textContent = totalAlu.toLocaleString();
  totalProfessores.textContent = totalProf.toLocaleString();
  totalEscolas.textContent = totalEsc.toLocaleString();
  totalMunicipiosGeral.textContent = totalMun;
  mediaAlunos.textContent = totalMun ? (totalAlu / totalMun).toFixed(0) : 0;

  // ===== CONTADORES DE STATUS: CONTAGEM DE REGISTROS (VISITAS) =====
  // Usa os dados SEM filtro de status (apenas mês e busca) - PARTINDO DO currentData ORIGINAL
  let dataSemFiltro = [...currentData];
  
  const month = monthSelect.value;
  if (month !== 'Todos') {
    dataSemFiltro = dataSemFiltro.filter(d => d.mes === month);
  }
  
  const search = searchInput.value.trim().toLowerCase();
  if (search) {
    dataSemFiltro = dataSemFiltro.filter(d => d.municipio.toLowerCase().includes(search));
  }

  // Conta quantas LINHAS/REGISTROS cada status tem
  const statusCounts = {
    implantado: 0,
    convenio: 0,
    analise: 0,
    apresentacao: 0
  };

  dataSemFiltro.forEach(d => {
    const situacao = d.situacao;
    if (situacao === 'Implantado') statusCounts.implantado++;
    else if (situacao === 'Convênio assinado') statusCounts.convenio++;
    else if (situacao === 'Em análise jurídica') statusCounts.analise++;
    else if (situacao === 'Apresentação realizada') statusCounts.apresentacao++;
  });

  // Atualiza os elementos HTML
  statusImplantado.textContent = statusCounts.implantado;
  statusConvenio.textContent = statusCounts.convenio;
  statusAnalise.textContent = statusCounts.analise;
  statusApresentacao.textContent = statusCounts.apresentacao;

  // ===== DETALHE DO MUNICÍPIO SELECIONADO =====
  if (selectedMunicipio) {
    const found = filtered.find(d => d.municipio === selectedMunicipio);
    if (found) renderDetail(found);
    else { selectedMunicipio = null; renderEmptyDetail(); }
  } else {
    renderEmptyDetail();
  }

  document.getElementById('footerUpdate').textContent = new Date().toLocaleDateString('pt-BR');
  atualizarIndicadoresOrdenacao();
}
  
  function atualizarIndicadoresOrdenacao() {
    document.querySelectorAll('th.sortable').forEach(th => {
      th.classList.remove('asc', 'desc');
      const sortKey = th.dataset.sort;
      if (sortKey === currentFilter.sort) {
        th.classList.add(currentFilter.order);
      }
    });
  }

  function renderTableEscolas(data) {
    if (!tbodyEscolas) return;
    if (data.length === 0) {
      tbodyEscolas.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:24px; color:var(--text-secondary);">
        Nenhum registro de escolas
      </td></tr>`;
      return;
    }

    const labels = getLabels('escolas');
    let html = '';
    data.forEach(d => {
      const statusClass = getStatusClass(d.situacao);
      html += `<tr data-municipio="${d.municipio}" class="clickable-row">
        <td data-label="${labels[0]}"><strong>${d.municipio}</strong></td>
        <td data-label="${labels[1]}">${d.data}</td>
        <td data-label="${labels[2]}">${d.participantes}</td>
        <td data-label="${labels[3]}">${d.alunos.toLocaleString()}</td>
        <td data-label="${labels[4]}">${d.professores.toLocaleString()}</td>
        <td data-label="${labels[5]}">${d.escolas}</td>
        <td data-label="${labels[6]}"><span class="status-badge ${statusClass}">${d.situacao}</span></td>
        <td data-label="${labels[7]}">${d.proxima || '-'}</td>
      </tr>`;
    });
    tbodyEscolas.innerHTML = html;

    tbodyEscolas.querySelectorAll('.clickable-row').forEach(row => {
      row.addEventListener('click', function() {
        selectedMunicipio = this.dataset.municipio;
        render();
      });
    });
  }

  function renderTableAutarquias(data) {
    if (!tbodyAutarquias) return;
    if (data.length === 0) {
      tbodyAutarquias.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:var(--text-secondary);">
        Nenhum registro de Departamentos/Autarquias de Trânsito
      </td></tr>`;
      return;
    }

    const labels = getLabels('autarquias');
    let html = '';
    data.forEach(d => {
      const statusClass = getStatusClass(d.situacao);
      const badge = getBadgeOrgao(d);
      html += `<tr data-municipio="${d.municipio}" class="clickable-row">
        <td data-label="${labels[0]}"><strong>${d.municipio}</strong></td>
        <td data-label="${labels[1]}">${d.data}</td>
        <td data-label="${labels[2]}">${d.participantes}</td>
        <td data-label="${labels[3]}">${d.agentes}</td>
        <td data-label="${labels[4]}">${badge}</td>
        <td data-label="${labels[5]}"><span class="status-badge ${statusClass}">${d.situacao}</span></td>
        <td data-label="${labels[6]}">${d.proxima || '-'}</td>
      </tr>`;
    });
    tbodyAutarquias.innerHTML = html;

    tbodyAutarquias.querySelectorAll('.clickable-row').forEach(row => {
      row.addEventListener('click', function() {
        selectedMunicipio = this.dataset.municipio;
        render();
      });
    });
  }

  function renderDetail(d) {
    if (!d) return renderEmptyDetail();
    const statusClass = getStatusClass(d.situacao);
    const tipoOrgao = d.agentes > 0 ? getTipoOrgao(d) : 'Escola';
    detailContent.innerHTML = `
      <div class="detail-item">
        <div class="detail-municipio">${d.municipio}</div>
        <div class="detail-row"><span class="detail-label">Mês</span><span class="detail-value">${d.mes}</span></div>
        <div class="detail-row"><span class="detail-label">Data</span><span class="detail-value">${d.data}</span></div>
        <div class="detail-row"><span class="detail-label">Participantes</span><span class="detail-value">${d.participantes}</span></div>
        <div class="detail-row"><span class="detail-label">Agentes</span><span class="detail-value">${d.agentes}</span></div>
        ${d.agentes > 0 ? `<div class="detail-row"><span class="detail-label">Tipo</span><span class="detail-value">${tipoOrgao}</span></div>` : ''}
        <div class="detail-row"><span class="detail-label">Alunos</span><span class="detail-value">${d.alunos.toLocaleString()}</span></div>
        <div class="detail-row"><span class="detail-label">Professores</span><span class="detail-value">${d.professores.toLocaleString()}</span></div>
        <div class="detail-row"><span class="detail-label">Escolas</span><span class="detail-value">${d.escolas}</span></div>
        <div class="detail-row"><span class="detail-label">Situação</span><span class="detail-value"><span class="status-badge ${statusClass}">${d.situacao}</span></span></div>
        <div class="detail-row"><span class="detail-label">Próxima etapa</span><span class="detail-value">${d.proxima || '-'}</span></div>
      </div>
    `;
  }

  function renderEmptyDetail() {
    detailContent.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-hand-pointer"></i>
        <p>Selecione um município para ver os detalhes</p>
      </div>
    `;
  }

  // ============================================================
  // EXPORTAÇÃO PARA PDF - CORRIGIDA
  // ============================================================
  function exportToPDF() {
    if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
      showToast('Carregando biblioteca PDF... Aguarde e tente novamente');
      loadPDFLibraries();
      setTimeout(() => {
        if (typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF !== 'undefined') {
          generatePDF();
        } else {
          showToast('Erro ao carregar PDF. Recarregue a página.');
        }
      }, 2000);
      return;
    }
    generatePDF();
  }

  function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'mm', 'a4');
    
    let filteredData = getFilteredData();
    filteredData = applySort([...filteredData], currentFilter.sort || 'data', currentFilter.order || 'asc');

    const tabAtiva = document.querySelector('.tab-btn.active');
    const tipo = tabAtiva ? tabAtiva.dataset.tab : 'escolas';
    
    let dadosFiltrados = filteredData;
    if (tipo === 'escolas') {
      dadosFiltrados = filteredData.filter(d => d.agentes === 0);
    } else {
      dadosFiltrados = filteredData.filter(d => d.agentes > 0);
    }

    // ===== CORREÇÃO: Conta MUNICÍPIOS ÚNICOS =====
    const municipiosUnicos = new Set();
    dadosFiltrados.forEach(d => municipiosUnicos.add(d.municipio));
    const totalMunicipiosUnicos = municipiosUnicos.size;

    // ===== CORREÇÃO: Agrupa por município para somar alunos/professores/escolas =====
    let municipiosMap = new Map();
    dadosFiltrados.forEach(d => {
      const existing = municipiosMap.get(d.municipio);
      if (!existing) {
        municipiosMap.set(d.municipio, d);
      } else {
        const dataExistente = existing.data.split('/').reverse().join('-');
        const dataNova = d.data.split('/').reverse().join('-');
        if (dataNova > dataExistente) {
          municipiosMap.set(d.municipio, d);
        }
      }
    });

    const municipiosUnicosDados = Array.from(municipiosMap.values());
    
    const totalAlunos = tipo === 'escolas' 
      ? municipiosUnicosDados.reduce((sum, item) => sum + (item.alunos || 0), 0)
      : dadosFiltrados.reduce((sum, item) => sum + (item.alunos || 0), 0);
      
    const totalProfessores = tipo === 'escolas'
      ? municipiosUnicosDados.reduce((sum, item) => sum + (item.professores || 0), 0)
      : dadosFiltrados.reduce((sum, item) => sum + (item.professores || 0), 0);
      
    const totalEscolas = tipo === 'escolas'
      ? municipiosUnicosDados.reduce((sum, item) => sum + (item.escolas || 0), 0)
      : dadosFiltrados.reduce((sum, item) => sum + (item.escolas || 0), 0);
      
    const totalAgentes = dadosFiltrados.reduce((sum, item) => sum + (item.agentes || 0), 0);

    const monthDisplay = monthSelect.value === 'Todos' ? 'Todos os Meses' : monthSelect.value;
    const tabDisplay = tipo === 'escolas' ? 'Escolas' : 'Departamentos/Autarquias de Trânsito';
    
    let filtrosAtivos = [];
    if (monthSelect.value !== 'Todos') filtrosAtivos.push(`Mês: ${monthSelect.value}`);
    if (searchInput.value.trim()) filtrosAtivos.push(`Busca: "${searchInput.value.trim()}"`);
    if (currentStatusFilter) filtrosAtivos.push(`Status: ${currentStatusFilter}`);
    
    let subtitle = `${tabDisplay} - ${monthDisplay}`;
    if (filtrosAtivos.length > 0) {
      subtitle += ` (Filtros: ${filtrosAtivos.join(' | ')})`;
    }

    const title = `Conexão DNIT - Educação No Trânsito`;
    const dateStr = new Date().toLocaleString('pt-BR');

    const pageWidth = doc.internal.pageSize.width;
    const marginLeft = 12;
    const marginRight = 12;
    const usableWidth = pageWidth - marginLeft - marginRight;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, pageWidth / 2, 12, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(subtitle, pageWidth / 2, 19, { align: 'center' });
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    
    let summaryText = `Municípios: ${totalMunicipiosUnicos}`;
    if (tipo === 'escolas') {
      summaryText += `  |  Alunos: ${formatNumber(totalAlunos)}  |  Professores: ${formatNumber(totalProfessores)}  |  Escolas: ${formatNumber(totalEscolas)}`;
    } else {
      summaryText += `  |  Agentes: ${formatNumber(totalAgentes)}`;
    }
    doc.text(summaryText, pageWidth / 2, 25, { align: 'center' });
    
    doc.setFontSize(7);
    doc.setFont('helvetica', 'italic');
    doc.text(`Gerado em: ${dateStr}`, pageWidth / 2, 30, { align: 'center' });

    if (dadosFiltrados.length === 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Nenhum dado encontrado com os filtros aplicados.', pageWidth / 2, 50, { align: 'center' });
      doc.save(`conexao_dnit_sem_dados_${new Date().toISOString().slice(0,10)}.pdf`);
      showToast('Nenhum dado encontrado para exportar.');
      return;
    }

    // ===== TABELA - usa dados filtrados (mostra todos os registros) =====
    let headers, tableData;
    if (tipo === 'escolas') {
      headers = ['Município', 'Data', 'Participantes', 'Alunos', 'Professores', 'Escolas', 'Situação', 'Próxima Etapa'];
      tableData = dadosFiltrados.map(item => [
        item.municipio,
        item.data,
        item.participantes,
        formatNumber(item.alunos),
        formatNumber(item.professores),
        formatNumber(item.escolas),
        item.situacao,
        item.proxima || '-'
      ]);
      const colWeights = [1.6, 1.0, 2.2, 0.9, 1.0, 0.8, 1.6, 2.2];
      const totalWeight = colWeights.reduce((a, b) => a + b, 0);
      const colWidths = colWeights.map(w => (w / totalWeight) * usableWidth);
      const adjustedWidths = colWidths.map(w => Math.max(w, 10));
      
      doc.autoTable({
        head: [headers],
        body: tableData,
        startY: 34,
        theme: 'striped',
        styles: {
          fontSize: 7,
          cellPadding: { top: 1.8, bottom: 1.8, left: 2, right: 2 },
          valign: 'middle',
          halign: 'center',
          lineColor: [200, 200, 200],
          lineWidth: 0.1
        },
        headStyles: {
          fillColor: [44, 107, 158],
          textColor: [255, 255, 255],
          fontSize: 7.5,
          fontStyle: 'bold',
          halign: 'center',
          valign: 'middle',
          cellPadding: { top: 2.5, bottom: 2.5, left: 2, right: 2 }
        },
        bodyStyles: {
          fontSize: 6.8,
          halign: 'center',
          valign: 'middle'
        },
        alternateRowStyles: {
          fillColor: [245, 248, 250]
        },
        columnStyles: {
          0: { halign: 'left', cellWidth: adjustedWidths[0] },
          1: { halign: 'center', cellWidth: adjustedWidths[1] },
          2: { halign: 'left', cellWidth: adjustedWidths[2] },
          3: { halign: 'right', cellWidth: adjustedWidths[3] },
          4: { halign: 'right', cellWidth: adjustedWidths[4] },
          5: { halign: 'right', cellWidth: adjustedWidths[5] },
          6: { halign: 'center', cellWidth: adjustedWidths[6] },
          7: { halign: 'left', cellWidth: adjustedWidths[7] }
        },
        margin: { left: marginLeft, right: marginRight },
        tableWidth: 'auto',
        didDrawPage: function(data) {
          const pageCount = doc.internal.getNumberOfPages();
          const currentPage = doc.internal.getCurrentPageInfo().pageNumber;
          
          const footerY = doc.internal.pageSize.height - 6;
          doc.setDrawColor(200, 200, 200);
          doc.setLineWidth(0.2);
          doc.line(marginLeft, footerY, pageWidth - marginRight, footerY);
          
          doc.setFontSize(6.5);
          doc.setFont('helvetica', 'italic');
          doc.text(`Página ${currentPage} de ${pageCount}`, marginLeft, footerY + 4);
          doc.text('Conexão DNIT - Educação No Trânsito', pageWidth - marginRight, footerY + 4, { align: 'right' });
        }
      });
    } else {
      headers = ['Município', 'Data', 'Participantes', 'Agentes', 'Tipo', 'Situação', 'Próxima Etapa'];
      tableData = dadosFiltrados.map(item => [
        item.municipio,
        item.data,
        item.participantes,
        formatNumber(item.agentes),
        getTipoOrgao(item),
        item.situacao,
        item.proxima || '-'
      ]);
      const colWeights = [1.6, 1.0, 2.0, 0.9, 1.2, 1.4, 2.0];
      const totalWeight = colWeights.reduce((a, b) => a + b, 0);
      const colWidths = colWeights.map(w => (w / totalWeight) * usableWidth);
      const adjustedWidths = colWidths.map(w => Math.max(w, 10));
      
      doc.autoTable({
        head: [headers],
        body: tableData,
        startY: 34,
        theme: 'striped',
        styles: {
          fontSize: 7,
          cellPadding: { top: 1.8, bottom: 1.8, left: 2, right: 2 },
          valign: 'middle',
          halign: 'center',
          lineColor: [200, 200, 200],
          lineWidth: 0.1
        },
        headStyles: {
          fillColor: [44, 107, 158],
          textColor: [255, 255, 255],
          fontSize: 7.5,
          fontStyle: 'bold',
          halign: 'center',
          valign: 'middle',
          cellPadding: { top: 2.5, bottom: 2.5, left: 2, right: 2 }
        },
        bodyStyles: {
          fontSize: 6.8,
          halign: 'center',
          valign: 'middle'
        },
        alternateRowStyles: {
          fillColor: [245, 248, 250]
        },
        columnStyles: {
          0: { halign: 'left', cellWidth: adjustedWidths[0] },
          1: { halign: 'center', cellWidth: adjustedWidths[1] },
          2: { halign: 'left', cellWidth: adjustedWidths[2] },
          3: { halign: 'right', cellWidth: adjustedWidths[3] },
          4: { halign: 'center', cellWidth: adjustedWidths[4] },
          5: { halign: 'center', cellWidth: adjustedWidths[5] },
          6: { halign: 'left', cellWidth: adjustedWidths[6] }
        },
        margin: { left: marginLeft, right: marginRight },
        tableWidth: 'auto',
        didDrawPage: function(data) {
          const pageCount = doc.internal.getNumberOfPages();
          const currentPage = doc.internal.getCurrentPageInfo().pageNumber;
          
          const footerY = doc.internal.pageSize.height - 6;
          doc.setDrawColor(200, 200, 200);
          doc.setLineWidth(0.2);
          doc.line(marginLeft, footerY, pageWidth - marginRight, footerY);
          
          doc.setFontSize(6.5);
          doc.setFont('helvetica', 'italic');
          doc.text(`Página ${currentPage} de ${pageCount}`, marginLeft, footerY + 4);
          doc.text('Conexão DNIT - Educação No Trânsito', pageWidth - marginRight, footerY + 4, { align: 'right' });
        }
      });
    }

    let fileNameParts = ['conexao_dnit'];
    if (monthSelect.value !== 'Todos') fileNameParts.push(monthSelect.value.toLowerCase());
    fileNameParts.push(tipo);
    if (searchInput.value.trim()) {
      fileNameParts.push('busca_' + searchInput.value.trim().replace(/\s+/g, '_'));
    }
    if (currentStatusFilter) {
      fileNameParts.push('status_' + currentStatusFilter.replace(/\s+/g, '_'));
    }
    fileNameParts.push(new Date().toISOString().slice(0,10));
    const fileName = fileNameParts.join('_') + '.pdf';
    
    doc.save(fileName);
    showToast('PDF exportado com sucesso!');
  }

  function formatNumber(num) {
    if (!num && num !== 0) return '0';
    if (typeof num === 'string') return num;
    return num.toLocaleString('pt-BR');
  }

  function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ============================================================
  // EVENTOS
  // ============================================================

  document.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', function() {
      const sortKey = this.dataset.sort;
      if (currentFilter.sort === sortKey) {
        currentFilter.order = currentFilter.order === 'asc' ? 'desc' : 'asc';
      } else {
        currentFilter.sort = sortKey;
        currentFilter.order = 'asc';
      }
      
      document.querySelectorAll('.filter-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.sort === sortKey && btn.dataset.order === currentFilter.order) {
          btn.classList.add('active');
        }
      });
      
      render();
    });
  });

  document.querySelectorAll('.filter-option').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-option').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter.sort = this.dataset.sort;
      currentFilter.order = this.dataset.order;
      render();
    });
  });

  searchInput.addEventListener('input', render);
  monthSelect.addEventListener('change', render);

  document.querySelectorAll('.status-item.clickable').forEach(item => {
    item.addEventListener('click', function() {
      const status = this.dataset.status;
      if (currentStatusFilter === status) {
        currentStatusFilter = null;
        this.classList.remove('active');
        showToast('Filtro de status removido');
      } else {
        currentStatusFilter = status;
        document.querySelectorAll('.status-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        showToast(`Filtrando por: ${status}`);
      }
      render();
    });
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const tab = this.dataset.tab;
      currentTab = tab;
      document.getElementById('tabEscolas').classList.toggle('active', tab === 'escolas');
      document.getElementById('tabAutarquias').classList.toggle('active', tab === 'autarquias');
      render();
    });
  });

  document.getElementById('filterBtn').addEventListener('click', function() {
    filterPanel.classList.toggle('open');
    this.classList.toggle('active');
  });

  document.getElementById('exportBtn').addEventListener('click', function() {
    const btn = this;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PDF';
    btn.disabled = true;
    
    if (typeof window.jspdf === 'undefined') {
      loadPDFLibraries();
      setTimeout(() => {
        if (typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF !== 'undefined') {
          exportToPDF();
        } else {
          showToast('Erro ao carregar PDF. Recarregue a página.');
        }
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    } else {
      exportToPDF();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });

  themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    this.querySelector('i').classList.toggle('fa-moon');
    this.querySelector('i').classList.toggle('fa-sun');
  });

  document.getElementById('refreshBtn').addEventListener('click', function() {
    this.classList.add('spinning');
    currentData = [...rawData];
    selectedMunicipio = null;
    currentStatusFilter = null;
    document.querySelectorAll('.status-item').forEach(el => el.classList.remove('active'));
    render();
    setTimeout(() => this.classList.remove('spinning'), 800);
  });

  window.addEventListener('resize', function() {
    render();
  });

  loadPDFLibraries();
  render();
})();

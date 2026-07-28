(function() {
  const rawData = [
    { municipio: 'Guaiúba', mes: 'Maio', data: '18/05/2026', participantes: 'Prof. Carlos Paiva', agentes: 0, alunos: 3953, professores: 216, escolas: 21, situacao: 'Convênio assinado', proxima: 'Implantação do programa' },
    { municipio: 'Pacatuba', mes: 'Maio', data: '18/05/2026', participantes: 'Prof. Elizânio Umbelino', agentes: 0, alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Pacajus', mes: 'Maio', data: '19/05/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Acarape', mes: 'Maio', data: '20/05 - 28/05', participantes: 'Jonas Campelo', agentes: 0, alunos: 2337, professores: 160, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Barreira', mes: 'Maio', data: '20/05 - 28/05', participantes: 'Prof. Glória Maria e equipe pedagógica', agentes: 0, alunos: 3864, professores: 216, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Baturité', mes: 'Maio', data: '21/05/2026', participantes: 'Prof. Lindomar Soares', agentes: 0, alunos: 6421, professores: 361, escolas: 30, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
    { municipio: 'Chorozinho', mes: 'Maio', data: '21/05/2026', participantes: 'Prefeita Célia Marinho, Prof. Lourdes e Nilo Vieira', agentes: 0, alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Mulungu', mes: 'Maio', data: '21/05/2026', participantes: 'Michel Platini', agentes: 0, alunos: 1635, professores: 93, escolas: 8, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
    { municipio: 'Redenção', mes: 'Maio', data: '22/05/2026', participantes: 'Jane Jacaúna', agentes: 0, alunos: 5609, professores: 359, escolas: 25, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
    { municipio: 'Aratuba', mes: 'Junho', data: '11/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 4499, professores: 207, escolas: 13, situacao: 'Apresentação realizada', proxima: 'Aguardando assinatura do convênio' },
    { municipio: 'Mulungu', mes: 'Junho', data: '11/06/2026', participantes: 'Michel Platini', agentes: 0, alunos: 1635, professores: 93, escolas: 8, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
    { municipio: 'Capistrano', mes: 'Junho', data: '11/06 - 17/06', participantes: 'Equipe da SME', agentes: 0, alunos: 2848, professores: 207, escolas: 14, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
    { municipio: 'Itapiúna', mes: 'Junho', data: '11/06 - 18/06', participantes: 'Equipe da SME', agentes: 0, alunos: 2902, professores: 202, escolas: 15, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Pacajus', mes: 'Junho', data: '12/06/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Barreira', mes: 'Junho', data: '19/06/2026', participantes: 'Prof. Alan Lucas de Oliveira', agentes: 0, alunos: 3864, professores: 216, escolas: 12, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Guaiúba', mes: 'Junho', data: '19/06/2026', participantes: 'Prof. Carlos Paiva', agentes: 0, alunos: 3953, professores: 216, escolas: 21, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
    { municipio: 'Redenção', mes: 'Junho', data: '24/06/2026', participantes: 'Jane Jacaúna', agentes: 0, alunos: 5609, professores: 359, escolas: 25, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
    { municipio: 'Pacatuba', mes: 'Junho', data: '24/06/2026', participantes: 'Prof. Elizânio Umbelino', agentes: 0, alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Pacoti', mes: 'Junho', data: '29/06/2026', participantes: 'Prof. Maraline Rocha', agentes: 0, alunos: 1585, professores: 144, escolas: 13, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
    { municipio: 'Caucaia', mes: 'Julho', data: '06/07/2026', participantes: 'Secretário de Educação Daniel Costa', agentes: 0, alunos: 51000, professores: 5000, escolas: 186, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
    { municipio: 'Pacajus', mes: 'Julho', data: '16/07/2026', participantes: 'Equipe da SME', agentes: 0, alunos: 11966, professores: 446, escolas: 44, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
    { municipio: 'Chorozinho', mes: 'Julho', data: '20/07/2026', participantes: 'Nilo Vieira', agentes: 0, alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando agenda para implantação do programa' },
    { municipio: 'Caucaia', mes: 'Julho', data: '21/07/2026', participantes: 'Carlos Costa', agentes: 100, alunos: 0, professores: 0, escolas: 0, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' }
  ];

  let currentData = [...rawData];
  let currentFilter = { sort: 'data', order: 'asc' };
  let selectedMunicipio = null;

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
    if (situacao === 'Implantado') return 'implantado';
    if (situacao === 'Convênio assinado') return 'convenio';
    if (situacao === 'Em análise jurídica') return 'analise';
    return 'apresentacao';
  }

  function render() {
    const filtered = getFilteredData();
    const sortKey = currentFilter.sort || 'data';
    const order = currentFilter.order || 'asc';
    const sorted = applySort([...filtered], sortKey, order);

    const autarquias = sorted.filter(d => d.agentes > 0);
    const escolas = sorted.filter(d => d.agentes === 0);

    renderTableEscolas(escolas);
    renderTableAutarquias(autarquias);

    const municipiosUnicos = new Set(filtered.map(d => d.municipio));
    const totalMun = municipiosUnicos.size;
    const totalAlu = filtered.reduce((s, d) => s + (d.alunos || 0), 0);
    const totalProf = filtered.reduce((s, d) => s + (d.professores || 0), 0);
    const totalEsc = filtered.reduce((s, d) => s + (d.escolas || 0), 0);

    totalMunicipios.textContent = totalMun;
    totalAlunos.textContent = totalAlu.toLocaleString();
    totalProfessores.textContent = totalProf.toLocaleString();
    totalEscolas.textContent = totalEsc.toLocaleString();
    totalMunicipiosGeral.textContent = totalMun;
    mediaAlunos.textContent = totalMun ? (totalAlu / totalMun).toFixed(1) : 0;

    const implantados = filtered.filter(d => d.situacao === 'Implantado').length;
    const convenio = filtered.filter(d => d.situacao === 'Convênio assinado').length;
    const analise = filtered.filter(d => d.situacao === 'Em análise jurídica').length;
    const apresentacao = filtered.filter(d => d.situacao === 'Apresentação realizada').length;
    statusImplantado.textContent = implantados;
    statusConvenio.textContent = convenio;
    statusAnalise.textContent = analise;
    statusApresentacao.textContent = apresentacao;

    if (selectedMunicipio) {
      const found = filtered.find(d => d.municipio === selectedMunicipio);
      if (found) renderDetail(found);
      else { selectedMunicipio = null; renderEmptyDetail(); }
    } else {
      renderEmptyDetail();
    }

    document.getElementById('footerUpdate').textContent = new Date().toLocaleDateString('pt-BR');
  }

  function renderTableEscolas(data) {
    if (!tbodyEscolas) return;
    if (data.length === 0) {
      tbodyEscolas.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:24px; color:#94a3b8;">
        Nenhum registro de escolas
      </td></tr>`;
      return;
    }

    let html = '';
    data.forEach(d => {
      const statusClass = getStatusClass(d.situacao);
      html += `<tr data-municipio="${d.municipio}" class="clickable-row">
        <td><strong>${d.municipio}</strong></td>
        <td>${d.data}</td>
        <td>${d.participantes}</td>
        <td>${d.alunos.toLocaleString()}</td>
        <td>${d.professores.toLocaleString()}</td>
        <td>${d.escolas}</td>
        <td><span class="status-badge ${statusClass}">${d.situacao}</span></td>
        <td>${d.proxima || '-'}</td>
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
      tbodyAutarquias.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:#94a3b8;">
        Nenhum registro de autarquias ou departamentos de trânsito
      </td></tr>`;
      return;
    }

    let html = '';
    data.forEach(d => {
      const statusClass = getStatusClass(d.situacao);
      html += `<tr data-municipio="${d.municipio}" class="clickable-row">
        <td><strong>${d.municipio}</strong> <span class="badge-agencia"><i class="fas fa-building"></i> Autarquia</span></td>
        <td>${d.data}</td>
        <td>${d.participantes}</td>
        <td>${d.agentes}</td>
        <td><span class="status-badge ${statusClass}">${d.situacao}</span></td>
        <td>${d.proxima || '-'}</td>
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
    detailContent.innerHTML = `
      <div class="detail-item">
        <h4 style="margin:0 0 8px; font-size:20px;">${d.municipio}</h4>
        <div class="detail-row"><span>Mês</span><span>${d.mes}</span></div>
        <div class="detail-row"><span>Data</span><span>${d.data}</span></div>
        <div class="detail-row"><span>Participantes</span><span>${d.participantes}</span></div>
        <div class="detail-row"><span>Agentes</span><span>${d.agentes}</span></div>
        <div class="detail-row"><span>Alunos</span><span>${d.alunos.toLocaleString()}</span></div>
        <div class="detail-row"><span>Professores</span><span>${d.professores.toLocaleString()}</span></div>
        <div class="detail-row"><span>Escolas</span><span>${d.escolas}</span></div>
        <div class="detail-row"><span>Situação</span><span class="status-badge ${statusClass}">${d.situacao}</span></div>
        <div class="detail-row"><span>Próxima etapa</span><span>${d.proxima || '-'}</span></div>
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
      searchInput.value = '';
      const filtered = currentData.filter(d => d.situacao === status);
      const backup = currentData;
      currentData = filtered.length ? filtered : backup;
      render();
      currentData = backup;
      document.querySelectorAll('.status-item').forEach(el => el.style.background = '');
      this.style.background = '#e9edf3';
      setTimeout(() => { this.style.background = ''; }, 600);
    });
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const tab = this.dataset.tab;
      document.getElementById('tabEscolas').classList.toggle('active', tab === 'escolas');
      document.getElementById('tabAutarquias').classList.toggle('active', tab === 'autarquias');
      render();
    });
  });

  document.getElementById('filterBtn').addEventListener('click', function() {
    filterPanel.classList.toggle('open');
  });

  document.getElementById('exportBtn').addEventListener('click', function() {
    const filtered = getFilteredData();
    const headers = ['Município', 'Mês', 'Data', 'Participantes', 'Agentes', 'Alunos', 'Professores', 'Escolas', 'Situação', 'Próxima Etapa'];
    const csv = [headers.join(',')];
    filtered.forEach(d => {
      csv.push([
        d.municipio, d.mes, d.data, `"${d.participantes}"`, d.agentes,
        d.alunos, d.professores, d.escolas, `"${d.situacao}"`, `"${d.proxima || ''}"`
      ].join(','));
    });
    const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'conexao_dnit.csv';
    link.click();
  });

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.querySelector('i').classList.toggle('fa-moon');
    this.querySelector('i').classList.toggle('fa-sun');
  });

  document.getElementById('refreshBtn').addEventListener('click', function() {
    currentData = [...rawData];
    selectedMunicipio = null;
    render();
  });

  render();
})();

// ============================================
// Conexão DNIT · Educação No Trânsito - Dashboard
// ============================================

class DNITDashboard {
  constructor() {
    // Dados organizados por mês - ATUALIZADO COM A PLANILHA
    this.data = {
      'Maio': [
        { municipio: 'Pacatuba', data: '18/05/2026', participantes: 'Prof. Elizânio Umbelino', alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Guaiúba', data: '18/05/2026', participantes: 'Prof. Carlos Paiva', alunos: 3953, professores: 216, escolas: 21, situacao: 'Convênio assinado', proxima: 'Implantação do programa' },
        { municipio: 'Pacajus', data: '19/05/2026', participantes: 'Equipe da SME', alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Acarape', data: '20/05 - 28/05', participantes: 'Jonas Campelo', alunos: 2337, professores: 160, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Barreira', data: '20/05 - 28/05', participantes: 'Prof. Glória Maria e equipe pedagógica', alunos: 3864, professores: 216, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Chorozinho', data: '21/05/2026', participantes: 'Prefeita Célia Marinho, Prof. Lourdes e Nilo Vieira', alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Baturité', data: '21/05/2026', participantes: 'Prof. Lindomar Soares', alunos: 6421, professores: 361, escolas: 30, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
        { municipio: 'Mulungu', data: '21/05/2026', participantes: 'Michel Platini', alunos: 1635, professores: 93, escolas: 8, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
        { municipio: 'Redenção', data: '22/05/2026', participantes: 'Jane Jacaúna', alunos: 5609, professores: 359, escolas: 25, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' }
      ],
      'Junho': [
        { municipio: 'Aratuba', data: '11/06/2026', participantes: 'Equipe da SME', alunos: 4499, professores: 207, escolas: 13, situacao: 'Apresentação realizada', proxima: 'Aguardando assinatura do convênio' },
        { municipio: 'Mulungu', data: '11/06/2026', participantes: 'Michel Platini', alunos: 1635, professores: 93, escolas: 8, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
        { municipio: 'Capistrano', data: '11/06 - 17/06', participantes: 'Equipe da SME', alunos: 2848, professores: 207, escolas: 14, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
        { municipio: 'Itapiúna', data: '11/06 - 18/06', participantes: 'Equipe da SME', alunos: 2902, professores: 202, escolas: 15, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Pacajus', data: '12/06/2026', participantes: 'Equipe da SME', alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Barreira', data: '19/06/2026', participantes: 'Prof. Alan Lucas de Oliveira', alunos: 3864, professores: 216, escolas: 12, situacao: 'Apresentação realizada', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Guaiúba', data: '19/06/2026', participantes: 'Prof. Carlos Paiva', alunos: 3953, professores: 216, escolas: 21, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
        { municipio: 'Redenção', data: '24/06/2026', participantes: 'Jane Jacaúna', alunos: 5609, professores: 359, escolas: 25, situacao: 'Implantado', proxima: 'Realizada implantação do programa' },
        { municipio: 'Pacatuba', data: '24/06/2026', participantes: 'Prof. Elizânio Umbelino', alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Pacoti', data: '29/06/2026', participantes: 'Prof. Maraline Rocha', alunos: 1585, professores: 144, escolas: 13, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' }
      ],
      'Julho': [
        { municipio: 'Caucaia', data: '06/07/2026', participantes: 'Secretário de Educação Daniel Costa', alunos: 51000, professores: 5000, escolas: 186, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Pacajus', data: '16/07/2026', participantes: 'Equipe da SME', alunos: 11966, professores: 446, escolas: 44, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' },
        { municipio: 'Chorozinho', data: '20/07/2026', participantes: 'Nilo Vieira', alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando agenda para implantação do programa' }
      ]
    };

    this.currentMonth = 'Todos';
    this.selectedCity = null;
    this.isDarkTheme = false;
    this.currentSort = { field: 'data', order: 'asc' };
    this.currentFilter = null;
    this.searchTerm = '';

    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.loadMonth(this.currentMonth);
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 60000);
    this.loadSavedTheme();
    this.calculateGeneralStats();
  }

  cacheElements() {
    this.themeToggle = document.getElementById('themeToggle');
    this.refreshBtn = document.getElementById('refreshBtn');
    this.exportBtn = document.getElementById('exportBtn');
    this.filterBtn = document.getElementById('filterBtn');
    this.monthSelect = document.getElementById('monthSelect');
    this.filterPanel = document.getElementById('filterPanel');
    this.searchInput = document.getElementById('searchInput');

    this.tableBody = document.getElementById('tableBody');
    this.detailContent = document.getElementById('detailContent');
    this.footerUpdate = document.getElementById('footerUpdate');

    this.totalMunicipios = document.getElementById('totalMunicipios');
    this.totalAlunos = document.getElementById('totalAlunos');
    this.totalProfessores = document.getElementById('totalProfessores');
    this.totalEscolas = document.getElementById('totalEscolas');

    this.statusImplantado = document.getElementById('statusImplantado');
    this.statusConvenio = document.getElementById('statusConvenio');
    this.statusAnalise = document.getElementById('statusAnalise');
    this.statusApresentacao = document.getElementById('statusApresentacao');
    this.statusSemInfo = document.getElementById('statusSemInfo');

    this.totalMunicipiosGeralEl = document.getElementById('totalMunicipiosGeral');
    this.mediaAlunos = document.getElementById('mediaAlunos');
    this.ultimaAtualizacao = document.getElementById('ultimaAtualizacao');

    this.statusItems = document.querySelectorAll('.status-item.clickable');
    this.sortableHeaders = document.querySelectorAll('th.sortable');
  }

  bindEvents() {
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    this.refreshBtn.addEventListener('click', () => this.refreshData());
    this.exportBtn.addEventListener('click', () => this.exportData());
    
    this.monthSelect.addEventListener('change', (e) => {
      this.loadMonth(e.target.value);
      const monthName = e.target.value === 'Todos' ? 'todos os meses' : `${e.target.value} 2026`;
      this.showNotification(`Mês alterado: ${monthName}`);
    });
    
    this.filterBtn.addEventListener('click', () => {
      this.filterPanel.classList.toggle('open');
      this.filterBtn.classList.toggle('active');
    });

    document.querySelectorAll('.filter-option').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const sort = btn.dataset.sort;
        const order = btn.dataset.order;
        this.currentSort = { field: sort, order: order };
        this.applyFilters();
        
        this.sortableHeaders.forEach(th => {
          th.classList.remove('active', 'asc', 'desc');
          if (th.dataset.sort === sort) {
            th.classList.add('active', order);
          }
        });
        
        this.showNotification(`Ordenado por ${sort} (${order === 'asc' ? 'crescente' : 'decrescente'})`);
      });
    });

    this.searchInput.addEventListener('input', (e) => {
      this.searchTerm = e.target.value.toLowerCase();
      this.applyFilters();
    });

    this.statusItems.forEach(item => {
      item.addEventListener('click', () => {
        const status = item.dataset.status;
        if (this.currentFilter === status) {
          this.currentFilter = null;
          this.statusItems.forEach(i => i.classList.remove('active'));
          this.showNotification('Filtro removido');
        } else {
          this.currentFilter = status;
          this.statusItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          this.showNotification(`Filtrando: ${status}`);
        }
        this.applyFilters();
      });
    });

    this.sortableHeaders.forEach(th => {
      th.addEventListener('click', () => {
        const field = th.dataset.sort;
        const currentOrder = this.currentSort.field === field && this.currentSort.order === 'asc' ? 'desc' : 'asc';
        this.currentSort = { field, order: currentOrder };
        
        document.querySelectorAll('.filter-option').forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.sort === field && btn.dataset.order === currentOrder) {
            btn.classList.add('active');
          }
        });
        
        this.applyFilters();
        this.showNotification(`Ordenado por ${field} (${currentOrder === 'asc' ? 'crescente' : 'decrescente'})`);
      });
    });
  }

  getAllData() {
    let allData = [];
    const meses = ['Maio', 'Junho', 'Julho'];
    meses.forEach(month => {
      if (this.data[month]) {
        this.data[month].forEach(item => {
          // Remove duplicatas (mesmo município e mesma data)
          const exists = allData.some(existing => 
            existing.municipio === item.municipio && 
            existing.data === item.data
          );
          if (!exists) {
            allData.push({
              ...item,
              mes: month
            });
          }
        });
      }
    });
    return allData;
  }

  loadMonth(month) {
    this.currentMonth = month;
    
    if (this.monthSelect) {
      this.monthSelect.value = month;
    }

    this.currentFilter = null;
    this.statusItems.forEach(i => i.classList.remove('active'));
    this.searchTerm = '';
    if (this.searchInput) this.searchInput.value = '';

    let data = [];
    if (month === 'Todos') {
      data = this.getAllData();
    } else {
      data = this.data[month] || [];
    }

    // Ordenar por data crescente (padrão)
    this.currentSort = { field: 'data', order: 'asc' };
    this.sortableHeaders.forEach(th => {
      th.classList.remove('active', 'asc', 'desc');
      if (th.dataset.sort === 'data') {
        th.classList.add('active', 'asc');
      }
    });

    this.renderData(data);
    this.updateSummary(data);
    this.updateStatusCounts(data);
    this.clearDetail();

    if (data.length > 0) {
      this.selectCity(data[0].municipio);
    }

    this.updateAdditionalInfo(data);
  }

  renderData(data) {
    let sortedData = [...data];
    sortedData = this.sortData(sortedData);
    
    if (this.currentFilter) {
      sortedData = sortedData.filter(item => item.situacao === this.currentFilter);
    }
    
    if (this.searchTerm) {
      sortedData = sortedData.filter(item => 
        item.municipio.toLowerCase().includes(this.searchTerm)
      );
    }

    this.renderTable(sortedData);
  }

  sortData(data) {
    const { field, order } = this.currentSort;
    const multiplier = order === 'asc' ? 1 : -1;
    
    return data.sort((a, b) => {
      let valA = a[field];
      let valB = b[field];
      
      if (typeof valA === 'number' && typeof valB === 'number') {
        return (valA - valB) * multiplier;
      }
      
      if (field === 'data') {
        return this.compareDates(valA, valB) * multiplier;
      }
      
      valA = String(valA).toLowerCase();
      valB = String(valB).toLowerCase();
      return valA.localeCompare(valB) * multiplier;
    });
  }

  compareDates(dateA, dateB) {
    const extractDate = (dateStr) => {
      if (!dateStr) return new Date(0);
      
      if (dateStr.includes(' - ')) {
        dateStr = dateStr.split(' - ')[0];
      }
      
      const parts = dateStr.split('/');
      if (parts.length === 3) {
        return new Date(parts[2], parts[1] - 1, parts[0]);
      } else if (parts.length === 2) {
        return new Date(2026, parts[1] - 1, parts[0]);
      }
      return new Date(0);
    };

    const dA = extractDate(dateA);
    const dB = extractDate(dateB);
    return dA - dB;
  }

  applyFilters() {
    let data = [];
    if (this.currentMonth === 'Todos') {
      data = this.getAllData();
    } else {
      data = this.data[this.currentMonth] || [];
    }
    this.renderData(data);
  }

  abbreviateText(text, maxLength = 20) {
    if (!text) return '--';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

 renderTable(data) {
  if (!this.tableBody) return;

  if (data.length === 0) {
    this.tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:2rem; color:var(--text-secondary);">
          <i class="fas fa-info-circle"></i> Nenhum município encontrado com os filtros atuais
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  data.forEach((item, index) => {
    const statusClass = this.getStatusClass(item.situacao);
    const isEven = index % 2 === 0;
    
    const situacaoAbreviada = this.abbreviateText(item.situacao, 18);
    const participantesAbreviado = this.abbreviateText(item.participantes, 20);
    const proximaAbreviada = this.abbreviateText(item.proxima, 22);
    
    // O mês é exibido apenas no modo "Todos" e como um elemento separado
    const mesDisplay = this.currentMonth === 'Todos' ? `<span style="font-size:0.55rem; color:var(--text-secondary); display:block;">${item.mes}</span>` : '';
    
    html += `
      <tr data-municipio="${item.municipio}" onclick="dashboard.selectCity('${item.municipio}')" style="${isEven ? 'background: var(--bg-secondary);' : ''}">
        <td data-label="📍 Município"><strong>${item.municipio}</strong> ${mesDisplay}</td>
        <td data-label="📅 Data">${item.data}</td>
        <td data-label="👤 Participantes" style="font-size:0.7rem; max-width:100px; word-break:break-word;">${participantesAbreviado}</td>
        <td data-label="🎓 Alunos" style="text-align:center;">${this.formatNumber(item.alunos)}</td>
        <td data-label="👨‍🏫 Professores" style="text-align:center;">${this.formatNumber(item.professores)}</td>
        <td data-label="🏫 Escolas" style="text-align:center;">${this.formatNumber(item.escolas)}</td>
        <td data-label="📊 Situação"><span class="status-badge ${statusClass}" style="font-size:0.65rem; white-space:nowrap;">${situacaoAbreviada}</span></td>
        <td data-label="➡️ Próxima Etapa" style="font-size:0.7rem; max-width:120px; word-break:break-word;">${proximaAbreviada}</td>
      </tr>
    `;
  });

  this.tableBody.innerHTML = html;
  
  if (this.selectedCity) {
    const rows = document.querySelectorAll(`tbody tr[data-municipio="${this.selectedCity}"]`);
    if (rows.length > 0) {
      rows[0].classList.add('selected');
    } else {
      this.clearDetail();
    }
  }
  }

  getStatusClass(situacao) {
    if (situacao.includes('Implantado')) return 'status-implantado';
    if (situacao.includes('Convênio') || situacao.includes('convênio')) return 'status-convenio';
    if (situacao.includes('análise') || situacao.includes('jurídica')) return 'status-analise';
    if (situacao.includes('Apresentação') || situacao.includes('apresentação')) return 'status-apresentacao';
    return 'status-seminfo';
  }

  selectCity(municipio) {
    this.selectedCity = municipio;
    
    document.querySelectorAll('tbody tr').forEach(tr => tr.classList.remove('selected'));
    
    const rows = document.querySelectorAll(`tbody tr[data-municipio="${municipio}"]`);
    if (rows.length > 0) {
      rows[0].classList.add('selected');
      rows[0].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    let data = [];
    if (this.currentMonth === 'Todos') {
      data = this.getAllData();
    } else {
      data = this.data[this.currentMonth] || [];
    }
    
    const item = data.find(d => d.municipio === municipio);
    
    if (item) {
      this.renderDetail(item);
    }
  }

  renderDetail(item) {
    if (!this.detailContent) return;

    const mesInfo = this.currentMonth === 'Todos' ? `<div class="detail-row"><span class="detail-label"><i class="fas fa-calendar"></i> Mês</span><span class="detail-value">${item.mes}</span></div>` : '';

    this.detailContent.innerHTML = `
      <div class="detail-municipio">${item.municipio}</div>
      ${mesInfo}
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-calendar-day"></i> Data</span>
        <span class="detail-value">${item.data}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-users"></i> Participantes</span>
        <span class="detail-value" style="font-size:0.75rem; text-align:right;">${item.participantes}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-user-graduate"></i> Alunos</span>
        <span class="detail-value">${this.formatNumber(item.alunos)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-chalkboard-teacher"></i> Professores</span>
        <span class="detail-value">${this.formatNumber(item.professores)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-school"></i> Escolas</span>
        <span class="detail-value">${this.formatNumber(item.escolas)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-chart-line"></i> Situação</span>
        <span class="detail-value"><span class="status-badge ${this.getStatusClass(item.situacao)}">${item.situacao}</span></span>
      </div>
      <div class="detail-row">
        <span class="detail-label"><i class="fas fa-arrow-right"></i> Próxima etapa</span>
        <span class="detail-value" style="font-size:0.75rem; text-align:right;">${item.proxima}</span>
      </div>
    `;
  }

  clearDetail() {
    if (!this.detailContent) return;
    this.detailContent.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-hand-pointer"></i>
        <p>Selecione um município para ver os detalhes</p>
      </div>
    `;
  }

  updateSummary(data) {
    const uniqueMunicipios = new Set(data.map(item => item.municipio));
    const totalAlunos = data.reduce((sum, item) => sum + (item.alunos || 0), 0);
    const totalProfessores = data.reduce((sum, item) => sum + (item.professores || 0), 0);
    const totalEscolas = data.reduce((sum, item) => sum + (item.escolas || 0), 0);

    this.totalMunicipios.textContent = uniqueMunicipios.size;
    this.totalAlunos.textContent = this.formatNumber(totalAlunos);
    this.totalProfessores.textContent = this.formatNumber(totalProfessores);
    this.totalEscolas.textContent = this.formatNumber(totalEscolas);
  }

  updateStatusCounts(data) {
    const counts = {
      implantado: 0,
      convenio: 0,
      analise: 0,
      apresentacao: 0,
      semInfo: 0
    };

    data.forEach(item => {
      const situacao = item.situacao;
      if (situacao.includes('Implantado')) counts.implantado++;
      else if (situacao.includes('Convênio') || situacao.includes('convênio')) counts.convenio++;
      else if (situacao.includes('análise') || situacao.includes('jurídica')) counts.analise++;
      else if (situacao.includes('Apresentação') || situacao.includes('apresentação')) counts.apresentacao++;
      else counts.semInfo++;
    });

    this.statusImplantado.textContent = counts.implantado;
    this.statusConvenio.textContent = counts.convenio;
    this.statusAnalise.textContent = counts.analise;
    this.statusApresentacao.textContent = counts.apresentacao;
    this.statusSemInfo.textContent = counts.semInfo;
  }

  updateAdditionalInfo(data) {
    if (this.totalMunicipiosGeralEl) {
      const allMunicipios = new Set();
      Object.values(this.data).forEach(monthData => {
        monthData.forEach(item => allMunicipios.add(item.municipio));
      });
      this.totalMunicipiosGeralEl.textContent = allMunicipios.size;
    }

    if (this.mediaAlunos && data.length > 0) {
      const total = data.reduce((sum, item) => sum + (item.alunos || 0), 0);
      const media = total / data.length;
      this.mediaAlunos.textContent = this.formatNumber(Math.round(media));
    }

    if (this.ultimaAtualizacao) {
      const now = new Date();
      this.ultimaAtualizacao.textContent = now.toLocaleString('pt-BR');
    }
  }

  calculateGeneralStats() {
    let totalMunicipios = 0;
    Object.values(this.data).forEach(monthData => {
      totalMunicipios += monthData.length;
    });
    this.totalMunicipiosGeral = totalMunicipios;
  }

  refreshData() {
    const btn = this.refreshBtn;
    btn.classList.add('spinning');

    setTimeout(() => {
      this.loadMonth(this.currentMonth);
      btn.classList.remove('spinning');
      this.updateDateTime();
      this.showNotification('Dados atualizados!');
    }, 600);
  }

  exportData() {
    let data = [];
    let fileName = '';
    
    if (this.currentMonth === 'Todos') {
      data = this.getAllData();
      fileName = 'todos_os_meses';
    } else {
      data = this.data[this.currentMonth] || [];
      fileName = this.currentMonth.toLowerCase();
    }

    const exportData = {
      mes: this.currentMonth,
      data_exportacao: new Date().toLocaleString('pt-BR'),
      total_municipios: data.length,
      municipios: data
    };

    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conexao_dnit_${fileName}_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    this.showNotification('Dados exportados com sucesso!');
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
    this.themeToggle.innerHTML = this.isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  loadSavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDarkTheme = true;
      document.documentElement.setAttribute('data-theme', 'dark');
      this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  updateDateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeStr = now.toLocaleTimeString('pt-BR', options);
    if (this.footerUpdate) {
      this.footerUpdate.textContent = timeStr;
    }
    if (this.ultimaAtualizacao) {
      this.ultimaAtualizacao.textContent = now.toLocaleString('pt-BR');
    }
  }

  formatNumber(num) {
    if (!num || num === 0) return '0';
    if (typeof num === 'string') return num;
    return num.toLocaleString('pt-BR');
  }

  showNotification(message) {
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
}

let dashboard;
document.addEventListener('DOMContentLoaded', () => {
  dashboard = new DNITDashboard();
  window.dashboard = dashboard;
});

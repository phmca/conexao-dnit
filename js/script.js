// ============================================
// Conexão DNIT · Educação No Trânsito - Dashboard
// ============================================

class DNITDashboard {
  constructor() {
    // Dados organizados por mês
    this.data = {
      'Maio': [
        { municipio: 'Acarape', data: '20/05 - 28/05', participantes: 'Jonas Campelo', alunos: 2337, professores: 160, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Barreira', data: '20/05 - 28/05', participantes: 'Prof. Glória Maria e equipe pedagógica', alunos: 3864, professores: 216, escolas: 12, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Baturité', data: '21/05/2026', participantes: 'Prof. Lindomar Soares', alunos: 6421, professores: 361, escolas: 30, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
        { municipio: 'Chorozinho', data: '21/05/2026', participantes: 'Prefeita Célia Marinho, Prof. Lourdes e Nilo Vieira', alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Guaiúba', data: '18/05/2026', participantes: 'Prof. Carlos Paiva', alunos: 3953, professores: 216, escolas: 21, situacao: 'Convênio assinado', proxima: 'Implantação do programa' },
        { municipio: 'Mulungu', data: '21/05/2026', participantes: 'Michel Platini', alunos: 1635, professores: 93, escolas: 8, situacao: 'Convênio assinado', proxima: 'Implantação agendada para jun/26' },
        { municipio: 'Pacajus', data: '19/05/2026', participantes: 'Equipe da SME', alunos: 11966, professores: 446, escolas: 44, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
        { municipio: 'Pacatuba', data: '18/05/2026', participantes: 'Prof. Elizânio Umbelino', alunos: 11570, professores: 591, escolas: 37, situacao: 'Em análise jurídica', proxima: 'Aguardando parecer jurídico' },
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
        { municipio: 'Chorozinho', data: '20/07/2026', participantes: 'Nilo Vieira', alunos: 3284, professores: 251, escolas: 19, situacao: 'Em análise jurídica', proxima: 'Aguardando agenda para implantação do programa' },
         { municipio: 'Caucaia', data: '21/07/2026', participantes: 'Carlos Costa', agentes: 100, situacao: 'Convênio assinado', proxima: 'Aguardando agenda para implantação do programa' }
      ]
    };

    this.currentMonth = 'Todos';
    this.selectedCity = null;
    this.isDarkTheme = false;
    this.currentSort = { field: 'data', order: 'asc' };
    this.currentFilter = null;
    this.searchTerm = '';
    this.isMobile = window.innerWidth <= 768;
    this.touchTimeout = null;

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
    this.setupResizeHandler();
    
    this.loadJSPDF();
  }

  loadJSPDF() {
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
  // this.statusSemInfo = document.getElementById('statusSemInfo'); // REMOVA ESTA LINHA

  this.totalMunicipiosGeralEl = document.getElementById('totalMunicipiosGeral');
  this.mediaAlunos = document.getElementById('mediaAlunos');
  this.periodoDados = document.getElementById('periodoDados');

  this.statusItems = document.querySelectorAll('.status-item.clickable');
  this.sortableHeaders = document.querySelectorAll('th.sortable');
}

  bindEvents() {
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    this.refreshBtn.addEventListener('click', () => this.refreshData());
    this.exportBtn.addEventListener('click', () => this.exportToPDF());
    
    this.monthSelect.addEventListener('change', (e) => {
      this.loadMonth(e.target.value);
      const monthName = e.target.value === 'Todos' ? 'todos os meses' : `${e.target.value} 2026`;
      this.showNotification(`Mês alterado: ${monthName}`);
    });
    
    this.filterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.filterPanel.classList.toggle('open');
      this.filterBtn.classList.toggle('active');
      
      if (this.isMobile && this.filterPanel.classList.contains('open')) {
        setTimeout(() => {
          document.addEventListener('click', this.closeFilterOnOutsideClick.bind(this));
        }, 10);
      }
    });

    document.querySelectorAll('.filter-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
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
        
        if (this.isMobile) {
          this.filterPanel.classList.remove('open');
          this.filterBtn.classList.remove('active');
        }
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
        
        if (this.isMobile) {
          const tableCard = document.querySelector('.table-container');
          if (tableCard) {
            setTimeout(() => {
              tableCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
          }
        }
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

    if (this.tableBody) {
      this.tableBody.addEventListener('touchstart', (e) => {
        const row = e.target.closest('tr[data-municipio]');
        if (row) {
          row.style.backgroundColor = 'var(--accent-light)';
          clearTimeout(this.touchTimeout);
          this.touchTimeout = setTimeout(() => {
            row.style.backgroundColor = '';
          }, 300);
        }
      }, { passive: true });
    }
  }

  closeFilterOnOutsideClick(e) {
    if (!this.filterPanel.contains(e.target) && e.target !== this.filterBtn) {
      this.filterPanel.classList.remove('open');
      this.filterBtn.classList.remove('active');
      document.removeEventListener('click', this.closeFilterOnOutsideClick);
    }
  }

  setupResizeHandler() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.isMobile = window.innerWidth <= 768;
        this.applyFilters();
      }, 250);
    });
  }

  getAllData() {
    let allData = [];
    Object.keys(this.data).forEach(month => {
      this.data[month].forEach(item => {
        allData.push({
          ...item,
          mes: month
        });
      });
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

    // ===== SEMPRE ORDENAR POR DATA AO CARREGAR =====
    this.currentSort = { field: 'data', order: 'asc' };
    
    // Atualiza os indicadores visuais nos headers
    this.sortableHeaders.forEach(th => {
      th.classList.remove('active', 'asc', 'desc');
      if (th.dataset.sort === 'data') {
        th.classList.add('active', 'asc');
      }
    });
    
    // Atualiza os botões de filtro
    document.querySelectorAll('.filter-option').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.sort === 'data' && btn.dataset.order === 'asc') {
        btn.classList.add('active');
      }
    });

    // Ordena os dados por data (crescente) ANTES de selecionar
    const sortedData = this.sortData([...data]);

    this.renderData(data);
    this.updateSummary(data);
    this.updateStatusCounts(data);
    this.clearDetail();

    // ===== Seleciona a PRIMEIRA cidade cronologicamente (mais antiga) =====
    if (sortedData.length > 0) {
      this.selectCity(sortedData[0].municipio);
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

renderTable(data) {
  if (!this.tableBody) return;

  if (data.length === 0) {
    this.tableBody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">
          <i class="fas fa-info-circle"></i> Nenhum município encontrado
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  data.forEach((item, index) => {
    const statusClass = this.getStatusClass(item.situacao);
    const isEven = index % 2 === 0;
    const mesDisplay = this.currentMonth === 'Todos' ? `<span style="font-size:0.6rem; color:var(--text-secondary); display:block;">${item.mes}</span>` : '';
    
    const labels = [
      'municipio',
      'data',
      'participantes',
      'agentes',
      'alunos',
      'professores',
      'escolas',
      'situacao',
      'proxima'
    ];
    
    const values = [
      `${item.municipio} ${mesDisplay}`,
      item.data,
      item.participantes,
      this.formatNumber(item.agentes),
      this.formatNumber(item.alunos),
      this.formatNumber(item.professores),
      this.formatNumber(item.escolas),
      `<span class="status-badge ${statusClass}">${item.situacao}</span>`,
      item.proxima
    ];

    let rowHtml = `<tr data-municipio="${item.municipio}" onclick="dashboard.selectCity('${item.municipio}')" style="${isEven ? 'background: var(--bg-secondary);' : ''}">`;
    
    values.forEach((val, idx) => {
      const label = labels[idx];
      const labelMap = {
        'municipio': '📍 Município',
        'data': '📅 Data',
        'participantes': '👤 Participantes',
        'agentes': '👮 Agentes',
        'alunos': '🎓 Alunos',
        'professores': '👨‍🏫 Professores',
        'escolas': '🏫 Escolas',
        'situacao': '📊 Situação',
        'proxima': '➡️ Próxima Etapa'
      };
      rowHtml += `<td data-label="${labelMap[label] || label}">${val}</td>`;
    });
    
    rowHtml += '</tr>';
    html += rowHtml;
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
      
      if (this.isMobile) {
        setTimeout(() => {
          const detailCard = document.getElementById('cityDetail');
          if (detailCard) {
            detailCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      } else {
        rows[0].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
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
      <span class="detail-value" style="font-size:0.8rem;">${item.participantes}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label"><i class="fas fa-user-shield"></i> Agentes</span>
      <span class="detail-value">${this.formatNumber(item.agentes)}</span>
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
      <span class="detail-value" style="font-size:0.8rem;">${item.proxima}</span>
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
  const uniqueMunicipios = new Set();
  
  data.forEach(item => {
    uniqueMunicipios.add(item.municipio);
  });
  
  const totalMunicipios = uniqueMunicipios.size;
  const totalAgentes = data.reduce((sum, item) => sum + (item.agentes || 0), 0);
  const totalAlunos = data.reduce((sum, item) => sum + (item.alunos || 0), 0);
  const totalProfessores = data.reduce((sum, item) => sum + (item.professores || 0), 0);
  const totalEscolas = data.reduce((sum, item) => sum + (item.escolas || 0), 0);

  this.totalMunicipios.textContent = totalMunicipios;
  this.totalAlunos.textContent = this.formatNumber(totalAlunos);
  this.totalProfessores.textContent = this.formatNumber(totalProfessores);
  this.totalEscolas.textContent = this.formatNumber(totalEscolas);
  
}
  updateStatusCounts(data) {
  const counts = {
    implantado: 0,
    convenio: 0,
    analise: 0,
    apresentacao: 0
    // semInfo: 0  // REMOVA ESTA LINHA
  };

  data.forEach(item => {
    const situacao = item.situacao;
    if (situacao.includes('Implantado')) counts.implantado++;
    else if (situacao.includes('Convênio') || situacao.includes('convênio')) counts.convenio++;
    else if (situacao.includes('análise') || situacao.includes('jurídica')) counts.analise++;
    else if (situacao.includes('Apresentação') || situacao.includes('apresentação')) counts.apresentacao++;
    // else counts.semInfo++; // REMOVA ESTA LINHA
  });

  this.statusImplantado.textContent = counts.implantado;
  this.statusConvenio.textContent = counts.convenio;
  this.statusAnalise.textContent = counts.analise;
  this.statusApresentacao.textContent = counts.apresentacao;
  // this.statusSemInfo.textContent = counts.semInfo; // REMOVA ESTA LINHA
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

    // ===== SUBSTITUI "ÚLTIMA ATUALIZAÇÃO" POR "PERÍODO DOS DADOS" =====
    if (this.periodoDados) {
      if (data.length > 0) {
        // Extrai todas as datas dos registros
        const datas = data.map(item => {
          let dateStr = item.data;
          if (dateStr.includes(' - ')) {
            dateStr = dateStr.split(' - ')[0];
          }
          return dateStr;
        });
        
        // Ordena as datas
        const sortedDates = datas.sort((a, b) => {
          const partsA = a.split('/');
          const partsB = b.split('/');
          if (partsA.length === 3 && partsB.length === 3) {
            return new Date(partsA[2], partsA[1] - 1, partsA[0]) - 
                   new Date(partsB[2], partsB[1] - 1, partsB[0]);
          }
          return 0;
        });
        
        const primeiraData = sortedDates[0] || '--';
        const ultimaData = sortedDates[sortedDates.length - 1] || '--';
        
        if (primeiraData === ultimaData) {
          this.periodoDados.textContent = `${primeiraData}`;
        } else {
          this.periodoDados.textContent = `${primeiraData} - ${ultimaData}`;
        }
      } else {
        this.periodoDados.textContent = 'Sem dados';
      }
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

  // ========== EXPORTAÇÃO PARA PDF MELHORADA ==========
  exportToPDF() {
    if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
      this.showNotification('Carregando biblioteca PDF... Aguarde e tente novamente');
      this.loadJSPDF();
      setTimeout(() => {
        if (typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF !== 'undefined') {
          this.generatePDF();
        } else {
          this.showNotification('Erro ao carregar PDF. Recarregue a página.');
        }
      }, 2000);
      return;
    }
    this.generatePDF();
  }

  generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'mm', 'a4');
    
    let data = [];
    if (this.currentMonth === 'Todos') {
      data = this.getAllData();
    } else {
      data = this.data[this.currentMonth] || [];
    }

    let filteredData = [...data];
    if (this.currentFilter) {
      filteredData = filteredData.filter(item => item.situacao === this.currentFilter);
    }
    if (this.searchTerm) {
      filteredData = filteredData.filter(item => 
        item.municipio.toLowerCase().includes(this.searchTerm)
      );
    }

    filteredData = this.sortData(filteredData);

    const monthDisplay = this.currentMonth === 'Todos' ? 'Todos os Meses' : this.currentMonth;
    const title = `Conexão DNIT - Educação No Trânsito`;
    const subtitle = `Relatório de Municípios - ${monthDisplay}`;
    const dateStr = new Date().toLocaleString('pt-BR');

    const pageWidth = doc.internal.pageSize.width;
    const marginLeft = 12;
    const marginRight = 12;
    const usableWidth = pageWidth - marginLeft - marginRight;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, pageWidth / 2, 12, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(subtitle, pageWidth / 2, 19, { align: 'center' });
    
    const totalAlunos = filteredData.reduce((sum, item) => sum + (item.alunos || 0), 0);
    const totalProfessores = filteredData.reduce((sum, item) => sum + (item.professores || 0), 0);
    const totalEscolas = filteredData.reduce((sum, item) => sum + (item.escolas || 0), 0);
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const summaryText = `Municípios: ${filteredData.length}  |  Alunos: ${this.formatNumber(totalAlunos)}  |  Professores: ${this.formatNumber(totalProfessores)}  |  Escolas: ${this.formatNumber(totalEscolas)}`;
    doc.text(summaryText, pageWidth / 2, 25, { align: 'center' });
    
    doc.setFontSize(7);
    doc.setFont('helvetica', 'italic');
    doc.text(`Gerado em: ${dateStr}`, pageWidth / 2, 30, { align: 'center' });

    const tableData = filteredData.map(item => [
      item.municipio,
      item.data,
      item.participantes,
      this.formatNumber(item.alunos),
      this.formatNumber(item.professores),
      this.formatNumber(item.escolas),
      item.situacao,
      item.proxima
    ]);

    const headers = [
      'Município',
      'Data',
      'Participantes',
      'Alunos',
      'Professores',
      'Escolas',
      'Situação',
      'Próxima Etapa'
    ];

    const colWeights = [1.6, 1.0, 2.2, 0.9, 1.0, 0.8, 1.6, 2.2];
    const totalWeight = colWeights.reduce((a, b) => a + b, 0);
    const colWidths = colWeights.map(w => (w / totalWeight) * usableWidth);
    const adjustedWidths = colWidths.map(w => Math.max(w, 12));

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

    const fileName = `conexao_dnit_${this.currentMonth.toLowerCase()}_${new Date().toISOString().slice(0,10)}.pdf`;
    doc.save(fileName);
    
    this.showNotification('PDF exportado com sucesso!');
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
    
    if (this.isMobile) {
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.bottom = '16px';
    }
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Inicializar
let dashboard;
document.addEventListener('DOMContentLoaded', () => {
  dashboard = new DNITDashboard();
  window.dashboard = dashboard;
});

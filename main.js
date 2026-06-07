const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  contactDraft: 'portfolio-contact-draft',
};

const projects = [
  {
    id: 'hcj',
    title: '웹프로그래밍 과제',
    type: '웹 프로젝트',
    status: '완료',
    tags: ['web', 'done'],
    image: 'media/hjc.png',
    placeholder: 'HTML/CSS 과제',
    tech: ['HTML', 'CSS'],
    summary: 'HTML과 CSS를 사용하여 만든 정적 웹페이지입니다.',
    features: ['리스트 소개 페이지', '음성 및 영상 재생', '시간표 페이지 구현'],
    learned: '정적 페이지에서도 시맨틱 태그와 미디어 요소를 명확하게 배치하면 발표 자료처럼 흐름 있는 화면을 만들 수 있다는 점을 배웠습니다.',
    deployUrl: 'https://hcj2026.vercel.app/',
    githubUrl: 'https://github.com/wlals0693/hcj2026',
  },
  {
    id: 'pbl',
    title: '멋사 PBL과제 프로젝트',
    type: '웹 프로젝트',
    status: '완료',
    tags: ['web', 'done'],
    image: 'media/pbl.png',
    placeholder: 'PBL 과제',
    tech: ['HTML', 'CSS'],
    summary: '멋쟁이사자처럼 PBL 특강 사이트를 활용해 수행한 과제입니다.',
    features: ['PBL 과제 요구사항 구현', '페이지 구조 설계', '카드형 콘텐츠 배치'],
    learned: '요구사항을 화면 구조로 옮기는 과정에서 HTML/CSS 기본기를 더 안정적으로 다질 수 있었습니다.',
    deployUrl: 'https://pbl-one-orcin.vercel.app/',
    githubUrl: 'https://github.com/wlals0693/PBL',
  },
  {
    id: 'cbt',
    title: 'CBT 프로젝트',
    type: '프로그램',
    status: '완료',
    tags: ['program', 'done'],
    placeholder: 'CBT 시연 영상',
    tech: ['Python', 'Tkinter', 'JSON'],
    summary: '시험 기간 공지 내용을 확인하기 위해 만든 CBT 형식의 프로그램입니다.',
    features: ['JSON 형식 문제 데이터 사용', '과목 선택 후 랜덤 출제', '정답/오답 확인 및 문제 제외 기능'],
    learned: '데이터를 분리해 관리하면 문제 추가와 수정이 쉬워지고 프로그램 구조가 단순해진다는 점을 경험했습니다.',
    deployUrl: '',
    githubUrl: 'https://github.com/wlals0693/CBT',
  },
  {
    id: 'f1',
    title: 'F1 정보 소개 프로젝트',
    type: '웹 프로젝트',
    status: '진행 중',
    tags: ['web', 'progress'],
    placeholder: 'F1 시연 영상',
    tech: ['HTML', 'CSS', 'JavaScript'],
    summary: 'F1 입문자를 위한 정보 소개 웹사이트입니다.',
    features: ['F1 기본 규칙 소개', '일정 및 차량 정보 정리', '팀 정보 제공'],
    learned: '낯선 주제일수록 정보 구조와 시각적 구분이 중요하다는 점을 배웠습니다.',
    deployUrl: '',
    githubUrl: 'https://github.com/wlals0693/f1master',
  },
  {
    id: 'idea-lion',
    title: '대외활동 분석 서비스',
    type: '웹 프로젝트',
    status: '진행 중',
    tags: ['web', 'progress'],
    image: 'media/idea-lion.png',
    placeholder: '대외활동 분석 서비스',
    tech: ['HTML', 'CSS', 'JavaScript'],
    summary: '공모전과 대외활동 공고를 보고 사용자가 자신의 준비 상태를 판단하기 어려운 문제를 바탕으로 기획한 서비스입니다.',
    features: ['대외활동 공모전 공고 정보 제공', '사용자 준비 상태 확인 흐름 구성', '공고와 사용자 정보를 비교하는 서비스 구조 설계'],
    learned: '사용자에게 필요한 판단 기준을 화면 안에서 단계적으로 제시하는 방식의 중요성을 배웠습니다.',
    deployUrl: 'https://idea-lion-front.vercel.app/',
    githubUrl: '',
  },
];

const teamContents = {
  main: {
    title: '메인 홈',
    body: [
      '사이트에 처음 들어왔을 때 프로젝트 목적을 바로 이해할 수 있도록 만든 첫 화면입니다.',
      '사이버 보안 교육 사이트라는 주제가 잘 드러나도록 제목과 소개 문구를 배치하고, 필요한 페이지로 이동할 수 있도록 네비게이션을 구성했습니다.',
    ],
    points: ['프로젝트 목적을 보여주는 첫 화면', '주요 보안 기능으로 이동하는 구조', '페이지 이동을 돕는 네비게이션'],
  },
  issue: {
    title: '보안 이슈',
    body: [
      '최신 보안 기사와 보안 트렌드 영상을 확인할 수 있는 페이지입니다.',
      '뉴스와 영상을 동적으로 불러오고, 카테고리 필터와 더보기 기능을 통해 사용자가 원하는 정보를 쉽게 확인할 수 있도록 구성했습니다.',
    ],
    points: ['보안 기사 실시간 반영', '보안 트렌드 영상 제공', '필터 및 더보기 기능'],
  },
  owasp: {
    title: 'OWASP Top 10',
    body: [
      '대표적인 웹 보안 취약점인 OWASP Top 10을 학습할 수 있는 페이지입니다.',
      '취약 코드와 보안 조치 코드를 비교하며 취약점의 원리와 대응 방법을 이해할 수 있도록 구성했습니다.',
    ],
    points: ['취약 코드와 보안 코드 비교', 'XSS 및 접근 통제 실습', '무차별 대입 공격 실습'],
  },
  rules: {
    title: '보안 수칙',
    body: [
      '일상생활에서 적용할 수 있는 보안 예방 수칙을 정리한 페이지입니다.',
      '카드 클릭 시 추가 정보를 확인하고 퀴즈를 통해 보안 수칙 이해도를 확인할 수 있도록 구성했습니다.',
    ],
    points: ['보안 수칙 카드 인터랙션', '추가 정보 표시', '퀴즈 정답 확인 및 결과 출력'],
  },
  risk: {
    title: '위험 진단',
    body: [
      '사용자가 간단한 질문에 답하면서 자신의 보안 위험도를 확인할 수 있는 페이지입니다.',
      '선택한 답변을 바탕으로 위험도를 계산하고 결과에 따른 안내 메시지를 보여주는 방식으로 구성했습니다.',
    ],
    points: ['사용자 응답 기반 위험도 확인', '결과에 따른 안내 메시지 표시', '보안 습관 자가 점검 기능'],
  },
};

const teamMembers = [
  {
    name: '박형진',
    role: '팀원',
    photo: 'media/hj.jpg',
    title: '인터랙티브 보안 실습 페이지 제작',
    tasks: ['취약 코드와 보안 조치 코드 비교 구현', 'OWASP A05 XSS 및 A01 접근 통제 실습 구현', 'OWASP A07 무차별 대입 실습 구현'],
  },
  {
    name: '박시원',
    role: '팀원',
    photo: 'media/sw.jpg',
    title: '보안 수칙 페이지 JS 인터랙션 제작',
    tasks: ['보안 수칙 카드 인터랙션 기능 구현', '카드 클릭 시 추가 정보 표시 기능 개발', '보안 퀴즈 정답 확인 및 결과 출력 구현'],
  },
  {
    name: '박지민',
    role: '팀원',
    photo: 'media/jm.jpg',
    title: '보안 이슈 및 트렌드 페이지 제작',
    tasks: ['보안 기사 실시간 반영 및 필터 구현', '보안 트렌드 영상 실시간 반영 및 필터 구현', '더보기 버튼 클릭 시 추가 정보 표시 구현'],
  },
  {
    name: '최보영',
    role: '팀원',
    photo: 'media/bw.jpg',
    title: '위험진단 페이지 제작 및 메인 JS 제작',
    tasks: ['팀 소개 및 문의 페이지 JS 추가와 내용 변경', '메인 웹페이지 수정 및 JS 추가', '위험 진단 페이지 설계 및 구현'],
  },
];

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  const button = document.createElement('button');

  document.documentElement.dataset.theme = initialTheme;
  button.className = 'theme-toggle';
  button.type = 'button';
  document.body.append(button);

  const syncButton = () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    button.textContent = isDark ? '☀' : '☾';
    button.setAttribute('aria-label', isDark ? '라이트모드로 전환' : '다크모드로 전환');
    button.title = isDark ? '라이트모드로 전환' : '다크모드로 전환';
  };

  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    syncButton();
  });

  syncButton();
}

function initRevealAnimations() {
  const items = document.querySelectorAll('.reveal, .reveal-item');
  if (!items.length) return;

  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  items.forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index * 0.08, 0.36)}s`);
    observer.observe(item);
  });
}

function renderProjectMedia(project) {
  const fallback = `<span class="media-placeholder">${escapeHtml(project.placeholder || project.title)}</span>`;

  if (project.video) {
    return `<video src="${escapeHtml(project.video)}" muted playsinline preload="metadata"></video>${fallback}`;
  }

  if (project.image) {
    return `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} 이미지" onerror="this.remove()" />${fallback}`;
  }

  return fallback;
}

function renderProjectCards() {
  const list = document.querySelector('[data-project-list]');
  if (!list) return;

  list.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card reveal-item" data-project-id="${escapeHtml(project.id)}" data-tags="${escapeHtml(project.tags.join(' '))}">
          <div class="project-media">
            ${renderProjectMedia(project)}
          </div>
          <h2>${escapeHtml(project.title)}</h2>
          <div class="project-actions">
            <button class="project-button" type="button" data-project-open="${escapeHtml(project.id)}">
              자세히 보기
            </button>
          </div>
        </article>
      `,
    )
    .join('');
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('[data-project-filter]');
  const cards = document.querySelectorAll('.project-card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.projectFilter;
      buttons.forEach((item) => item.classList.toggle('active', item === button));

      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').split(' ');
        const matched = filter === 'all' || tags.includes(filter);
        card.classList.toggle('is-hidden', !matched);
      });
    });
  });
}

function createDetailBox(title, content) {
  return `
    <section class="project-detail-box">
      <h3>${escapeHtml(title)}</h3>
      ${content}
    </section>
  `;
}

function openProjectModal(projectId) {
  const dialog = document.querySelector('.project-dialog');
  const content = document.querySelector('[data-project-modal]');
  const project = projects.find((item) => item.id === projectId);
  if (!dialog || !content || !project) return;

  const tech = project.tech.map((item) => `<span class="tech-chip">${escapeHtml(item)}</span>`).join('');
  const features = project.features.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const deployButton = project.deployUrl
    ? `<a class="project-button" href="${escapeHtml(project.deployUrl)}" target="_blank" rel="noopener noreferrer">배포 링크</a>`
    : '';
  const githubButton = project.githubUrl
    ? `<a class="project-button" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub 링크</a>`
    : '';
  const video = project.video
    ? `<video class="project-dialog-player" src="${escapeHtml(project.video)}" controls playsinline></video>`
    : '';

  content.innerHTML = `
    <header>
      <h2>${escapeHtml(project.title)}</h2>
      <p class="project-dialog-meta">
        <span>${escapeHtml(project.status)}</span>
        <span>${escapeHtml(project.type)}</span>
      </p>
      <p>${escapeHtml(project.summary)}</p>
    </header>
    <div class="project-dialog-meta">${tech}</div>
    <div class="project-detail-grid">
      ${createDetailBox('주요 기능', `<ul>${features}</ul>`)}
      ${createDetailBox('배운 점 또는 특징', `<p>${escapeHtml(project.learned)}</p>`)}
      ${createDetailBox('링크', `<div class="project-dialog-actions">${deployButton}${githubButton}${!deployButton && !githubButton ? '<p>공개 링크가 없습니다.</p>' : ''}</div>`)}
    </div>
    ${video ? createDetailBox('시연 영상', video) : ''}
  `;

  dialog.showModal();
}

function initProjectModal() {
  const dialog = document.querySelector('.project-dialog');
  if (!dialog) return;

  document.querySelectorAll('[data-project-open]').forEach((button) => {
    button.addEventListener('click', () => openProjectModal(button.dataset.projectOpen));
  });

  dialog.querySelector('.modal-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    dialog.querySelectorAll('video').forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

async function initBlogPosts() {
  const list = document.querySelector('[data-blog-list]');
  if (!list) return;

  try {
    const response = await fetch('/api/blog');
    if (!response.ok) throw new Error('Blog API failed');
    const posts = await response.json();
    if (!Array.isArray(posts) || posts.length === 0) throw new Error('No posts');

    list.innerHTML = posts
      .slice(0, 3)
      .map(
        (post) => `
          <article class="blog-card reveal-item">
            <time datetime="${escapeHtml(post.date)}">${escapeHtml(post.date)}</time>
            <h3>${escapeHtml(post.title)}</h3>
            <a class="home-button" href="${escapeHtml(post.link)}" target="_blank" rel="noopener noreferrer">글 보러가기</a>
          </article>
        `,
      )
      .join('');
    initRevealAnimations();
  } catch (error) {
    list.innerHTML = '<p class="blog-status">티스토리 블로그 글을 불러오지 못했습니다.</p>';
  }
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const nameInput = form.elements.name;
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  const count = form.querySelector('[data-message-count]');
  const message = form.querySelector('[data-form-message]');

  const setMessage = (text, type) => {
    message.textContent = text;
    message.className = `form-message ${type ? `is-${type}` : ''}`;
  };

  const updateCount = () => {
    count.textContent = `${messageInput.value.length} / ${messageInput.maxLength || 500}`;
  };

  const saveDraft = () => {
    localStorage.setItem(
      STORAGE_KEYS.contactDraft,
      JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      }),
    );
    updateCount();
  };

  try {
    const savedDraft = JSON.parse(localStorage.getItem(STORAGE_KEYS.contactDraft) || '{}');
    nameInput.value = savedDraft.name || '';
    emailInput.value = savedDraft.email || '';
    messageInput.value = savedDraft.message || '';
  } catch (error) {
    localStorage.removeItem(STORAGE_KEYS.contactDraft);
  }

  updateCount();
  form.addEventListener('input', saveDraft);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      setMessage('이름, 이메일, 메시지를 모두 입력해 주세요.', 'error');
      return;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      setMessage('이메일 형식을 확인해 주세요.', 'error');
      return;
    }

    localStorage.removeItem(STORAGE_KEYS.contactDraft);
    form.reset();
    updateCount();
    setMessage('문의 내용이 저장되었습니다. 발표용 사이트라 실제 메일은 전송되지 않습니다.', 'success');
  });
}

function initTeamContentTabs() {
  const buttons = document.querySelectorAll('[data-team-tab]');
  const panel = document.querySelector('[data-team-panel]');
  if (!buttons.length || !panel) return;

  const render = (key) => {
    const content = teamContents[key] || teamContents.main;
    panel.classList.remove('is-changing');
    requestAnimationFrame(() => {
      panel.classList.add('is-changing');
      panel.innerHTML = `
        <h3>${escapeHtml(content.title)}</h3>
        ${content.body.map((text) => `<p>${escapeHtml(text)}</p>`).join('')}
        <strong>핵심 포인트</strong>
        <ul>${content.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
      `;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.toggle('active', item === button));
      render(button.dataset.teamTab);
    });
  });

  render('main');
}

function initMemberFlipCards() {
  const grid = document.querySelector('[data-member-list]');
  if (!grid) return;

  grid.innerHTML = teamMembers
    .map(
      (member) => `
        <button class="member-card flip-card reveal-item" type="button" aria-pressed="false">
          <span class="flip-card-inner">
            <span class="flip-card-face flip-card-front">
              <span class="member-role">${escapeHtml(member.role)}</span>
              <span class="member-photo">
                <img src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.name)} 사진" onerror="this.remove()" />
                <span>${escapeHtml(member.name.slice(0, 1))}</span>
              </span>
              <strong>${escapeHtml(member.name)}</strong>
            </span>
            <span class="flip-card-face flip-card-back">
              <strong>${escapeHtml(member.title)}</strong>
              <ul>${member.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join('')}</ul>
            </span>
          </span>
        </button>
      `,
    )
    .join('');

  grid.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(flipped));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    initThemeToggle();
    renderProjectCards();
    initProjectFilters();
    initProjectModal();
    initBlogPosts();
    initContactForm();
    initTeamContentTabs();
    initMemberFlipCards();
    initRevealAnimations();
  } catch (error) {
    console.error('Portfolio script error:', error);
  }
});

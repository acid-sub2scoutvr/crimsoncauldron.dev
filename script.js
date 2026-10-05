const ICONS = {
  youtube:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.2-2 9.4c-.1.7-.6.9-1.1.5l-3-2.2-1.4 1.4c-.2.2-.4.3-.7.3l.2-3.1 5.4-4.9c.2-.2 0-.3-.3-.1L7 13.5 4.1 12.6c-.7-.2-.7-.7.1-1l10.7-4.1c.7-.3 1.3.2 1 1z"/></svg>`,
  discord:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3c-.2.4-.5.9-.7 1.3a18.3 18.3 0 0 0-5.4 0A13 13 0 0 0 8.6 3a19.7 19.7 0 0 0-4.9 1.4C.5 8.5-.3 12.5.1 16.4a19.9 19.9 0 0 0 6 3c.5-.7.9-1.4 1.3-2.1-.7-.3-1.4-.6-2-1a11 11 0 0 0 .5-.4 14.2 14.2 0 0 0 12.1 0l.5.4c-.6.4-1.3.7-2 1 .4.7.8 1.5 1.3 2.1a19.9 19.9 0 0 0 6-3c.5-4.5-.7-8.5-3.5-12zM8 13.8c-1.2 0-2.1-1.1-2.1-2.4S6.8 9 8 9s2.1 1.1 2.1 2.4S9.2 13.8 8 13.8zm8 0c-1.2 0-2.1-1.1-2.1-2.4S14.8 9 16 9s2.1 1.1 2.1 2.4S17.2 13.8 16 13.8z"/></svg>`,
  github:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5.7 18.3 6 18.3 6c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/></svg>`,
  twitter:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1h3.7l-8 9.1L24 23h-7.4l-5.8-7.5L4.5 23H.8l8.6-9.8L0 1h7.6l5.2 6.8L18.9 1zm-1.3 19.8h2L6.6 3.2H4.3L17.6 20.8z"/></svg>`,
  patreon:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.82 2.41C11.57 2.41 8.93 5.05 8.93 8.3c0 3.24 2.64 5.87 5.89 5.87 3.24 0 5.88-2.63 5.88-5.87 0-3.25-2.64-5.89-5.88-5.89zM2 21.6h3.5V2.41H2V21.6z"/></svg>`,
  cashapp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`,
  tianjo:    `<svg viewBox="0 0 720 755" style="filter:grayscale(1) brightness(1.6) contrast(0.85)"><image href="https://tianjo.cc/assets/img/logo.svg" width="720" height="755"/></svg>`,
  copyparty: `<svg viewBox="0 0 300 207" style="filter:grayscale(1) brightness(1.6) contrast(0.85)"><image href="https://raw.githubusercontent.com/9001/copyparty/hovudstraum/docs/logo.svg" width="300" height="207"/></svg>`,
  zangi:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>`,
  email:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
};

async function init() {
  let cfg;
  try {
    const r = await fetch('./data.json');
    cfg = await r.json();
  } catch {
    console.error('Failed to load data.json');
    return;
  }

  if (cfg.title) document.title = cfg.title;

  if (cfg.activity_repo) startActivity(cfg.activity_repo);
  buildSocials(cfg.socials || []);
  buildContacts(cfg.contacts || []);
  buildCrypto(cfg.crypto || []);
  startClock(cfg.timezone || 'UTC', cfg.location || '');
  fetchForgejo(cfg.forgejo);
}

/* ── Activity (online status + now playing) ───────────────────── */
let _song = null;

function startActivity(repo) {
  const pollOnline = async () => {
    try {
      const r = await fetch(`https://tianjo.cc/api/v1/repos/${repo}/contents/online.json`);
      const d = await r.json();
      const online = JSON.parse(atob(d.content.replace(/\s/g, '')));
      const ageMin = (Date.now() - new Date(online.timestamp)) / 60000;
      setOnline(ageMin < 15);
    } catch {
      setOnline(false);
    }
  };

  const pollSong = async () => {
    try {
      const r = await fetch(`https://tianjo.cc/api/v1/repos/${repo}/contents/song.json`);
      const d = await r.json();
      _song = JSON.parse(atob(d.content.replace(/\s/g, '')));
    } catch {
      _song = null;
    }
  };

  pollOnline();
  pollSong();
  setInterval(pollOnline,   120_000);
  setInterval(pollSong,     600_000);
  setInterval(tickProgress,   1_000);
}

let _online = false;

function setOnline(online) {
  _online = online;
  const dot   = document.getElementById('status-dot');
  const label = document.getElementById('status-label');
  dot.className   = `status-dot ${online ? 'online' : 'offline'}`;
  label.className = `status-label ${online ? 'online' : 'offline'}`;
  label.textContent = online ? 'online' : 'offline';
}

function tickProgress() {
  const card = document.getElementById('now-card');
  const art  = document.getElementById('now-art');

  const playing = _online && _song && _song.status === 'Playing' && _song.duration;

  if (!playing) {
    card.style.display = 'none';
    return;
  }

  const liveElapsed = Math.min(
    _song.elapsed + (Date.now() - new Date(_song.timestamp)) / 1000,
    _song.duration
  );
  const progress = Math.min(liveElapsed / _song.duration, 1);
  const filled   = Math.round(progress * 20);
  const empty    = 20 - filled;

  document.getElementById('now-title').textContent    = _song.title;
  document.getElementById('now-artist').textContent   = _song.artist;
  document.getElementById('now-state').textContent    = 'now playing';
  document.getElementById('now-ascii-bar').textContent =
    `[${'#'.repeat(filled)}${'-'.repeat(empty)}] ${fmtTime(liveElapsed)} / ${fmtTime(_song.duration)}`;

  if (_song.icon) {
    const mime = _song.icon.startsWith('/9j/') ? 'image/jpeg' : 'image/png';
    art.src           = `data:${mime};base64,${_song.icon}`;
    art.style.display = '';
  } else {
    art.src           = '';
    art.style.display = 'none';
  }
  card.style.display = '';
}

function fmtTime(secs) {
  const s = Math.max(0, Math.floor(secs));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
}

/* ── Socials ──────────────────────────────────────────────────── */
function buildSocials(socials) {
  const list = document.getElementById('socials-list');
  if (!socials.length) {
    list.innerHTML = '<div class="social-item muted">no socials configured</div>';
    return;
  }
  socials.forEach(s => {
    const a = document.createElement('a');
    a.className = 'social-item';
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `<span class="s-icon">${ICONS[s.id] || ICONS.github}</span><span>${s.label}</span>`;
    list.appendChild(a);
  });
}

/* ── Contacts ─────────────────────────────────────────────────── */
function buildContacts(contacts) {
  const list = document.getElementById('contacts-list');
  if (!contacts.length) {
    list.innerHTML = '<div class="contact-item muted">no contacts configured</div>';
    return;
  }
  contacts.forEach(c => {
    const href = c.id === 'email' ? `mailto:${c.value}` : null;
    const el = document.createElement(href ? 'a' : 'div');
    el.className = 'contact-item';
    if (href) { el.href = href; }
    el.innerHTML = `
      <span class="s-icon">${ICONS[c.id] || ''}</span>
      <span class="contact-label">${esc(c.label)}</span>
      <span class="contact-value">${esc(c.value)}</span>
      <span class="c-copy">copy</span>
    `;
    el.addEventListener('click', e => {
      if (!href) e.preventDefault();
      copyText(c.value);
    });
    list.appendChild(el);
  });
}

/* ── Crypto ───────────────────────────────────────────────────── */
function buildCrypto(crypto) {
  const list = document.getElementById('crypto-list');
  if (!crypto.length) {
    list.innerHTML = '<div class="crypto-item muted">no addresses configured</div>';
    return;
  }
  crypto.forEach(c => {
    const div = document.createElement('div');
    div.className = 'crypto-item';
    div.title = 'click to copy';
    div.innerHTML = `
      <span class="c-label">${esc(c.label)}</span>
      <span class="c-addr">${esc(c.address)}</span>
      <span class="c-copy">copy</span>
    `;
    div.addEventListener('click', () => copyText(c.address));
    list.appendChild(div);
  });
}

/* ── Clock ────────────────────────────────────────────────────── */
function startClock(timezone, location) {
  const el = document.getElementById('localtime');
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    weekday: 'short',
  });
  const tick = () => {
    const parts = fmt.formatToParts(new Date());
    const get = t => parts.find(p => p.type === t)?.value ?? '';
    const tz = new Date().toLocaleString('en-US', { timeZone: timezone, timeZoneName: 'short' }).split(' ').pop();
    el.textContent = `${get('weekday')} ${get('hour')}:${get('minute')}:${get('second')} ${get('dayPeriod')} ${tz}${location ? ' -- ' + location : ''}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ── Forgejo ──────────────────────────────────────────────────── */
async function fetchForgejo(username) {
  if (!username) return;
  try {
    const r = await fetch(`https://tianjo.cc/api/v1/users/${username}`);
    if (!r.ok) throw new Error(r.status);
    const u = await r.json();

    document.getElementById('avatar').src = u.avatar_url;
    document.getElementById('display-name').textContent = u.full_name || u.login;
    document.getElementById('username').textContent = `@${u.login}`;
    if (u.description) document.getElementById('bio').textContent = u.description;
    if (u.location) document.getElementById('location').textContent = u.location;

    document.getElementById('stat-followers').textContent = fmt(u.followers_count);
    document.getElementById('stat-following').textContent = fmt(u.following_count);

    if (u.full_name) document.title = u.full_name;

    fetchStars(username);
    fetchActivity(username);
  } catch (e) {
    document.getElementById('display-name').textContent = username;
    document.getElementById('username').textContent = `@${username}`;
    console.error('Forgejo user fetch failed:', e);
    fetchActivity(username);
  }
}

async function fetchStars(username) {
  try {
    let stars = 0, repoCount = 0, page = 1;
    while (true) {
      const r = await fetch(`https://tianjo.cc/api/v1/users/${username}/repos?limit=50&page=${page}`);
      const repos = await r.json();
      if (!Array.isArray(repos) || repos.length === 0) break;
      repoCount += repos.length;
      stars += repos.reduce((sum, repo) => sum + (repo.stars_count || 0), 0);
      if (repos.length < 50) break;
      page++;
    }
    document.getElementById('stat-stars').textContent = fmt(stars);
    document.getElementById('stat-repos').textContent = fmt(repoCount);
  } catch {
    document.getElementById('stat-stars').textContent = '?';
  }
}

async function fetchActivity(username) {
  const list = document.getElementById('activity-list');
  try {
    const r = await fetch(`https://tianjo.cc/api/v1/users/${username}/activities/feeds?limit=20`);
    const events = await r.json();
    if (!Array.isArray(events)) throw new Error('bad response');

    const items = [];
    for (const ev of events) {
      const html = renderEvent(ev);
      if (html) items.push(html);
      if (items.length >= 8) break;
    }

    list.innerHTML = items.length
      ? items.join('')
      : '<div class="act-item"><span class="act-dot">.</span><span class="act-text muted">no public activity</span></div>';
  } catch {
    list.innerHTML = '<div class="act-item"><span class="act-dot">.</span><span class="act-text muted">activity unavailable</span></div>';
  }
}

function renderEvent(ev) {
  const repo = ev.repo?.full_name || '?';
  const url  = `https://tianjo.cc/${repo}`;
  const link = `<a href="${url}" target="_blank" rel="noopener">${repo}</a>`;
  const time = timeAgo(new Date(ev.created));

  let dot = '.';
  let text = '';

  switch (ev.op_type) {
    case 'commit_repo':
    case 'mirror_sync_push': {
      let n = 1;
      try { const c = JSON.parse(ev.content); n = c.Len ?? c.length ?? 1; } catch {}
      dot = '+';
      text = `pushed ${n} commit${n !== 1 ? 's' : ''} to ${link}`;
      break;
    }
    case 'star_repo':
    case 'watch_repo':
      dot = '*';
      text = `starred ${link}`;
      break;
    case 'fork_repo':
      dot = '~';
      text = `forked ${link}`;
      break;
    case 'create_repo':
      dot = '+';
      text = `created repo ${link}`;
      break;
    case 'create_branch': {
      const ref = ev.ref_name ? ` <span class="muted">${esc(ev.ref_name)}</span>` : '';
      dot = '+';
      text = `created branch${ref} in ${link}`;
      break;
    }
    case 'delete_tag':
      dot = '-';
      text = `deleted tag in ${link}`;
      break;
    case 'delete_branch':
      dot = '-';
      text = `deleted branch in ${link}`;
      break;
    case 'create_issue':
      dot = '!';
      text = `opened issue in ${link}`;
      break;
    case 'close_issue':
      dot = '!';
      text = `closed issue in ${link}`;
      break;
    case 'reopen_issue':
      dot = '!';
      text = `reopened issue in ${link}`;
      break;
    case 'comment_issue':
    case 'comment_pull':
      dot = '>';
      text = `commented in ${link}`;
      break;
    case 'merge_pull_request':
    case 'auto_merge_pull_request':
      dot = '#';
      text = `merged PR in ${link}`;
      break;
    case 'close_pull_request':
      dot = '#';
      text = `closed PR in ${link}`;
      break;
    case 'reopen_pull_request':
      dot = '#';
      text = `reopened PR in ${link}`;
      break;
    case 'approve_pull_request':
    case 'reject_pull_request':
      dot = '#';
      text = `reviewed PR in ${link}`;
      break;
    case 'publish_release': {
      const tag = ev.content ? ` <span class="muted">${esc(ev.content)}</span>` : '';
      dot = 'r';
      text = `released${tag} in ${link}`;
      break;
    }
    default:
      return null;
  }

  return `
    <div class="act-item">
      <span class="act-dot">${dot}</span>
      <span class="act-text">${text}</span>
      <span class="act-time">${time}</span>
    </div>`;
}

/* ── Dropdowns ────────────────────────────────────────────────── */
function toggleDrop(id) {
  const body   = document.getElementById(`body-${id}`);
  const arrow  = document.getElementById(`arrow-${id}`);
  const header = body.previousElementSibling;
  const isOpen = body.classList.contains('open');

  body.classList.toggle('open', !isOpen);
  arrow.classList.toggle('open', !isOpen);
  header.setAttribute('aria-expanded', String(!isOpen));
  body.setAttribute('aria-hidden', String(isOpen));
}

/* ── Lightbox ─────────────────────────────────────────────────── */
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ── Clipboard ────────────────────────────────────────────────── */
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => toast('copied')).catch(() => toast('copy failed'));
}

let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

/* ── Helpers ──────────────────────────────────────────────────── */
function fmt(n) {
  if (n == null) return '--';
  n = Number(n);
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'm';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k';
  return String(n);
}

function timeAgo(date) {
  const s = Math.floor((Date.now() - date) / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

init();

const POETRY_API_BASE = 'https://poetry-api.wujiaxuan1995.workers.dev';
const POETRY_CLIENT_KEY = 'poetry-archive-client-id';
let statsRequestVersion = 0;

function getPoetryClientId() {
  try {
    let id = localStorage.getItem(POETRY_CLIENT_KEY);
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}_${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(POETRY_CLIENT_KEY, id);
    }
    return id;
  } catch {
    return `session_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  }
}

const poetryClientId = getPoetryClientId();

async function poetryApi(path, options = {}) {
  const response = await fetch(`${POETRY_API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`poetry api ${response.status}`);
  return response.json();
}

function formatCount(value) {
  const count = Number(value || 0);
  if (count < 10000) return String(count);
  return `${(count / 10000).toFixed(count >= 100000 ? 0 : 1)}万`;
}

function ensureStatsBar(poemId) {
  const poem = reader.querySelector('.poem-wrap');
  if (!poem) return null;

  let bar = poem.querySelector('.poem-stats');
  if (!bar) {
    const meta = poem.querySelector('.poem-meta');
    if (!meta) return null;

    bar = document.createElement('div');
    bar.className = 'poem-stats';
    bar.innerHTML = `
      <span class="poem-views" aria-label="浏览次数"><span data-stats-views>—</span> 次浏览</span>
      <span class="poem-stats-separator" aria-hidden="true">·</span>
      <button class="poem-like" type="button" data-stats-like aria-pressed="false" aria-label="喜欢这首诗">
        <span class="poem-like-icon" aria-hidden="true">♡</span>
        <span data-stats-likes>—</span>
      </button>`;
    meta.appendChild(bar);
  }
  bar.dataset.poemId = poemId;
  return bar;
}

function paintStats(poemId, stats) {
  const bar = reader.querySelector(`.poem-stats[data-poem-id="${CSS.escape(poemId)}"]`);
  if (!bar) return;

  bar.querySelector('[data-stats-views]').textContent = formatCount(stats.views);
  bar.querySelector('[data-stats-likes]').textContent = formatCount(stats.likes);

  const button = bar.querySelector('[data-stats-like]');
  const icon = bar.querySelector('.poem-like-icon');
  const liked = Boolean(stats.liked);
  button.classList.toggle('is-liked', liked);
  button.setAttribute('aria-pressed', String(liked));
  button.setAttribute('aria-label', liked ? '取消喜欢这首诗' : '喜欢这首诗');
  icon.textContent = liked ? '♥' : '♡';
  bar.classList.remove('is-loading', 'is-unavailable');
}

async function loadPoemStats(poemId) {
  const version = ++statsRequestVersion;
  const bar = ensureStatsBar(poemId);
  if (!bar) return;
  bar.classList.add('is-loading');

  try {
    await poetryApi(`/api/poems/${encodeURIComponent(poemId)}/view`, {
      method: 'POST',
      body: JSON.stringify({ viewer_id: poetryClientId }),
    });
    const stats = await poetryApi(`/api/poems/${encodeURIComponent(poemId)}/stats?voter_id=${encodeURIComponent(poetryClientId)}`);
    if (version !== statsRequestVersion) return;
    paintStats(poemId, stats);
  } catch (error) {
    console.warn('poetry stats unavailable', error);
    if (version !== statsRequestVersion) return;
    bar.classList.remove('is-loading');
    bar.classList.add('is-unavailable');
  }
}

const showWorkWithoutStats = showWork;
showWork = function showWorkWithStats(id, push = true) {
  showWorkWithoutStats(id, push);
  loadPoemStats(id);
};

reader.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-stats-like]');
  if (!button || button.disabled) return;

  const bar = button.closest('.poem-stats');
  const poemId = bar?.dataset.poemId;
  if (!poemId) return;

  const liked = button.getAttribute('aria-pressed') === 'true';
  button.disabled = true;

  try {
    const stats = await poetryApi(`/api/poems/${encodeURIComponent(poemId)}/like`, {
      method: liked ? 'DELETE' : 'POST',
      body: JSON.stringify({ voter_id: poetryClientId }),
    });
    paintStats(poemId, stats);
  } catch (error) {
    console.warn('poetry like unavailable', error);
  } finally {
    button.disabled = false;
  }
});

const initialStatsId = location.hash.slice(1);
if (initialStatsId && reader.querySelector('.poem-wrap')) loadPoemStats(initialStatsId);

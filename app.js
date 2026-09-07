const storageKey = 'dark-mode-toggle-demo'
const root = document.documentElement
const toggles = document.querySelectorAll('[data-toggle]')
const icons = document.querySelectorAll('[data-icon]')
const actions = document.querySelectorAll('[data-action]')
const status = document.querySelector('[data-status]')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

const getSystemTheme = () => systemTheme.matches ? 'dark' : 'light'
const getOverride = () => {
  const value = localStorage.getItem(storageKey)
  return value === 'dark' || value === 'light' ? value : null
}
const getTheme = () => getOverride() ?? getSystemTheme()

function render() {
  const theme = getTheme()
  const target = theme === 'dark' ? 'light' : 'dark'
  const override = getOverride()

  root.dataset.theme = theme
  icons.forEach((icon) => { icon.textContent = target === 'dark' ? '☾' : '☀' })
  actions.forEach((action) => { action.textContent = `Switch to ${target}` })
  toggles.forEach((toggle) => { toggle.setAttribute('aria-label', `Switch to ${target}`) })
  status.textContent = override ? `Pinned to ${override}.` : `Following your ${getSystemTheme()} system setting.`
}

function toggleTheme() {
  const target = getTheme() === 'dark' ? 'light' : 'dark'
  if (target === getSystemTheme()) {
    localStorage.removeItem(storageKey)
  } else {
    localStorage.setItem(storageKey, target)
  }
  render()
}

toggles.forEach((toggle) => { toggle.addEventListener('click', toggleTheme) })

systemTheme.addEventListener('change', render)
render()

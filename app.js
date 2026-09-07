const storageKey = 'dark-mode-toggle-demo'
const demo = document.querySelector('[data-demo]')
const toggle = document.querySelector('[data-toggle]')
const icon = document.querySelector('[data-icon]')
const action = document.querySelector('[data-action]')
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

  demo.dataset.theme = theme
  icon.textContent = target === 'dark' ? '☾' : '☀'
  action.textContent = `Switch to ${target}`
  toggle.setAttribute('aria-label', `Switch to ${target}`)
  status.textContent = override ? `Pinned to ${override}.` : `Following your ${getSystemTheme()} system setting.`
}

toggle.addEventListener('click', () => {
  const target = getTheme() === 'dark' ? 'light' : 'dark'
  if (target === getSystemTheme()) {
    localStorage.removeItem(storageKey)
  } else {
    localStorage.setItem(storageKey, target)
  }
  render()
})

systemTheme.addEventListener('change', render)
render()

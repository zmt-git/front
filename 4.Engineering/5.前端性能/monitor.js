const pMonitor = {}

// 页面加载时间
const navTimes = performance.getEntriesByType('navigation')

const [{ domComplete }] = performance.getEntriesByType('navigation')

pMonitor.getLoadTime = domComplete
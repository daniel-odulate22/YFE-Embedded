/**
 * Logging utility for YFE Website
 * Logs to console and stores in localStorage for debugging
 */

const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

const COLORS = {
  DEBUG: '#7c3aed',
  INFO: '#0ea5e9',
  WARN: '#f59e0b',
  ERROR: '#ef4444',
};

class Logger {
  constructor() {
    this.maxLogs = 100;
    this.logs = this.loadLogs();
    this.isDevelopment = import.meta.env.DEV;
  }

  /**
   * Get timestamp in HH:MM:SS.mmm format
   */
  getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }) + `.${now.getMilliseconds().toString().padStart(3, '0')}`;
  }

  /**
   * Log a message with specified level
   */
  log(level, message, data = null) {
    const timestamp = this.getTimestamp();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };

    // Store in memory
    this.logs.push(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
    this.saveLogs();

    // Console output with styling
    const color = COLORS[level];
    const style = `color: ${color}; font-weight: bold; font-size: 12px;`;
    const message_string = data
  ? `%c[${level}] ${timestamp} - ${message}:`
  : `%c[${level}] ${timestamp} - ${message}`;

    if (data) {
      console.log(message_string, style, data);
    } else {
      console.log(message_string, style);
    }
  }

  debug(message, data) {
    if (this.isDevelopment) {
      this.log(LOG_LEVELS.DEBUG, message, data);
    }
  }

  info(message, data) {
    this.log(LOG_LEVELS.INFO, message, data);
  }

  warn(message, data) {
    this.log(LOG_LEVELS.WARN, message, data);
  }

  error(message, data) {
    this.log(LOG_LEVELS.ERROR, message, data);
  }

  /**
   * Log route change
   */
  logNavigation(from, to) {
    this.info(`Navigation: ${from} → ${to}`);
  }

  /**
   * Log component mount/unmount
   */
  logComponentLifecycle(componentName, action) {
    this.debug(`Component ${action}`, { component: componentName });
  }

  /**
   * Log API call
   */
  logApiCall(method, url, status = null) {
    if (status) {
      this.info(`API ${method} ${url}`, { status });
    } else {
      this.debug(`API ${method} ${url}`);
    }
  }

  /**
   * Save logs to localStorage
   */
  saveLogs() {
    try {
      localStorage.setItem('app_logs', JSON.stringify(this.logs));
    } catch (e) {
      console.warn('Failed to save logs to localStorage:', e);
    }
  }

  /**
   * Load logs from localStorage
   */
  loadLogs() {
    try {
      const stored = localStorage.getItem('app_logs');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Failed to load logs from localStorage:', e);
      return [];
    }
  }

  /**
   * Get all logs
   */
  getLogs() {
    return this.logs;
  }

  /**
   * Clear all logs
   */
  clearLogs() {
    this.logs = [];
    localStorage.removeItem('app_logs');
    this.info('Logs cleared');
  }

  /**
   * Export logs as JSON
   */
  exportLogs() {
    const dataStr = JSON.stringify(this.logs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `logs-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Get logs by level
   */
  getLogsByLevel(level) {
    return this.logs.filter(log => log.level === level);
  }

  /**
   * Print summary to console
   */
  printSummary() {
    console.group('%cLog Summary', 'font-size: 14px; font-weight: bold; color: #0ea5e9;');
    console.table({
      'Total Logs': this.logs.length,
      'Debug': this.getLogsByLevel(LOG_LEVELS.DEBUG).length,
      'Info': this.getLogsByLevel(LOG_LEVELS.INFO).length,
      'Warnings': this.getLogsByLevel(LOG_LEVELS.WARN).length,
      'Errors': this.getLogsByLevel(LOG_LEVELS.ERROR).length,
    });
    console.groupEnd();
  }
}

// Create singleton instance
export const logger = new Logger();

// Make available globally for console access
if (typeof window !== 'undefined') {
  window.logger = logger;
}

export default logger;

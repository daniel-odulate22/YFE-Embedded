# Logging System Guide

Your YFE Website now has a comprehensive logging system built-in. Here's how to use it:

## Features

✅ **Console Logging** - Color-coded logs in browser DevTools  
✅ **LocalStorage Persistence** - Logs stored and survive page refreshes  
✅ **Debug Console Panel** - In-app UI to view and manage logs  
✅ **Multiple Log Levels** - DEBUG, INFO, WARN, ERROR  
✅ **Route Tracking** - Automatically logs navigation events  
✅ **Component Lifecycle** - Tracks component mount/unmount  
✅ **Export Functionality** - Download logs as JSON file  

## Using the Logger

### In Code

```javascript
import { logger } from './utils/logger.js';

// Different log levels
logger.debug('Debug message', { data: 'optional' });
logger.info('Info message', { data: 'optional' });
logger.warn('Warning message', { data: 'optional' });
logger.error('Error message', { data: 'optional' });

// Specialized logging
logger.logNavigation('/from', '/to');
logger.logComponentLifecycle('MyComponent', 'mounted');
logger.logApiCall('GET', 'https://api.example.com/data', 200);
```

### In Browser Console

```javascript
// Access logs directly in console
window.logger.getLogs();

// View summary
window.logger.printSummary();

// Get logs by level
window.logger.getLogsByLevel('ERROR');

// Export logs
window.logger.exportLogs();

// Clear logs
window.logger.clearLogs();
```

## In-App Debug Console

1. **Click the "🔍 Logs" button** in the bottom-right corner
2. **Filter logs** by level (ALL, DEBUG, INFO, WARN, ERROR)
3. **View logs** with timestamps and formatted data
4. **📊 Summary** - View a table of log statistics
5. **💾 Export** - Download logs as JSON
6. **🗑️ Clear** - Clear all logs

## Log Levels

- **DEBUG** (Purple) - Development debugging info, hidden in production
- **INFO** (Blue) - General application information
- **WARN** (Yellow) - Warning messages
- **ERROR** (Red) - Error messages and exceptions

## Current Logging Points

The logger automatically tracks:

- ✓ Application startup
- ✓ Route navigation
- ✓ Component lifecycle (mount/unmount)
- ✓ Scroll events

## Adding More Logs

To add logging to your components:

```javascript
import { logger } from '../utils/logger.js';

export default function MyComponent() {
  useEffect(() => {
    logger.logComponentLifecycle('MyComponent', 'mounted');
    
    return () => {
      logger.logComponentLifecycle('MyComponent', 'unmounted');
    };
  }, []);
}
```

## Tips

- In **development mode** (`npm run dev`), DEBUG logs are enabled
- In **production build** (`npm run build`), DEBUG logs are disabled automatically
- Logs are stored in `localStorage` with a max of 100 entries
- Use `window.logger` in DevTools for quick access
- Export logs when debugging issues for analysis

---

For more information, check the logger utility at `src/utils/logger.js`

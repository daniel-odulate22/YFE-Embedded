import React, { useState, useEffect } from 'react';
import { logger } from '../utils/logger.js';

export default function DebugConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    const interval = setInterval(() => {
      const allLogs = logger.getLogs();
      if (filter === 'ALL') {
        setLogs(allLogs);
      } else {
        setLogs(allLogs.filter(log => log.level === filter));
      }
    }, 500);

    return () => clearInterval(interval);
  }, [filter]);

  const handleExport = () => {
    logger.exportLogs();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all logs?')) {
      logger.clearLogs();
      setLogs([]);
    }
  };

  const handleSummary = () => {
    logger.printSummary();
  };

  const getColorForLevel = (level) => {
    const colors = {
      DEBUG: '#7c3aed',
      INFO: '#0ea5e9',
      WARN: '#f59e0b',
      ERROR: '#ef4444',
    };
    return colors[level] || '#666';
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9998,
          padding: '10px 15px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#1f2937',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        {isOpen ? '✕ Close Logs' : '🔍 Logs'}
      </button>

      {/* Debug Console Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            width: '500px',
            maxHeight: '600px',
            backgroundColor: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '8px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
            fontFamily: 'monospace',
            fontSize: '12px',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '12px',
              borderBottom: '1px solid #374151',
              backgroundColor: '#111827',
              borderRadius: '8px 8px 0 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ margin: '0', color: '#0ea5e9', fontSize: '14px' }}>Debug Console</h3>
              <small style={{ color: '#9ca3af' }}>Total logs: {logs.length}</small>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #374151',
                  backgroundColor: '#374151',
                  color: '#fff',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                <option>ALL</option>
                <option>DEBUG</option>
                <option>INFO</option>
                <option>WARN</option>
                <option>ERROR</option>
              </select>
            </div>
          </div>

          {/* Logs Display */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '12px',
              backgroundColor: '#111827',
              color: '#d1d5db',
            }}
          >
            {logs.length === 0 ? (
              <div style={{ color: '#6b7280', fontStyle: 'italic' }}>No logs to display</div>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} style={{ marginBottom: '8px', lineHeight: '1.4' }}>
                  <span style={{ color: getColorForLevel(log.level), fontWeight: 'bold' }}>
                    [{log.level}]
                  </span>
                  {' '}
                  <span style={{ color: '#9ca3af' }}>{log.timestamp}</span>
                  {' - '}
                  <span style={{ color: '#d1d5db' }}>{log.message}</span>
                  {log.data && (
                    <div style={{ color: '#6b7280', marginLeft: '20px', marginTop: '4px' }}>
                      {typeof log.data === 'object'
                        ? JSON.stringify(log.data, null, 2)
                        : log.data}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer Buttons */}
          <div
            style={{
              padding: '12px',
              borderTop: '1px solid #374151',
              backgroundColor: '#111827',
              borderRadius: '0 0 8px 8px',
              display: 'flex',
              gap: '8px',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={handleSummary}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid #374151',
                backgroundColor: '#374151',
                color: '#d1d5db',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#4b5563')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#374151')}
            >
              📊 Summary
            </button>
            <button
              onClick={handleExport}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid #374151',
                backgroundColor: '#374151',
                color: '#d1d5db',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#4b5563')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#374151')}
            >
              💾 Export
            </button>
            <button
              onClick={handleClear}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid #ef4444',
                backgroundColor: 'transparent',
                color: '#ef4444',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#ef4444', e.target.style.color = '#fff')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#ef4444')}
            >
              🗑️ Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
}

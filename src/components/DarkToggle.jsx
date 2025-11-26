// src/components/DarkToggle.jsx
import React from 'react'

export default function DarkToggle({ onToggle }) {
    return (
        <button
            onClick={onToggle}
            style={{
                padding: '8px 12px',
                borderRadius: 8,
                border: 'none',
                background: 'rgba(255,255,255,0.04)',
                color: '#e6eef6',
                cursor: 'pointer'
            }}
        >
            Toggle Theme
        </button>
    )
}

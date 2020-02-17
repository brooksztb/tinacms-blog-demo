import React from "react"

export function EmailField({ input, meta, field }) {
  return (
    <div
      style={{
        position: `relative`,
        marginBottom: `1.5rem`,
      }}
    >
      <label
        htmFor={input.name}
        style={{
          display: `block`,
          fontSize: `0.8125rem`,
          fontWeight: `600`,
          letterSpacing: `0.01em`,
          lineHeight: `1.35`,
          color: `#433E52`,
          marginBottom: `0.5rem`,
          textOverflow: `ellipsis`,
          width: `100%`,
          overflow: `hidden`,
        }}
      >
        {field.label || field.name}
      </label>
      <div>{field.description}</div>
      <input
        type="email"
        {...input}
        style={{
          padding: `0.75rem`,
          borderRadius: `0.3rem`,
          background: `#FFFFFF`,
          backgroundColor: `rgb(255, 255, 255)`,
          fontSize: `0.9375rem`,
          lineHeight: `1.35`,
          position: `relative`,
          backgroundColor: `#FFFFFF`,
          transition: `all 85ms ease-out`,
          border: `1px solid #EDECF3`,
          width: `100%`,
          margin: `0`,
          outline: `none`,
          boxShadow: `0 0 0 2px transparent`,
        }}
      />
      <div class="field-error">{meta.error}</div>
    </div>
  )
}

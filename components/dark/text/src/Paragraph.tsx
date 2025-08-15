import React from 'react'

interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p style={{ color: '#cccccc' }}>{children}</p>
}
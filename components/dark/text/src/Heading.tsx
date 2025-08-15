import React from 'react'

interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading: React.FC<HeadingProps> = ({ children, level = 1 }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag style={{ color: '#f0f0f0' }}>{children}</Tag>
}
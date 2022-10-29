import React from 'react'
import { useLocation } from 'react-router-dom';

export default function NewsSource() {
  const { state } = useLocation();
  const { src, key } = state;
  return <iframe src={src} title={key} width="100%" height="1000"></iframe>
}

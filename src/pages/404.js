import React from "react"


export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/5-raisons-pour-apprendre-a-coder';
  }

  return null;
}
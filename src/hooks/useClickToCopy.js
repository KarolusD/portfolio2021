import * as React from 'react'

export const useClickToCopy = ({
  textToCopy,
  copiedInfoTextRef = null,
  className = 'visible',
  timeout = 2000,
}) => {
  const [copiedText, setCopiedText] = React.useState('')

  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
  // No support for IE 🥲
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopiedText(textToCopy)
      if (copiedInfoTextRef.current) {
        copiedInfoTextRef.current.classList.add(className)
        setTimeout(() => {
          copiedInfoTextRef.current.classList.remove(className)
        }, timeout)
      }
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return [copiedText, copyText]
}

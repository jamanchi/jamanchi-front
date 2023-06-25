// 현재 URL 복사
export const shareLink = () =>
  navigator.clipboard.writeText(decodeURIComponent(window.location.href));

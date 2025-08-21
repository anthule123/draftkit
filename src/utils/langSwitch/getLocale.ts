
export const getLocaleFromCookie = () => {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
    return value?.split('=')[1] || null
  }
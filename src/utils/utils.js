export const getDisableFooterBar = (pathname = '') => {
   return pathname.split('/').length <= 2
}

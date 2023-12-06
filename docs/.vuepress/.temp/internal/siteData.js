export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"随便写写\",\"description\":\"面试题，八股文，前端，js\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://pic.chitchat.top/images/favicon.ico\"}]],\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"title\":\"你的文档\",\"description\":\"繁星似海 熠熠生辉\"},\"/en/\":{\"selectLanguageName\":\"English\",\"title\":\"Comet documents\",\"description\":\"my book\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

export const themeData = JSON.parse("{\"logo\":\"logo.jpg\",\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"navbar\":[{\"text\":\"主页\",\"link\":\"/\",\"activeMatch\":\"/\"},{\"text\":\"框架\",\"children\":[{\"text\":\"React\",\"link\":\"react\"},{\"text\":\"Vue\",\"link\":\"vue\"},{\"text\":\"Node\",\"link\":\"node\"}]},{\"text\":\"基础\",\"children\":[{\"text\":\"HTML\",\"link\":\"https://1m29yg5p67.k.topthink.com/@html\"},{\"text\":\"Markdown\",\"link\":\"https://1m29yg5p67.k.topthink.com/@markdown\"},{\"text\":\"CSS\",\"link\":\"https://1m29yg5p67.k.topthink.com/@css3\"},{\"text\":\"js\",\"link\":\"/js\"}]},{\"text\":\"小破站\",\"link\":\"https://www.chitchat.top\"}],\"sidebar\":{\"/guide\":[{\"text\":\"指导\",\"children\":[\"env\",\"grammer\"],\"collapsible\":true}],\"/react\":[{\"text\":\"React\",\"children\":[\"/react/\",\"/react/basic.md\"]}],\"/js\":[{\"text\":\"Js\",\"children\":[\"/js/\",\"/js/basic.md\"]}]},\"notFound\":[\"没找到\",\"网页走丢了\"],\"backToHome\":\"回到首页\"},\"/en/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Language\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

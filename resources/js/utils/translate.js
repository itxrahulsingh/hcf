let cachedTranslations = null

const translate = (text) => {
    if (!cachedTranslations) {
        try {
            cachedTranslations = JSON.parse(localStorage.getItem("translation")) || {}
        } catch {
            cachedTranslations = {}
        }
    }
    return cachedTranslations[text] ?? text
}
export default translate

export default function SeoMeta(
    title,
    meta_title,
    meta_tags,
    meta_description,
    og_image,
    site_title
) {
    if (title) document.title = title

    const setMeta = (selector, value) => {
        if (!value) return
        const el = document.querySelector(selector)
        if (el && el.content !== value) {
            el.content = value
        }
    }

    const setLink = (selector, value) => {
        const el = document.querySelector(selector)
        if (el && el.href !== value) {
            el.href = value
        }
    }

    setMeta("meta[name='keywords']", meta_tags ?? "")
    setLink("link[rel='canonical']", window.location.href)

    setMeta("meta[property='og:site_name']", site_title ?? "")
    setMeta("meta[property='og:image']", og_image ?? "")

    setMeta("meta[name='twitter:title']", meta_title ?? "")
    setMeta("meta[name='twitter:description']", meta_description ?? "")
    setMeta("meta[name='twitter:image']", og_image ?? "")
}

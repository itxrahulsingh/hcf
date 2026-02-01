export default function humanReadableSize(sizeBytes) {
    if (!Number.isFinite(sizeBytes) || sizeBytes < 0) return "0 bytes"
    if (sizeBytes === 0) return "0 bytes"

    const units = ["bytes", "KB", "MB", "GB", "TB", "PB"]
    const index = Math.min(
        Math.floor(Math.log(sizeBytes) / Math.log(1024)),
        units.length - 1
    )

    const size = sizeBytes / Math.pow(1024, index)

    return `${size % 1 === 0 ? size : size.toFixed(2)} ${units[index]}`
}

import Swal from "sweetalert2"

export const showAlert = (title, text, confirmButtonText, confirmCallback) => {
    Swal.fire({
        title: title || "Are you sure?",
        text: text || "This action cannot be undone.",
        icon: "warning",

        showCancelButton: true,
        reverseButtons: true,
        focusCancel: true,

        confirmButtonText: confirmButtonText || "Confirm",
        cancelButtonText: "Cancel",

        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#e5e7eb",

        customClass: {
            popup: "swal-modern",
            title: "swal-title",
            htmlContainer: "swal-text",
            confirmButton: "swal-confirm",
            cancelButton: "swal-cancel",
        },
    }).then((result) => {
        if (result.isConfirmed && typeof confirmCallback === "function") {
            confirmCallback()
        }
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    async function loadComponent(id, file) {
        const element = document.getElementById(id);
        if (!element) return;

        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Could not load ${file}`);
            element.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
        }
    }

    await Promise.all([
        loadComponent("site-header", "components/header.html"),
        loadComponent("site-footer", "components/footer.html")
    ]);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const printButton = document.querySelector('.print-button') as HTMLButtonElement;

    sections.forEach(section => {
        const header = section.querySelector('.section-header') as HTMLElement;
        if (header) {
            header.addEventListener('click', () => {
                section.classList.toggle('collapsed');
            });
        }
    });

    const togglePrintMode = () => {
        document.body.classList.toggle('print-mode');
    };

    if (printButton) {
        printButton.addEventListener('click', () => {
            togglePrintMode();
            window.print();
            togglePrintMode();
        });
    }

    // Add animation delay to sections
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});


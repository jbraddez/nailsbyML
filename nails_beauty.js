const serviceConts = document.querySelectorAll('.serviceCont');
serviceConts.forEach(cont => {
    const toggleArea = cont.querySelector('.name_arrow');
    cont.addEventListener('click', (e) => {
        if (!toggleArea.contains(e.target)) return;
        const cards = cont.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.toggle('hidden');
        });
    });
});

const serviceConts = document.querySelectorAll('.serviceCont');
serviceConts.forEach(cont => {
    const nameArrow = cont.querySelector('.name_arrow');

    cont.addEventListener('click', (e) => {
        if (!nameArrow.contains(e.target) && e.target !== cont) return;

        cont.querySelectorAll('.card').forEach(card => {
            card.classList.toggle('hidden');
        });
    });
});

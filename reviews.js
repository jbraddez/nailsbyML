const reviewsData = [
    {
      stars: 5,
      description: 'Millie is amazing at what she does, my nails always look perfect after seeing her, her attention to detail is outstanding and I love them every time I leave 💗',
      author: 'Jess Wootton'
    },
    {
      stars: 5,
      description: 'Excellent service, Millie has helped my nails grow using BIAB. Her care throughout this process is impeccable. My forever nail tech.',
      author: 'Jennylee Clifford'
    },
    {
      stars: 5,
      description: 'Best in the business🫶always so professional and nails are perfect everytime!!',
      author: 'Lucy Lawson'
    },
    {
      stars: 5,
      description: '10/10 experience everytime when I visit Millie for her to do my nails , she always has the best ideas for designs couldn’t recommend enough ❤️',
      author: 'Leah McGee'
    },
    {
      stars: 5,
      description: 'Millie maintains high standards from start to finish, prep to nail art. Millie has done my nails for 2+ years, and introduced me to builder gel which started my nail growth journey. The length and strength of my nails, as well as the health of my cuticles is the best it’s ever been and that’s all down to Millie. X',
      author: 'Jodine Allum',
    },
    {
      stars: 5,
      description: 'Millie has always been fantastic with me and my nails. Started my biab journey about 3 months ago now, due my 4th months infill and I couldn’t be happier with the progress. Any design I ask for, she adapts! Absolutely amazing. Highly recommend',
      author: 'Taylor Winnett',
    },
    {
        stars: 5,
        description: 'Millie is fantastic at her work ! I have builder gel on at the moment which I love ! My natural nails are growing amazing & I have never found anyone that has been able to do my nails without them coming off or lifting badly due to my job ( hairdresser) . Highly recommend ❤️',
        author: 'Tracey Warren'
    }
  ];
  
  function renderReviews() {
    const reviewsContainer = document.querySelector('.reviews');
    const template = document.getElementById('review-template');
  
    reviewsData.forEach(review => {
      const clone = template.content.cloneNode(true);
  
      const stars = clone.querySelectorAll('.star');
      stars.forEach((star, index) => {
        if (index < review.stars) {
          star.classList.add('filled');
        }
      });
  
      clone.querySelector('.description').textContent = review.description;
      clone.querySelector('.author').textContent = `— ${review.author}`;
  
      reviewsContainer.appendChild(clone);
    });
  }
  
  renderReviews();
  
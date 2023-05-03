document.addEventListener('DOMContentLoaded', () => {
  const members = document.querySelectorAll('.member');
    members.forEach(member => {
  member.addEventListener('mouseenter', () => {
    const name = member.querySelector('.name');
      name.classList.add('name-visible');
      console.log(name.classList)
      
  });

  member.addEventListener('mouseleave', () => {
    const name = member.querySelector('.name');
    name.classList.remove('name-visible');
  });
});

});


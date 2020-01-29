window.onload=function(){
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  const items = document.querySelectorAll(".accordion a");


  navBarToggle.addEventListener('click', function () {
      console.log("hi")
      mainNav.classList.toggle('active');
  });

  function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
}
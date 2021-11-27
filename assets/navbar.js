var createNav = document.getElementById("navigation-bar")

createNav.innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item" tabindex="1">
          <a id="aboutMe" class="nav-link"  href="about-me.html">About Me</a>
        </li>
        <li class="nav-item" tabindex="2">
          <a id="portfolio" class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        &nbsp; &nbsp;
        <a href="home.html" tabindex="3"><img id="nav-logo" src="assets/images/Xingers-black-lowres.png" alt="Xingers Logo"></a>
        &nbsp; &nbsp;
        <li class="nav-item dropdown" tabindex="4">
          <div class="btn-group">
            <a id="prints" class="nav-link" href="prints.html" id="printsDropdown" role="button" aria-expanded="false">
              Prints
            </a>
            <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
              aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item" tabindex="5">
          <a id="contact" class="nav-link" href="contact.html">Get In Touch</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
      <a id="cart" class="btn btn-success" href="cart.html">Cart</a>
    </form>
    </div>
    </div>
  </nav>
  <br>
`
// Creating variable to retrieve the full url in the browser
var fullUrl = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search

// function to get the end of the url
function getEndOfURL(url) {
  return url.split('/').pop()
}

var pageNav = getEndOfURL(fullUrl)

// Using switch statement to add/remove the active class from the nav links
switch (pageNav) {
  case 'home.html':
    $('#aboutMe').removeClass('active');
    $('#portfolio').removeClass('active');
    $('#contact').removeClass('active');
    $('#prints').removeClass('active');
    break;
  case 'about-me.html':
    $('#aboutMe').addClass('active');
    $('#portfolio').removeClass('active');
    $('#prints').removeClass('active');
    $('#contact').removeClass('active');
    break;
  case 'portfolio.html':
    $('#portfolio').addClass('active');
    $('#aboutMe').removeClass('active');
    $('#prints').removeClass('active');
    $('#contact').removeClass('active');
    break;
  case 'prints.html':
    $('#prints').addClass('active');
    $('#aboutMe').removeClass('active');
    $('#contact').removeClass('active');
    $('#portfolio').removeClass('active');
    break;
  case 'pricing.html':
    $('#prints').addClass('active');
    $('#aboutMe').removeClass('active');
    $('#contact').removeClass('active');
    $('#portfolio').removeClass('active');
    break;
  case 'contact.html':
    $('#contact').addClass('active');
    $('#prints').removeClass('active');
    $('#aboutMe').removeClass('active');
    $('#portfolio').removeClass('active');
    break;
}


<?php include 'template/head.php';?> 
<body>
<style>

  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */
  
  /* Carousel base class */
  .carousel {
    margin-bottom: 4rem;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }
  
  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 25rem;
    background-color: #777;
  }
  .carousel-item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }
  
  
  /* MARKETING CONTENT
  -------------------------------------------------- */
  
  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .marketing h2 {
    font-weight: 400;
  }
  .marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
  }
  
  
  /* Featurettes
  ------------------------- */
  
  .featurette-divider {
    margin: 5rem 0; /* Space out the Bootstrap <hr> more */
  }
  
  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.05rem;
  }
  
  
  /* RESPONSIVE CSS
  -------------------------------------------------- */
  
  @media (min-width: 40em) {
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }
  
    .featurette-heading {
      font-size: 50px;
    }
  }
  
  @media (min-width: 62em) {
    .featurette-heading {
      margin-top: 7rem;
    }
  }
  .slide{
    margin: 0rem -2.37rem;
  }
  .btn-transparent{
      border: 1px solid lightblue
  }
  .projectpage-container{
    padding: 3rem 14rem;
  }
</style>
<?php include 'template/sidebar.php';?> 
<main role="main" class="col-md-8 ml-sm-auto col-lg-9 px-4">
    
<div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
               
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
               
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="container projectpage-container">
              <div class="text-center">
                <h1>Create a new Project</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-transparent" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
    
</main>
<?php include 'template/footer.php';?>  
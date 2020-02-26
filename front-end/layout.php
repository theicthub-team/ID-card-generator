<?php include 'template/head.php';?> 
<body>
<?php include 'template/header.php';?>
<main role="main">
	<style type="text/css">
		.img{
			background: url("show.jpg");
			height: 100vh ;
			background-size: cover;
		}
		.text{
			padding-left:10%; 
			padding-right:10%;
		}

	</style>

	
  <div class="row">
    <div class="img col-md-6" >
     
    </div>
    <div class="text col-md-6 m-auto text-center ">
      	<h3>A Trusted Better Account To Manage ID Card</h3>
      	<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <form >
                        <div class="form-group">
                            <input type="text" class="email form-control rounded rounded-pill border border-primary  " placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control rounded-pill border border-primary " placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary rounded-pill px-4">Log In</button>
                        </div>
                        <p class="text-muted">or</p>
                        <div class="form-group">
                            <button type="button" class="btn btn-light rounded-pill border border-primary text-primary px-4">Register</button>
                        </div>
                        <p class="text-muted">We're getting all product ready, we will email you as soon as we are ready</p>
                      
                    </form>
    </div>
   
  </div>
</main>

<?php include 'template/footer.php';?>  
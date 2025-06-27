import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div id="header" onclick="showMenu()" class="header">
            <a class="logo" id="logo" href="#">HappyPaws - PET STORE</a>
            <div class="toggle-btn">

                <input type="checkbox" id="nav-toggle"/>
                <label id="nav-toggle-label" for="nav-toggle">
                    <div main="hamburger" id="expnad" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
            </div>
            <nav  class="navbar" >
                <a class="nav-links" href="#home">HOME</a>
                <a class="nav-links" href="#pets">PETS</a>
                <a class="nav-links" href="#services">SERVICES</a>
                <a class="nav-links" href="#about">ABOUT</a>
                <a class="nav-links" href="#contact">CONTACT</a>
                </nav>
        </div>
    </div>
    <section>
        <div class="img-container">
    <div class="image home-img">
        <img class="background-img" src="images/all.jpg" alt=""/>
    </div>
    </div>
  </section>
    

<section class="pets" id="pets">
    <h2 class="heading">Pets for <span> You</span></h2>
    <div class="pets-container">
        
        <div class="pets-content">
            <img src="images/indiandog.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Indian Dog</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src='images/persiandog.jpeg' alt=""/>
            <div class="pets-layer">
                <h4>Persian Dog</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/indiancat.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Indian cat</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/persiancat.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Persian Cat</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/persiangreycat.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Grey Cat</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>
    </div>
    </section>

    
    <section class="pets" id="pets">
            <h2 class="heading">Birds for <span> You</span></h2>
            <div class="pets-container">
        <div class="pets-content">
            <img src="images/greenparrot.jpeg" alt=".images/greenparrot.jpeg"/>
            <div class="pets-layer">
                <h4>Parrot</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/whitepigeon.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Pigeon</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/colorfullparrot.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>colorfull Parrot</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/colorfulsparrow.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Sparrow</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>
    </div>
</section>

<section class="pets" id="pets">
    <h2 class="heading">Fish for <span> You</span></h2>
    <div class="pets-container">
        <div class="pets-content">
            <img src="images/catfish.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Cat Fish</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>

        <div class="pets-content">
            <img src="images/goldfish.jpeg" alt=""/>
            <div class="pets-layer">
                <h4>Gold Fish</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsum!</p>
            </div>
        </div>
    </div>
</section>


<section class="services" id="services">
  <h2 class="heading">Our <span> Services</span></h2>
  <div class="service-container">

      <div class="service-content">
         <img src="images/bathpro.jpg" alt=""/>
          <h3>Bath Product</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum temporibus deserunt
              eligendi aliquam aspernatur quas explicabo ullam aperiam quaerat! </p>
          <a href="#" class="btn">Read More</a>
      </div>
      <div class="service-content">
         <img src="images/fishfood.jpg" alt=""/>
          <h3>Food's</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum temporibus deserunt
              eligendi aliquam aspernatur quas explicabo ullam aperiam quaerat! </p>
          <a href="#" class="btn">Read More</a>
      </div>
      <div class="service-content ">
          <img src="images/birdcage.jpg" alt=""/>
          <h3>Birdcage</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum temporibus deserunt
              eligendi aliquam aspernatur quas explicabo ullam aperiam quaerat! </p>
          <a href="#" class="btn">Read More</a>
      </div>

      <div class="service-content ">
        <img src="images/fishtank.jpg" alt=""/>
        <h3>Fishtank</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum temporibus deserunt
            eligendi aliquam aspernatur quas explicabo ullam aperiam quaerat! </p>
        <a href="#" class="btn">Read More</a>
    </div>

    <div class="service-content ">
     <img src="images/toys.jpg" alt=""/>
      <h3>Toys</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum temporibus deserunt
          eligendi aliquam aspernatur quas explicabo ullam aperiam quaerat! </p>
      <a href="#" class="btn">Read More</a>
  </div>

  <div class="service-content ">
    <img src="images/catfood.jpg" alt=""/>
     <h3>Cat Food</h3>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum temporibus deserunt
         eligendi aliquam aspernatur quas explicabo ullam aperiam quaerat! </p>
     <a href="#" class="btn">Read More</a>
 </div>
  </div>
</section>

 

      <section class="about" id="about">
        <h2 class="heading">About <span>US</span></h2>
        <div class="about-container"/>
    <div class="about-content">
        
        <br/>
       <p>
       At The Pet Shop we’re proud to offer pet owners with the best selection of high-quality, nutrient-rich food & treats made with your pet’s health in mind.
       <br/>
       <br/>
       We’re a veterinarian-recommended establishment and we work directly with you to select the best products for your furry family member. 
       <br/>
       We also offer a selection of safe supplements, toys, and supplies.
       <br/>
       <br/>
       Pet owners choose us time and time again, and we can’t wait to show you why!
       <br/>
       <br/>
       Or store is located at: Shivajinagar Pune.
       <br/>
       <br/>
       Hours are 9-7pm Monday-Friday, 10-6pm Saturdays ***Closed on Sundays
       <br/><br/>
      Contact: Phn:-9807654321/Email:-abc@gmail.com</p>
   </div>
   </section>

      
      <section class="contact" id="contact">
        <h2 class="heading">Contact <span> Me!</span></h2>
        <form action="#">
            <div class="input-box">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email Address"/>
            </div>
            <div class="input-box">
                <input type="number" placeholder="Mobile Number"/>
                <input type="text" placeholder="Email Subject"/>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Send Message" class="btn"/>
        </form>
    </section>
    <footer class="footer">
      <div class="footer-text">
          <p>Copyright &copy; 2024 by Petstore| All Rights Reserved</p>
      </div>
  </footer>
    </div>
  );
}

export default App;

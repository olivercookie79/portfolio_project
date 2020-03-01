## READ ME

##  Sei35 2019/20 Final Project  				Oliver Cook


#### Portfolio Project - READ ME  v.01

#### Running the site:

Currently Heroku version is broken but this is being fixed. To run the rails version locally, download the rails project from Git Hub.

Link:  
https://github.com/olivercookie79/portfolio_project

Heroku version:

https://porfolio-final.herokuapp.com/
(portfolios page is currently broken, hopefully  fix is coming  soon)

## Introduction : Goals and MVP

#### Purpose of the Project :

The Primary Purpose of the  project was to create a Portfolio Website to showcase 3d Art, that could be maintained persistently  with updates as new works are completed.

 Most 3d Digital Artists use Artstation to now showcase their  works and this is perfectly fine  but it is nice to be able to have an independently controlled website which is designed from the ground up free from the constraints of any set templates, and can be easily upated with new works with an Admin Log-in System

The other purpose of the project is to be able to showcase 3d Art integrated in real time  using the power  of Three.JS.  Using Cloudinary to host the 3D files (as well as 2D files)  proved to be very  impressive as the final result enables the upload of 3D Models which can be displayed  instantly with no loading time, directly onto the website.

##### Using Cloudinary
Setting up Cloudinary was relatively straight  forward  as I used the  credentials from a previous exercise. For the images, they were uploaded and the path added to the seeds file.
Later will need to reload so  they can all be uploaded  directly through the site.
Adding a 3D asset proved more complex and I had assistance form Luke as this proved  a bit challenging. However this was possible and the result csan be seen by looking at the Portfolios controller.   

##### Limitations of Cloudinary  Uploads
10 MB Upload Limit with a free account.  Some 3d Models can be large and for the sample model I chose it was a case of reducing the poly count

This meant the uploads had to be under 10mb, so the 3D  file had to be optimised to be under that limit.

##### Basic Minimal Viable Product (Phase 0)
The MVP for the project was : A ‘Portfolio’ (main) page that  hosts thumbnails of latest models this was a Model, Controller and View)

Clicking on the thumbnail Image would take you to the main page  of the associated project. (Portfolios/id  route)

Model ‘Pages‘ to hold Showreel Page, Contacts Page and Blog.

##### Building from the Back End: Using Rails to build the Site.

Initial creation  using Rails to set up the Database.

This was done using Scaffolds, 2 mains models were created:
{Portfolios ( I think Projects would of been better name)
Pages: which has many for the  Showreel, Contact and Blog Pages and Forms


##### The Three.JS Pipeline


Originally, Objs  (Wave Front OBjs) were tested to export for use in Three.js . , this had some success but would not load correctly and took up too much space. Also Tarag image files (TGA)  were used for textures, but these are not native  to three.js, and are  “expensive” due to their high (16 bit) depth.  Also the original 3D model I decided to use was to large for Cloudinary, so had  to be reduced in terms of poly-count.

PNGs are more native, smaller in size, so  in the future it  will be worth trying to export this with the OBJ format, to see if that works as an alternative for GKLB/PNG.

GLTF Binary (GLB) turned out to be the best format to use,  GLTF is  the preferred  file format  for Three.js , however GLTF is not  a common export option in certain 3d Packages (such as Maya) and thus  had to be converted from an OBJ from Maya.

I used a very good  OBJ converter I found on the Web that  could convert  to GLTF but... one problem remained: with GLTF, you need to also export the texture as  as  a separate file along with  a  .bin file, and Cloudinary did not accept .bin files! So I was back to square one again…  but  I  GLB is a binary version of GLTF and did not require  a bin, also the texture file could be embedded as a PNG. This worked perfectly and I finally had  the 3d File displayed on the website!


#### To Do List  

Still alot remains to be done to get the site to the  state it needs to be in, but basic MVP and functionality is in place:

###### *Top Priority  Features for Phase 1 completeness:*


* Set up Admin Log-In to enable uploads of new works

* Make sure models are saved to the page once uploaded, as well as future folio updates.

* Ensure the Portfolios  thumbnails load up in a grid format.

* Ensure the main Page for each  project can be accessed by clicking on the thumbnail  image on the Thumbs Page

* Complete  the Showreel Page with Video Embedded.

* Complete Contact Form

* Complete Blog Page ( and start adding some Blogs!)

* Improve styling and CSS, and include  a 3D Logo on the top of the page.

* Bug: Ensure that one a model has been added, it stays on the page (At present this is deleted when re-seeded).

* Add a new front Greeting page with a 3D Model on it in an interactive turntable.

#### Conclusion:

I really wanted to get more styling completed but some time was spent figuring out the  3D Pipeline for using Three.JS and finding the best  format to use for 3d Model exports.

I am really pleased that the  3D side works so well and can  now add more models, although they might need some work to  be modified to work with 3JS (i.e optimization of model geo and  textures.)  More experimentation needs to be done in terms of qualty of final  3d Model Format used. But GLB seems like best format  to use for now.

I am looking forward to completing the site and getting it to Phase 2, with good styling and getting the  other pages (blog,contact etc)

More importantly is  getting the 3d  renders in models up to a  professional standard, with HDRI lighting ( and decent  lighting over all) , PBR Shaders and  possibly even ray tracing!
I am also looking forward to using three.js more and using it for other passion projects!

In terms of RAILS, I really like RAILS and enjoy  using to build out the basic framework, although scaffolding is very easy convenient and  time saving, it does almost too much and seems too  “magical”. I prefer to build the Routes and Models  without Scaffolding, especially as this improves understanding of how bac k end frameworks  work.

#### *Exciting things lie ahead! Stay Tuned!*

export default {
	title: 'computationalCamera',
	description: 'Taking cameras beyond image capture.',
	slug: 'ccp',
	year: '2012',
	pic: 'nav/ccp.jpg',
	html: `
		<p>This page captures my projects and work completed for <a href='http://web.media.mit.edu/~raskar/' target='blank'>Ramesh Raskar's</a> Fall 2011 <a href='http://cameraculture.media.mit.edu/Fall2011ComputationalCamera' target='blank'>MAS.531 Computational Camera and Photography</a> course. </p>
		<h4>Projects</h4>
		<ol list-style='non'>
			<li><a href='#channelmixing'>Project 1 - Channel Mixing</a></li>
			<li><a href='#lightfield'>Project 2 - LightField Photography</a></li>
			<li><a href='#multiflash'>Project 3 - Multiflash Imaging</a></li>
			<li><a href='#multichromatic'>Project 4 - Multichromatic Flash</a></li>
			<li><a href='#multichromatic_motion'>Final Project - Multichromatic Motion</a></li>
		</ol>

		<h4 id="channelmixing">Project 1 - Channel Mixing</h4>

		<p>For the first project, we've been assigned to take multiple photos, each lit differently, and then relight the image by mixing and matching the color channels.</p>
		<p>A demo set is shown below:</p>
		<img src='/images/project_pics/ccp/p1_files/relight_demo.jpg' alt='Gargoyles!' />
		<p>In the remixed image, the left-lit image is used as the blue channel while the right-lit channel is used as the red channel. </p>

		<h5>Getting Started with Cinder</h5>
		<p>To do this myself, I've chosen to use the <a href='http://libcinder.org/'>Cinder</a> library. According to their website title, Cinder is 'the library for professional-quality creative coding in C++'. Whatever that means - it's a sleek, well-documented library that provides some pretty nice tools for what we're trying to do (some simple image processing).</p>
		<p>If you're using OSX and Xcode - <a href'http://libcinder.org/docs/welcome/MacNewProject.html'>setting up Cinder</a> is incredibly easy. What's more, Cinder also offers some nice <a href='http://libcinder.org/docs/v0.8.3/guide___images.html'>introduction to image processing</a> using the framework - lucky us!. </p>
		<p>To play around with this, the first quick function I wrote was one to isolate the individual RGB channels of an image. Since the task is relatively computationally easy, I've opted to write this bit of code such that it is easy for humans to read and comprehend. The expense of that is computational elegance - it's a bit brute force - but for this task, that's fine.</p>
		<code>
void isolateChannel (Surface *surface, char color){
	Surface::Iter iter = surface->getIter( getWindowBounds() );
	
	//If you want to isolate red channel, 
	//set blue and green pixels to 0
	if (color == 'r'){
			while( iter.line() ) {
				while( iter.pixel() ) {
					iter.b() = 0;
				iter.g() = 0;
			}
		}
	}
	//If you want to isolate green channel, 
	//set blue and red pixels to 0
	if (color == 'g'){
			while( iter.line() ) {
				while( iter.pixel() ) {
					iter.b() = 0;
				iter.r() = 0;
			}
		}
	}
	//If you want to isolate blue channel, 
	//set red and green pixels to 0
	if (color == 'b'){
			while( iter.line() ) {
				while( iter.pixel() ) {
					iter.r() = 0;
				iter.g() = 0;
			}
		}
	}
}	
		</code>
		<p>The results, applied to our hard working Lego buddies, are as follows:</p>
		<img src='/images/project_pics/ccp/p1_files/lego_demo.jpg' alt='Lego!' />
		
		<h5>Taking the Photos</h5>
		<p>Since we can't rely on Lego stock images forever, lets take our own. I've taken three sets of pictures, each lit from three different directions. Many thanks to the Viral Spaces group for providing the random toys and setup materials, and of course to Sam Luescher for use of his camera. </p>
		<p>For my light source, I used a goose-neck lamp placed behind the camera. To switch the light direction, I simply bent the lamp to one side or the other.</p>
		<p>Scene 1:</p>
		<img src='/images/project_pics/ccp/p1_files/scene1.jpg' alt='Scene' />
		<p>Scene 2:</p>
		<img src='/images/project_pics/ccp/p1_files/scene2.jpg' alt='Scene' />
		<p>Scene 3:</p>
		<img src='/images/project_pics/ccp/p1_files/scene3.jpg' alt='Scene' />

		<h5>Channel Mixing</h5>
		<p>The goal at hand now is to take the three pictures in a given set, isolate one of their RGB channels, and then remix the three individual channels into a single image. There are four main functions that are used in my Cinder app to achieve this:</p>
		<ol>
			<li>setup</li>
			<li>processImage</li>
			<li>isolateChannel</li>
			<li>mergeChannels</li>
		</ol>
		<p>The setup function is used to import image resources and make function call to begin merge process. Handles the format conversion once the images are merged (simply converts the Surface objects to a Texture than can be drawn to screen)</p>
		<code>
void SurfaceBasicApp::setup(){
		Surface mySurface1 (loadImage( loadResource( 'scene1_a.jpeg' ) ) ); 
	Surface mySurface2 (loadImage( loadResource( 'scene1_b.jpeg' ) ) );
	Surface mySurface3 (loadImage( loadResource( 'scene1_c.jpeg' ) ) );
	
	Surface processedImage( processImage(mySurface1, mySurface2, mySurface3));
	mProcessedImageTex = gl::Texture( processedImage ); //Convert the Surface object to a Texture object for drawing
	
	imageWritten = 0;
}
		</code>
							
		<p>The processImage function calls the isolateChannel function for each image and subsequently calls the mergeChannels function. processImage returns the Surface object of the merged image.</p>
		<code>
Surface processImage( const Surface input1, const Surface input2, const Surface input3  ){
		// make the result be a copy of input
	Surface resultSurface1( input1.clone() );
	isolateChannel( &resultSurface1, 'r' );
	
	Surface resultSurface2( input2.clone() );
	isolateChannel( &resultSurface2, 'g' );
	
	Surface resultSurface3( input3.clone() );
	isolateChannel( &resultSurface3, 'b' );
	
	Surface resultSurface (mergeChannels(&resultSurface1, &resultSurface2, &resultSurface3));
	//Surface resultSurfaceFinal = resultSurfaceFinal;
	
	return resultSurface;
}
		</code>
							
		<p>The isolateChannel function takes a pointer to a Surface object and char as input. The char specifies which channel will be isolated 'r', 'g', or 'b'. Since a Surface pointer is given, the Surface itself is edited.</p>
		<code>
// Takes input surface and isolates either an RGB channel. char color should be 'r', 'g', or 'b'. 
void isolateChannel (Surface *surface, char color){
		Surface::Iter iter = surface->getIter( getWindowBounds() );
	
	//If you want to isolate red channel, set blue and green pixels to 0
	if (color == 'r'){
			while( iter.line() ) {
				while( iter.pixel() ) {
					iter.b() = 0;
				iter.g() = 0;
			}
		}
	}
	//If you want to isolate green channel, set blue and red pixels to 0
	if (color == 'g'){
			while( iter.line() ) {
				while( iter.pixel() ) {
					iter.b() = 0;
				iter.r() = 0;
			}
		}
	}
	//If you want to isolate blue channel, set red and green pixels to 0
	if (color == 'b'){
			while( iter.line() ) {
				while( iter.pixel() ) {
					iter.r() = 0;
				iter.g() = 0;
			}
		}
	}
}
		</code>
							
		<p>The mergeChannels function takes as input the three isolated RGB channels. It creates a new Surface object called resultSurface that will eventually become our final image. Two simple while loops are used to iterate through each line, and then each pixel, of the images. At each iteration, the RGB values from each individual channel are assigned to the resultSurface object. Once the entire result image has been composed, the Surface object is returned.</p>
							
		<code>
// Pass in the channels input1, input2, and input3, for the R,G, and B channels respectively.
Surface mergeChannels (  Surface *input1,  Surface *input2,  Surface *input3  ){
		Surface resultSurface( input1->clone() );
	Surface::Iter iterResult = resultSurface.getIter( getWindowBounds() );
	Surface::Iter iter1 = input1->getIter( getWindowBounds() );
	Surface::Iter iter2 = input2->getIter( getWindowBounds() );
	Surface::Iter iter3 = input3->getIter( getWindowBounds() );
	while( iterResult.line() && iter1.line() && iter2.line() && iter3.line() ) {
			while( iterResult.pixel() && iter1.pixel() && iter2.pixel() && iter3.pixel() ) {
				iterResult.r() = iter1.r();
			iterResult.g() = iter2.g();
			iterResult.b() = iter3.b();		
		}
	}
	return resultSurface;		
}
		</code>
								
		<h5>Results</h5>
		<p>The following diagram depicts which input images are mapped to which pixel values. For example, in Output 1, the red pixels are taken from input1, the green pixels are taken from input2, and the blue pixels are taken from input3.</p>
		<img src='/images/project_pics/ccp/p1_files/outputDiagram.jpg' alt='Scene' />
		
		<p>The results of channelMixing are shown below (in accordance to the above diagram). Please open the images in a new tab (right click or drag to tab bar in modern browsers) for to view full-size.</p>
		
		<p>Scene 1:</p>
		<img src='/images/project_pics/ccp/p1_files/scene1.jpg' alt='Scene' />
		<img src='/images/project_pics/ccp/p1_files/output1.jpg' alt='Scene' />
		
		<p>Scene 2:</p>
		<img src='/images/project_pics/ccp/p1_files/scene2.jpg' alt='Scene' />
		<img src='/images/project_pics/ccp/p1_files/output2.jpg' alt='Scene' />
		
		<p>Scene 3:</p>
		<img src='/images/project_pics/ccp/p1_files/scene3.jpg' alt='Scene' />
		<img src='/images/project_pics/ccp/p1_files/output3.jpg' alt='Scene' />

			
		<h4 id="lightfield">Project 2 - LightField Photography</h4>
		<p>Project number 2 sets us on the task of digital refocusing -- the idea is the same as the one behind the recently popular <a href='http://www.lytro.com/'>Lytro</a> camera. Digital refocusing is a technique commonly seen in <a href='http://en.wikipedia.org/wiki/Light_field'>lightfield</a> photography, which is the technique of capturing all light passing through a given surface (the camera aperture) and adjusting image parameters (focus, exposure effects, etc) in post-production.</p>
		<p> While there are many technically impressive techniques that enable lightfield photography in a single camera (<a href='http://en.wikipedia.org/wiki/Plenoptic_camera'>microlens arrays</a>, etc) the same is possible using inexpensive camera technologies and manually shifting the position of the camera for each shot. To simplify the process, many researchers opt to make <a href='http://graphics.stanford.edu/papers/CameraArray/'>large camera arrays</a> - enabling quick capture of lightfield information that allows for digital refocusing, 3D effects, and more. The former (shifting the camera) is the technique explored here for capturing lightfield information.</p>	

		<h5>Software Setup</h5>
		<p>Following from <a href='/portfolio/ccp/channelmixing'>Project 1</a>, I will again use the <a href='http://libcinder.org/'>Cinder Library</a> for my image processing needs. The general algorithm for digital refocusing is a simple one. We will take a series of pictures each horizontally offset by a fixed increment. Digital refocusing can be achieved by taking each picture, shifting the picture horizontally by some amount, and then averaging the pixel values of each image together. There are three basic functions the software performs:</p>	
		<ol>
			<li>Import the photos</li>
			<li>Shift each photo</li>
			<li>Sum the photos</li>
		</ol>
		<p>The photos are imported in the main setup() function. The two functions of interest are thus titled shiftSurf and addSurfaces. shiftSurf takes a single image file (Surface) and slides the pixels to the left or right by a value designated by the variable shiftBy. Pixels are clamped to the edge of the surface to avoid index errors when trying to shift beyond the boundary of the pixel array.</p>	
		<code>
void code_LF_shiftApp::shiftSurf(Surface *inputSurface, float shiftBy){
  Surface tempSurface( inputSurface->clone() );

  Surface::Iter iterTemp = tempSurface.getIter( getWindowBounds() );
  Surface::Iter iterInput = inputSurface->getIter( getWindowBounds() );

  while( iterTemp.line() && iterInput.line()) {
      while( iterTemp.pixel() && iterInput.pixel()) {
          iterInput.r() = iterTemp.rClamped(shiftBy,0);
          iterInput.g() = iterTemp.gClamped(shiftBy,0);
          iterInput.b() = iterTemp.bClamped(shiftBy,0);
      }
  }
}
		</code>
		<p>addSurfaces iterates through each of the shifted Surfaces and successively adds their corresponding pixel values to a final output Surface.</p>
		<code>
void code_LF_shiftApp::addSurfaces (Surface *outputSurface){
    Surface::Iter iterOutput = outputSurface->getIter( getWindowBounds() );
    while( iterOutput.line() ) {
        while( iterOutput.pixel() ) {
            iterOutput.r() = 0;
            iterOutput.g() = 0;
            iterOutput.b() = 0;
        }
    }        
    for(int ii = 0; ii<16; ii++){
        Surface currentSurf = mySurface[ii];
        Surface::Iter iterOutput = outputSurface->getIter( getWindowBounds() );
        Surface::Iter iterCurrent = currentSurf.getIter( getWindowBounds() );
        while( iterOutput.line() && iterCurrent.line()) {
            while( iterOutput.pixel() && iterCurrent.pixel()) {
                iterOutput.r() += iterCurrent.r()/16.0f;
                iterOutput.g() += iterCurrent.g()/16.0f;
                iterOutput.b() += iterCurrent.b()/16.0f;
            }
        }
    }
}
		</code>

		<h5>Test Photos</h5>
		<p><a href='http://www.eecis.udel.edu/~yu/'>Professor Jingyi Yu</a> from the University of Delaware, a leading researcher in the field of computational photography, provides a set of sample images with which this code can be tested. The picture set is available here (as of 10/06/11):  <a href='http://www.eecis.udel.edu/~yu/Teaching/CISC829_S10/handouts/toyLF.zip'> http://www.eecis.udel.edu/~yu/Teaching/CISC829_S10/handouts/toyLF.zip</a>. 256 images are provided, but for the sake of simplicity, only the top row of 16 images is used in this analysis. The first and last images in the set are shown below.</p>	
		<img src='/images/project_pics/ccp/p2_files/testImage_sample.jpg'/>
		<p>The above code yields the ability to digitally refocus this set of images. The resulting output, which confirms the algorithm used, is given below. As one can see, we can digitally focus on the background, midground, and foreground.</p>
		<img width = '600px' src='/images/project_pics/ccp/p2_files/testResults.jpg'/>

		<h5>Data Capture</h5>
		<p>To capture my own lightfield photos, I've setup a Nikon D7000 along a marked surface. The camera is shifted one inch to the right for each photo and a total of 16 photos are taken. The first and last picture of the set are shown below:</p>	
		<img src='/images/project_pics/ccp/p2_files/myImage_sample.jpg'/>	

		<h5>Results</h5>
		<p>The results from applying the above algorithm to my captured images are given below. As you can see, the large inter-image spacing results in a motion blur type effect on the out-of-focus parts. Furthermore, it gives us a very short effective depth of field, as can be seen from the fact that we can selectively focus on many foreground objects.</p>
		<img src='/images/project_pics/ccp/p2_files/lightFieldResults.jpg'/>

		<h4 id="multichromatic">Project 3 - Multichromatic Flash</h4>
		<p>Project 4 explores the realm of computational illumination. Rather than tweaking our capture parameters, we can tweak our environment parameters (in this case the camera flash) to create similarly fascinating results. The underlying principal is that we now have a camera flash that is not a single burst of white light, but discrete bursts of red, green, and then blue light in sequential order. Given that the exposure time of the shot is longer than the full sequence of red, green, and blue flashes, regular still imagery will appear no different. The three light colors will be added together such that the final result appears the same as a white-lit scene. Moving objects, however, will appear quite different. Because they will be at a different position in space at each flash color, a color trail of it's motion will appear. So the end result is thus: still objects will appear no different than if they had be shot in white light, while moving objects will have a distinct color trail detailing their motion. Importantly, the exact contour and size of the color trail can be used in interesting ways to determine properties of the motion of the object.</p>
		
		<h5>Software Setup</h5>
		<p>Unlike previous projects, where the software portion of the exercise focuses on editing the collected images, the software section here instead focusing on creating the right environment for the image collection. Namely, the software creates the temporally dynamic color flash. For a simple first approach, I used my 27' computer monitor as the flash source. This choice gave me a large, bright illumination source that could be easily controlled. Of course, the end goal is to have a stand-alone flash component that would actually connect direction to the camera, but this method will provide a good proof of concept.</p>
		<img src='/images/project_pics/ccp/p4_files/monitorFlash.jpg'/>
		<p><a href='http://www.processing.org'>Processing</a> was used to control the screen's output. A large rectangle with the same dimensions as the monitor is created and the fill color of this rectangle is then changed at some time interval. The parameter totalFlashTime allows the user to set the flash time. Each color will be flashed for one-third of this value. The result is a bit jarring to look at, but it gets the job done. The simple code that runs the flash algorithm is given below:</p>
		<code>
int totalFlashTime = 100; //In milliseconds
int stage = 1;
int x = 2560; //horizontal pixels in the screen
int y = 1440; //vertical pixels in the screen
void setup(){

size(x, y, P2D); //size of the processing window

}
void draw(){
  if(stage == 0){
    fill(255, 0, 0); //flash red
    rect(0, 0, x, y);
  }else if(stage==1){
    fill(0, 255, 0); //flash blue
    rect(0, 0, x,y);
  }else{
    fill(0, 0, 255); //flash green
    rect(0, 0, x, y);
  }
  stage = (stage+1)%3;
  delay(totalFlashTime/3); 
}
		</code>	
				
		<h5>Multichromatic Flash Results</h5>
		<p>The resulting images have the distinct motion-color effect that we hoped to see.</p>
		<img src='/images/project_pics/ccp/p4_files/multiChromFlash1.JPG'/>
		<img src='/images/project_pics/ccp/p4_files/multiChromFlash2.JPG'/>
		<img src='/images/project_pics/ccp/p4_files/multiChromFlash3.JPG'/>
		
		<p>We can see that the falling ball and crumpled pieces of paper leave a distinct color trail as opposed to just appearing blurry. In contrast, the surrounding background appears to have had standard white illumination. Small amounts of motion are easily detected, as can be seen in the first image, where the pieces of paper that have already fallen and hit the table can still be seen to have a color outline as they wiggle to a stop.</p>
		
		<p>We can also capture the motion of things that are moving in an oscillatory fashion (as opposed to just falling in one direction) - in this case, my hand and arm.  By analyzing the multiple red (or green or blue) color lines that are seen (especially in the second image), it is possible to determine the rate at which my arm was waving back and forth. </p>
		<img src='/images/project_pics/ccp/p4_files/multiChromFlash4.JPG'/>
		<img src='/images/project_pics/ccp/p4_files/multiChromFlash5.JPG'/>
					
		<p>Lastly, if we move the camera itself in the middle of an exposure, we can see that all objects will get a color-trailed blur.</p>
		<img src='/images/project_pics/ccp/p4_files/multiChromFlash6.JPG'/>
		
		<p>While these images serve as a proof-of-concept for the idea, the more interesting part comes when we start using the information constrained in these trails to calculate properties of the objects in motion (speed, acceleration, frequency, etc). Explorations in this direction will be coming in the following weeks - stay tuned.</p>
		
		<h4 id="multiflash"> Project 4 - Multiflash Imaging</h4>
		<p>Project 3 takes a look at a solution to the computer vision challenge of determining 3D objects from highly textured, complex images. The solution we'll be looking at to solve this is multi-flash imaging. A more in-depth introduction to the technique, as well as many references, can be found at Ramesh Raskar's site for <a href='http://web.media.mit.edu/~raskar/NprCamera/'>non-photorealistic imaging</a>.</p>
		
		<p> The simple principle behind this technique is to take multiple images of a scene, with each image being illuminated from a different location. This will create the effect of having multiple camera flashes located at different spots about the camera. This produces multiple images each with their own unique shadowing. The variances in this shadowing can then be used to determine 3D objects from the textured background of a scene. A quick example (as taken from Raskar's above site) can be seen by applying this technique to photographs of an engine. </p>
		<img src='/images/project_pics/ccp/p3_files/engineExample.jpeg'/>
		<p>As the last two panels show, the multi-flash technique (3rd panel) creates a clear, understandable 3D 'sketch' of the engine, while a simple edge-detection algorithm (4th panel) produces a mess of contours and textures.</p>
		<p> Furthermore, the same effect can be produced by illuminating a scene with three differently colored sources, each in a different location. By taking a single image and isolating the R,G, and B channels, three distinct shadows can be obtained and the same algorithm as used for the multi-flash technique can be applied. In this project, I explore both routes: multi-flash and multi-color.</p>

		<h5>Software Setup</h5>
		<p>Generously, much of the source code used for this project has been provided <a href='http://vision.ai.uiuc.edu/~tankh/NPRCameraSrc.tar.gz'>here</a> by <a href='http://vision.ai.uiuc.edu/~tankh/'>Kar-Han Tan</a> (also note that all of my source code for this project can be <a href='#ccp_p3_source'>downloaded below</a>). My code is Matlab based and split into three  files:</p>
		<code>
FindDepthEdges_flashes.m  //main application for the multi-flash technique
FindDepthEdges_color.m  //main application for the multi-color technique
hysteresis_thresholding.m  //implements thresholding algorithm
		</code>			
		
		
		<p>The two FindDepthEdges files setup the environment by importing the image files, rendering the appropriate grayscale bitmaps, and calling the edge-detection functions. The main difference between the two files is how they handle the initial image import. FindDepthEdges_flashes.m imports four separate images,</p>
		<code>
img1 = imread('up.jpg');
img2 = imread( 'right.jpg' );
img3 = imread( 'down.jpg' );
img4 = imread( 'left.jpg' );
		</code>
		<p>while FindDepthEdges_color.m imports a single image file and then splits the channels of that file into three distinct bitmap objects representing the red, green, and blue channels.</p>
		<code>
colorImage = imread('colorIm3.jpg'); 
imgR = colorImage(:,:,1);
imgG = colorImage(:,:,2);
imgB = colorImage(:,:,3);
		</code>

		<p> Note that in the multi-flash technique, we import four images (up, down, left, right), while we only import three for the multi-color technique (red, green, blue). The code in each FindDepthEdges file is changed accordingly to incorporate these differences. </p>
		
		<h5>Multi-flash Technique</h5>
		<p>For the multi-flash technique I used a setup fabricated by <a href='http://mit2011.luescher.org/blog/'>Sam Luescher</a> that creates an LED flash in four different locations on a one-second interval. The results of which are given below (excuse the anger - proof I usually smile: <a href='p3_files/scienceSmile.jpg'>Science!</a>)</p>
		<img src='/images/project_pics/ccp/p3_files/face_input.jpg'/>
		<p>Applying the multi-flash technique to these input photos provides the following results:</p>
		<img src='/images/project_pics/ccp/p3_files/face_results.jpg'/>
		<p>The confidence image (left panel) shows clearly the 'sketch' effect that is seen in other applications of this algorithm, while the outline image (right panel) produces a pretty good outline of my face and ignores the background texture. In the left panel, also note the detection of fine hairs at the top of my head, showing the accuracy of such a technique to determine fine qualities. The teeth show some undesired effects though as the LED flash causes a different reflection from the teeth in each image, resulting in a blurry artifact.</p>

		<h5>Multi-color Technique</h5>
		<p>For the multi-color technique, <a href='http://aydinarpa.com/'>Aydin Arpa</a> and I setup three desk lamps each with a different filter creating distinct red, green, and blue light sources. We captured images of both my hand and a conference phone that had been in our 'studio room'. Unfortunately I've found the multi-color technique to provide less desirable results that the multi-flash technique. Using only three images diminishes the quality of the results (recall we had four in the multi-flash technique) simply because we have fewer data points to help the algorithm locate edges, and moreover, our home-made RGB light studio was likely not perfectly calibrated to illuminate all contours sufficiently. Nonetheless, the results are still intriguing. The results for the multi-color illuminated hand are below:</p>
		<img width='600' src='/images/project_pics/ccp/p3_files/fakeHand.jpg'/>
		<p>The image on the left is the original input source image of my hand. The middle image is the confidence map and the third, rightmost image is the edge map that is generated. The scanned image of a hand is placed next to my real hand to show that the algorithm will not pick up edges from flat textures. The algorithm works quite well in this regard, as the outline of my hand is clearly seen in the third panel, while the scanned image of a hand produces no outline. Unfortunately, the three sources did not provide enough contour data to create a closed outline of my hand. To fix this, either the multi-flash technique needs to be used, or the RGB light sources need to be repositioned to more appropriately capture the shadow information. </p>
					
		<p>We also captured an RGB illuminated image of a conference phone. We chose this object because of it's many complex ridges, textures, and buttons. The results came out nicely as seen below.</p>
		<img src='/images/project_pics/ccp/p3_files/polycom.jpg'/>
		<p>Again, the leftmost image is the original image, the middle panel is the confidence map, and the third panel is the edge map that is generated. Also notice that, similar to the hand-image, the final edge map in the third panel does not form a closed contour map - some of the edges of the phone are missing as the shadows correlating to these edges were not completely captured. The ridges of the middle speaker are very nicely captured though, showing again the power of this algorithm to capture fine details.</p>

		<h4 id="multichromatic_motion">Project 5 - Multichromatic Motion</h4>
		<p>There are many methods for estimating the motion of objects in a captured photographic scene. Understanding the properties of moving objects in a photograph is useful for understanding a scene more thoroughly and can be used for most complex computational photography techniques, such as deblurring. The most common approach to solving this problem requires the analysis of several sequential frames from a given scene. Thus, in order to avoid losing significant information regarding the motion of the object of interest, many short-exposure captures are used.</p>
		<p>The technique of capturing many short-exposure sequential frames to com- pute optical flow introduces two main problems: 1) this technique performs poorly in low-light scenarios where longer exposures are desired, and 2) motion paths that are redundant (i.e. trace over the same location or locations) intro- duce ambiguity into the calculation of direction vectors of the moving object.</p>
		<p>One method that offers to solve such problems is to use a multichromatic illumination with single-exposure capture. That is, rather than illuminating the scene with steady white light, a multichromatic illumination source is used. This multichromatic source changes in color temporally such that objects in motion are illuminated with a different color at each position in their path. Furthermore, the colors used to illuminate the scene can be chosen such that stationary objects are illuminated equally over the red, green, and blue channels of the camera sensor, causing still objects to appear as though illuminated by white light. An example image displaying this effect can be seen below, where a falling ball produces a color streak while stationary items appear to be illuminated by white light. By controlling the dynamics of the multichromatic flash and analyzing the produced color profile, optical flow properties can be calculated.</p>

		<h5>Method</h5>
		<p>To explore this domain, a multichromatic flash system is created. The main components of this system consist of a camera, an RGB flash, and a linear actuator. Each of these components is remotely controllable.</p>
		<p>Several constrains are important to consider when choosing the camera sys- tem. Most importantly, the camera must precisely synchronize with the RGBlash. Thus, being able to accurately control the exposure time and shutter state is of high importance. Furthermore, given the controllability of the camera, the RGB flash must be similarly controllable such that the two components can be driven from a single processing unit. Thus, the state of each colored light source must be temporally controllable. An interfacing microcontroller device can then manage both components and precisely synchronize operation.</p>
		<img src='/images/project_pics/ccp/p5_files/motion_img1.jpg'/>
			
		<p>In order to obtain quantitative results, a remotely controllable linear ac- tuator is also needed. The linear actuator will serve as the moving object of interest in our captured scene. By having fine-grain control over the motion of the linear actuator, it is possible to compare the computed motion properties to the known real-world dynamics. Again, the remote controllability of the linear actuator allows us to synchronously drive the actuator to match the timing of the camera and multichromatic flash.</p>
		<p>The step-by-step routine that the microcontroller will run in order to capture the images is as follows:</p>
		<ol>
			<li>Trigger camera auto-focus</li>
			<li>Open camera shutter</li>
			<li>Begin R,G,B illumination sequence</li>
			<li>Begin linear actuator motion</li>
			<li>Close camera shutter</li>
			<li>Reset linear actuator</li>
		</ol>
		
		<h5>Implementation</h5>
		<h6>Microcontroller</h6>
		<p>An Arduino Uno microcontroller is used to control the operation of the discrete components of this test system. The Arduino Uno allows precise control over triggering the camera shutter, multichromatic flash, and linear actuator, enabling synchronous operation. The UNO can be power by a 9V battery, allowing the multichromatic flash system to operate independently of any wall- sourced power.</p>
		<h6>Camera</h6>
		<p>The camera used in this test setup is a Canon SD750. While this model does not have built-in support for external flashes, an open source library, called CHDK (Canon Hack Development Kit), enables the camera to be remotely controlled by external circuitry. Thus, using the Arduino Uno, we can simultaneously trigger the camera shutter and multichromatic flash independently, in effect granting external-flash capability.</p>
				
		<p>In order to interface the Camera to the Arduino board, a USB cable is used. One side of the USB cable is cut and the individual pins are tied to digital IO pins on the Arduino board. The other side of the cable is connected to the standard camera USB port.</p>
		<h6>Multichromatic Flash</h6>
		<p>Three Luxeon Rebel LEDs are used to create the multichromatic (in this case, tri-color) flash. Warm-white LEDs are used and red, green, and blue filter sheets are placed over each LED. The LEDs are driven by a simple switching circuit that interfaces to the Arduino board. Each LED can be turned on and off independently of the other LEDs.</p>
		<img src='/images/project_pics/ccp/p5_files/motion_img2.jpg'/>
		<h6>Linear Actuator</h6>
		<p>The linear actuator is used to create a repeatable motion for a controlled setup over many captures. A motorized potentiometer is used. A bracket is driven by a DC motor, which is controlled by an Arduino board, and the position of the bracket is given as a potentiometer reading. Thus, a feedback loop can be designed to drive the bracket to any position. One challenge associated with this technique is defining a known speed for the moving bracket. While the DC motor can only control the speed of the bracket through a PWM value. There is no obvious correlation to any real unit scale. To overcome this challenge, a series of PWM settings were chosen and tested for their associated speeds. A software timer is used to measure the time taken to travel the entire length of the linear actuator. The measured time is averaged over many runs for a given setting and the corresponding speed can be determined. Furthermore, using this data, a photo can be produced that captures the full range of motion by choosing a travel time that matches the exposure time of the camera.</p>
		<img src='/images/project_pics/ccp/p5_files/motion_img3.jpg'/>
		<img src='/images/project_pics/ccp/p5_files/motion_img4.jpg'/>
		<h6>Enclosure</h6>
		<p>An enclosure is fabricated to hold the components involved in the system, ex- cluding the linear actuator. The Arduino board, LED driving circuitry, and RGB LEDs are contained by the enclosure. A simple snap-fit box design is used.</p>
		<img src='/images/project_pics/ccp/p5_files/motion_img5.jpg'/>
		<p>The box conveniently hides away many of the more cumbersome components, and has a clean two-cable interface on it\u2019s rear consisting of the camera USB cable and a cable to connect to the linear actuator.</p>
		<h6>Full System</h6>
		<img src='/images/project_pics/ccp/p5_files/motion_img6.jpg'/>
		
		<h5>Results</h5>
		<p>The final system uses an exposure time of 1.5 seconds and the images are cap- tured in a low-light setting. Comparing these two images, the ad- ditional information carried in the multichromatic flash image can be clearly appreciated.</p>
		<img src='/images/project_pics/ccp/p5_files/motion_img7.jpg'/>
		<h6>Image Processing</h6>
		<p>Matlab is used to perform the image processing tasks required to compute the motion properties of the object in this capture. The code used to perform this analysis can be found in Section 7. To prepare the images for calculation, a simple list of operations is performed:</p>
		<ol>
			<li>Channel isolation</li>
			<li>Black/White Thresholding </li>
			<li>Hole Filling</li>
			<li>Blob Isolation</li>
		</ol>
		<p>After these steps are performed, we have three distinct blobs that represent the blurred position of the moving object at the three time intervals. The ex- trema and centroid of these blobs can then be calculated in order to analyze the positional differences that will allow the calculation of optical flow properties. Each of these steps, as well as the extrema and centroid calculation are shown below. Given that we know certain properties of the system, such as the order in which the illumination sources are triggered and the duration for which they remain on, we can begin to analyze the motion of the object.</p>
		<img src='/images/project_pics/ccp/p5_files/motion_img8.jpg'/>
		<h6>Direction</h6>
		<p>The most obvious claim that can be made from this data is the direction of motion. By taking the centroid positions of each blob, we can calculate and draw a direction vector that connects the start and end positions. A vector from the red-centroid to the blue-centroid can be drawn, or more fine grain detail can be gathered by using the intermediary green-centroid to produce two direction vectors: one for the first interval of travel and one for the second. See image below.</p>
		
		<h6>Length</h6>
		<p>Given the position of each blob centroid, we are able to determine the lengths of each vector connecting the three regions. These lengths are the first step in determining properties such as speed and acceleration. The lengths of the given vectors, in pixels, for the sample image being used are shown below.</p>
		<h6>Speed</h6>
		<p>Using the known timing of the individual LED flashes and the length of each motion vector. We can now trivially calculate the velocity of the blob at each stage of its motion. Note that because we are calculating from the center of each blob, we effectively lose the first sixth and last sixth of total motion in this calculation. The speed values calculated for the sample image is shown below.</p>
		<img width='400px' src='/images/project_pics/ccp/p5_files/motion_img9.jpg' style='padding-left: 100px'/>
		<h6>Acceleration</h6>
		<p>Finally, as can be inferred from the differing vector lengths, the linear actuator does not have a uniform velocity throughout its path. Thus, there is some accel- eration term that can be similarly calculated. Knowledge of the flash timing is again leveraged and an average acceleration term for the period of time between the red and blue LED firing can be calculated. </p>
	`,
};

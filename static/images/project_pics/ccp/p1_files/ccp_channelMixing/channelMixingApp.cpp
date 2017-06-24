#include "cinder/app/AppBasic.h"
#include "cinder/ImageIo.h"
#include "cinder/gl/gl.h"
#include "cinder/gl/Texture.h"

using namespace ci;
using namespace ci::app;
using namespace std;

class SurfaceBasicApp : public AppBasic {
public:
	void prepareSettings( Settings *settings );
	void	setup();
	void	draw();	
	
	
	gl::Texture		mProcessedImageTex;
	bool imageWritten;
};


void SurfaceBasicApp::prepareSettings( Settings *settings ){
    settings->setWindowSize( 500, 334 );
    //settings->setFrameRate( 60.0f );
}

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


// Returns a Surface of the same dimensions as 'inputSurface'
Surface processImage( const Surface input1, const Surface input2, const Surface input3  )
{
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

//*********************//

void SurfaceBasicApp::setup()
{
	Surface mySurface1 (loadImage( loadResource( "lego.jpeg" ) ) ); 
	Surface mySurface2 (loadImage( loadResource( "lego.jpeg" ) ) );
	Surface mySurface3 (loadImage( loadResource( "lego.jpeg" ) ) );
	
	Surface processedImage( processImage(mySurface1, mySurface2, mySurface3));
	mProcessedImageTex = gl::Texture( processedImage ); //Convert the Surface object to a Texture object for drawing
	
	imageWritten = 0;
}

void SurfaceBasicApp::draw()
{
	gl::draw( mProcessedImageTex, getWindowBounds() ); //Draw Texture object to screen
	
	if(!imageWritten){ //if the image has not been written yet...
		writeImage("output.jpg",copyWindowSurface()); //write it
		imageWritten=1; //Toggle bool to say it's been written
	}
}

// This line tells Cinder to actually create the application
CINDER_APP_BASIC( SurfaceBasicApp, RendererGl )

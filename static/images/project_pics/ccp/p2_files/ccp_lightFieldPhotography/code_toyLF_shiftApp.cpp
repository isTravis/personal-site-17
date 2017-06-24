#include "cinder/app/AppBasic.h"
#include "cinder/ImageIo.h"
#include "cinder/gl/gl.h"
#include "cinder/gl/Texture.h"
#include <sstream>

using namespace ci;
using namespace ci::app;
using namespace std;

class code_LF_shiftApp : public AppBasic {
  public:
    void shiftSurf(Surface *inputSurface, float shiftBy);
    void addSurfaces (Surface *outputSurface);
	void setup();
	void update();
	void draw();
    void prepareSettings( Settings *settings );
    void keyDown( KeyEvent event );

    
    gl::Texture		mProcessedImageTex;
    int numPics;
    Surface *mySurface;
    float shiftSurfVal;
   

};


void code_LF_shiftApp::prepareSettings( Settings *settings ){
     settings->setWindowSize( 800, 530 );
     shiftSurfVal = 0.0f;
}


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


void code_LF_shiftApp::setup()
{
    numPics = 16;
    mySurface = new Surface[16];
    
    //Load the pictures
    std::stringstream ss;
    for(int ii = 1; ii<numPics+1; ii++){
        ss.str("");
        ss << "hightoys" << std::setw( 2 ) << std::setfill( '0' ) <<ii << ".JPG";
        cout << ss.str() << endl;
        mySurface[ii-1] = (loadImage( loadResource(ss.str()) ) ); 
    }
        
    for(int ii = 0; ii<numPics; ii++){
        shiftSurf(&mySurface[ii],shiftSurfVal*ii+ii);
    }

    Surface outputSurface (800,530,true);
    addSurfaces(&outputSurface);
    
    
    mProcessedImageTex = gl::Texture( outputSurface );
}




void code_LF_shiftApp::keyDown( KeyEvent event )
{
	if( event.getChar() == 'l' ) { //Little Shift Left
		shiftSurfVal += 0.25f;
        setup();
	}
	else if( event.getChar() == 'r' ) { //Little Shift Right
        shiftSurfVal -= .25f;
        setup();
    }
    else if( event.getChar() == 'k' ) {//Big Shift Left
        shiftSurfVal += 2.5f;
        setup();
    }
    else if( event.getChar() == 'e' ) {//Bit Shift Right
        shiftSurfVal -= 2.5f;
        setup();
    }
    else if( event.getChar() == 'w' ) {//write it - Make sure to change the path to something meaningful
        writeImage("/Users/Travis/Desktop/output.jpg",copyWindowSurface()); 
    }
}



void code_LF_shiftApp::update()
{
}

void code_LF_shiftApp::draw()
{
	// clear out the window with black
	gl::clear( Color( 0, 0, 0 ) ); 
    gl::draw( mProcessedImageTex, getWindowBounds());
}


CINDER_APP_BASIC( code_LF_shiftApp, RendererGl )

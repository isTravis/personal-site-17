colorImage = imread('colorIm3.jpg'); %Choose one of the three included 'colorIm' files
imgR = colorImage(:,:,1);
imgG = colorImage(:,:,2);
imgB = colorImage(:,:,3);


% make gray scale images
gimgR = mean( imgR, 3 ); mean1 = mean(gimgR(:));
gimgG = mean( imgG, 3 ); mean2 = mean(gimgG(:));
gimgB = mean( imgB, 3 ); mean3 = mean(gimgB(:));


all_mean = mean( [mean1; mean2; mean3] );

% normalize intensities
gimgR = gimgR *all_mean/mean1;
gimgG = gimgG *all_mean/mean2;
gimgB = gimgB *all_mean/mean3;

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%========== Start of Depth Edge Detection Algorithm 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% max color and gray images
maxrgbimg = max( max(imgR, imgG), imgB );
maximg = max( max( gimgR, gimgG ),gimgB );

% compute ratio images
r1 = (gimgR+5) ./ (maximg+5);
r2 = (gimgG+5) ./ (maximg+5);
r3 = (gimgB+5) ./ (maximg+5);

imwrite(r1, 'r1.bmp' );
imwrite(r2, 'r2.bmp' );
imwrite(r3, 'r3.bmp' );

% compute confidence map
v = fspecial( 'sobel' );
h = v';
d2 = imfilter( r2, h );
d1 = imfilter( r1, v );
d3 = imfilter( r3, v );
silhouette1  = d1 .* (d1>0);      %Keep only negative transition in left image
silhouette2 = abs( d2 .* (d2<0) );%Keep only negative transition in left image
silhouette3 = abs( d3 .* (d3<0) );


confidence = max(max(silhouette1,  silhouette2), silhouette3);
imwrite( confidence, 'confidence.bmp');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%========== End of Depth Edge Detection Algorithm 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% threshold confidence map to get in Canny style edges of depth map
low_thresh = 0.5;
hi_thresh = 1.0;
edges1 = hysteresis_thresholding( silhouette1, low_thresh, hi_thresh );
edges2 = hysteresis_thresholding( silhouette2, low_thresh, hi_thresh );
edges3 = hysteresis_thresholding( silhouette3, low_thresh, hi_thresh );

edges = edges1 | edges2 | edges3;

% save results in BMP files 
imwrite( maxrgbimg, 'max.bmp' );
imwrite( edges, 'edges.bmp' );
imwrite( confidence, 'confidence.bmp');

% display results 
figure(1)
imshow(maxrgbimg);
figure(2)
imshow(1-confidence);
figure(3);
imshow(edges);



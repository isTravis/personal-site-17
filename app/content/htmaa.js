export default {
	title: 'howToMake ___',
	description: 'Projects for How To Make Almost Anything 2013.',
	slug: 'htmaa',
	year: '2012',
	pic: 'nav/htmaa.jpg',
	html: `
		<p>This page captures my projects built for <a href='http://ng.cba.mit.edu/'>Neil Gershenfeld's</a> Fall 2012 <a href='http://fab.cba.mit.edu/classes/863.12/'>MAS.863 How To Make (Almost) Anything</a> course.</p>
		<p><a href='http://fab.cba.mit.edu/classes/863.12/people/travis.rich/index.html'>This work is also documented on the fab.cba.mit server</a>.</p>
		<ul>
			<li><a href="#week1">Week 1 Proposal</a></li>
			<li><a href="#week2">Week 2 Press Fit</a></li>
			<li><a href="#week3">Week 3 FabISP</a></li>
			<li><a href="#week4">Week 4 3D</a></li>
			<li><a href="#week5">Week 5 PCB</a></li>
			<li><a href="#week6">Week 6 Casting</a></li>
			<li><a href="#week7">Week 7 ATtiny</a></li>
			<li><a href="#week8">Week 8 Big</a></li>
			<li><a href="#week9">Week 9 Input</a></li>
			<li><a href="#week10">Week 10 Epoxy</a></li>
			<li><a href="#week11">Week 11 Output</a></li>
			<li><a href="#week12">Week 12 Interface</a></li>
			<li><a href="#week13">Week 13 Network</a></li>
			<li><a href="#week14">Week 14 Machine</a></li>
			<li><a href="#week15">Week 15 Final</a></li>
		</ul>

		<h4 id="week1"> week 1 -- 9/12/12 </h4>
		<p>When thinking about potential final projects, it's hard to settle on a single thing. This is especially true knowing that what I know will change over the course of the semster - so predefining what I'll be building at the end seems a bit daunting.</p>
		<p>What I have been able to figure out though is that the projects I keep thinking share a few common attributes. In a final project, I'd like to build something that has the following qualities:</p>
		<ul>
			<li>Locomotes</li>
			<li>Has a Personality (face)</li>
			<li>Communication Magic (inspires a feeling of 'how did it know that?')</li>
		</ul>
		<h5>Mini Monster Military</h5>
		<p>A fleet of tiny (friendly) monsters that can locomote themselves and communicate amongst themselves. A monster can send requests like 'head north!' and all monsters in the troop will move in the same direction. Or perhaps - they could communicate combat moves: 'do an awkward dance!' and they'll all squirm the same goofy dance.</p>
		<img src='/images/htmaa_img/w1_armyOut.jpg' />
		<img class='smallimg' src='/images/htmaa_img/w1_robotAssem.gif' width='250px'/>
		<h5>Febrezer</h5>
		<p>Capable of detecting sounds akin to methane generation, localizing the source of the sound and locomoting itself into the afflicted zone to dispense air freshener. </p>
		<h5>Conversation Anti-Awkwarder</h5>
		<p>Detects sudden drops in the loudness of conversations and is capable of applying social recovery techniques. In 'dinner-conversation' mode, the Anti-Awkwarder will listen to a conversation and detect a sharp drop in noise level - indicating that uncomfortable situation where everyone has run out of witty things to say. At this point, the anti-awkwarder will deliver a controversial statement ('Did you hear they faked the moon landings because JKF was a Scientologist?'), to spark emotions and conversation. </p>
		<p>In 'joke' mode, the anti-awkwarder will listen to conversations to detect sharp drop offs in conversation noise level, indicating a joke falling flat on its face. At this point, the anti-awkwarder will remedy the situation by providing supportive laughter or a sad trombone - depending on it's mood. </p>
		<img src='/images/htmaa_img/w1_TeamBots.png' />
		<img src='/images/htmaa_img/w1_AntiBot.png' />
		<h5>Method of Locomotion</h5>
		<p>I'm also interested in building a means of locomotion that is highly entertaining (read: goofy, inefficient, irregular). Standard wheels or treads seem a bit too easy and useful - so I plan to look at some novel ways of moving the little bots. A bit of inspiration comes from Sid's toys in Toy Story. Toys that have been smashed together with whatever is lying around, and as a result, have a unique personality and mode of operation.</p>
		<img src='/images/htmaa_img/w1_sid_toys.jpg' />
		<h5>Required Techniques</h5>
		<p>Part of my motivation for this type of project comes from the wide range of capabilities needed. Each of the How to Make modules would be demonstrated. Sensing, output, and communication would be used to let the bots interact with each other and with people - while electronics, 3D printing, and mechanical design would be required for building something that actually moves and functions. </p>

		<h4 id="week2">week 2 -- 9/17/12</h4>
		<h5>Ideation</h5>
		<p>I've had the same eyeglass frames since I was 12. Frames that are too small for my head, make me look like Harry Potter, and have that annoying bend in them from being sat on in 9th grade. So for this week's project I decided to make a press-fit glasses kit. While the idea started out as a bunch of different frame styles, it quickly devolved into the 3rd grade giddyness of a Mr. Potato-head style kit. I set out to build a glasses kit with attachable eyebrows, mustaches, and wonky frames. The Harry Potter thing has gotten me pretty far, so why no try out Mr. Potato Head.</p>
		<img src='/images/htmaa_img/w2_pressfit_00.png' />
		<h5>Design</h5>
		<p>Before cutting out each of the parts, I ran a few test cuts to determine a nice press-fit slot width. I got advice to shoot around 4mm from the MAS863 mailing list, but tested a range of sizes from 3 to 5 mm. I decided I liked the feel of the 3.9mm slot the best, but it seemed like everything from 3.8 to 4.2 gave a pretty snug fit. To get the general dimensions of the different parts, I took a ruler and roughly measured my facial features: the length from the top of my nose to the side of my head, length from the side of my head to the back of my ear, and the width and length of my nose for the mustache attachments. </p>
		<p>The final kit contains frames, eyebrows, mustaches, temple arms, a linear connector to serve as the bridge and connector to the eyebrows, and a perpendicular connector to attach the temple arms and mustaches.</p>
		<img src='/images/htmaa_img/w2_pressfit_01.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_02.JPG' />
		<h5>Cutting</h5>
		<p>I did my initial designs using InkScape. When getting ready to lasercut, I used the Ubuntu partition and used the fab modules to generate the .path and .epi files to send to the Epilog lasercutter. There was an annoying effect that the location of my design was mirrored vertically and horizontally in the bed of the lasercutter - i.e. my design in the top left corner would cut in the bottom right corner of the lasercutter. It was also a bit tedious to jump from InkScape to .bmp to fab modules to laser printer. After a little while, I switched onto the Windows partition and used Corel Draw for the remainder of the project. I had to export the design as a .ps file from InkScape and import into Corel Draw (.cdr format by default). Exporting as a .eps, .svg, and .svgz all incorrectly imported into Corel Draw (the node relationships weren't maintained).</p>
		<p>The default settings for cardboard left my cuts incomplete in certain points. I wound up iterating and trying several different values, but found the best results with speed:55, power:35, and frequency:1200.</p>
		<h5>Output</h5>
		<img src='/images/htmaa_img/w2_pressfit_06.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_04.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_03.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_05.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_09.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_10.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_07.JPG' />
		<img src='/images/htmaa_img/w2_pressfit_08.JPG' />

		<h4 id="week3">week 3 -- 9/24/12</h4>
		<h5>FabISP Intro</h5>
		<p>This week we're learning how to mill circuit boards, solder components, and program the previously mentioned boards. We'll be making a FabISP (in-system programmer) that will be used for the remainder of the course to program any other boards we go on to design. </p>
		<h5>Milling</h5>
		<p>I milled my first board directly after the training sessoin, so everything was fresh in my head. I used the older machine, so I had to be a bit careful about the sacrificial board being warped. I tested my z-height in several locations to make sure I would always be hitting the board. In the Fab Modules, I set my 2D z-depth to 0.12 and got nice results from the cut. Instead of using the Modella to cut out the board, I decided to try the pressure chopper. I messed up the board on my first cut by going too slowly. The proper way is to line up the board, hold the board firm, and do a nice quick, chop. By going slowly and not holding the board completely tight, I gave the FR1 a chance to splinter and crack - which it did. On my second iteration, I used the Modella to cut out the board.</p>
		<img src='/images/htmaa_img/w3_fabisp_05.jpg' />
		<img src='/images/htmaa_img/w3_fabisp_01.jpg' />
		<h5>Stuffing</h5>
		<p>Soldering all the components onto the board went fairly smoothly. For the components with very small leads (the microprocessor and the usb jack) I made a long solder bridge across all of the leads and then used copper solder wick to pull off the excess. This produced nice results with no bridges and little excess. </p>
		<p>The key to soldering these boards, for me, was a good pair of tweezers. Being able to finely manipulate all of the components made the process quite smooth.</p>
		<img src='/images/htmaa_img/w3_fabisp_03.jpg' />
		<h5>Programming</h5>
		<p>Programming I ran into some issues the first n times around. My first mistake was leaving the make file unchanged when trying to program my board with another FabISP. Some tutorial somewhere said to do so when using FabISPs, but it must have been referencing a different Makefile. </p>
		<p>I eventually got help from <a href='http://fab.cba.mit.edu/classes/863.11/people/eyal.toledano/howto/home.html'>Eyal Toledano</a> who lent me his commercial product ISP. This worked right away (as expected in hindsight, since the Makefile was setup for that). I used the directions he laid out in his <a href='http://fab.cba.mit.edu/classes/863.11/people/eyal.toledano/howto/week2.html'>Week 2 writeup</a>. The key of this writeup was running the command 'avrdude -c usbtiny -p t44 -P usb -U flash:w:main.hex:i' once everything was connected.</p>
		<p>Once everything was programmed, I verified the success of everything by first checking that my computer registered a connected USB device with the name 'FabISP' and second by programming another students board with my board. </p>
		<img src='/images/htmaa_img/w3_fabisp_04.jpg' />

		<h4 id="week4">Week 4 -- 10/01/12</h4>
		<p>This week we're getting to know our loved z-axis and exploring 3D scanning and printing. There's bonus points if we can 3D scan an item and then print it (this is apparently non-trivial, as created a watertight 3D from a scan can be tricky at times). </p>
		<h5>Printing</h5>
		<p>This week I'm using the printing assignment to further a bit of research that is already ongoing. I'm interested in designing computational surfaces and textures and I've been exploring the mechanisms in which these can be manufactured. To test the domain of 3D printing textures, I wanted to create a sample piece that would demonstrate the minimum features sizes that can be produced by the Invision printer available in the CBA shop.</p>
		<p>I started with a 1' cube and added an array of features to it' top facet. I based my range around the stated minimum DPI capabilities of the machine: 328x328x606 DPI (x,y,z). These yield minimum features of .003' and .0017' in the x,y, and z directions, respectively. Given the different capabilities in x,y versus z, I decided to also explore the minimum capabilities of defining textures on a vertical plane of the cube. I copied the pattern from top and mapped it onto the back plane of the cube. </p>
		<p>The cube came out of the printer completed. Immediately, I noticed some of the small individual posts that were created have become bent, mushed, or broken. Fotunately, the textured patterns that were packed closley together seemed to remain in tact and well maintainted. It seems like the dense clustering and wax filling were suffient support. Furthermore, the features printed on the side of the cube appear to have remained more in tact, suggesting that the scaffolding provides better support in that plane. The cube was put in the oven for about an hour to melt the excess wax. This process removed most of the wax scaffolding, but tiny bits of wax in between the small features remained. I was given the advice to put the piece in a warm corn oil bath (~175 F). After this process, the remaining wax was removed. Cleaned, it became clear to see that many of the smaller, individual features did not survive. This information is useful in understanding the true limits of what can be acheived with the machine (beyond the simple DPI specification).</p>
		<img src='/images/htmaa_img/w4_3d_1.jpg' />
		<img src='/images/htmaa_img/w4_3d_2.jpg' />
		<img src='/images/htmaa_img/w4_3d_3.jpg' />
		<h5>Scanning</h5>
		<p>For the scanning assignment I used the NextEngine Desktop scanner. I scanned over 9 intervals at a macro distance of 6.5'. The software aligned the scans well and the only real work I had to do to clean up the model was fuse the scans and then fill some remaining holes. The back leg of the LEGO man seems to have been the hardest part to scan (least data points), which could be explained by the black holes and small features that it contains.</p>
		<p>When fusing holes, I found that Meshlab was much faster than the NextEngine Scanner software. Given that, it's advisable to export the scanned mesh as a .STL and perform the minor fixes in Meshlab, rather than trying to perform the entire workflow in the NextEngine software.</p>
		<img src='/images/htmaa_img/w4_3d_5.jpg' />
		<img src='/images/htmaa_img/w4_3d_6.png' />
		<img src='/images/htmaa_img/w4_3d_7.png' />
		<img src='/images/htmaa_img/w4_3d_8.png' />
		
		<h4 id="week5">Week 5 -- 10/09/12</h4>
		<h5>Schematic</h5>
		<p>This week we're copying the <a href='http://academy.cba.mit.edu/classes/embedded_programming/hello.ftdi.44.png'>echo hello-world board</a> and redesigning the layout from scratch - and, while we're adding it, adding a couple components to the circuit. I decided to add a couple LEDs and button. They're roughly laid out in the shape of eyes and a nose, so when you press the nose - the eyes light up. Copying the circuit over was fairly simple, however, I noticed that Eagle - unlike other circuit schematic programs, won't show little loop hops when two traces grahically cross but aren't electrically connected. This caused some confusion in the double-checking process. The two LEDs I added are hooked up in parallel with 1K resistors in series with each. </p>
		<img src='/images/htmaa_img/w5_pcb_01.png' />
		<h5>Layout</h5>
		<p>For the layout I decided to place my parts on a 1' radius circle to stick with the loose face theme I had with the eyes and nose. I used a minimum trace width of 12 mils, and a minimum clearance distance of 20 mils between wires. I made the mistake of not also defining a minimum pad-to-wire distance and stuck with the default of 8 mils. When I milled the board, three of the pads were connected with a wire and I had to use an exacto knife to separate them manually. </p>
		<p>Doing the layout with only a single layer can be really tricky and after a little while of not finding a routing topology that worked, I opted to use a couple 0-ohm resistors to let me hop over existing traces. These simplified much of my layout and made the process a bit nicer. </p>
		<img src='/images/htmaa_img/w5_pcb_03.jpg' />
		<h5>Mill and Stuffing</h5>
		<p>The milling and stuffing steps are similar to <a href='http://fab.cba.mit.edu/classes/863.12/people/travis.rich/week3/'>week3</a>. I made the mistake of making the dimension layer too thick in Eagle when doing the layout and this caused the Modela to try to mill out a thick cut. Rather than a single line width outline, it made a 2 or 3 line width outline. This didn't have any real consequence besides causing the job to take more time. </p>
		<img src='/images/htmaa_img/w5_pcb_04.jpg' />
		<img src='/images/htmaa_img/w5_pcb_05.jpg' />

		<h4 id="week6">Week 6 -- 10/15/12</h4>
		<h5>Intro</h5>
		<p>This week we're tackling molding and casting. For my model, I stumbled upon <a href='http://www.nasa.gov/multimedia/3d_resources/models.html'>NASA's great archive of 3D models</a> and decided to make a sapce shuttle. This decision came given the constraints we have with the milling process. We have a 3-axis milling machine, which limits us to having any models with interior features. I also decided to make a 1-sided mold, which further constained me to choose a model that did not have significant 'bottom' features. </p>
		<img src='/images/htmaa_img/w6_cast_01.png' />
		<h5>Milling</h5>
		<p>I milled my board using the Modela miller with a .125' ball-tip bit. The roughing and finishing runs estimated that they would take 4.5 hours to complete, but everything was finished in about 3 hours. The Modela wax shavings were much larger than I had expected, but the machine didn't seem to mind - plowing right through all the excess wax. I did vacuum the excess every hour or so, just so that I could visually check that everything was going smoothly.  </p>
		<img src='/images/htmaa_img/w6_cast_02.jpg' />
		<img src='/images/htmaa_img/w6_cast_03.jpg' />
		<img src='/images/htmaa_img/w6_cast_04.jpg' />
		<h5>Molding</h5>
		<p>For molding we used the Oomoo silicone rubber kit. I measured the two components out by weight, and followed the prescribed ratio of 1A:1.3B. I mixed and shook the two parts for about 10 minutes after combined. I attempted to remove as many air bubbles as possible by shaking and dropping the cup on the table. When pouring, I also tried to keep the stream fine as an attempt to remove any additional bubbles. I followed this procedure until the entire surface of my model was covered, and then poured a bit more quickly, assuming that air bubbles within the cast - but not on the surface- wouldn't be much of a concern. Once the entire mold was filled, I shook it for another 10-15 minutes, trying to bang out any remaining air pockets. After an hour or so, the top layer of the mold was solid, but still a bit tacky. After 2.5 hours, the mold felt much more solid, but I gave it another couple hours just to be safe. </p>
		<img src='/images/htmaa_img/w6_cast_05.jpg' />
		<h5>Casting</h5>
		<p>I began casting with the drystone. The mixing went well, but when demolding, the wings and tailwing snapped off. They were too thin and the material too brittle. I could imagine being sufficiently delicate that this doesn't happen on a second run - but I opted to try a harder casting material. I used the HydroStone Super X for the second run. I also put tape around the edge of my cast so that I could have a thicker top layer to begin with. This run came out a bit better - the wings still intact. However, the tail still snapped on when (delicately) trying to pull it out. My hunch is that the aspect ratio of the tail combined with it's thickness just makes it a very tricky thing to reproduce.</p>
		<img src='/images/htmaa_img/w6_cast_06.jpg' />
		<img src='/images/htmaa_img/w6_cast_07.jpg' />
		<img src='/images/htmaa_img/w6_cast_08.jpg' />

		<h4 id="week7">Week 7 -- 10/22/12</h4>
		<h5>Introduction</h5>
		<p>This week we're programming the boards we had previously made in <a href='http://fab.cba.mit.edu/classes/863.12/people/travis.rich/week5'>week 5</a>. My board at the time was designed with two LEDS (in the place of eyes) and a single button (in the place of a nose). While there was also the option of building a new Fabduino this week, I stuck with programming my older board, due to the time constraints of the upcoming sponsor week.</p>
		<h5>Bootloading</h5>
		<p>I first tried bootloading through the Arduino environment, following Dave Mellis' <a href='http://hlt.media.mit.edu/?p=1695'>tutorial</a>. This worked for me using an AVR ISP, but unfortunately I wasn't able to have my device recognized by the Arduino environment when I tried to do the programming in this domain. I switched to a slightly lower level approach to all of this and began to use Neil's quick steps that are <a href='http://academy.cba.mit.edu/classes/embedded_programming/hello.ftdi.44.program.png'>shown here</a>. This eventually worked for me and I was able to get the term.py working - verifying that everything had gone accordingly. I did run into a few issues along the way though. The first seemed to be based on the order in which I connected the ISP and the FTDI cables. I found that unplugging both, then plugging in the ISP 3x2 header and then the FTDI cable gave good results. Other orders seemed to leave me with a 'device not found' error. Another error I kept running into came when running term.py: 'ImportError: No module named tkinter'. I tried a few solutions on my mac side, but eventually gave up, booted into Ubuntu and tried to run term.py from there. I got the same error again, but was able to fix everything by simply installing python-tk: 'sudo apt-get install python-tk'.</p>
		<img src='/images/htmaa_img/w7_prog_0.jpg' />
		<img src='/images/htmaa_img/w7_prog_1.png' />
		<h5>Programming</h5>
		<p>I took a first step in programming by editing the <a href='http://academy.cba.mit.edu/classes/embedded_programming/hello.arduino.168.blink.c'>hello.arduino.168.blink.c</a> file. I updated the variables to point to the correct pin on my board and after a small amount of struggle (I didn't realize DDRB needed to be changed to DDRA), my board started blinking! I then tried to get my board to turn on the LEDs with the push of the button. For this, I follow the lead of <a href='http://academy.cba.mit.edu/classes/input_devices/button/hello.button.45.c'>hello.button.45.c</a>. This implemented relatively quickly, but the button seems to have some serious debouncing issues. I got around this by just setting a 1000ms delay after the button is first pressed. This sets the LED to stay on for 1s and gets around any pesky bouncing issues. In future efforts though, an actual debouncer will be used. It also seems like stray capacative effects are triggering the button pin to toggle errantly at times. </p>
		<img src='/images/htmaa_img/w7_prog_2.png' />
		<img src='/images/htmaa_img/w7_prog_3.png' />
		<iframe width='600' height='338' src='https://www.youtube.com/embed/atUk1wg-Bq4' frameborder='0' allowfullscreen></iframe>
		<iframe width='600' height='338' src='https://www.youtube.com/embed/GaGNoKkbK7k' frameborder='0' allowfullscreen></iframe>

		<h4 id="week8">Week 8 -- 10/28/12</h4>
		<h5>Introduction</h5>
		<p>This week we were tasked with 'making something big'. We were trained on the large bed shopbot and the waterjet cutter and supplied with rigid insulation foam (2' X 8') and OSB panels. We were encouraged to use other materials (aluminum, glass, plywood) if we could get a hold of it. </p>
		<h5>Design</h5>
		<p>After passing up on molding a dinosaur a few weeks ago, I decided this would be a good chance to go back to that idea. Walking by the excellent dinosaur skeleton Andy Bardagjy made last year, I decided I'd build an 'living' dinosaur to differentiate a bit (i.e. not a skeleton). I found a .STL model of a nice herbivore and used AutoDesk's 123D-Make software. The software allows you to upload a 3D cad model and presents options for you to segment the design for either layered or interlocking pieces. I decided to use the insulation foam and to make a layered design. The foam is 2' thick, so it was thick enough to easily fill the full volume of the 3D model. 123D-Make output a .eps file which I imported into AutoCad and exported as a .dxf file. The .dxf can then be imported into Partworks which builds a toolpath for the shopbot.</p>
		<img src='/images/htmaa_img/w8_big_01.png' />
		<img src='/images/htmaa_img/w8_big_02.png' />
		<h5>ShopBot</h5>
		<p>Starting the shopbot was fairly straightforward and Tom provided a lot of guidance. My initial design fit onto about 1.2 pieces of foam when packing the pieces closely together. Tom advised using two full pieces of foam though and spacing the parts loosely. After zeroing the x, y, and z axes and screwing down the foam boards, I started the job. Everything went smoothly until my first small piece was cut out. After the piece was fully cut, the vacuum used to pick up sawdust and debris had enough suction to lodge the small piece loose and pull it up a bit. When this happened, the piece would usually get hit by the end mill and get stuck between the end mill and the plastic dust cage. The first time this happened, I hit the emergency stop button as a first reaction. Apparently what I should have done though, given that this wasn't necessarily an immediate safety issue, was to click the software stop button. By clicking the emergency stop button, the shopbot job lost it's place and I had manually edit the .sbp file to get back to the point when I hit the emergency stop button. From this point on, I had to quickly hit the software stop button at the end of each small piece, remove the piece (hopefully before much damage was done to it) and then resume the job. </p>
		<img src='/images/htmaa_img/w8_big_03.png' />
		<img src='/images/htmaa_img/w8_big_04.png' />
		<img src='/images/htmaa_img/w8_big_05.jpg' />
		<img src='/images/htmaa_img/w8_big_06.jpg' />
		<img src='/images/htmaa_img/w8_big_07.jpg' />
		<h5>Assembly</h5>
		<p>To assemble the pieces I began by using a 3M spray adhesive. I tested the spray on a small piece of foam first, to ensure that it wouldn't erode the foam and to test the strength of the bond. The test did erode the foam a small amount, but the bond was sufficiently strong that I decided to move forward. Assembly went smoothly until the tail portion. The balance of the body was such that it was hard to hold the pieces in place while the glue set. I eventually began using small dabs of hot glue on the underside of the joints to create a stronger bond. The hot glue would prove useful again when I got to the neck portion as these pieces were strongly off balance. On some pieces of the neck I also opted to stick small stiff wires from the bottom through a few of the pieces. At the end, the model seemed to hold together quite well as I carried to around and moved it about. </p>
		<img src='/images/htmaa_img/w8_big_09.jpg' />
		<img src='/images/htmaa_img/w8_big_10.jpg' />
		<img src='/images/htmaa_img/w8_big_11.jpg' />

		<h4 id="week9">Week 9 -- 11/05/12</h4>
		<h5>Introduction</h5>
		<p>This week we're focusing on input devices. I decided to make a frequency detector with the photodiode circuit that Neil put up as a demo. The photodiode would receive incident modulated light (modulated somewhere between 100Hz and a few kHz) and would be able to determine either the frequency (to some accuracy) or whether or not the incident frequency was within a certain range. </p>
		<h5>Board Design and Build</h5>
		<p>I used the <a href='http://academy.cba.mit.edu/classes/input_devices/light/hello.reflect.45.png'>board</a> that Neil used in his synchronous detection demo example. Milling went as planned, but while stuffing the board, I noticed that the phototransistors available in the electronics room were different than the one in the picture of Neil's original board. I wound up using that transistor, but putting it on backwards (since I had to guess which side was the cathode of the original part - we had no schematic to work from). This became evident after programming the board and running the python interface. The phototransistor reacted very little to variations in light. I flipped the component and all was working smoothly from then on. </p>
		<img src='/images/htmaa_img/w9_input_00.jpg' />
		<img src='/images/htmaa_img/w9_input_01.png' />
		<h5>Frequency Detection</h5>
		<p>I began testing the circuit as is to observe if the 'diff' value varies in it's behavior as a function of the frequency of the incident light. I figured that given the filtering window we were using, there should be some resonant frequencies that produce much larger swings in the read-out value. I connected an LED to a function generator and shined the LED towards the phototransistor. I varied the frequency of the LED and did indeed observe variation in the behavior of the ouput as a function of frequency (see the video below). </p>
		<iframe width='600' height='338' src='https://www.youtube.com/embed/sVolQEhrkGk' frameborder='0' allowfullscreen></iframe>
		
		<h4 id="week10">Week 10 -- 11/12/12</h4>
		<h5>Introduction</h5>
		<p>This week we're playing with composites. Let's make something super light and super strong! I started from the idea of wanting to make a 'glove'. A composite that outlines the shape of a hand with spiraling fabric. Something like a boxer's wrap held in place, but without the hand actually being there. </p>
		<h5>Twine</h5>
		<p>I started trying to make this hand by wrapping twine. I filled a Nitrile glove with water, tied it off, and laid it flat. Unfortunately, the twine, because of the way it's packaged, had some natural curvature to it that made wrapping the glove quite difficult. After fussing with the twine for a while and realizing it was going to look terrible - I dropped the idea. I decided to move on to trying it with an easier material.</p>
		<h5>Second Try: Fabric</h5>
		<p>This attempt I cut lots of fabric strips about a half-inch wide and 8 inches long. I soaked these in West System 105/205 epoxy mix (5 pumps from each). When the strips were sufficiently soaked through, I began slowly wrapping each of the fingers with the thin fabric. This was made easier by the fact that the soaked resin helped the fabric to stick to itself as I wrapped. I kept pressure on the glove to keep water forced into the fingers, giving me a good amount of rigidity to work with. It was rather difficult to wrap some of the undersides of the fingers, as everything quickly descended to a tacky surface, but with a little stubbornness, it was finished. I sealed my bag and connected the vacuum.</p>
		<p>On vacuuming, there was the unanticipated effect that the fingers became more squashed that the palm of the glove (I anticipated the vacuum to put pressure on the glove, keeping the fingers rigid - but I didn't anticipate the non-uniform pressure). THis resulted in some of the wrap becoming deformed and the fingers coming out flatter than desired. Also, I had initially intended to pop the glove and remove the excess material, leaving me with the shell of the hand only. Because of the deformation though, I decided that the glove would be a bit nicer looking with the water-glove filling. Not to mention, the hand had a nice feel to it with the glove and composite wrap.</p>
		<p>The glove quickly took the role of a high-five buddy. Giving me a friendly outlet for each of my small daily successes. </p>
		<img src='/images/htmaa_img/w10_epoxy_01.jpg' />
		<img src='/images/htmaa_img/w10_epoxy_02.jpg' />
		<img src='/images/htmaa_img/w10_epoxy_03.jpg' />
		<iframe width='600' height='338' src='https://www.youtube.com/embed/P4_xSPxEXWw' frameborder='0' allowfullscreen></iframe>
		<img src='/images/htmaa_img/w10_epoxy_04.jpg' />

		<h4 id="week11">Week 11 -- 11/20/12</h4>
		<h5>Introduction</h5>
		<p>This week we're tasked with driving some output form a microcontroller board. I had an old 7 segment LED board lying around from last semester and I decided I wanted to finally make it work. Oh - it's huge. It's over half a foot tall. I think it will also be used as part of the display in my final project - so we get to kill two birds with one stone here.</p>
		<h5>Hardware</h5>
		<p>I decided to make the board with a <a href='http://fab.cba.mit.edu/content/projects/fabkit/'>fabduino</a>. That was straight forward to fabricate. The tricky part which I didn't realize until after I made the fabduino (and before I decided on the 7seg LED) was that I was going to need a shift register to drive all of the pins necessary. Given this hindsight, and the little amount of time I had (ahh crit day stress!), I had to, for the time being, resort to using a breadboard to jump between my fabduino and 7-segment LED display. I used a 8-bit serial-in parallel-out shift register (<a href='http://www.sparkfun.com/datasheets/IC/SN74HC595.pdf'>74HC595</a>). This was fairly straight forward to use, and if you're in the Arduino environment, there's a <a href='http://www.arduino.cc/en/Tutorial/ShiftOut'>nice tutorial</a> to step you through the process.</p>
		<img src='/images/htmaa_img/w11_output_01.png' />
		<img src='/images/htmaa_img/w11_output_02.png' />
		<h5>Programming</h5>
		<p>Once everything was setup, I referred to the 7-segment display's datasheet to reference the pin mapping. My initial goal was to cycle from 0-9 to demonstrate the functionality. Unfortunately, after mapping out all of the numbers, I found that the display was driving completely wrong segments. After a good amount of debugging, I realized that the datasheet's pinout diagram was incorrect. I reverse engineered each pin and segment individually and then remapped my numbers from that. The mapping that wound up working is as follows (these are the binary values sent to the register):</p>
		<ul>
			<li>0 - 0b11111110</li>
			<li>1 - 0b00111111</li>
			<li>2 - 0b01000101</li>
			<li>3 - 0b00010101</li>
			<li>4 - 0b00110011</li>
			<li>5 - 0b10010001</li>
			<li>6 - 0b10000000</li>
			<li>7 - 0b00111101</li>
			<li>8 - 0b00000001</li>
			<li>9 - 0b00110001</li>
		</ul>
		<p>From that point, everything was relatively straight forward, and the code has a simple delay counter that can be changed to vary how long each number is displayed for. </p>
		<img src='/images/htmaa_img/w11_output_03.png' />
		<img src='/images/htmaa_img/w11_output_04.png' />
		<img src='/images/htmaa_img/w11_output_05.jpg' />
		<iframe width='600' height='338' src='https://www.youtube.com/embed/2JYp8Se98zw' frameborder='0' allowfullscreen></iframe>

		<h4 id="week12">Week 12 -- 11/27/12</h4>
		<h5>Introduction</h5>
		<p>This week we're learning to write applications and user interfaces. I decided to use the light sensor board I built in the past as the hardware. I decided to build out visualizations that depict the light intensity measured by the board in a friendlier way than a simple bar graph. I'll use buttons to switch between the different visualizations, allowing me to play with making buttons as well. </p>
		<h5>Serial Interface</h5>
		<p>I began writing this week's assignment in python, using Neil's <a href='http://academy.cba.mit.edu/classes/input_devices/light/hello.light.45.py'>light input code</a> as a baseline. I decided that using TKinter was a bit too widgety for what I wanted to build this week, so I started to play with the idea of using Processing to parse the serial port input and for the visualization. The trickiest part here was porting Neil's code (or rather the algorithm it steps through) for reading serial port data into Processing. Processing has an extra layer of abstraction that tricked me for a little bit as I spent time expecting to get raw binary values. In reality, processing outputs the decimal values by default. Once I figured this out, it was relatively straight forward to perform header detection and to grab the byte values representing the light intensity from the board. I did have one other misstep that caused the program to run very slowly - I forgot to clear the serial port buffer after each read. This led to the code getting backed up with old serial data, which resulted in the application appearing laggy. </p>
		<img src='/images/htmaa_img/w12_inter00.jpg' />
		<h5>UI</h5>
		<p>I wrote two visualtions, a tree and Timmy. The tree's growth (how full it is) is proportional to the amount of incident light. More light = healthier, fuller tree. The second visualtion is Timmy. Timmy is terrified of the dark. His reaction changes in response to how much ambient light he (the hardware board) can sense. Implementing the buttons in processing is a bit of a trick. Rather than have a button element, you define the regions of the button and on each update check the position of the mouse. If you mouse is within the defined coordinates and a mouseClick is detected, you implement actions that would be expected of a click. In this case, each click changes which display mode the interface is in, and updates the buttons' color to reflect state.</p>
		<p>Note that the below video has inverted colors on the monitor to make it easier to see (the black on white background was a bit washed out on camera). </p>
		<img src='/images/htmaa_img/w12_inter01.png' />
		<img src='/images/htmaa_img/w12_inter02.png' />
		<img src='/images/htmaa_img/w12_inter03.png' />
		<iframe width='600' height='338' src='https://www.youtube.com/embed/FzT6oTHVyF0' frameborder='0' allowfullscreen></iframe>

		<h4 id="week13">Week 13 -- 12/02/12</h4>
		<h5>Introduction</h5>
		<p>This week we're building devices that network - or, more simply put, a project with two or more processors. I'm dabbling with the idea of making data flashlights for my final project, so I decided to play a bit with using using visible light LEDs for communication.</p>
		<h5>Hardware</h5>
		<p>I used two boards for this project: a fabduino and the light sensor board that I had made a few weeks ago. The fabduino served as the transmitting board and the phototransistor on the light sensor board made the obvious choise as the receiver board. For this week I decided to stay with a simplex system, that is - I can only transmit in one direction (i.e. it's broadcast). The fabduino didn't have a bright LED on it, so rather than making a new board, I simply hooked up an LED and 1k resistor to one of the output ports. </p>
		<img src='/images/htmaa_img/w13_net_00.jpg' />
		<h5>Communication</h5>
		<p>To transmit, I set up a software serial port on the pin tied to my LED and had the loop continuously write 'hello' to the serial port. The result is a simple on-off keying modulation of the LED. The serial port was set to 9600 baud. The receiver side performed simple serial reads to receive the message. The challenge here was running into a lot of bit errors and timing issues. Sometimes the entire message would be bit shifted leaving me with a garbled message (and non-ASCII output). I got a lot of flipped bits as well due to shadows and other slight fluctuations in light intensity. This would be a good argument against on-off keying as a modulation scheme. To work around this, I implemented a few hacky error-checks that were run before passing the data to the display interface. One check is to delay the display until the same message is received 5 times in a row. This ensures that quick bit flips don't cause the output to glitch. This doesn't solve the bit shifting issue though. To avoid this, I implemented a check that made sure the data received was in the ASCII range of A-Za-z. If the data was outside this range, I bit shift by one and check again - repeating until the data is verified to be A-Za-z.</p>
		<img src='/images/htmaa_img/w13_net_01.png' />
		<img src='/images/htmaa_img/w13_net_02.jpg' />
		<iframe width='600' height='338' src='https://www.youtube.com/embed/N6vi1io5SiU' frameborder='0' allowfullscreen></iframe>
		<iframe width='600' height='338' src='https://www.youtube.com/embed/8-g6kkxOU18' frameborder='0' allowfullscreen></iframe>

		<h4 id="week14">Week 14 -- 12/11/12</h4>
		<p>This week we're looking machine design and are building the components to make a automated magnetic chess table. This week is a group effort, and I worked with <a href='http://fab.cba.mit.edu/classes/863.12/people/salzberg/index.html'>Shaun Salzberg</a>, <a href='http://fab.cba.mit.edu/classes/863.12/people/austin.lee/index.html'>Austin Lee</a>, <a href='http://fab.cba.mit.edu/classes/863.12/people/jinjoo/HowToMake/Home.html'>Jin Joo Lee</a>, and <a href='http://fab.cba.mit.edu/classes/863.12/people/sujoy/index.html'>Sujoy Chowdhury</a>. My role this week was to design and fabricate the support beams that attached to the threaded robs and move the magnetic pedestal across the playing area. A video of the machine working is given below. The project is part of Shaun's final project. His great writeup on the work completed this week can be <a href='http://fab.cba.mit.edu/classes/863.12/people/salzberg/week14.html'>found here</a>.</p>
		<iframe width='800' height='450' src='https://www.youtube.com/embed/HlHZgGYabgA' frameborder='0' allowfullscreen></iframe>

		<h4 id="week15">week15 -- 12/11/12</h4>
		<p>I burn my tongue on food far too frequently. I need a buddy who can help. </p>
		<img src='/images/htmaa_img/w15_final_18.jpg' />
		<h5>Building my Final Buddy</h5>
		<img src='/images/htmaa_img/w15_final_01.png' />
		<img src='/images/htmaa_img/w15_final_02.png' />
		<img src='/images/htmaa_img/w15_final_03.png' />
		<img src='/images/htmaa_img/w15_final_04.png' />
		<iframe width='800' height='450' src='https://www.youtube.com/embed/4MTgzpvTacY' frameborder='0' allowfullscreen></iframe>
		<img src='/images/htmaa_img/w15_final_05.jpg' />
		<img src='/images/htmaa_img/w15_final_06.jpg' />
		<img src='/images/htmaa_img/w15_final_07.jpg' />
		<img src='/images/htmaa_img/w15_final_08.jpg' />
		<img src='/images/htmaa_img/w15_final_09.jpg' />
		<iframe width='800' height='450' src='https://www.youtube.com/embed/8LXvQBNBx5w' frameborder='0' allowfullscreen></iframe>
		<img src='/images/htmaa_img/w15_final_10.jpg' />
		<img src='/images/htmaa_img/w15_final_11.jpg' />
		<iframe width='800' height='450' src='https://www.youtube.com/embed/yuwTUlnHAqs' frameborder='0' allowfullscreen></iframe>
		<img src='/images/htmaa_img/w15_final_12.jpg' />
		<img src='/images/htmaa_img/w15_final_13.jpg' />
		<img src='/images/htmaa_img/w15_final_14.jpg' />
		<img src='/images/htmaa_img/w15_final_15.jpg' />
		<img src='/images/htmaa_img/w15_final_16.jpg' />
		<iframe width='800' height='450' src='https://www.youtube.com/embed/vJoNMcNJE_c' frameborder='0' allowfullscreen></iframe>
		<img src='/images/htmaa_img/w15_final_17.jpg' />
		<img src='/images/htmaa_img/w15_final_18.jpg' />
		<iframe width='800' height='450' src='https://www.youtube.com/embed/Zzl9-Jgvk8Y' frameborder='0' allowfullscreen></iframe>
		<iframe width='800' height='450' src='https://www.youtube.com/embed/vbb960LTteM' frameborder='0' allowfullscreen></iframe>
		<hr>
		<h5>Proposal Questions</h5>
		<h5>what will it do?</h5>
		<p>My temperature buddy will have a temperature sensor that can detect if food is too hot (or cold) to eat. If the food is too hot, the temperature buddy will shake violently and its face will slowly glow a nice burning red. If the food is too cold, the forehead will glow blue denoting imminent brainfreeze and its head will shake with a chill.</p>
		<img src='/images/htmaa_img/w15_sample.jpeg' />
		<h5>who's done what beforehand?</h5>
		<p>The most common thing that's done beforehand, is people have burned their tongues. There do exist common <a href='http://www.bachelorkitchenblog.com/wp-content/uploads/2011/12/stickthermometer.jpg'>food thermometers</a> but these are rarely used in practice. There have been projects that try to build thermistor-based food thermometers, as discussed in <a href='http://forums.adafruit.com/viewtopic.php?f=8&t=25096'>this thread</a>, thought I haven't found any documentation of finished projects.</p>
		<h5>what materials and components will be required?</h5>
		<p>I will need the following materials and components:</p>
		<ul>
			<li>Wood/3D Printer Material/or Acrylic to create a structure for the head</li>
			<li>Felt cloth or some material to create the external 'skin' of the head</li>
			<li>Thermistor and associated hardware to create temperature sensor</li>
			<li>Motor to control head movements</li>
			<li>LEDs to illimunate 'skin' based on food temperature</li>
			<li>Batteries, wiring, and connectors to power and connect all the electronics</li>
			<li>Googly Eyes</li>
		</ul>
		<h5>where will they come from?</h5>
		<p>Many of the electronic components are available in the Fab Inventory. I have several motors that can be used to drive the movement. I have some spare acrylic that I can use to build a prototype of the head structure, and I can use wood/3D printing to create a final version if deemed worthwhile.</p>
		<p>The fabric to encase the exterior of the buddy is not currently available at the lab, but I will be able to buy some at local craft shops.</p>
		<h5>how much will it cost?</h5>
		<p>I expect the fabric used for the external skin to cost a couple tens of dollars.</p>
		<h5>what parts and systems will be made?</h5>
		<ul>
			<li>Body/Head Structure of the Temperature Buddy</li>
			<li>Temperature sensing circuitry</li>
			<li>LED system driven by temperature sensor reading</li>
			<li>Motor driver and motor driven by temperature sensor reading</li>
			<li>External fabric 'skin' to cover the temperature buddy</li>
		</ul>
		<h5>what processes will be used?</h5>
		<ul>
			<li>3D CAD design of body/head structure</li>
			<li>Milling Circuit Boards</li>
			<li>Pressfit Design for head structure</li>
			<li>Lasercutting head structure</li>
			<li>Embedding programming to drive motors/LEDs/sensors</li>
		</ul>
		<h5>what tasks need to be completed?</h5>
		<p>The tasks outlined in the section 'what parts and systems will be made' need to be completed. In further detail, this included designing the head CAD model, designing the circuit boards that drive the LEDs, motors, and sensors, and designing an output scheme to convert the sensor readings into appropriate outputs </p>
		<h5>what questions need to be answered?</h5>
		<p>What is the dynamic range of the temperature setting? How quickly will the temperature sensor cool off (denoting the food is no longer too hot to eat)? </p>
		<h5>what is the schedule?</h5>
		<p>I plan to spend the last couple days of this week building the sensor, LED, and motor hardware and associated software. Once that functionality is verified, and the dimensions of the components are known, I will build the structure of the head/mouth. Final touch up and details will be made towards the end of the weekend and Monday.</p>
		<h5>how will it be evaluated?</h5>
		<p>The temperature buddy has one main goal (and two minor goals). The main goal is to accurately notify me when food is too hot. This means that the sensor will appropriately measure the temperature and output a signal (face red, head shaking no). In addition, the temperature buddy will be evaluated based on its ability to denote if food is too cold, and to denote when food has sufficiently cooled down and is ready to eat. The timing characteristics of this are important, so quantitative results on the timing curves for temperature response may be a useful measurement to document.</p>
	`,
};

export default {
	title: 'backpackHacks',
	description: 'Collaboration with Jansport to build the digital backpacks we want.',
	slug: 'backpack',
	year: '2013',
	pic: 'nav/jansport.jpg',
	html: `
		<h4>Beginnings</h4>
		<p>As a follow up to a May hackathon, a Media Lab sponsor flew <a href='http://www.leithinger.net/'>Daniel Leithinger</a> and me to China to work directly with their sample-production factory for a week. We went in with the baseline goal of improving upon an RFID sensing bag we originally made at the hackathon. By working closely with the factory workers, we could design the hardware and they could design the textiles to integrate cleanly.</p>
		<p>The high level goal of the trip was to design and build interactive bags. Bags that are designed for a world where the things we carry are not simply books and paper, but tablets and laptops (and looking to the future, smart clothing, smart tools, smart etc). How will our bags evolve as the things we carry evolve?</p>
		<p>We bought a bevy of parts we thought we would need to build these: Arduino boards, LED displays and tapes, electroluminescent panels, zigbee radios and chips, a mini oscilloscope, hand tools, lots of wire and cable, accelerometers, GPS chips, hall effect sensors, ambient light sensors, RFID readers and tags, surface-mount cameras, memory chips, breadboards, and handful of other miscellaneous components. </p>
		<p>We had a close-knit feedback loop between our designs and those of the factory workers. We would propose a hardware build, figure out the bag requirements, have the sewers propose several sewing and build options, and then tweak our original designs to fit their processes. It worked out quite well and interfacing at each step of the build let us create some finely integrated packs.</p>
		<p>Below of photos of the factory, parts room, and conference room from where we worked. </p>
		<img src='/images/backpack_imgs/factory_01.jpg' alt=''/>
		<img src='/images/backpack_imgs/factory_02.jpg' alt=''/>
		<img src='/images/backpack_imgs/factory_03.JPG' alt=''/>
		<img src='/images/backpack_imgs/factory_04.JPG' alt=''/>
		<img src='/images/backpack_imgs/factory_05.JPG' alt=''/>
		<img src='/images/backpack_imgs/factory_06.JPG' alt=''/>
		<img src='/images/backpack_imgs/factory_07.JPG' alt=''/>
		
		<h4>The Bags</h4>
		<p>In total, we built seven bags: </p>
		<ul>
			<li><a href='#bag_1'>RFID pack</a></li>
			<li><a href='#bag_2'>RFID Luggage bag</a></li>
			<li><a href='#bag_3'>Fridge-light pack</a></li>
			<li><a href='#bag_4'>Two Friendship packs</a></li>
			<li><a href='#bag_5'>Ambient-light pack</a></li>
			<li><a href='#bag_6'>Camera pack</a></li>
		</ul>
		
		<h4 id = 'bag_1'>RFID Backpack</h4>
		<p>The first bag we made was a re-hash of the simple RFID pack we hacked together earlier in May. This time, we could finely integrate the LED readout and RFID readers into the fabric of the bag. We worked from an existing bag model that was designed to carry a laptop, tablet, and other electronics. The ultimate goal is to have a RFID antenna encompassing the entire opening of the bag, but because we didn't have the time or resources to make a custom RFID antenna, we used off the shelf readers and placed them around the bag. There are a total of five readers in the bag. One main reader was located at the top of the bag. At this reader any item can be scanned in or out of the bag. We put a lower reader within the laptop sleeve to determine the presence of the laptop. A reader in the tablet sleeve to determine the presence of a tablet. And finally, two readers in the small front pockets to determine the presence of your wallet and phone. </p>
		<p>The bag has seven LEDs embedded in its right strap. Six of the lights are used to read out the presence of certain items, and a seventh white light is used as a power indicator. The LEDs are RGB addressable, so we have fine grain control of the color and intensity of each LED. The LEDs will light green or red to let you know whether a certain item is in or out of the bag (respectively).</p>
		<p>The bag is fitted with an accelerometer and piezo buzzer. When a tag is scanned at the main RFID reader, the buzzer beeps, letting the user know their tag was read. The accelerometer tracks the bags movement. Under certain situations, the accelerometer data will trigger the lights on the bag to turn off (e.g. when the bag has been resting for a long period of time). Shaking the bag will wake it up and turn the notification LEDs back on. </p>
		<p>All of the electronics and batteries in the bag fit into a small case placed in a side pocket.</p>
		<img src='/images/backpack_imgs/rfid_00.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_01.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_02.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_03.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_04.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_05.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_06.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_07.JPG' alt=''/>
		<img src='/images/backpack_imgs/rfid_08.JPG' alt=''/>
		<video src="/images/backpack_imgs/rfid.mp4" controls preload="metadata"></video>
		
		<h4 id = 'bag_2'>RFID Luggage Bag</h4>
		<p>The luggage bag was the second RFID-enabled bag we built. It was similar to the backpack, but featured more of a 'check-in/check-out' model for the RFID items rather than the persistent reads we featured with the backpack. The luggage bag has a single RFID reader whose position is embroidered on the inside of the bag. The luggage piece also has four LEDs embedded in the handle of the bag. Again, the LEDs use green and red to convey the presence of an item in the luggage case.</p>
		<p>The luggage piece also has one additional feature that is new from the backpack version: a magnetic-snap toiletry case. The magnetic snaps used to hold the bag in place serve the dual purpose of also acting as contacts through which we can determine the presence of the toiletry bag. </p>
		<img src='/images/backpack_imgs/luggage_01.JPG' alt=''/>
		<img src='/images/backpack_imgs/luggage_02.JPG' alt=''/>
		<img src='/images/backpack_imgs/luggage_03.JPG' alt=''/>
		<img src='/images/backpack_imgs/luggage_04.JPG' alt=''/>
		<img src='/images/backpack_imgs/luggage_05.JPG' alt=''/>
		<video src="/images/backpack_imgs/luggage.mp4" controls preload="metadata"></video>
		
		<h4 id = 'bag_3'>Fridge-light pack</h4>
		<p>The fridge-light pack is a simple bag that has a row of LEDs embedded on the inside that turn on when the bag is opened and off when the bag is closed. To achieve this functionality, we put a magnet on the inside back of the zipper and sewed a magnetic switch at the base of the zipper path. When the zipper comes close enough to the magnetic switch, the lights turn off. Again, all electronics for this bag are held within a side pocket of the bag and are out of the way.</p>
		<img src='/images/backpack_imgs/fridge_01.JPG' alt=''/>
		<video src="/images/backpack_imgs/fridge.mp4" controls preload="metadata"></video>
		
		<h4 id = 'bag_4'>Two Friendship packs</h4>
		<p>The friendship packs are a pair of bags who react to the presence of one another. The packs have an embedded electroluminescent panel placed behind a cut pattern in the front pocket of the bag. When the bags approach each other, the front panel begins to light up. At a medium range, the panel will begin to fade in and out, with the approximate rate of a slow breathing pattern. As the bags get closer and are within close range of each other, the pattern speeds up to that of a racing heart-beat. The idea being that the bags are excited to 'see' each other and react as old friends would when reacquainting.</p>
		<p>Each bag has a zigbee module inside that can read the relative strength of the other module's sent signal. As the bags are spread apart, the radio signal between the two becomes weaker, and can be loosely correlated to distance. </p>
		<img src='/images/backpack_imgs/friend_01.JPG' alt=''/>
		<img src='/images/backpack_imgs/friend_02.JPG' alt=''/>
		<video src="/images/backpack_imgs/friend.mp4" controls preload="metadata"></video>
		
		<h4 id = 'bag_5'>Ambient-light pack</h4>
		<p>The ambient light pack is a quick bag that has embedded light-sensors on it's sides. As the bag enters a darker environment the bag lights - a digital glow-in-the-dark bag. </p>
		<video src="/images/backpack_imgs/ambient.mp4" controls preload="metadata"></video>
		
		<h4 id = 'bag_6'>Camera pack</h4>
		<p>The camera pack was an adaptation of the trip-tracker pack originally proposed. The bag has two embedded cameras that are placed in the front strap and back panel of the bag. The cameras stick out slightly from the material and are set to take a picture every 30 seconds. The pictures are stored internally on a micro-SD card that can be removed later to upload the pictures to a computer or phone. We didn't have a chance to finish the construction of the bag during the trip, but the hardware was completed and ready to be integrated. </p> 
		<img src='/images/backpack_imgs/total_01.JPG' alt=''/>
	`,
};

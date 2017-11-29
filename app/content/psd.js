export default {
	title: 'point&Shoot',
	description: 'Mobile-to-mobile directional communication with light.',
	slug: 'psd',
	year: '2011',
	pic: 'nav/psd.jpg',
	html: `
		<p>Point & Shoot Data explores the use of visible light as a wireless communication medium for mobile devices. A snap-on case allows users to send messages to other mobile devices based on directionality and proximity. No email address, phone number, or account login is needed, just point and shoot your messages!</p>
		<img src='/images/project_pics/psd1.jpeg' />
		<p>The realm of wireless communications has primarily, by design, been confined to invisible radio waves. This limits a user's ability to understand what data signals are, how they carry information, how their performance can be modified, or how broken communication links can be debugged. In certain applications, a visible communications medium may provide a more intuitive and meaningful user experience. To explore this concept, we use visible light to transmit information due to its deeply rooted role in human perception and non-verbal communication. </p>
		<h3>Hardware</h3>
		<p>The communication technology consists of the transmitting and receiving hardware, the device-hardware interface, and the software-implemented communication protocol. The underlying principle of visible light communication is that an LED is modulated at high rates (above human perception). That is, the intensity of the light emitted from the LED changes as a function of time. A light sensitive photodiode device is then used to sense these changes in light intensity. For a simple digital communication system, an LED in the 'on' state can represent a binary 1, while an LED in the 'off' state can represent a binary 0.</p>
		<p>The hardware implementing this protocol (LED, photodiode, analog circuitry, microprocessor) can be seen below:</p>
		<img src='/images/project_pics/psd2.jpg' />
		<p>The case designed to hold the hardware and the phone is shown below.</p>
		<img src='/images/project_pics/psd3.png' />
		<h3>Interface</h3>
		<p>The physical interaction with the communications medium is one of vital interest to this project. Thus, the interaction with the software abstraction of the data carried on that medium is also highly important. We design the user interface to match the intuitive human interactions that are enabled by using visible light. Our prototype is a simple note-passing application that employs a sliding motion to 'push' the data from one device to another, in much the same way that a person can physically slide or push a note to a nearby friend. This motion takes advantage of both the directionality and physicality of our light-based communications medium.</p>
		<img src='/images/project_pics/psd4.png' />
		<p>A quick testing video of the communication hardware and interface can be seen below. Note that the phones are not in their cases for this test, but the LED and photodiode hardware can be seen above each of the phones (watch for the LED to dim on message transfer).</p>
		<iframe src='http://player.vimeo.com/video/37823884' width='600' height='337' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
		<h3>Affordance Tools</h3>
		<p>We also create and explore a series of affordance tools to enable the user to directly manipulate the communication medium. We take advantage of lenses, filters, and mirrors in our design. The tools demonstrate the ability of a user to directly manipulate the communication channel. Further design work on optimizing usability is needed.</p>
		<img src='/images/project_pics/psd5.png' />
		<p>The enclosure features an interface that allows physical affordance tools to be placed in front of the LED and photodiode.</p>
		<img src='/images/project_pics/psd6.png' />
		<p>We also explore a color filter that allows users to create separate communication channels. The filters can be placed in front of both the transmitter and receiver such that a device can, for instance, select to listen to only a blue or red channel.  White light may then be considered a 'public' channel.</p>
		<img src='/images/project_pics/psd7.png' />
		<p>Furthermore, it should be noted that the user's body is a very important mechanism for controlling the communication medium. The hand can be used to cover the LED (blocking all transmission) or cover the photodiode (blocking all incoming data). This natural behavior maps intuitively to how people interact with physical information written on paper or a computer screen; private data can easily be covered by a hand or turned away from peering parties. </p>
		<h3>Construction and Testing Pictures</h3>
		<img src='/images/project_pics/psd8.JPG' />
		<img src='/images/project_pics/psd9.jpeg' />
		<img src='/images/project_pics/psd10.jpeg' />
		<img src='/images/project_pics/psd11.jpeg' />
		<p>Point & Shoot Data was done in collaboration with <a href='http://slcl.ca'>Stephanie Lin</a>, <a href='http://shaunsalzberg.com/'>Shaun Salzberg</a>, and <a href='http://mit2011.luescher.org/about/'>Sam Luescher</a> at the <a href='http://media.mit.edu'>MIT Media Lab</a>.</p>
	`,
};

export default {
	title: 'encodedSurfaces',
	description: 'Deterministic textures in digitally fabricated surfaces to encode data about the object they are on.',
	slug: 'encodedsurfaces',
	year: '2011-2013',
	pic: 'nav/encoded.jpg',
	html: `
		<p>For my thesis work at the MIT Media Lab, I'm building technologies to create a self-descriptive universe. To provide context, this work is being done in the Viral Spaces group; an ever-evolving creature. From its origins in viral communication and radio systems, it has grown to explore mobile device ecologies, their influence on our physical spaces, and most recently, their ability to create meaningful experiences in our everyday lives. Building on this past experience, the group has transitioned from designing communicative spaces to creative spaces. Spaces that enable experiences that are instructive, creative, and engaging.  To that end, I'm exploring how we can leverage the 'classic' part of our environments - the passive objects that don't have built in radios, sensors, and batteries - to create these spaces.</p>
		<video src="/images/project_pics/encodedSurfaces.mp4" controls preload="metadata"></video>
		<iframe src='http://player.vimeo.com/video/63745204' width='600' height='337' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
		<p>The internet-of-things is an idea that suggests the connection of all of our gizmos; if it plugs into a wall, it should plug into the network. That way, my oven can talk to my toaster, which can talk to my fridge and turn on my lights which react to my alarm, all of which are controlled by my phone. But, what about other things? What about passive things: my hat, my shirt, my a car engine, a bike chain. What would these things have to say, if we could make them talk. Perhaps they would tell you where they were made, or how people use them, or what their CAD file is so that we can 3D print another copy. They would become self-descriptive.</p> 
		<p>In a self-descriptive universe, all of our objects reveal themselves to you: how they're made, who uses them, how they're used, how they can be fixed, what principles and concepts guide their function. To begin researching how such a world can be built, I'm leveraging advancements in digital manufacturing to create objects with fine surface features that encode data. This data can be read with common cell-phone cameras and acts as a map, describing exactly what you're looking at and providing hooks to collected information about the object. Designing the encoding patterns, manufacturing techniques, and network backend to deliver this experience is the focus of my thesis, and the first steps to imbuing passive objects with the technology to act as tools for creating more social, engaging, and creative spaces.</p>
		<p>More formally, I propose a method for encoding surfaces with many identifying markers through the use of deterministic physical features - i.e. deterministic textures. These textures will be designed such that they are 1) machine readable and 2) sufficiently small such that they do not interfere with the original use of the object (be it functional or aesthetic). I propose the design and construction of a device that can decode these physical markers and relay the read data to a device for user interaction. Whereas barcodes, QR codes, and RFID tags are often used to associate a single object with a single piece of data, this technique of encoding surfaces will allow for many points of identification to be placed on a single object, enabling applications in learning, group interaction, and gaming.</p>
		<p>My slide deck that I presented during the public Media Lab Crit-day are below. </p>
		<iframe src='http://www.slideshare.net/slideshow/embed_code/15579147?rel=0' width='600' height='487' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' style='border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px' allowfullscreen 
		webkitallowfullscreen mozallowfullscreen> </iframe> 
		<p>The final submitted thesis can be <a href='/static/files/travisRich_thesis_2013.pdf' target='blank'>downloaded here</a>. </p>
		<img src='/images/project_pics/encoded_01.png' />
		<img src='/images/project_pics/encoded_02.png' />
		<img src='/images/project_pics/encoded_03.png' />
		<img src='/images/project_pics/encoded_04.png' />
		<img src='/images/project_pics/encoded_05.png' />
	`,
};

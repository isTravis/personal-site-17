export default {
	title: 'mobileSockets',
	description: 'Real-time mobile controllers using web sockets.',
	slug: 'mobilesockets',
	pic: 'nav/mobileSocket.jpg',
	html: `
		<p>For part of my thesis work, I needed to design a (near) real-time feedback loop between the sensors in a mobile phone and a browser-based 3D rendering environment. Additionally, I needed an architecture that would facilitate this across any number of browser screens and any number of simultanesouly-active mobile devices. Having built this architecture (using Tornado and Three.JS), I realized it had the potential for a great game environment. Ad-Hoc multiplayer games could be created where the display is any browser window and everyone already has a controller: their phone. While my thesis focuses mostly on camera-based interactions, the idea of using other sensors as a game controller was partially inspired by a quick tech demo by Justin Gitlin. </p>
		<p>The full featured library and game that I plan to develop is currently in slow-development as my thesis work takes priority, but some early code can be found on my <a href='https://github.com/isTravis/mobileSockets' target='blank'>GitHub repo</a>. </p>
		<iframe width='800' height='450' src='https://www.youtube.com/embed/RU9F1cVD3_E' frameborder='0' allowfullscreen></iframe>
		<iframe width='800' height='450' src='https://www.youtube.com/embed/VyzZEgsGZ1o' frameborder='0' allowfullscreen></iframe>
	`,
};

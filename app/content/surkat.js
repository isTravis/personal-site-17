export default {
	title: 'surkat',
	description: 'Browser-based circuit capture and simulation.',
	slug: 'surkat',
	year: '2013',
	pic: 'nav/surkat.jpg',
	html: `
		<h3 id='introduction'> Introduction </h3>
		<p> Project Surkat is an effort to explore hardware design tools with an eye critically focused on what behaviors and techniques are simply historical artifacts and thus, can be greatly improved to match our current design ecosystem. We are no longer stuck with hardware design tools being restricted to multimeters and oscilloscopes. Unfortunately, most computational hardware design tools simply try to reproduce the functionality and experience of these bench-top devices. Project Surkat looks to identify and propose alternative tools for hardware design, simulation, sharing, and fabrication leveraging modern tools and techniques. Work on Project Surkat has been completed as part of MAS.890 Independent Study under the guidance of Professors Leah Buechley and Mitch Resnick.</p>
		<h3>Table of Contents </h3>
		<ol>
			<li><a href='#introduction'>Introduction</a></li>
			<li><a href='#motivation'>Motivation</a></li>
			<li><a href='#design_goals'>Design Goals</a></li>
			<li><a href='#existing_work'>Existing Work</a></li>
			<li><a href='#dynamic_circuit_design'>Dyanmic Circuit Design</a></li>
			<li><a href='#dynamic_circuit_simulation'>Dynamic Circuit Simulation</a></li>
			<li><a href='#user-centric_design'>User-centric Design</a></li>
			<li><a href='#clipping_workbench'>Clipping Workbench</a></li>
			<li><a href='#search'>Search</a></li>
			<li><a href='#sharing_and_collaboration'>Sharing and Collaboration</a></li>
			<li><a href='#wiki-style_documentation'>Wiki-style Documentation </a></li>
			<li><a href='#commenting'> Commenting</a></li> 
			<li><a href='#version_control'> Version Control</a></li> 
			<li><a href='#future_visions'> Future Visions</a></li> 
			<li><a href='#source_code'> Source Code</a></li> 
		</ol>

		<h3 id='motivation'> Motivation </h3>
		<p>The motivation for this project was initially spurred by the difficulty faced when simply trying to get started with hardware simulation. Creating an environment where a user of minimal (or even advanced) experience can jump on any arbitrary computer and begin working is extremely time consuming and inefficient. Furthermore, the experience can vary strongly for circuit simulations from device to device as local processing power is a direct constraint. </p>
		<p> The open software movement has led to unprecedented growth worldwide of industries from communications to entertainment. Furthermore, open software has enabled millions of people to learn and become passionate about software design and engineering. Programming is no longer the domain of the college-educated computer science major - but of all people. Software programming can now be thought of as analogous to the quest for worldwide literacy spurred by construction of libraries. However, the domain of hardware design has not been able to make the same strides as open software. Nonetheless, there is still a growing open hardware movement that indicates the same excitement and opportunity that came with open software can exist for hardware. However, hardware deals with atoms, rather than simply bits, so the distribution and construction have not reached the same zero-cost that is enjoyed in the software world. That said, the price is decreasing and the progression of open hardware can be accelerated by developing the right tools to enable people of all backgrounds and experiences to learn and play with hardware.</p>
		<p>Key problems that exist in the current hardware design ecosystem include 1) A large barrier to entry to both tools and knowledge, 2) specialized tools that do not match current cultural design norms (hardware design/simulation tools feel very foreign), and 3) disperse and non-uniform documentation. The large barrier to entry is due to the price of most software tools, the hardware requirements to run the tools, the experience needed to setup a development environment, and the experience to understand the functionality of the tools. Furthermore, hardware tools tend to exist in a world of their own. They have novel distribution and installation procedures, unconventional library and parts database management systems, and unconventional reference or help documentation. This creates a situation in which designers and engineers cannot leverage their previously learned skills when designing hardware. Lastly, while there are several efforts (e.g. <a href='http://octopart.com/'>Octopart</a>, <a href='http://upverter.com/'>Upverter</a>, etc) to create a unified resource for hardware documentation, the ecosystem is still dominantly one in which different manufacturers use their own standards to distribute datasheets, technical specifications, part simulation files, and footprint layouts. This fragmentation is likely both a technical and business-model challenge, yet in identifying potential tools, I feel some progress can be made.</p>
		<p>There also exist several aspects of the open-software movement that provide great value and virality that the open hardware movement has yet to adopt. Features such as the ability to easily copy-and-paste bits of code around for arbitrary applications, to contribute to debugging a shared project, and to efficiently search for existing work are ways that open-software provides enormous value - and I think similar features would be equally valuable for open-hardware.</p>
		<p>Lastly, hardware tends to be restricted to the domain of academics who have had some amount of formal training. As seen in the open-software movement, by creating a low barrier to entry one enables worldwide learning of a discipline that is exceedingly complex and intricate. By contributing to large open-source software projects (e.g. Linux), novice developers are able to work with and understand enormously complex software structures and architectures, and through this experience, become an advanced programmer. Such an opportunity simply does not exist in the realm of hardware development.</p>

		<h3 id='design_goals'>Design Goals</h3>
		<p> The design focus for the project is centered on two main principals: immediate feedback and open-access. Much of the inspiration for the immediate feedback comes from <a href='http://worrydream.com/'>Bret Victor</a>, who argues that it is imperative designers have immediate feedback between their 'canvas' and 'brush'. To understand and refine their actions, an immediate response to their movements and efforts must be seen. The open access goal comes from years of frustration of dealing with proprietary circuit schematic file types and layouts that aren't cross-platform compatible. With the underlying goal of enabling all people to design and understand hardware, creating an open medium that is not constrained to a single design tool is necessary. </p>
		<p>To address the accessibility, I have made the decision to explore browser-based circuit capture, editing, and simulation. By using the browser as a common platform, we enable access across a multitude of computing devices and standardize the environment in a language that is very well understood by many. Furthermore, a browser-based tool allows us a distinct set of resources (i.e. the web) and the opportunity to remove the step of local installation. No setup is required to begin working in a browser-based environment. </p>

		<h3 id='existing_work'>Existing Work</h3>
		<p>Traditional open hardware tools and references tend to break into 4 categories: reference banks, demonstrations, desktop software packages, project blogs.</p>

		<table id='priorArtTable' style='background-color: fff;' width='600px' border='1' cellspacing='0' cellpadding='0' text-align='center'>
		<tbody>
		    <!-- Results table headers --></p>
			<tr>
				<th>Project</th>
				<th>Desktop or Browser</th>
				<th>Schematic Capture</th>
				<th>PCB Capture</th>
				<th>Simulation</th>
				<th>Reference Tool</th>
				<th>Project Blog</th>
			</tr>
			<tr>
				<td><a href='http://www.falstad.com/circuit/'>Falstad Apps</a></td>
				<td>Browser</td>
				<td></td>
				<td></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' text-align='center'/></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://dangerousprototypes.com/'>Dangerous Prototypes</a></td>
				<td>Browser</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
			</tr>
			<tr>
				<td><a href='http://www.opencircuits.com/Main_Page'>Open Circuits</a></td>
				<td>Browser</td>
				<td></td>
				<td></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://sourceforge.net/apps/mediawiki/tinycad/index.php?title=TinyCAD'>TinyCad</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://www.cs.york.ac.uk/jbb'>Java Breadboard</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://qucs.sourceforge.net'>Quite Universal Circuit Simulator</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://fritzing.org/'>Fritzing</a></td>
				<td>Desktop (some Browser based social aspects)</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://www.designspark.com/pcb'>Design Spark</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://kicad.sourceforge.net/'>KiCAD</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://garlicsim.org/'>GarlicSim</a></td>
				<td>Desktop</td>
				<td></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://www.linear.com/designtools/software/'>LTSpice</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://cadsoftusa.com/'>Eagle</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://www.geda-project.org/'>gEDA</a></td>
				<td>Desktop</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://www.openhardwarehub.com/'>Open Hardware Hub</a></td>
				<td>Browser</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
			</tr>
			<tr>
				<td><a href='http://upverter.com/'>Upverter</a></td>
				<td>Browser</td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><a href='http://www.thingiverse.com/'>Thingiverse</a></td>
				<td>Browser</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><img id='check' src='http://i.imgur.com/JGDCl.png' /></td>
			</tr>
		</tbody>
		</table>

		<p>Since the beginning of this project in January of 2012, a few startups have been launched that solve my initial intent of designing a browser-based circuit capture tool. Thus, the focus has moved from crating a simple browser based circuit editor (and simulator) to identifying more dynamic features that could enhance learning, design, collaboration, inspiration, and lower costs. The two most prominent startup efforts are <a href='http://upverter.com/'>Upverter</a> - who enable many fantastic tools such as browser-based editing, git-like sharing of projects, and centralized parts databases - and <a href='https://www.circuitlab.com/'>CircuitLab</a>. CircuitLab has taken an additional (and very important) step of enabling browser-based circuit simulation. The CircuitLab product is a fantastic step in the right direction, however, it is still constrained to the standard 'benchtop replication'. That is, there is one window for circuit design and a separate pop-up window that appears every time a simulation is run. The simulation and circuit capture tools do not yet take advantage of all the opportunities available given the online, browser-based environment it lives in (real-time simulations, dynamic circuit annotations, etc). </p>
		<p>An open-source browser-based tool has also been created for the <a href='http://mitx.mit.edu/'>MITx</a> program. This nifty little tool is contained in two simple javascript files and provides browser based circuit capture and simulation (<a href='https://github.com/zupolgec/circuit-simulator'>source</a>). The tool is certainly a work in progress, and doesn't have all the bells and whistles of the other two startups, but - of enormous value - it's open and free. Furthermore, it's simplicity makes it easy to edit and use as a baseline for mocking up circuit design tools (as I do for many of the efforts below). </p>

		<h3 id='dynamic_circuit_design'>Dyanmic Circuit Design</h3>
		<p>One of the fundamental goals of the project is to investigate ways of making the circuit capture environment more dynamic. That is, leveraging the resources available to modern computers to move beyond the analogy of a static circuit drawings on a piece of paper. Enabling a dynamic environment that can provide meta-data when needed, can zoom to different levels of detail, or can be simultaneously edited by multiple people, opens exciting opportunities for the future of hardware design. </p>

		<h4>Copy and Paste is Key</h4>
		<p>One of the most important notions of the software is the ability to copy and paste lines of code from one application to another. This not only enables one to leverage past applications that have been created, but enables people to leverage the algorithms and structures that were used for that application. Even if the end goals are different, it is very likely someone has used the mechanisms and methods you need for your code. This serves both as an efficiency tool and a learning tool. Extremely complicated applications can be crafted and slowly understood by a novice that may not have been able to write the code from scratch.</p>
		<p>Such functionality does not conveniently exist for hardware. So far, many open source hardware projects tend to be all-or-nothing. That is, their source files and data are public, but it is rather difficult to do anything besides reproduce that exact piece of hardware. Copying a small bit of the hardware design and mashing it together with small bits from three other designs is not something that can be easily done. Thus, I claim that designing a method to easy copy and paste small bits of circuitry between projects is extremely important. I'll explore a potential implementation of this in the <a href='#clipping_workbench'>Clipping Workbench</a> section. </p> 

		<h4 id='circuit_segmentation'>Circuit Segmentation</h4>
		<p>Another area that a dynamic browser-based editor can benefit the hardware design workflow is in circuit segmentation. Efficiently navigating a large, complex circuit design can be a very difficult task, especially if it is someone else's design. In software, the 'Find' command serves as one tool to tackle this same problem. However, since we hardware design isn't by demand text based, we can't leverage this same solution. Furthermore, to make browsing easier, there are other nice little text-editor features that have been implemented in the realm of software, such as collapsing certain blocks of code (see picture below).</p>
		<center><img src='http://i.imgur.com/hI8V5.png' alt='collapsable text editor'/></center>
		<p>Thus, we need to be more clever in how we approach machine parsing and segmentation of hardware design circuits to enable more fluid navigation through complex circuit diagrams. One possible way of doing this is to map the hierarchies that exist in the designer's mind to the circuit editor.</p>
		<center><img src='http://i.imgur.com/zjieh.png' alt='Heirarchical segmentation'/></center>
		<p>Each block could be annotated with a name that is searchable, and can be defined by the designer. This also feeds into the previous idea of copy and paste. It creates a natural method by which to select the size of a chunk of circuit to copy. It is likely that the key structure as identified by the designer is key because of it's completeness. It is likely a designer would block off a 'lowpass filter', but unlikely a designer would bock of '3/4 of a lowpass filter'. To borrow the collapse arrow notion from software, each sub-box could be hidden to show only a high-level black box or all the low level details.</p>
		<center><img src='http://i.imgur.com/TGIsu.png' alt='Collapsable Heirarchical segmentation'/></center>

		<h4>Alternative Input</h4>
		<p>Software always exists in one medium - text. So copying and pasting is straightforward. But many circuit diagrams are roughly sketched or exist as images online or in textbooks. Enabling a system that can take a picture and extract the meaningful circuit elements (or at least best guess) may help bridge the gap between the multi-modal reality of circuit design and the simplicity of a single editing system. This would obviously be a somewhat lossy process in that computer vision algorithms would likely have trouble identifying specific ICs or op amps. However, perhaps a mixed-mode process would still greatly increase the ease of porting a hand drawing to a digital system. That is, a language of general parts could be used and post-processing input of device numbers, values, etc could complete the process.</p>
		<center><img id='no-border'src='http://i.imgur.com/OL0Bc.png' alt='Circuit capture through optical recognition'/ ></center>


		<h3 id='dynamic_circuit_simulation'>Dynamic Circuit Simulation</h3>
		<p>Circuit simulation is a realm that is still nearly identical (if not less capable) than what designers are accustomed to with physical oscilloscopes. The general flow of circuit simulation as it currently exists begins with a circuit schematic, test points are marked for either current or voltage monitoring, and then a pop-up window with a graph depicting the temporal or frequency plots of the circuit's behavior are displayed. This is analogous to a digital oscilloscope popping up on screen, with the added complication that you can't tweak a circuit schematic in real-time to view how the output changes dynamically. It is nearly always a serial process: tweak schematic, view simulation, tweak schematic, view simulation...</p>
		<p>There is no technical reason for our circuit simulation to be stuck in this domain. A parallel solution is possible, and I argue, is key for developing an intuitive understanding of how circuits behave. The immediate feedback, as stressed by Bret Victor (<a href='https://vimeo.com/36579366'>hear him explain his ideology here</a>), is key to the design process. Beyond exploring real-time simulations, we can also explore different approaches to displaying the simulation data. Pop-up windows tend to break the flow of the circuit, and by design, make the simulation environment feel like a completely separate world. In-schematic simulations are one option, as are dynamic calculators in the sketching environment. </p>

		<h4>In-schematic Simulations</h4>
		<p>Bret Victor has a great demonstration of in-schematic simulations (image below) and shows how we can gain a more intuitive, fluid understanding of how a circuit behaves by placing schematic and behavior on a single view. Bret provides some great javascript tools for embedding html documents with real-time controls and variables (<a href='http://worrydream.com/Tangle/'>Tangle</a>). Though his circuit demonstration does not have source-code documentation, it is easy to see that Tangle serves as the backend to this project. </p>
		<center><img id='no-border' src='http://i.imgur.com/GLt9Z.png' alt='In-schematic simulation'/></center>

		<h4>Dynamic Calculators</h4>
		<p>Dynamic calculators are another potential opportunity to help hardware designers quickly and easily test behavior of common circuits. The calculators can be easily crafted from elements within the current circuit schematic, but can be persistent in the design environment across all projects. This way, a user could make a quick 'low pass filter calculator' that is always available and be quickly drawn upon to make some quick design decisions. The calculators act as persistent simulations of simple elements that can be drawn upon at anytime. Further leveraging the browser-based aspect of the design, calculators can be shared, forked, and tweaked. Somewhat analogous to Github 'gists', these calculators are essentially quick lines of code with very specific functionality that can be applicable to many larger circuit designs. A quick mockup of dynamic calculators can be found here: <a href='http://web.media.mit.edu/~trich/code_savedCalc/'>demo</a> | <a href='http://web.media.mit.edu/~trich/code_savedCalc/code_savedCalc.zip'>source</a> </p> 
		<a href='http://web.media.mit.edu/~trich/code_savedCalc/'><img id='no-border' src='http://i.imgur.com/xXg0j.png' alt='Dynamic calculator mockup' /></a>

		<h3 id='user-centric_design'>User-centric Design</h3>
		<p>One of the most important decisions in designing an open hardware design tool is deciding on what the target audience will be. Design choices must be made that reflect whether the tool is for all audiences and is completely general, or niche audiences and is tailored to the specific needs of that audience. Is the tool for novice designers? low-level hardware experts? digital hardware designers? students? educators? etc... Since I'm not actively striving to launch a platform and foster a community around the tool, I tend to lean towards the completely general, all-audiences tool in my design thinking. If I were to launch an actual platform with intentions of fostering a community around it, this decision would likely be foolish in that it would add extreme complexity to my task and would keep me from focusing on a appropriately sized goal. Many similar community-based tools start with a small niche audience and scale if and only if the conditions are right for introduction to a large general audience. It is much more difficult to launch a product that is completely general and try to reach a critical threshold in community.</p>
		<p>Given that, one of the major areas of user-differentiation is in user experience. Hardware design tools often have a steep initial learning curve that can cause a great barrier to entry. There are many subtle layers to fully understanding how a circuit is behaving, and often these layers can become an overwhelming amount to internalize. The same can be said for the multitude of features, parts libraries, simulation types, circuit capture options, and design assumptions that are part of circuit design tools. Again, while many of these options are necessary and helpful for advanced users, they can be a burden to novices. The seemingly-obvious answer to this challenge is to have a design tool that adapts to a users skill level and either hides or limits the numbers of options and variables available at any one time. Essentially, creating an 'easy', medium', and 'hard' mode for circuit design. However, we must also be careful to acknowledge that people can be either poor at self-diagnosing their ability or resistive to changing their diagnosis. That is, as a designer becomes more talented, they may not 'promote' themselves to the 'medium' difficult tool thinking that they are still a novice. This can slow advancement and in the end act as another barrier to access. Furthermore, much of learning is done through trial and error of options and tools a user does not fully understand. Thus, simply hiding options may hinder the learning process of a user. People are simply to varied in their learning styles to make an assumption inherent in the tool about what features are good for novices versus advanced users. So when designing a tool to match the varied skill level of designers, it is important to carefully consider the trade offs of making a tool 'more available'. </p>
		<p>Perhaps rather than hiding options to novices, we make certain options available that will likely only be used by novices. Such options include toggling help bubbles, component vs. symbol view (see mockup picture below), or enabling high-level block-by-block construction of circuits (e.g. letting users copy and paste circuit sections as entire black backs a la the circuit segmentation idea above). Other aspects of the experience could also be changed, such as how part navigation occurs (high-level first or low-level first) or the depth of assumptions made by the simulator.</p>
		<img src='http://i.imgur.com/Z8UNx.png' alt='Component vs symbol view' width='600px'/>
		<p>Slightly easier that solving for differences in difficulty, is solving for differences in conventions. A simple toggle can be used to switch between common European symbols and common American symbols. The toggle could also be created to include an option for custom symbols and real-view symbols (i.e. what that element really looks like).</p>
		<center><img src='http://i.imgur.com/UaTpf.png' alt='European vs. American view'/></center>


		<h3 id='clipping_workbench'>Clipping Workbench</h3>
		<p>As mentioned earlier, in the <a href='#dynamic_circuit_simulation'>Dynamic Circuit Design</a> section, it is key to have a fluid copy and paste tool for hardware design. The ability to copy and paste bits of code from one source to another serves as a key learning and development feature of the open software movement. Software has benefited from having copy and paste functionality universal across nearly all computing platforms, so it is natural and easy to move text from one source to another. However, once you move to the domain of hardware design, there is no standard mechanism for moving schematic elements from one source to another. This is a problem across design ecosystems and even within the same ecosystem in certain cases. </p>
		<p>The MITx schematic capture code provides a nice copy and paste feature that relies on a JSON representation of circuit elements. I have modified this code to implement a 'Clipping Workbench'. The simple idea is that there exits a drawer of previous clips (analogous to your computer's clipboard) that stays with you across projects and schematics. This simple design allows analog algorithms, techniques and ideas to cross pollinate across designs a projects. It allows users to take bits from many different projects and reassemble them into a single circuit with entirely different functionality. This is a common practice in software design, and very difficult in hardware design. A demo of and source code for this mockup can be found here: <a href='http://web.media.mit.edu/~trich/code_surkat/'>demo</a> | <a href='https://github.com/isTravis/project_Surkat'>source</a></p>
		<a href='http://web.media.mit.edu/~trich/code_surkat/'><img src='http://i.imgur.com/t8mhV.png' alt='Clipping Workbench'/ ></a>

		<h3 id='search'>Search</h3>
		<p>Another challenge facing hardware designers is search. In the world of software, text search is relatively easily to implement and straight forward. However, in the world of hardware design, amongst circuit symbols and visually annotated diagrams, how does one find what they need? Search is key to enabling an open hardware community. Without it, users can't stumble onto other designs or efficiently find help and advice from designs previously made. I see four main methods for search in hardware: 1)Search by comment, 2) search by part, 3) search by waveform, and 4) search by performance.</p>
		<p>Searching by the commenting and labels applied to a hardware design is most obvious, and frequently the easiest. As long as a user annotates, titles, and labels their design properly and with appropriate tags, it can usually be found with minimal effort. However, this technique can often be far too general. Say I'm searching for a low pass filter. The results I would get would be stand-alone low pass filter designs, and in all likelihood, the algorithm would miss the lowpass filter that was part of a much larger infrared camera circuit. Often, finding a result in context (i.e. how it connects to other circuit stages) can be more useful than the stand-alone circuit itself. Thus, in this case, the filter integrated into the camera circuit would likely be of more use to me, even though it doesn't match my search query text for 'low pass filter'.</p>
		<p>One attempt at solving this problem is to enable users to search by circuit parts. By searching for 'low pass filter', the results will return all circuits that have low pass filters in them as determined by either proper annotation (a la the circuit segmentation idea) or contain a configuration or IC that is known to act as a low pass filter. There are enormous databases of integrated lowpass filters, and by searching over these databases for part numbers and comparing them to various stored designs, I may be able to more efficiently find what I'm looking for.</p>
		<p>Furthermore, search by parts could enable the wandering designer to search based on components they currently have available to see what others have done with that part and perhaps gain some inspiration. By searching for 'LM741', one can see all the various ways in which that specific IC has been used and perhaps inspire new ideas for how to solve some given problem.</p>
		<p>Searching by waveform is where I think hardware search could really become useful. The general idea is that a circuit schematic is stored along with automatically generated simulations of the behavior of that circuit at various points and under various conditions. A user can then simply draw the general curve of the output they desire, and search for circuits who have a similar output function. For example, one could draw a simple low pass curve and the system would return filters of all different configurations.</p>
		<img src='http://i.imgur.com/Wwfwj.png' alt='Search by waveform' />
		<p>Alternatively, the user could use a generated simulation curve and search for similar waveform shapes at different parameters, e.g. give me a filter that has a cutoff like this but at high frequencies. In this way, the user is searching based on the functionality of the circuit rather than the constituent parts of the circuit in a way that doesn't require manual input from the original designer.</p>
		<p>Lastly, a parameter-based search could help users find circuits based on certain properties of the design. Properties such as the frequency range of the chips it uses, the power voltages used, 3dB point, the maximum capacitance of a system, etc. This may be a bit cumbersome to provide all possible options, but perhaps a clever user interface could fix the burden of too many dimensions. </p>

		<h3 id='sharing_and_collaboration'>Sharing and Collaboration</h3>
		<p>Collaboration is an important aspect of hardware design. In the software world, many tools exist to allow users to independently develop bits of a larger program and then merge changes together. This, while sometimes complicated, is relatively straightforward because of the text-based nature of software. In hardware, such a merge could be nearly impossible to perform. One option to work around this is to provide a collaboration mechanism that never needs merging, such a real-time editing of a single schematic. Instead of two designers independently working on their own parts and then merging, a unified platform could be created where all changes made by one user are reflected in real-time to the other collaborator. This is similar to the Google Docs approach to collaboration. Such an environment could also be used as a teaching aid where novice users watch the behavior of more experienced users in designing circuits. Fortunately, <a href='http://www.upverter.com'>Upverter</a> has implemented features allowing users to collaborate on a schematic in real time, giving us a glimpse of what the future of hardware design may look like.</p>
		<img src='http://i.imgur.com/qwF8L.png' alt='Upverter collaboration' />
		<p>The sharing ecosystem is of great importance for the open hardware movement. One key design choice I see is in building a system to be either user-focused or design focused. In the world of images, this distinction is analogous to the difference between Flickr and Imgur. Whereas Flickr puts the emphasis on the user (and people views that users photos), Imgur puts the emphasis on the image with breadcrumbs to the original author as a lesser detail. I argue in favor of a design-focused approach. Like Imgur, the open hardware platform should employ a system where designs are uploaded to a shared database and the only reference to the creator is a link saying 'created by'. This is in contrast to a system where, when viewing a file, you are essentially in the domain of the user, looking at one of their projects. The subtle difference implies different conventions of sharing. I think this subtle difference is important to maintain an open community of sharing where 'ownership' of a design is not used to diminish virality of a given work.</p>

		<h3 id='wiki-style_documentation'>Wiki-style Documentation</h3>
		<p>One of the benefits of using a browser-based implementation for a circuit design environment is that we can leverage off-site servers to store large databases of community-maintained information. This includes a central repository of parts, footprint files, datasheets, and ordering locations. This information can be added and maintained in a wiki-style manner where any user has the ability to edit and update the repository. This allows users to leverage the work of others in expediting their design time. It is currently very common practice to make your own part symbols, simulation files, and footprints in design tools such as PSPICe. Unfortunately, a lack of central repository makes it so that many users repeat the same effort every day because they are unable to leverage the work of their peers. A centralized wiki-style database of this information can serve as one solution. Again, Upverter has implemented this idea to a certain extent and the results are fantastic (image below). They have an intuitive interface for editing part details and a simple search tool to let users find what they need.</p>
		<img src='http://i.imgur.com/dEp3S.png' alt='Upverter parts' />
		<p>They leverage a git model in that users can fork parts to create new iterations on-top of existing data. A centralized store of ordering information could also be used to enable one-click ordering of parts and hardware needed to construct a given circuit. This could greatly reduce the hassle that is typically experienced in scouring the internet for the parts you need to buy after you've designed your circuit. Furthermore, direct integration could allow users to be prompted when they choose an obsolete part for their project. The system could immediately offer alternatives that are readily available or less expensive. </p>

		<h3 id='commenting'>Commenting</h3>
		<p> Hardware  design has the unique challenge that it is constrained to spatial dimensions that make 'sense'. That is, at some point, you need to physically make your hardware design in reality, so if your circuit schematic is the length of four football fields, you're going to have trouble physically building that design. Thus, designs tend to be spatially small and intricate in their minute complexities rather than their length. Note that this is not the case for software. You could have 10 million lines of code and implement the program as easily as a 10-line program. The main take-away from this is that you can afford to be comfortably spaced in software design, but not in hardware design. Thus, efficiently commenting in hardware can be difficult as the general space you are working with is not linear as is the case with text. The simple in-line commenting procedures that people are accustomed to in software don't translate well to hardware. New tools for annotation and commenting must therefore be developed.</p>
		<p>In cases such as this, a layered commenting system is necessary. Comments must be available at the lowest level of the circuit and at the highest level of the circuit simultaneously even though these two things can exist in the same place. When I hover over a specific IC, does the user want information about that IC or the overall network of components around that IC that make it the centerpiece of a low pass filter? This matches with the <a href='#circuit_segmentation'>Circuit Segmentation</a> bits that were mentioned earlier. It should also be noted that we are not restricted to simple text-comments - quick sketches or images could also be useful. The zoom-ability of a circuit is important and can be used to make assumptions about what level of commenting is desired. If the whole circuit is in view, then the highest level comment is shown, whereas if a user is zoomed to only an IC on-screen, then the IC comment is displayed</p>
		<p>The workflow for creating comments in a system like this could be as follows:</p>
		<ul>
			<li>Select components pertinent to a comment</li>
			<li>Create text/image/sketch comment</li>
			<li>A rectangle containing all elements selected is created with the comment source</li>
			<li>Hover over any of the originally selected elements (or the area in between them) to view, edit, or delete the comment. </li>
		</ul>
		<p>The rectangles displayed at any given time can be a function of the zoom-level of the circuit. Furthermore, note that this allows elements to be part of any number of comments and the existence of overlapping comments is allowed.</p>

		<h3 id='version_control'>Version Control</h3>
		<p>Version control in software is absolutely critical and makes large-scale development with many contributors possible. In hardware, version control is a more difficult process due to the non-text medium. Existing version control systems for hardware rely on image difference algorithms to identify what in the circuit has visually changed. This of course can miss enormous levels of detail such as changes to the component value or linked part information. By creating a unified browser-based environment, you can also enable a version control system that runs on the underlying software being used to generate the circuit schematic. In the MITx-based environment, this could be performed on the standardized JSON that defines a circuit diagram. The team at Upverter has implemented a system like this relying on a git-like backend. Their system has been implemented for both schematics and part definitions. Their work demonstrates a huge step forward in terms of enabling hardware design collaboration and speaks to the benefits of using a browser-based implementation.</p>
		<img src='http://i.imgur.com/yWkMy.png' alt='Upverter parts' />

		<h3 id='future_visions'>Future Visions</h3>
		<p>The real excitement of an open-hardware movement isn't the opening of the hardware itself, but what this openness facilitates. There are truly exciting opportunities ranging from enabling education to providing customers with options to repair broken devices. The true beauty of open hardware, in my eyes, is more than simply enabling what has happened in software to happen in hardware. When designers have the ability to learn and access hardware knowledge as easily as they do software knowledge - yes, there will be the same benefits as experienced in the open software movement - but more importantly, we will have a world of people who now have access to both hardware and software knowledge. When this situation occurs we enable people to design both hardware and software in unity such that the two are perfectly matched to each other. As Alan Kay said, 'people who are really serious about software should make their own hardware'. Open hardware makes it possible.  </p>

		<h3 id='source_code'>Source Code</h3>
		<p><a href='https://github.com/isTravis/project_Surkat'>Source code for my Schematic Capture/Simulation/Workbench Fork</a> | <a href='http://web.media.mit.edu/~trich/code_surkat/'>Demo</a></p>
		<p><a href='https://github.com/zupolgec/circuit-simulator'>Source code for MITx schematic editor</a></p>
		<p><a href='http://web.media.mit.edu/~trich/code_savedCalc/code_savedCalc.zip'>Source code for dynamic calculators</a> | <a href='http://web.media.mit.edu/~trich/code_savedCalc/'>Demo</a></p>
	`,
};

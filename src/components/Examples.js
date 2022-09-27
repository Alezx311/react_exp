import React, { useState } from "react"
import {
	Block,
	Box,
	Button,
	Card,
	Container,
	Content,
	Footer,
	Form,
	Heading,
	Hero,
	Icon,
	Image,
	Level,
	Media,
	Menu,
	Message,
	Navbar,
	Notification,
	Panel,
	Progress,
	Section,
	Table,
	Tabs,
	Tag,
	Tile
} from "react-bulma-components"

//? TileExample
//? SectionExample
//? MediaExample
//? LevelExample
//? HeroExample
//? FooterExample
//? ContainerExample
//? FileExample
//? RadioExample
//? CheckboxExample
//? SelectExample
//? TextareaExample
//? InputExample
//? ControlExample
//? FieldExample
//? LabelExample
//? FormExample
//? TabsExample
//? PanelExample
//? NavbarExample
//? MessageExample
//? MenuExample
//? CardExample
//? TagExample
//? BlockExample
//? BoxExample
//? ButtonExample
//? ContentExample
//? DeleteExample
//? TextExample
//? IconExample
//? ImageExample
//? NotificationExample
//? ProgressExample
//? TableExample
//? ExamplescomponentExample
export const TileExample = () => {
	return (
		<Section>
			<Box>
				<Tile kind="ancestor">
					<Tile size={8} vertical>
						<Tile>
							<Tile kind="parent" vertical>
								<Tile kind="child" renderAs={Notification} color="primary">
									<Heading>Vertical...</Heading>
									<Heading subtitle>Top tile</Heading>
								</Tile>
								<Tile kind="child" renderAs={Notification} color="warning">
									<Heading>Tiles...</Heading>
									<Heading subtitle>Bottom Tile...</Heading>
								</Tile>
							</Tile>
							<Tile kind="parent">
								<Tile kind="child" renderAs={Notification} color="info">
									<Heading>Middle Tile...</Heading>
									<Heading subtitle>With image Tile...</Heading>
									<Image size="4by3" src="http://?bulma.io/images/placeholders/640x480.png" />
								</Tile>
							</Tile>
						</Tile>
						<Tile kind="parent">
							<Tile kind="child" renderAs={Notification} color="danger">
								<Heading>Wide tile</Heading>
								<Heading subtitle>Aligned with the right tile</Heading>
								<div className="content" />
							</Tile>
						</Tile>
					</Tile>
					<Tile kind="parent">
						<Tile kind="child" renderAs={Notification} color="success">
							<div className="content">
								<Heading>Tall tile</Heading>
								<Heading subtitle>With even more content</Heading>
								<div className="content" />
							</div>
						</Tile>
					</Tile>
				</Tile>
			</Box>
		</Section>
	)
}
export const SectionExample = () => (
	<>
		<Section>
			<Container>
				<Heading>Section</Heading>
				<Heading subtitle>
					A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
				</Heading>
			</Container>
		</Section>
		<Section>
			<Container>
				<Heading>Section</Heading>
				<Heading subtitle>
					A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
				</Heading>
			</Container>
		</Section>
		<Section>
			<Container>
				<Heading>Section</Heading>
				<Heading subtitle>
					A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
				</Heading>
			</Container>
		</Section>
	</>
)
export const MediaExample = () => {
	return (
		<Section>
			<Box>
				<Media renderAs="article">
					<Media.Item align="left">
						<Image src="http://?bulma.io/images/placeholders/128x128.png" size={64} />
					</Media.Item>
					<Media.Item align="center">
						<Content>
							<p>
								<strong>Barbara Middleton</strong>
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit
								blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
								<br />
								<small>
									<a>Like</a> · <a>Reply</a> · 3 hrs
								</small>
							</p>
						</Content>

						<Media>
							<Media.Item align="left">
								<Image src="http://?bulma.io/images/placeholders/128x128.png" size={48} />
							</Media.Item>
							<Media.Item align="center">
								<Content>
									<p>
										<strong>Sean Brown</strong>
										<br />
										Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus
										et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
										feugiat.
										<br />
										<small>
											<a>Like</a> · <a>Reply</a> · 2 hrs
										</small>
									</p>
								</Content>

								<Media>
									Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
									massa.
								</Media>

								<Media>
									Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
									euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
								</Media>
							</Media.Item>
						</Media>

						<Media>
							<Media.Item align="left">
								<Image src="http://?bulma.io/images/placeholders/96x96.png" size={48} />
							</Media.Item>
							<Media.Item align="center">
								<Content>
									<p>
										<strong>Kayli Eunice </strong>
										<br />
										Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna
										vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
										ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
										<br />
										<small>
											<a>Like</a> · <a>Reply</a> · 2 hrs
										</small>
									</p>
								</Content>
							</Media.Item>
						</Media>
					</Media.Item>
				</Media>
				<Media renderAs="article">
					<Media.Item align="left">
						<Image src="http://?bulma.io/images/placeholders/128x128.png" size={64} />
					</Media.Item>
					<Media.Item align="center">
						<Form.Field>
							<Form.Control renderAs="p">
								<Form.Textarea placeholder="Add a comment..." />
							</Form.Control>
						</Form.Field>
						<Form.Field>
							<Form.Control renderAs="p">
								<Button>Post comment</Button>
							</Form.Control>
						</Form.Field>
					</Media.Item>
				</Media>
			</Box>
		</Section>
	)
}
export const LevelExample = () => (
	<Box>
		<Level>
			<Level.Side>
				<Level.Item>
					<Heading size={5} subtitle>
						<strong>123</strong> posts
					</Heading>
				</Level.Item>
				<Level.Item>
					<Form.Field kind="addons">
						<Form.Control>
							<Form.Input placeholder="Find a post" />
						</Form.Control>
						<Form.Control>
							<Button>Search</Button>
						</Form.Control>
					</Form.Field>
				</Level.Item>
			</Level.Side>
			<Level.Side align="right">
				<Level.Item>
					<strong>All</strong>
				</Level.Item>
				<Level.Item>
					<a>Published</a>
				</Level.Item>
				<Level.Item>
					<a>Drafts</a>
				</Level.Item>
				<Level.Item>
					<a>Deleted</a>
				</Level.Item>
				<Level.Item>
					<Button color="success" renderAs="a">
						New
					</Button>
				</Level.Item>
			</Level.Side>
		</Level>
	</Box>
)
export const HeroExample = () => (
	<div
		style={{
			margin: "-1rem"
		}}
	>
		<Hero>
			<Hero.Header>Header</Hero.Header>
			<Hero.Body>
				<Container>
					<Heading>Hero title Info</Heading>
					<Heading size={3} subtitle>
						Subtitle
					</Heading>
				</Container>
			</Hero.Body>
			<Hero.Footer>Footer</Hero.Footer>
		</Hero>
	</div>
)
export const FooterExample = () => {
	return (
		<div style={{ margin: "-1rem" }}>
			<Hero size="fullheight">
				<Hero.Header renderAs="header" />
				<Hero.Body />
				<Hero.Footer>
					<Footer>
						<Container>
							<Content style={{ textAlign: "center" }}>
								<p>
									<strong>Bulma</strong> by <a href="http://?jgthms.com">Jeremy Thomas</a>. The source code is licensed
									under
									<a href="http://?opensource.org/licenses/mit-license.php"> MIT</a>. The website content is licensed{" "}
									<a href="http://?creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
								</p>
							</Content>
						</Container>
					</Footer>
				</Hero.Footer>
			</Hero>
		</div>
	)
}
export const ContainerExample = () => (
	<div>
		<Container>
			<Notification color="primary">This container will strech depending of the breakpoint you choose</Notification>
		</Container>
	</div>
)
export const FileExample = () => (
	<>
		<Form.InputFile onChange={() => true} />
	</>
)
export const RadioExample = () => {
	const [selectedValue, setSelectedValue] = useState("yes")
	const onChange = (e) => {
		return setSelectedValue(e.target.value)
	}
	return (
		<Form.Control>
			<Form.Radio value="yes" name="story-radio-name" checked={selectedValue === "yes"} onChange={onChange}>
				Yes
			</Form.Radio>
			<Form.Radio value="no" name="story-radio-name" checked={selectedValue === "no"} onChange={onChange}>
				No
			</Form.Radio>
			<Form.Radio name="story-radio-name" disabled onChange={onChange}>
				I am disabled
			</Form.Radio>
		</Form.Control>
	)
}
export const CheckboxExample = () => (
	<Form.Field>
		<Form.Control>
			<Form.Checkbox>Remember me</Form.Checkbox>
		</Form.Control>
	</Form.Field>
)

export const SelectExample = () => (
	<Form.Field>
		<Form.Label>Form.Select an option</Form.Label>
		<Form.Control>
			<Form.Select onChange={function noRefCheck() {}} value="option1">
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
			</Form.Select>
		</Form.Control>
	</Form.Field>
)
export const TextareaExample = () => (
	<Form.Field>
		<Form.Control>
			<Form.Textarea placeholder="I am a Form.textarea" />
		</Form.Control>
	</Form.Field>
)
export const InputExample = () => (
	<>
		<Form.Field>
			<Form.Label>Username</Form.Label>
			<Form.Control>
				<Form.Input placeholder="e.g. John Doe" type="text" />
			</Form.Control>
		</Form.Field>
		<Form.Field>
			<Form.Label>Password</Form.Label>
			<Form.Control>
				<Form.Input placeholder="password" type="password" />
			</Form.Control>
		</Form.Field>
	</>
)
export const ControlExample = () => (
	<>
		<Form.Field>
			<Form.Label>Username</Form.Label>
			<Form.Control>
				<Form.Input placeholder="e.g. John Doe" type="text" />
				<Icon align="left">
					<i className="fas fa-user" />
				</Icon>
				<Icon align="right">
					<i className="fas fa-check" />
				</Icon>
			</Form.Control>
		</Form.Field>
		<Form.Field>
			<Form.Label>Username</Form.Label>
			<Form.Control>
				<Form.Select>
					<option>Option 1</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</Form.Select>
				<Icon align="left">
					<i className="fas fa-globe" />
				</Icon>
			</Form.Control>
		</Form.Field>
	</>
)
export const FieldExample = () => (
	<>
		<Box>
			<Message color="info">
				<Message.Body>Vertical Form</Message.Body>
			</Message>
			<Form.Field>
				<Form.Label>Form.Field label</Form.Label>
				<Form.Control>
					<Form.Input placeholder="Form.Field control - text input" type="text" />
				</Form.Control>
				<Form.Help>Form.Help text for this Form.field</Form.Help>
			</Form.Field>
			<Form.Field>
				<Form.Label>With Button</Form.Label>
				<Form.Field kind="addons">
					<Form.Control>
						<Button disabled>+1</Button>
					</Form.Control>
					<Form.Control fullwidth>
						<Form.Input placeholder="555-555-555" type="tel" />
					</Form.Control>
				</Form.Field>
				<Form.Field align="center" kind="group">
					<Form.Control>
						<Button color="primary">Send</Button>
					</Form.Control>
					<Form.Control>
						<Button color="info">Cancel</Button>
					</Form.Control>
					<Form.Control>
						<Button color="link">Reset</Button>
					</Form.Control>
				</Form.Field>
			</Form.Field>
		</Box>
		<Box>
			<Message color="info">
				<Message.Body>Horizontal Form</Message.Body>
			</Message>
			<Form.Field horizontal>
				<Form.Label>
					<Form.Label>Form.Field label</Form.Label>
				</Form.Label>
				<Form.Field.Body>
					<Form.Field>
						<Form.Control>
							<Form.Input placeholder="Form.Field control - text input" type="text" />
						</Form.Control>
						<Form.Help>Form.Help text for this Form.field</Form.Help>
					</Form.Field>
				</Form.Field.Body>
			</Form.Field>
			<Form.Field horizontal>
				<Form.Label>
					<Form.Label>Form.Field label</Form.Label>
				</Form.Label>
				<Form.Field.Body>
					<Form.Field>
						<Form.Control>
							<Form.Textarea placeholder="Form.Field control - Aread" type="text" />
						</Form.Control>
					</Form.Field>
				</Form.Field.Body>
			</Form.Field>
		</Box>
	</>
)
export const LabelExample = () => (
	<Form.Field>
		<Form.Label>I'm the label of this Form.field</Form.Label>
		<Form.Control>
			<Form.Input placeholder="Inside a Form.field set" />
		</Form.Control>
	</Form.Field>
)
export const FormExample = () => {
	const setUsername = () => true
	return (
		<Form.Field>
			<Form.Label>Username</Form.Label>
			<Form.Control>
				<Form.Input color="success" value={"username"} onChange={(e) => setUsername(e.target.value)} />
				<Icon align="left" size="small">
					<i className="fas fa-user" />
				</Icon>
				<Icon align="right" size="small">
					<i className="fas fa-check" />
				</Icon>
			</Form.Control>
			<Form.Help color="success">This username is available</Form.Help>
		</Form.Field>
	)
}
export const TabsExample = () => (
	<Tabs>
		<Tabs.Tab active>Tabs.Tab 1</Tabs.Tab>
		<Tabs.Tab>Tabs.Tab 2</Tabs.Tab>
		<Tabs.Tab>Tabs.Tab 3</Tabs.Tab>
		<Tabs.Tab>Tabs.Tab 4</Tabs.Tab>
	</Tabs>
)
export const PanelExample = () => (
	<Panel>
		<Panel.Header>Repositories</Panel.Header>
		<Panel.Block>
			<Form.Control>
				<Form.Input placeholder="search" size="small" type="text" />
			</Form.Control>
		</Panel.Block>
		<Panel.Tabs className="panel-tabs">
			<Panel.Tabs.Tab active>all</Panel.Tabs.Tab>
			<Panel.Tabs.Tab>public</Panel.Tabs.Tab>
			<Panel.Tabs.Tab>private</Panel.Tabs.Tab>
			<Panel.Tabs.Tab>sources</Panel.Tabs.Tab>
			<Panel.Tabs.Tab>forks</Panel.Tabs.Tab>
		</Panel.Tabs>
		<Panel.Block active renderAs="a">
			<Panel.Icon>
				<i className="fas fa-angle-down" />
			</Panel.Icon>
			bulma
		</Panel.Block>
		<Panel.Block>
			<Panel.Icon>
				<i className="fas fa-angle-down" />
			</Panel.Icon>
			react-bulma-components
		</Panel.Block>
		<Panel.Block>
			<Panel.Icon>
				<i className="fas fa-angle-down" />
			</Panel.Icon>
			minireset.css
		</Panel.Block>
		<Panel.Block>
			<Panel.Icon>
				<i className="fas fa-angle-down" />
			</Panel.Icon>
			jgthms.github.io
		</Panel.Block>
		<Panel.Block renderAs="label">
			<Form.Checkbox />
			remember me
		</Panel.Block>
		<Panel.Block>
			<Button fullwidth outlined>
				reset all filters
			</Button>
		</Panel.Block>
	</Panel>
)
export const NavbarExample = () => (
	<Navbar>
		<Navbar.Brand>
			<Navbar.Item href="#">
				<img
					alt="Bulma: a modern CSS framework based on Flexbox"
					height="28"
					src="https://?bulma.io/images/bulma-logo.png"
					width="112"
				/>
			</Navbar.Item>
			<Navbar.Burger />
		</Navbar.Brand>
		<Navbar.Menu>
			<Navbar.Container>
				<Navbar.Item href="#">
					<Navbar.Link>First</Navbar.Link>
					<Navbar.Dropdown>
						<Navbar.Item href="#">Subitem 1</Navbar.Item>
						<Navbar.Item href="#">Subitem 2</Navbar.Item>
						<Navbar.Divider />
						<Navbar.Item href="#">After divider</Navbar.Item>
					</Navbar.Dropdown>
				</Navbar.Item>
				<Navbar.Item href="#">Second</Navbar.Item>
			</Navbar.Container>
			<Navbar.Container align="end">
				<Navbar.Item href="#">At the end</Navbar.Item>
			</Navbar.Container>
		</Navbar.Menu>
	</Navbar>
)
export const MessageExample = () => (
	<Message color="">
		<Message.Header>
			<span>Title</span>
			<Button remove />
		</Message.Header>
		<Message.Body>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
			placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{" "}
			<a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
			sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem
			eget, facilisis sodales sem.
		</Message.Body>
	</Message>
)
export const MenuExample = () => {
	return (
		<Menu>
			<Menu.List title="General">
				<Menu.List.Item>Dashboard</Menu.List.Item>
				<Menu.List.Item>Customer</Menu.List.Item>
			</Menu.List>

			<Menu.List title="Administration">
				<Menu.List.Item>Team Settings</Menu.List.Item>
				<Menu.List.Item active>
					<Menu.List title="Manage Your Team">
						<Menu.List.Item>Members</Menu.List.Item>
						<Menu.List.Item active>Plugins</Menu.List.Item>
						<Menu.List.Item>Add a member</Menu.List.Item>
					</Menu.List>
				</Menu.List.Item>
				<Menu.List.Item>Invitations</Menu.List.Item>
				<Menu.List.Item>Cloud Storage Environment Settings</Menu.List.Item>
				<Menu.List.Item>Authentication</Menu.List.Item>
			</Menu.List>
			<Menu.List title="Transactions">
				<Menu.List.Item>Payments</Menu.List.Item>
				<Menu.List.Item>Transfers</Menu.List.Item>
				<Menu.List.Item>Balance</Menu.List.Item>
			</Menu.List>
		</Menu>
	)
}
export const CardExample = () => {
	return (
		<Card style={{ width: 300, margin: "auto" }}>
			<Card.Image size="4by3" src="http://?bulma.io/images/placeholders/1280x960.png" />
			<Card.Content>
				<Media>
					<Media.Item renderAs="figure" align="left">
						<Image size={64} alt="64x64" src="http://?bulma.io/images/placeholders/128x128.png" />
					</Media.Item>
					<Media.Item>
						<Heading size={4}>John Smith</Heading>
						<Heading subtitle size={6}>
							@johnsmith
						</Heading>
					</Media.Item>
				</Media>
				<Content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
					<a href="#1">#css</a> <a href="#2">#responsive</a>
					<br />
					<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</Content>
			</Card.Content>
		</Card>
	)
}
export const TagExample = () => (
	<>
		<Box>
			<Block>You can use a single tag individualy</Block>
			<Block>
				<Tag>Tag Text</Tag>
			</Block>
		</Box>
		<Box>
			<Block>Or group then together (Check the hasAddon control ^_^)</Block>
			<Block>
				<Tag.Group hasAddons>
					<Tag color="success">My Tag</Tag>
					<Tag remove />
				</Tag.Group>
				<Tag.Group hasAddons>
					<Tag color="danger">My Second Tag</Tag>
					<Tag remove />
				</Tag.Group>
				<Tag.Group hasAddons>
					<Tag color="info">npm downloads</Tag>
					<Tag>18k/month</Tag>
				</Tag.Group>
			</Block>
		</Box>
	</>
)

export const BlockExample = () => (
	<Box>
		<React.Fragment key=".0">
			<Block>
				<Notification color="info">Some text</Notification>
			</Block>
			<Block>
				<Notification color="success">Some more text</Notification>
			</Block>
			<Block>
				<Notification color="danger">All of this are evently spaced</Notification>
			</Block>
			<Block>
				<Notification color="warning">This one does not generate extra margin at the bottom</Notification>
			</Block>
		</React.Fragment>
	</Box>
)

export const BoxExample = () => (
	<Box style={{ width: 400, margin: "auto" }}>
		<form>
			<Form.Field>
				<Form.Label>Email</Form.Label>
				<Form.Control>
					<Form.Input type="email" placeholder="my.amazing.email@react-bulma.dev" />
				</Form.Control>
			</Form.Field>
			<Form.Field>
				<Form.Label>Password</Form.Label>
				<Form.Control>
					<Form.Input type="password" placeholder="*************" />
				</Form.Control>
			</Form.Field>
			<Button.Group align="right">
				<Button color="primary">Sign in</Button>
			</Button.Group>
		</form>
	</Box>
)

export const ButtonExample = () => (
	<>
		<Box>
			<Button color="">Button</Button>
		</Box>
		<Box>
			<Button.Group>
				<Button color="success" renderAs="span">
					Save changes
				</Button>
				<Button color="info" renderAs="span">
					Save and continue
				</Button>
				<Button color="danger" renderAs="span">
					Cancel
				</Button>
			</Button.Group>
		</Box>
	</>
)

export const ContentExample = () => (
	<Content>
		<h1>Hello World</h1>
		<p>
			Lorem ipsum
			<sup>
				<a>[1]</a>
			</sup>{" "}
			dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
			lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
			interdum mattis neque. Sub
			<sub>script</sub> works as well!
		</p>
		<h2>Second level</h2>
		<p>
			Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit
			amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
			rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
		</p>
		<ul>
			<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
			<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
			<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
			<li>Ut non enim metus.</li>
		</ul>
		<h3>Third level</h3>
		<p>
			Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#link">non ante</a>. Phasellus lacus ex, semper ac
			tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
		</p>
		<ol>
			<li>Donec blandit a lorem id convallis.</li>
			<li>Cras gravida arcu at diam gravida gravida.</li>
			<li>Integer in volutpat libero.</li>
			<li>Donec a diam tellus.</li>
			<li>Aenean nec tortor orci.</li>
			<li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
			<li>Vivamus maximus ultricies pulvinar.</li>
		</ol>
		<blockquote>
			Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet
			turpis.
		</blockquote>
		<p>
			Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas
			ultrices lacus quis neque consectetur, et lobortis nisi molestie.
		</p>
		<p>
			Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas
			vestibulum interdum commodo.
		</p>
		<dl>
			<dt>Web</dt>
			<dd>The part of the Internet that contains websites and web pages</dd>
			<dt>HTML</dt>
			<dd>A markup language for creating web pages</dd>
			<dt>CSS</dt>
			<dd>A technology to make HTML look better</dd>
		</dl>
		<p>
			Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis
			malesuada nulla. Nulla facilisi. Nullam ac erat ante.
		</p>
		<h4>Fourth level</h4>
		<p>
			Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at
			elementum ex efficitur.
		</p>
		<pre>
			{`<!DOCTYPE html> <html> <head> <title>Hello World</title> </head> <body> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p> </body> </html>`}
		</pre>
		<p>
			Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula.
			Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
		</p>
		<table>
			<thead>
				<tr>
					<th>One</th>
					<th>Two</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Three</td>
					<td>Four</td>
				</tr>
				<tr>
					<td>Five</td>
					<td>Six</td>
				</tr>
				<tr>
					<td>Seven</td>
					<td>Eight</td>
				</tr>
				<tr>
					<td>Nine</td>
					<td>Ten</td>
				</tr>
				<tr>
					<td>Eleven</td>
					<td>Twelve</td>
				</tr>
			</tbody>
		</table>
		<p>
			Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis.
			Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique,
			leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies
			nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl
			placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus
			non pellentesque.
		</p>
		<h5>Fifth level</h5>
		<p>
			Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent
			aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue
			laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.
		</p>
		<figure>
			<img alt="256" src="http://?bulma.io/images/placeholders/256x256.png" />
			<img alt="other" src="http://?bulma.io/images/placeholders/256x256.png" />
			<figcaption>Figure 1: Some beautiful placeholders</figcaption>
		</figure>
		<h6>Sixth level</h6>
		<p>
			Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros
			accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada
			ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo,
			ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.
		</p>
	</Content>
)
export const DeleteExample = () => <Button remove />
export const TextExample = () => (
	<>
		<Heading>Title</Heading>
		<Heading subtitle>Subtitle</Heading>
	</>
)
export const IconExample = () => (
	<Box>
		<Icon
			style={{
				border: "1px solid red"
			}}
		>
			<i className="fas fa-home" />
		</Icon>
	</Box>
)
export const ImageExample = () => (
	<Box>
		<Block>This text is above the image</Block>
		<Block>
			<Image
				fallback="https://?nosequemepasa.com/wp-content/themes/wishful-blog/wishfulthemes/assets/images/fallback-image-one.jpg"
				src="https://?wallpapercave.com/wp/tU89SSy.jpg"
			/>
		</Block>
		<Block>And this is below and it is where it should be even before the image is loaded</Block>
	</Box>
)
export const NotificationExample = () => (
	<Block>
		<Notification>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
			tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
			et dictum <a href="/">felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
			<Button remove />
		</Notification>
	</Block>
)
export const ProgressExample = () => (
	<>
		<Block>
			<Message color="info">
				<Message.Body>Play with the controls to see how the component behave with differents props</Message.Body>
			</Message>
		</Block>
		<Block>
			<Progress max={100} value={30} />
		</Block>
	</>
)

export const TableExample = () => (
	<>
		<Block>
			<Notification color="info">Using the basic html table (nothing too fanzy)</Notification>
		</Block>
		<Box>
			<Table>
				<thead>
					<tr>
						<th>
							<abbr title="Position">Pos</abbr>
						</th>
						<th>Team</th>
						<th>
							<abbr title="Played">Pld</abbr>
						</th>
						<th>
							<abbr title="Won">W</abbr>
						</th>
						<th>
							<abbr title="Drawn">D</abbr>
						</th>
						<th>
							<abbr title="Lost">L</abbr>
						</th>
						<th>
							<abbr title="Goals for">GF</abbr>
						</th>
						<th>
							<abbr title="Goals against">GA</abbr>
						</th>
						<th>
							<abbr title="Goal difference">GD</abbr>
						</th>
						<th>
							<abbr title="Points">Pts</abbr>
						</th>
						<th>Qualification or relegation</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<td>
							<a href="https://?en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">
								Leicester City
							</a>{" "}
							<strong>(C)</strong>
						</td>
						<td>38</td>
						<td>23</td>
						<td>12</td>
						<td>3</td>
						<td>68</td>
						<td>36</td>
						<td>+32</td>
						<td>81</td>
						<td>
							Qualification for the{" "}
							<a
								href="https://?en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
								title="2016–17 UEFA Champions League"
							>
								Champions League group stage
							</a>
						</td>
					</tr>
					<tr>
						<th>2</th>
						<td>
							<a href="https://?en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">
								Arsenal
							</a>
						</td>
						<td>38</td>
						<td>20</td>
						<td>11</td>
						<td>7</td>
						<td>65</td>
						<td>36</td>
						<td>+29</td>
						<td>71</td>
						<td>
							Qualification for the{" "}
							<a
								href="https://?en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
								title="2016–17 UEFA Champions League"
							>
								Champions League group stage
							</a>
						</td>
					</tr>
					<tr>
						<th>3</th>
						<td>
							<a href="https://?en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">
								Tottenham Hotspur
							</a>
						</td>
						<td>38</td>
						<td>19</td>
						<td>13</td>
						<td>6</td>
						<td>69</td>
						<td>35</td>
						<td>+34</td>
						<td>70</td>
						<td>
							Qualification for the{" "}
							<a
								href="https://?en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
								title="2016–17 UEFA Champions League"
							>
								Champions League group stage
							</a>
						</td>
					</tr>
					<tr className="">
						<th>4</th>
						<td>
							<a href="https://?en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">
								Manchester City
							</a>
						</td>
						<td>38</td>
						<td>19</td>
						<td>9</td>
						<td>10</td>
						<td>71</td>
						<td>41</td>
						<td>+30</td>
						<td>66</td>
						<td>
							Qualification for the{" "}
							<a
								href="https://?en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
								title="2016–17 UEFA Champions League"
							>
								Champions League play-off round
							</a>
						</td>
					</tr>
				</tbody>
			</Table>
		</Box>
		<Block>
			<Notification color="info">
				Horizontal scroll using the <b>Table.Container</b>
			</Notification>
		</Block>
		<Box>
			<Table.Container>
				<Table>
					<tbody>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
							<td>8</td>
							<td>9</td>
							<td>10</td>
							<td>11</td>
							<td>12</td>
							<td>13</td>
							<td>14</td>
							<td>15</td>
							<td>16</td>
							<td>17</td>
							<td>18</td>
							<td>19</td>
							<td>20</td>
							<td>21</td>
							<td>22</td>
							<td>23</td>
							<td>24</td>
							<td>25</td>
							<td>26</td>
							<td>27</td>
							<td>28</td>
							<td>29</td>
							<td>30</td>
							<td>31</td>
							<td>32</td>
							<td>33</td>
							<td>34</td>
							<td>35</td>
							<td>36</td>
							<td>37</td>
							<td>38</td>
							<td>39</td>
							<td>40</td>
							<td>41</td>
							<td>42</td>
							<td>43</td>
							<td>44</td>
							<td>45</td>
							<td>46</td>
							<td>47</td>
							<td>48</td>
							<td>49</td>
							<td>50</td>
							<td>51</td>
							<td>52</td>
							<td>53</td>
							<td>54</td>
							<td>55</td>
							<td>56</td>
							<td>57</td>
							<td>58</td>
							<td>59</td>
							<td>60</td>
							<td>61</td>
							<td>62</td>
							<td>63</td>
							<td>64</td>
							<td>65</td>
							<td>66</td>
							<td>67</td>
							<td>68</td>
							<td>69</td>
							<td>70</td>
							<td>71</td>
							<td>72</td>
							<td>73</td>
							<td>74</td>
							<td>75</td>
							<td>76</td>
							<td>77</td>
							<td>78</td>
							<td>79</td>
							<td>80</td>
							<td>81</td>
							<td>82</td>
							<td>83</td>
							<td>84</td>
							<td>85</td>
							<td>86</td>
							<td>87</td>
							<td>88</td>
							<td>89</td>
							<td>90</td>
							<td>91</td>
							<td>92</td>
							<td>93</td>
							<td>94</td>
							<td>95</td>
							<td>96</td>
							<td>97</td>
							<td>98</td>
							<td>99</td>
							<td>100</td>
						</tr>
						<tr>
							<td>2</td>
							<td>4</td>
							<td>6</td>
							<td>8</td>
							<td>10</td>
							<td>12</td>
							<td>14</td>
							<td>16</td>
							<td>18</td>
							<td>20</td>
							<td>22</td>
							<td>24</td>
							<td>26</td>
							<td>28</td>
							<td>30</td>
							<td>32</td>
							<td>34</td>
							<td>36</td>
							<td>38</td>
							<td>40</td>
							<td>42</td>
							<td>44</td>
							<td>46</td>
							<td>48</td>
							<td>50</td>
							<td>52</td>
							<td>54</td>
							<td>56</td>
							<td>58</td>
							<td>60</td>
							<td>62</td>
							<td>64</td>
							<td>66</td>
							<td>68</td>
							<td>70</td>
							<td>72</td>
							<td>74</td>
							<td>76</td>
							<td>78</td>
							<td>80</td>
							<td>82</td>
							<td>84</td>
							<td>86</td>
							<td>88</td>
							<td>90</td>
							<td>92</td>
							<td>94</td>
							<td>96</td>
							<td>98</td>
							<td>100</td>
							<td>102</td>
							<td>104</td>
							<td>106</td>
							<td>108</td>
							<td>110</td>
							<td>112</td>
							<td>114</td>
							<td>116</td>
							<td>118</td>
							<td>120</td>
							<td>122</td>
							<td>124</td>
							<td>126</td>
							<td>128</td>
							<td>130</td>
							<td>132</td>
							<td>134</td>
							<td>136</td>
							<td>138</td>
							<td>140</td>
							<td>142</td>
							<td>144</td>
							<td>146</td>
							<td>148</td>
							<td>150</td>
							<td>152</td>
							<td>154</td>
							<td>156</td>
							<td>158</td>
							<td>160</td>
							<td>162</td>
							<td>164</td>
							<td>166</td>
							<td>168</td>
							<td>170</td>
							<td>172</td>
							<td>174</td>
							<td>176</td>
							<td>178</td>
							<td>180</td>
							<td>182</td>
							<td>184</td>
							<td>186</td>
							<td>188</td>
							<td>190</td>
							<td>192</td>
							<td>194</td>
							<td>196</td>
							<td>198</td>
							<td>200</td>
						</tr>
						<tr>
							<td>3</td>
							<td>6</td>
							<td>9</td>
							<td>12</td>
							<td>15</td>
							<td>18</td>
							<td>21</td>
							<td>24</td>
							<td>27</td>
							<td>30</td>
							<td>33</td>
							<td>36</td>
							<td>39</td>
							<td>42</td>
							<td>45</td>
							<td>48</td>
							<td>51</td>
							<td>54</td>
							<td>57</td>
							<td>60</td>
							<td>63</td>
							<td>66</td>
							<td>69</td>
							<td>72</td>
							<td>75</td>
							<td>78</td>
							<td>81</td>
							<td>84</td>
							<td>87</td>
							<td>90</td>
							<td>93</td>
							<td>96</td>
							<td>99</td>
							<td>102</td>
							<td>105</td>
							<td>108</td>
							<td>111</td>
							<td>114</td>
							<td>117</td>
							<td>120</td>
							<td>123</td>
							<td>126</td>
							<td>129</td>
							<td>132</td>
							<td>135</td>
							<td>138</td>
							<td>141</td>
							<td>144</td>
							<td>147</td>
							<td>150</td>
							<td>153</td>
							<td>156</td>
							<td>159</td>
							<td>162</td>
							<td>165</td>
							<td>168</td>
							<td>171</td>
							<td>174</td>
							<td>177</td>
							<td>180</td>
							<td>183</td>
							<td>186</td>
							<td>189</td>
							<td>192</td>
							<td>195</td>
							<td>198</td>
							<td>201</td>
							<td>204</td>
							<td>207</td>
							<td>210</td>
							<td>213</td>
							<td>216</td>
							<td>219</td>
							<td>222</td>
							<td>225</td>
							<td>228</td>
							<td>231</td>
							<td>234</td>
							<td>237</td>
							<td>240</td>
							<td>243</td>
							<td>246</td>
							<td>249</td>
							<td>252</td>
							<td>255</td>
							<td>258</td>
							<td>261</td>
							<td>264</td>
							<td>267</td>
							<td>270</td>
							<td>273</td>
							<td>276</td>
							<td>279</td>
							<td>282</td>
							<td>285</td>
							<td>288</td>
							<td>291</td>
							<td>294</td>
							<td>297</td>
							<td>300</td>
						</tr>
						<tr>
							<td>4</td>
							<td>8</td>
							<td>12</td>
							<td>16</td>
							<td>20</td>
							<td>24</td>
							<td>28</td>
							<td>32</td>
							<td>36</td>
							<td>40</td>
							<td>44</td>
							<td>48</td>
							<td>52</td>
							<td>56</td>
							<td>60</td>
							<td>64</td>
							<td>68</td>
							<td>72</td>
							<td>76</td>
							<td>80</td>
							<td>84</td>
							<td>88</td>
							<td>92</td>
							<td>96</td>
							<td>100</td>
							<td>104</td>
							<td>108</td>
							<td>112</td>
							<td>116</td>
							<td>120</td>
							<td>124</td>
							<td>128</td>
							<td>132</td>
							<td>136</td>
							<td>140</td>
							<td>144</td>
							<td>148</td>
							<td>152</td>
							<td>156</td>
							<td>160</td>
							<td>164</td>
							<td>168</td>
							<td>172</td>
							<td>176</td>
							<td>180</td>
							<td>184</td>
							<td>188</td>
							<td>192</td>
							<td>196</td>
							<td>200</td>
							<td>204</td>
							<td>208</td>
							<td>212</td>
							<td>216</td>
							<td>220</td>
							<td>224</td>
							<td>228</td>
							<td>232</td>
							<td>236</td>
							<td>240</td>
							<td>244</td>
							<td>248</td>
							<td>252</td>
							<td>256</td>
							<td>260</td>
							<td>264</td>
							<td>268</td>
							<td>272</td>
							<td>276</td>
							<td>280</td>
							<td>284</td>
							<td>288</td>
							<td>292</td>
							<td>296</td>
							<td>300</td>
							<td>304</td>
							<td>308</td>
							<td>312</td>
							<td>316</td>
							<td>320</td>
							<td>324</td>
							<td>328</td>
							<td>332</td>
							<td>336</td>
							<td>340</td>
							<td>344</td>
							<td>348</td>
							<td>352</td>
							<td>356</td>
							<td>360</td>
							<td>364</td>
							<td>368</td>
							<td>372</td>
							<td>376</td>
							<td>380</td>
							<td>384</td>
							<td>388</td>
							<td>392</td>
							<td>396</td>
							<td>400</td>
						</tr>
						<tr>
							<td>5</td>
							<td>10</td>
							<td>15</td>
							<td>20</td>
							<td>25</td>
							<td>30</td>
							<td>35</td>
							<td>40</td>
							<td>45</td>
							<td>50</td>
							<td>55</td>
							<td>60</td>
							<td>65</td>
							<td>70</td>
							<td>75</td>
							<td>80</td>
							<td>85</td>
							<td>90</td>
							<td>95</td>
							<td>100</td>
							<td>105</td>
							<td>110</td>
							<td>115</td>
							<td>120</td>
							<td>125</td>
							<td>130</td>
							<td>135</td>
							<td>140</td>
							<td>145</td>
							<td>150</td>
							<td>155</td>
							<td>160</td>
							<td>165</td>
							<td>170</td>
							<td>175</td>
							<td>180</td>
							<td>185</td>
							<td>190</td>
							<td>195</td>
							<td>200</td>
							<td>205</td>
							<td>210</td>
							<td>215</td>
							<td>220</td>
							<td>225</td>
							<td>230</td>
							<td>235</td>
							<td>240</td>
							<td>245</td>
							<td>250</td>
							<td>255</td>
							<td>260</td>
							<td>265</td>
							<td>270</td>
							<td>275</td>
							<td>280</td>
							<td>285</td>
							<td>290</td>
							<td>295</td>
							<td>300</td>
							<td>305</td>
							<td>310</td>
							<td>315</td>
							<td>320</td>
							<td>325</td>
							<td>330</td>
							<td>335</td>
							<td>340</td>
							<td>345</td>
							<td>350</td>
							<td>355</td>
							<td>360</td>
							<td>365</td>
							<td>370</td>
							<td>375</td>
							<td>380</td>
							<td>385</td>
							<td>390</td>
							<td>395</td>
							<td>400</td>
							<td>405</td>
							<td>410</td>
							<td>415</td>
							<td>420</td>
							<td>425</td>
							<td>430</td>
							<td>435</td>
							<td>440</td>
							<td>445</td>
							<td>450</td>
							<td>455</td>
							<td>460</td>
							<td>465</td>
							<td>470</td>
							<td>475</td>
							<td>480</td>
							<td>485</td>
							<td>490</td>
							<td>495</td>
							<td>500</td>
						</tr>
					</tbody>
				</Table>
			</Table.Container>
		</Box>
	</>
)

export const ExamplesComponent = () => (
	<div>
		<Block>
			<br />
			<p>TileExample</p>
			<TileExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>SectionExample</p>
			<SectionExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>MediaExample</p>
			<MediaExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>LevelExample</p>
			<LevelExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>HeroExample</p>
			<HeroExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>FooterExample</p>
			<FooterExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>ContainerExample</p>
			<ContainerExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>FileExample</p>
			<FileExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>RadioExample</p>
			<RadioExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>CheckboxExample</p>
			<CheckboxExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>SelectExample</p>
			<SelectExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>TextareaExample</p>
			<TextareaExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>InputExample</p>
			<InputExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>ControlExample</p>
			<ControlExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>FieldExample</p>
			<FieldExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>LabelExample</p>
			<LabelExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>FormExample</p>
			<FormExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>TabsExample</p>
			<TabsExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>PanelExample</p>
			<PanelExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>NavbarExample</p>
			<NavbarExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>MessageExample</p>
			<MessageExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>MenuExample</p>
			<MenuExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>CardExample</p>
			<CardExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>TagExample</p>
			<TagExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>BlockExample</p>
			<BlockExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>BoxExample</p>
			<BoxExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>ButtonExample</p>
			<ButtonExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>ContentExample</p>
			<ContentExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>DeleteExample</p>
			<DeleteExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>TextExample</p>
			<TextExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>IconExample</p>
			<IconExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>ImageExample</p>
			<ImageExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>NotificationExample</p>
			<NotificationExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>ProgressExample</p>
			<ProgressExample />
			<br />
		</Block>

		<Block>
			<br />
			<p>TableExample</p>
			<TableExample />
			<br />
		</Block>
	</div>
)

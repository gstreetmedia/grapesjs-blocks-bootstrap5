import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Button from "./components/Button";

import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Collapse, {CollapseBlock} from './components/Collapse';
import Column from "./components/Column";
import ColumnBreak, {ColumnBreakBlock} from "./components/ColumnBreak";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Default from "./components/Default";
import Dropdown from './components/Dropdown';
import FileInput, {FileInputBlock} from "./components/FileInput";
import Form from "./components/Form";
import FormInputFloating from "./components/FormInputFloating";
import Icon from "./components/Icon";
import Image from "./components/Image";
import FormInput from "./components/FormInput";


import Link from "./components/Link";
import ListGroup from "./components/ListGroup";
import MediaObject from "./components/MediaObject";

import Ratio from "./components/Ratio";
import Row from "./components/Row";
import Select from "./components/Select";
import TabsNavigation, {TabsBlock} from "./components/tabs/TabsNavigation";
import TabsPanes from "./components/tabs/TabsPanes";
import Tab from "./components/tabs/Tab";
import TabPane from "./components/tabs/TabPane";
import Text from "./components/Text";
import Textarea from "./components/Textarea";
import Video, {VideoBlock} from "./components/video/Video";


export default (editor, config = {}) => {
	const c = config;

	console.log(config);

	const domc = editor.DomComponents;
	const blocks = c.blocks;
	const bm = editor.BlockManager;
	const cats = c.blockCategories;

	const traits = {
		id: {
			name: 'id',
			label: c.labels.trait_id,
		},
		for: {
			name: 'for',
			label: c.labels.trait_for,
		},
		name: {
			name: 'name',
			label: c.labels.trait_name,
		},
		placeholder: {
			name: 'placeholder',
			label: c.labels.trait_placeholder,
		},
		value: {
			name: 'value',
			label: c.labels.trait_value,
		},
		required: {
			type: 'checkbox',
			name: 'required',
			label: c.labels.trait_required,
		},
		checked: {
			label: c.labels.trait_checked,
			type: 'checkbox',
			name: 'checked',
			changeProp: 1
		}
	};

	new Default(editor);
	//new Comment(editor);

	// Rebuild the default component and add utility settings to it (border, bg, color, etc)
	if (cats.basic) {
		// Rebuild the text component and add display utility setting
		new Text(editor);
		// Rebuild the link component with settings for collapse-control
		new Link(editor);
		new Icon(editor);

	}

	if (cats.media) {
		new Image(editor);
		new Ratio(editor);

		VideoBlock(bm, c.labels.video);
		Video(domc);
	}


	// LAYOUT
	if (cats.layout) {
		new Container(editor);
		new Row(editor);
		new Column(editor);
	}


	// Bootstrap COMPONENTS
	if (cats.components) {

		new Card(editor);
		new Accordion(editor);
		new Carousel(editor);
		// Alert

		new Alert(editor);
		TabsBlock(bm, c);
		TabsNavigation(domc, config);
		Tab(domc, config);
		TabsPanes(domc, config);
		TabPane(domc, config);

		new Badge(editor);
		new ListGroup(editor);

		// Collapse
		CollapseBlock(bm, c.labels.collapse);
		Collapse(editor);


		new Dropdown(editor);

		new MediaObject(editor);

	}


	if (cats.forms) {
		new Form(editor);
		new FormInputFloating(editor);
		new FormInput(editor);
		// new Select(editor);
		//new Textarea(editor);
		//FileInputBlock(bm, c.labels.file_input);
		//FileInput(domc, traits, config);

		new Button(editor);
		//ButtonGroupBlock(bm, c.labels.button_group);
		//ButtonGroup(domc);
		//ButtonToolbarBlock(bm, c.labels.button_toolbar, c);
		//ButtonToolbar(domc);

	}

}

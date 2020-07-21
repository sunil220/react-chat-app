import React from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import { connect } from 'react-redux';

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

const App = ({ currentUser, currentChannel }) => (
	<Grid columns="equal" className="app" style={{ background: '#eee' }}>
		<ColorPanel />
		<SidePanel
			key={currentUser && currentUser.id}
			currentUser={currentUser}
		/>

		<Grid.Column style={{ marginLeft: 320 }}>
			<Messages
				currentChannel={currentChannel}
				currentUser={currentUser}
				key={currentChannel && currentChannel.id}
			/>
		</Grid.Column>

		<Grid.Column width={4}>
			<MetaPanel />
		</Grid.Column>
	</Grid>
);

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	currentChannel: state.channel.currentChannel,
});

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setCurrentChannel, setPrivateChannel } from '../../store/actions';
import firebase from '../../firebase';

class Starred extends Component {
	state = {
		user: this.props.currentUser,
		starredChannels: [],
		activeChannel: '',
		userRef: firebase.database().ref('users'),
	};

	componentDidMount() {
		if (this.state.user) {
			this.addListeners(this.state.user.uid);
		}
	}
	componentWillUnmount() {
		this.removeListener();
	}
	removeListener = () => {
		this.state.userRef.child(`${this.state.user.uid}/starred`).off();
	};
	addListeners = (userId) => {
		this.state.userRef
			.child(userId)
			.child('starred')
			.on('child_added', (snap) => {
				const starredChannel = { id: snap.key, ...snap.val() };
				this.setState({
					starredChannels: [
						...this.state.starredChannels,
						starredChannel,
					],
				});
			});

		this.state.userRef
			.child(userId)
			.child('starred')
			.on('child_removed', (snap) => {
				const channelToRemove = { id: snap.key, ...snap.val() };
				const filteredChannel = this.state.starredChannels.filter(
					(channel) => {
						return channel.id !== channelToRemove.id;
					}
				);
				this.setState({
					starredChannels: filteredChannel,
				});
			});
	};

	displayChannels = (starredChannels) =>
		starredChannels.length > 0 &&
		starredChannels.map((channel) => (
			<Menu.Item
				key={channel.id}
				onClick={() => this.changeChannel(channel)}
				name={channel.name}
				style={{ opacity: 0.7 }}
				active={channel.id === this.state.activeChannel}
			>
				# {channel.name}
			</Menu.Item>
		));

	changeChannel = (channel) => {
		this.setActiveChannel(channel);
		this.props.setCurrentChannel(channel);
		this.props.setPrivateChannel(false);
	};

	setActiveChannel = (channel) => {
		this.setState({ activeChannel: channel.id });
	};

	render() {
		const { starredChannels } = this.state;
		return (
			<Menu.Menu className="menu">
				<Menu.Item>
					<span>
						<Icon name="star" /> FAVOURITE
					</span>{' '}
					({starredChannels.length}){' '}
				</Menu.Item>
				{this.displayChannels(starredChannels)}
			</Menu.Menu>
		);
	}
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(Starred);

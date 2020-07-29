import React, { Component } from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';
export default class MessagesHeader extends Component {
	render() {
		const {
			channelName,
			numUniqueUsers,
			onSearchChange,
			searchLoading,
			isPrivateChannel,
			handleStar,
			isChannelStarred,
		} = this.props;
		return (
			<Segment clearing>
				<Header
					fluid="true"
					as="h2"
					floated="left"
					style={{ marginBottom: 0 }}
				>
					<span>
						{channelName}
						{!isPrivateChannel && (
							<Icon
								style={{ cursor: 'pointer' }}
								name={
									isChannelStarred ? 'star' : 'star outline'
								}
								onClick={handleStar}
								color={isChannelStarred ? 'yellow' : 'black'}
							/>
						)}
					</span>
					<Header.Subheader>{numUniqueUsers}</Header.Subheader>
				</Header>
				{/* Channel Search Input */}
				<Header floated="right">
					<Input
						loading={searchLoading}
						onChange={onSearchChange}
						size="mini"
						icon="search"
						name="searchTerm"
						placeholder="Search Messages"
					/>
				</Header>
			</Segment>
		);
	}
}

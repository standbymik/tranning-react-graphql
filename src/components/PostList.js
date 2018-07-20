import React, { Component } from 'react'
import PostListItem from './PostListItem';

export default class PostList extends Component {
	render() {
		const postListItem = this.props.posts.map((post, key) => {

			return <PostListItem key={key} post={post} />
		})

		return (
			<div>
				{postListItem}
			</div>
		)
	}
}

import React, { Component } from 'react'
import PostList from './PostList';

export default class FilterablePostList extends Component {
	render() {
		const filter = this.props.posts.filter((post)=>{
            return post.title.toLowerCase().includes(this.props.filterText.toLowerCase())
        })

		return <PostList posts={filter} />
	}
}

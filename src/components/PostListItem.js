import React, { Component } from 'react'
import styled from 'styled-components'


const PostItemBox = styled.div`
	background : #fff;
	padding : 16px;
	margin-bottom : 24px;
	border : 1px solid #eee;

	.post-title {
		font-size:20px;
		color :blue;
	}

	p{
		font-size:16px;
		color : #606060;
	}
`



export default class PostListItem extends Component {
	render() {
		return (
			<PostItemBox>

				<h4 className="post-title">{this.props.post.title}</h4>
				<p>
					{this.props.post.content}
				</p>

			</PostItemBox>
		)
	}
}

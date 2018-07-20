import React, { Component } from 'react'

export default class NewPostForm extends Component {


	state = {
		inputValue: '',
		textareaValue: ''
	}

	handleInputChange = (e) => {
		//console.log(e.target.value)
		this.setState({
			inputValue: e.target.value
		})

	}

	handleTextareaChange = (e) => {
		//console.log(e.target.value)
		this.setState({
			textareaValue: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		console.log(this.state)
		this.props.onCreatePost({
			title : this.state.inputValue,
			content : this.state.textareaValue
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							placeholder="text"
							type="text"
							value={this.state.inputValue}
							onChange={this.handleInputChange} />
					</div>

					<div>
						<textarea
							placeholder="content"
							value={this.state.textareaValue}
							onChange={this.handleTextareaChange}>
						</textarea></div>

					<button type="submit">Post</button>
				</form>

			</div>
		)
	}
}

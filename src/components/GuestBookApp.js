import React, { Component } from 'react'
import NewPostForm from './NewPostForm';
import FilterablePostList from './FilterablePostList';
import { connect } from 'react-redux'
import { receivePost, fetchPosts, createPost } from '../actions/post'
import LoginForm from './loginForm'

class GuestBookApp extends Component {
    state = {
        //posts: [],
        filterText: '',
    }

    handleOnCreatePost = ({ title, content }) => {
        //const _id = '' + Math.random()
        //const post = { _id, title, content }
        //const newPosts = this.state.posts.concat()
        /*const newPosts = [post, ...this.state.posts]
        this.setState({
            posts: newPosts
        });*/
        this.props.onCreatePost(title, content)

    }
    handleFilterInputChange = (e) => {
        this.setState({
            filterText: e.target.value
        });
    }

    componentDidMount() {
        this.props.fetchPosts()
    }


    render() {

        return (
            <div>
                <h1>GuestBookApp</h1>
                
                <NewPostForm onCreatePost={this.handleOnCreatePost} />
                <input type="text" onChange={this.handleFilterInputChange} value={this.state.filterText} />

                <FilterablePostList posts={this.props.posts} filterText={this.state.filterText} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreatePost: (title, content) => {
            dispatch(createPost(title, content))
            //dispatch({type : 'CREATE_POST',...post})
        },
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GuestBookApp)

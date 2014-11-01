/**
 * This file provided by Facebook is for non-commercial testing and evaluation purposes only.
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @jsx React.DOM
 */

var converter = new Showdown.converter();

var Post = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="post">
        <h2 className="postAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var PostBox = React.createClass({
  loadPostsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handlePostSubmit: function(post) {
    var posts = this.state.data;
    posts.push(post);
    this.setState({data: posts}, function() {
      // `setState` accepts a callback. To avoid (improbable) race condition,
      // `we'll send the ajax request right after we optimistically set the new
      // `state.
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: post,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="postBox">
        <h1>Posts</h1>
        <PostList data={this.state.data} />
        <PostForm onPostSubmit={this.handlePostSubmit} />
      </div>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Post author={post.author} key={index}>
          {post.contents}
        </Post>
      );
    });
    return (
      <div className="postList">
        {postNodes}
      </div>
    );
  }
});

var PostForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var contents = this.refs.contents.getDOMNode().value.trim();
    if (!contents || !author) {
      return;
    }
    this.props.onPostSubmit({author: author, contents: contents});
    this.refs.author.getDOMNode().value = '';
    this.refs.contents.getDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="contents" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


React.renderComponent(
  <PostBox url="posts.json" pollInterval={2000} />,
  document.getElementById('content')
);

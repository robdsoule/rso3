// ******************************
// KEEP THIS HERE TO BREAKUP MASSIVE POSTJSJSX file
// ******************************
// /** @jsx React.DOM **/
//
// var PostForm = React.createClass({
//   handleSubmit: function(e){
//     e.preventDefault();
//     var title = this.refs.title.getDOMNode().value.trim();
//     var author = this.refs.author.getDOMNode().value.trim();
//     var contents = this.refs.contents.getDOMNode().value.trim();
//     if (!title || !author) {
//       return;
//     }
//     this.props.onPostSubmit({title: title, author: author, contents: contents});
//     this.refs.title.getDOMNode().value = '';
//     this.refs.author.getDOMNode().value= '';
//     this.refs.contents.getDOMNode().value= '';
//     return;
//   },
//   render: function() {
//     return (
//       <form className="postForm" onSubmit={this.handleSubmit}>
//         <input type="text" placeholder="The Headline:" ref="title" />
//         <input type="text" placeholder="Your Name:" ref="author" />
//         <input type="text" placeholder="Out with it...!" ref="contents" />
//         <input type="submit" value="Post" />
//       </form>
//     );
//   }
// })

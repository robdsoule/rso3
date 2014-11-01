// /** @jsx React.DOM **/

// ******************************
// THIS WILL BREAKUP MASSIVE BALL OF DOOM IN POSTJSJSXFILE
// ******************************
// var PostList = React.createClass({
//   render: function() {
//     var postNodes = this.props.data.map(function(post, index) {
//       return (
//         <Post author={post.author} key={index}>
//           {post.contents}
//         </Post>
//       );
//     });
//     return (
//       <div className="postList">
//         {postNodes}
//       </div>
//     );
//   }
// });
//
// ******************************
// LEAVE HERE THIS WORKS FOR SURE
// ******************************
//
// var PostsList = React.createClass({
//     getInitialState: function() {
//         return { posts: this.props.initialPosts };
//     },
//
//     render: function() {
//         var posts = this.state.posts.map(function(post) {
//             return <Post key={post.id} post={post} />;
//         });
//
//         return (
//             <div className="posts">
//                 {posts}
//             </div>
//         );
//     }
// });

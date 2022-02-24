import Post from '../components/Post'

const posts = [
  {
    id: '123',
    username: 'Bishesh',
    userImg: 'https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg',
    img: 'https://i.pinimg.com/originals/27/87/3a/27873ac679ee3a133e4f245acac868a7.jpg',
    caption: 'this is caption',
  },
  {
    id: '12',
    username: 'Sunam',
    userImg: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5neknqovdb6hesko5h0c8jbr36-20180130131031.Medi.jpeg',
    img: 'https://i.ytimg.com/vi/bC6MBNLeCjA/maxresdefault.jpg',
    caption: 'this is caption',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts

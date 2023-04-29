import { useEffect, useState } from "react";
import service from "./../services";

function PostPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.user.getAllpost().then((allPosts) => {
        setPosts(allPosts);
    });
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}

export default PostPage;
import React  from 'react'
import { useQuery, gql } from '@apollo/client';
import './styles.scss'

const POSTS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

const PostList = () => {
    const { loading, error, data } = useQuery(POSTS_QUERY)
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <div>
            <h1>SpaceX Launches</h1>
            <ul className='launches-list'>
                { data && data.launchesPast.map((launch) => (
                  <li className='launche-item' key={launch.id}>{launch.mission_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList
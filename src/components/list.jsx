import React, {useState, useEffect} from 'react';
import {gql, useQuery} from '@apollo/client'

const POST_QUERY = gql`
query {
    posts ( title: "test2" ) {
        title
    }
}
`

const List = () => {
const {data, loading} = useQuery(POST_QUERY)
return (
    <div>
        {
            loading? "loading...":
            data.posts.map((e,i)=> <div key={i}> {e.title} </div> ) 
        }
    </div>
)
}

export default List;
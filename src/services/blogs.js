import { client, checkError } from './client';

export async function getBlogs(){
  const response = await client
    .from('blogs')
    .select(`
          *,
          authors (name)
      `)
    .order('id');
  
  return checkError(response);
}

export async function getBlogById(id){
  const response = await client
    .from('blogs')
    .select('*')
    .match({ id })
    .single();
  
  return checkError(response);    
}

export async function updateBlog(blog){
  const response = await client
    .from('blogs')
    .update(blog)
    .match({ id: blog.id });

  return checkError(response);
}

export async function deleteBlog(id){
  const response = await client
    .from('blogs')
    .delete()
    .match({ id });
  
  return checkError(response);
}
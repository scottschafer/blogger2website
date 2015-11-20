<?php

function curlGet($url) {
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_HEADER, false);
  $data = curl_exec($curl);
  curl_close($curl);
  return $data;
}  
  
$bloggerapi = 'https://www.googleapis.com/blogger/v3/blogs/';
$blogid = '{blogid here}'; // http://currentlyunderdevelopment.blogspot.com
$bloggerapi .= $blogid;

$key = '?key={key here}';

$pages = curlGet ($bloggerapi . '/pages' . $key);
$posts = curlGet ($bloggerapi . '/posts' . $key);

$homepage = file_get_contents('_index.html');

$homepage = str_replace('%PAGES%',$pages, $homepage);
$homepage = str_replace('%POSTS%',$posts, $homepage);
echo $homepage;

?>

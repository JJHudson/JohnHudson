<?php

	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	function buildBaseString($baseURI, $method, $params) {
	    $r = array();
	    ksort($params);
	    foreach($params as $key=>$value){
	        $r[] = "$key=" . rawurlencode($value);
	    }
	    return $method."&" . rawurlencode($baseURI) . '&' . rawurlencode(implode('&', $r));
	}
	
	function buildAuthorizationHeader($oauth) {
	    $r = 'Authorization: OAuth ';
	    $values = array();
	    foreach($oauth as $key=>$value)
	        $values[] = "$key=\"" . rawurlencode($value) . "\"";
	    $r .= implode(', ', $values);
	    return $r;
	}
	
	//GET USER TIMELINE
	$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
	
	//GET SEARCH QUERY
	//$url = "https://api.twitter.com/1.1/search/tweets.json";
	
	$oauth_access_token = "17693048-5VsXKv1IdCtS0cfXnXhLyAoqhR36LstzsgqVHmFU";
	$oauth_access_token_secret = "TTCQzUM26Lhx43mmZ8STrAGQ9cSzS5RjTNeX8";
	$consumer_key = "hZ3HuknqdlTyajOQvR7Lw";
	$consumer_secret = "YI3HFe3oD8u1YuZkzUIqQWh7ZNuRobhLzUDBDrrZoKo";
	
	$oauth = array( 'oauth_consumer_key' => $consumer_key,
	                'oauth_nonce' => time(),
	                'oauth_signature_method' => 'HMAC-SHA1',
	                'oauth_token' => $oauth_access_token,
	                'oauth_timestamp' => time(),
	                'oauth_version' => '1.0',
	                'screen_name' => 'northernfury',
	                'count' => 10,
	                'exclude_replies' => 'true',
	                'include_rts' => 'true');
	
	$base_info = buildBaseString($url, 'GET', $oauth);
	$composite_key = rawurlencode($consumer_secret) . '&' . rawurlencode($oauth_access_token_secret);
	$oauth_signature = base64_encode(hash_hmac('sha1', $base_info, $composite_key, true));
	$oauth['oauth_signature'] = $oauth_signature;
	
	// Make Requests
	$header = array(buildAuthorizationHeader($oauth), 'Expect:');
	$options = array( CURLOPT_HTTPHEADER => $header,
	                  //CURLOPT_POSTFIELDS => $postfields,
	                  CURLOPT_HEADER => false,
	                  CURLOPT_URL => $url . '?screen_name=northernfury&count=10&exclude_replies=true&include_rts=true',
	                  CURLOPT_RETURNTRANSFER => true,
	                  CURLOPT_SSL_VERIFYPEER => false);
	
	$feed = curl_init();
	curl_setopt_array($feed, $options);
	$json = curl_exec($feed);
	curl_close($feed);
	
	$data = json_decode($json, true);
	
	//print_r($data);

	$tweet1 = $data[0]['text'];
	$tweet1 = preg_replace("/((http)+(s)?:\/\/[^<>\s]+)/i", "<a href=\"\\0\" target=\"_blank\">\\0</a>", $tweet1 );
	$tweet1 = preg_replace("/[@]+([A-Za-z0-9-_]+)/", "<a href=\"http://twitter.com/\\1\" target=\"_blank\">\\0</a>", $tweet1 );
	$tweet1 = preg_replace("/[#]+([A-Za-z0-9-_]+)/", "<a href=\"http://twitter.com/search?q=%23\\1\" target=\"_blank\">\\0</a>", $tweet1 );

	$tweet2 = $data[1]['text'];
	$tweet2 = preg_replace("/((http)+(s)?:\/\/[^<>\s]+)/i", "<a href=\"\\0\" target=\"_blank\">\\0</a>", $tweet2 );
	$tweet2 = preg_replace("/[@]+([A-Za-z0-9-_]+)/", "<a href=\"http://twitter.com/\\1\" target=\"_blank\">\\0</a>", $tweet2 );
	$tweet2 = preg_replace("/[#]+([A-Za-z0-9-_]+)/", "<a href=\"http://twitter.com/search?q=%23\\1\" target=\"_blank\">\\0</a>", $tweet2 );

	$tweet3 = $data[2]['text'];
	$tweet3 = preg_replace("/((http)+(s)?:\/\/[^<>\s]+)/i", "<a href=\"\\0\" target=\"_blank\">\\0</a>", $tweet3 );
	$tweet3 = preg_replace("/[@]+([A-Za-z0-9-_]+)/", "<a href=\"http://twitter.com/\\1\" target=\"_blank\">\\0</a>", $tweet3 );
	$tweet3 = preg_replace("/[#]+([A-Za-z0-9-_]+)/", "<a href=\"http://twitter.com/search?q=%23\\1\" target=\"_blank\">\\0</a>", $tweet3 );
		
	$myFile1 = "tweet1.txt";
	$fh1 = fopen($myFile1, 'w') or die("can't open file");
	fwrite($fh1, $tweet1);
	fclose($fh1);

	$myFile2 = "tweet2.txt";
	$fh2 = fopen($myFile2, 'w') or die("can't open file");
	fwrite($fh2, $tweet2);
	fclose($fh2);

	$myFile3 = "tweet3.txt";
	$fh3 = fopen($myFile3, 'w') or die("can't open file");
	fwrite($fh3, $tweet3);
	fclose($fh3);
	
	

	
	
?>